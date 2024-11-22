import { useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  TransactionStatus,
  TransactionStatusType,
} from '@0xintuition/1ui'
import { useUploadThingMutation } from '@0xintuition/graphql'

import { useAtomCost } from '@lib/hooks/useAtomCost'
import useCreateAtom from '@lib/hooks/useCreateAtom'
import { Link } from '@remix-run/react'

import { FormContainer } from '../../components/atom-forms/form-container'
import {
  DepositForm,
  OrganizationForm,
  PersonForm,
  ThingForm,
} from '../../components/atom-forms/forms'
import { registerAtomForm } from '../../components/atom-forms/registry'
import { StepIndicator } from '../../components/atom-forms/step-indicator'
import {
  Atom,
  DepositFormData,
  organizationAtomSchema,
  personAtomSchema,
  thingAtomSchema,
} from '../../components/atom-forms/types'
import { TransactionState } from '../../components/transaction-state'

// Register all form types
registerAtomForm('Thing', {
  schema: thingAtomSchema,
  component: ThingForm,
})

registerAtomForm('Person', {
  schema: personAtomSchema,
  component: PersonForm,
})

registerAtomForm('Organization', {
  schema: organizationAtomSchema,
  component: OrganizationForm,
})

type StepStatus = 'upcoming' | 'current' | 'completed'
type Step = {
  id: string
  label: string
  status: StepStatus
}

const INITIAL_STEPS: Step[] = [
  { id: 'metadata', label: 'Publish Data', status: 'current' },
  { id: 'deposit', label: 'Select Deposit', status: 'upcoming' },
  { id: 'create', label: 'Create Atom', status: 'upcoming' },
]

export default function FormsPage() {
  const [currentStep, setCurrentStep] = useState('metadata')
  const [steps, setSteps] = useState<Step[]>(INITIAL_STEPS)
  // const [ipfsCid, setIpfsCid] = useState<string | null>(null)
  const [ipfsCid, setIpfsCid] = useState<string | null>(
    'bafkreifp7wixvzhlkeavs5bixkyabkmllewkabrxpg6bmycgnr2kl3qega',
  )
  const [atomData, setAtomData] = useState<Atom | null>({
    name: 'joji test 3',
    type: 'Thing',
    image:
      'https://res.cloudinary.com/dfpwy9nyv/image/upload/v1732245434/remix/vw7whfo9jlooqnseyeuf.jpg',
  })
  // const [atomData, setAtomData] = useState<Atom | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isOpen, setIsOpen] = useState(true)
  const [transactionHash, setTransactionHash] = useState<string | null>(null)

  const { mutateAsync: uploadThing, isPending } = useUploadThingMutation({
    onError: (error) => {
      console.error('Failed to upload to IPFS:', error)
      // TODO: Show error state in UI
    },
  })

  const { data: atomCost, isLoading: isLoadingCost } = useAtomCost()

  const {
    createAtom,
    isWaitingForSignature,
    isWaitingForConfirmation,
    isSuccess: isTransactionSuccess,
    isError: isTransactionError,
    error: transactionError,
    hasStarted,
  } = useCreateAtom()

  const updateStepStatus = (stepId: string, status: StepStatus) => {
    setSteps((prev) =>
      prev.map((step) => (step.id === stepId ? { ...step, status } : step)),
    )
  }

  const handleStepClick = (stepId: string) => {
    const clickedStep = steps.find((s) => s.id === stepId)
    if (clickedStep?.status === 'completed') {
      setCurrentStep(stepId)

      // Update current steps
      setSteps((prev) =>
        prev.map((step) => {
          if (step.id === stepId) {
            return { ...step, status: 'current' }
          }
          if (step.id === currentStep) {
            return { ...step, status: 'upcoming' }
          }
          return step
        }),
      )
    }
  }

  const handleMetadataSubmit = async (data: Atom) => {
    try {
      // Start IPFS upload
      const result = await uploadThing({
        name: data.name,
        description: data.description,
        image: data.image,
        url: data.url,
      })
      setIpfsCid(result.uploadThing?.cid ?? null)
      setAtomData(data)
      console.log('Entering metadata step')
      updateStepStatus('metadata', 'completed')

      // Move to deposit step
      updateStepStatus('deposit', 'current')
      setCurrentStep('deposit')
    } catch (error) {
      // TODO: Error handled by mutation onError
    }
  }

  const handleDepositSubmit = async (data: DepositFormData) => {
    try {
      setIsSubmitting(true)
      if (!ipfsCid) {
        throw new Error('IPFS CID not found')
      }

      // Don't update step status yet
      // Just move to create step to show transaction UI
      setCurrentStep('create')

      // Wait for transaction to be initiated
      const hash = await createAtom({
        ipfsCid,
        deposit: data.amount,
        onSuccess: (hash) => {
          setTransactionHash(hash)
        },
        onError: (error) => {
          console.error('Transaction failed:', error)
          setCurrentStep('deposit')
        },
      })

      // Only update step status after transaction is successfully initiated
      if (hash) {
        updateStepStatus('deposit', 'completed')
        updateStepStatus('create', 'current')
      }
    } catch (error) {
      console.error('Failed to create atom:', error)
      setCurrentStep('deposit')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getTransactionStatus = (): TransactionStatusType => {
    // If we have a hash, we're at least in progress
    if (transactionHash) {
      if (isTransactionSuccess) return TransactionStatus.complete
      if (isTransactionError) return TransactionStatus.error
      return TransactionStatus.inProgress
    }

    // No hash yet, but transaction might be starting
    if (isWaitingForSignature) return TransactionStatus.approveTransaction
    if (hasStarted) return TransactionStatus.awaiting

    // Default initial state
    return TransactionStatus.awaiting
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'metadata':
        return (
          <FormContainer
            onSubmit={handleMetadataSubmit}
            isLoading={isPending}
            defaultValues={atomData} // Pass the existing data
          />
        )
      case 'deposit':
        if (atomData && ipfsCid) {
          return (
            <DepositForm
              onSubmit={handleDepositSubmit}
              // minDeposit={atomCost?.formatted ?? '0.1'}
              minDeposit={'0.00042'}
              isSubmitting={isSubmitting}
              atomData={atomData}
              ipfsCid={ipfsCid}
              isLoadingCost={isLoadingCost}
              onBack={() => setCurrentStep('metadata')}
            />
          )
        }
        return null
      case 'create':
        return (
          <div className="h-full w-full">
            <TransactionState
              status={getTransactionStatus()}
              txHash={transactionHash as `0x${string}`}
              type="transaction"
              ipfsLink={ipfsCid ? `https://ipfs.io/ipfs/${ipfsCid}` : undefined}
              successButton={
                <Link
                  to="/app/atoms"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  View My Atoms
                </Link>
              }
              errorButton={
                <button
                  onClick={() => {
                    updateStepStatus('deposit', 'current')
                    setCurrentStep('deposit')
                  }}
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                >
                  Try Again
                </button>
              }
            />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogHeader></DialogHeader>
      <DialogContent className="w-[80vw] max-w-3xl h-[72vh] max-h-[750px] min-h-0 flex flex-col pb-4">
        <DialogHeader className="border-b border-border/10 pb-5 flex-shrink-0">
          <div className="w-full px-5">
            <StepIndicator
              steps={steps}
              currentStep={currentStep}
              onStepClick={handleStepClick}
            />
          </div>
        </DialogHeader>
        <div className="flex-1 min-h-0 p-4 overflow-y-hidden">
          {renderCurrentStep()}
        </div>
      </DialogContent>
    </Dialog>
  )
}
