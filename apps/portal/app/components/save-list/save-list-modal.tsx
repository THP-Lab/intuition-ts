import { useEffect, useRef, useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogFooter,
  Skeleton,
  toast,
} from '@0xintuition/1ui'
import { IdentityPresenter } from '@0xintuition/api'

import { multivaultAbi } from '@lib/abis/multivault'
import { useDepositTriple } from '@lib/hooks/useDepositTriple'
import { useGetWalletBalance } from '@lib/hooks/useGetWalletBalance'
import { useRedeemTriple } from '@lib/hooks/useRedeemTriple'
import { transactionReducer } from '@lib/hooks/useTransactionReducer'
import { saveListModalAtom } from '@lib/state/store'
import logger from '@lib/utils/logger'
import { useGenericTxState } from '@lib/utils/use-tx-reducer'
import { useFetcher, useLocation } from '@remix-run/react'
import { GET_VAULT_DETAILS_RESOURCE_ROUTE, MIN_DEPOSIT } from 'app/consts'
import {
  TransactionActionType,
  TransactionStateType,
} from 'app/types/transaction'
import { VaultDetailsType } from 'app/types/vault'
import { useAtomValue } from 'jotai'
import { Abi, Address, decodeEventLog, formatUnits, parseUnits } from 'viem'
import { useAccount, usePublicClient } from 'wagmi'

import SaveButton from './save-button'
import SaveForm from './save-form'
import SaveToast from './save-toast'
import UnsaveButton from './unsave-button'

const initialTxState: TransactionStateType = {
  status: 'idle',
  txHash: undefined,
  error: undefined,
}

interface SaveListModalProps {
  userWallet: string
  open: boolean
  tag: IdentityPresenter
  identity: IdentityPresenter
  contract: string
  onClose?: () => void
  min_deposit?: string
}

export default function SaveListModal({
  userWallet,
  open = false,
  tag,
  identity,
  contract,
  onClose = () => {},
  min_deposit,
}: SaveListModalProps) {
  const fetchReval = useFetcher()
  const [fetchId, setFetchId] = useState(0)
  const formRef = useRef(null)
  const formattedMinDeposit = min_deposit
    ? formatUnits(BigInt(BigInt(min_deposit)), 18)
    : MIN_DEPOSIT
  const [val, setVal] = useState(formattedMinDeposit)
  const [mode, setMode] = useState<'save' | 'unsave'>('save')
  const [showErrors, setShowErrors] = useState(false)
  const [validationErrors, setValidationErrors] = useState<string[]>([])
  const [lastTxHash, setLastTxHash] = useState<string | undefined>(undefined)
  const { state, dispatch } = useGenericTxState<
    TransactionStateType,
    TransactionActionType
  >(transactionReducer, initialTxState)
  const publicClient = usePublicClient()

  const [isLoading, setIsLoading] = useState(true)

  const depositHook = useDepositTriple(contract)

  const redeemHook = useRedeemTriple(contract)

  const {
    writeContractAsync,
    receipt: txReceipt,
    awaitingWalletConfirmation,
    awaitingOnChainConfirmation,
    isError,
    reset,
  } = mode === 'save' ? depositHook : redeemHook

  const [vaultDetails, setVaultDetails] = useState<VaultDetailsType>()
  const vaultDetailsFetcher = useFetcher<VaultDetailsType>()

  const { id: vaultId } = useAtomValue(saveListModalAtom)

  useEffect(() => {
    let isCancelled = false

    if (vaultId !== null) {
      const finalUrl = `${GET_VAULT_DETAILS_RESOURCE_ROUTE}?contract=${contract}&vaultId=${vaultId}&fetchId=${fetchId}`
      if (!isCancelled) {
        vaultDetailsFetcher.load(finalUrl)
      }
    }

    return () => {
      isCancelled = true
    }
    // omits the fetcher from the exhaustive deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contract, vaultId, fetchId])

  useEffect(() => {
    if (vaultDetailsFetcher.state === 'loading') {
      setIsLoading(true)
    }
  }, [vaultDetailsFetcher.state])

  useEffect(() => {
    if (vaultDetailsFetcher.state === 'idle' && vaultDetailsFetcher.data) {
      setVaultDetails(vaultDetailsFetcher.data)
      setIsLoading(false)
    }
  }, [vaultDetailsFetcher.state, vaultDetailsFetcher.data])

  const useHandleAction = (actionType: string) => {
    return async () => {
      try {
        if (!contract || !vaultId || !vaultDetails) {
          throw new Error('Missing required parameters')
        }
        const txHash = await writeContractAsync({
          address: contract as `0x${string}`,
          abi: multivaultAbi as Abi,
          functionName:
            actionType === 'save' ? 'depositTriple' : 'redeemTriple',
          args:
            actionType === 'save'
              ? [userWallet as `0x${string}`, vaultId]
              : [
                  vaultDetails.user_conviction,
                  userWallet as `0x${string}`,
                  vaultId,
                ],
          value:
            actionType === 'save'
              ? parseUnits(val === '' ? '0' : val, 18)
              : undefined,
        })
        if (txHash) {
          dispatch({ type: 'TRANSACTION_PENDING' })
          const receipt = await publicClient?.waitForTransactionReceipt({
            hash: txHash,
          })

          dispatch({
            type: 'TRANSACTION_COMPLETE',
            txHash,
            txReceipt: receipt!,
          })
          fetchReval.submit(formRef.current, {
            method: 'POST',
          })
        }
      } catch (error) {
        logger('error', error)
        if (error instanceof Error) {
          let errorMessage = 'Failed transaction'
          if (error.message.includes('insufficient')) {
            errorMessage = 'Insufficient funds'
          }
          if (error.message.includes('rejected')) {
            errorMessage = 'Transaction rejected'
          }
          dispatch({
            type: 'TRANSACTION_ERROR',
            error: errorMessage,
          })
          toast.error(errorMessage)
          return
        }
      }
    }
  }

  const handleSave = useHandleAction('save')
  const handleUnsave = useHandleAction('unsave')

  useEffect(() => {
    if (isError) {
      reset()
    }
  }, [isError, reset])

  useEffect(() => {
    let assets = ''
    const receipt = txReceipt
    const action = mode === 'save' ? 'Save' : 'Unsave'

    type BuyArgs = {
      sender: Address
      receiver?: Address
      owner?: Address
      senderAssetsAfterTotalFees: bigint
      sharesForReceiver: bigint
      entryFee: bigint
      id: bigint
    }

    type SellArgs = {
      sender: Address
      receiver?: Address
      owner?: Address
      shares: bigint
      assetsForReceiver: bigint
      exitFee: bigint
      id: bigint
    }

    type EventLogArgs = BuyArgs | SellArgs

    if (
      txReceipt &&
      receipt?.logs[0].data &&
      receipt?.transactionHash !== lastTxHash
    ) {
      const decodedLog = decodeEventLog({
        abi: multivaultAbi,
        data: receipt?.logs[0].data,
        topics: receipt?.logs[0].topics,
      })

      const topics = decodedLog as unknown as {
        eventName: string
        args: EventLogArgs
      }

      if (topics.args.sender === (userWallet as `0x${string}`)) {
        assets =
          mode === 'save'
            ? (topics.args as BuyArgs).senderAssetsAfterTotalFees.toString()
            : (topics.args as SellArgs).assetsForReceiver.toString()

        toast.custom(() => (
          <SaveToast
            action={action}
            assets={assets}
            txHash={txReceipt.transactionHash}
          />
        ))
        setLastTxHash(txReceipt.transactionHash)
      }
    }
  }, [txReceipt, userWallet, mode, reset, lastTxHash])

  useEffect(() => {
    if (awaitingWalletConfirmation) {
      dispatch({ type: 'APPROVE_TRANSACTION' })
    }
    if (awaitingOnChainConfirmation) {
      dispatch({ type: 'TRANSACTION_PENDING' })
    }
    if (isError) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        error: 'Error processing transaction',
      })
    }
  }, [
    awaitingWalletConfirmation,
    awaitingOnChainConfirmation,
    isError,
    dispatch,
  ])

  const { address } = useAccount()

  const walletBalance = useGetWalletBalance(
    address ?? (userWallet as `0x${string}`),
  )

  const handleSaveButtonClick = async () => {
    if (!vaultDetails) {
      throw new Error('Missing required parameters')
    }
    if (+val < +formattedMinDeposit || +val > +walletBalance) {
      setShowErrors(true)
      return
    }
    handleSave()
  }

  const handleUnsaveButtonClick = async () => {
    if (!vaultDetails) {
      throw new Error('Missing required parameters')
    }
    if (+val > +(vaultDetails.user_conviction ?? '0')) {
      setShowErrors(true)
      return
    }
    handleUnsave()
  }

  const location = useLocation()

  useEffect(() => {
    dispatch({ type: 'START_TRANSACTION' })
    // avoids adding dispatch since we only want to re-render on this single type
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [location])

  const handleClose = () => {
    onClose()
    setMode('save')
    setVaultDetails(undefined)
    setIsLoading(true)
    setVal(formattedMinDeposit)
    setShowErrors(false)
    setValidationErrors([])
    vaultDetailsFetcher.data = undefined
    vaultDetailsFetcher.state = 'idle'
    setFetchId((prevId) => prevId + 1)
    setTimeout(() => {
      dispatch({ type: 'START_TRANSACTION' })
      reset()
    }, 500)
  }

  useEffect(() => {
    if (open) {
      setMode('save')
      setVaultDetails(undefined)
      setIsLoading(true)
      setVal(formattedMinDeposit)
      setShowErrors(false)
      setValidationErrors([])
      vaultDetailsFetcher.data = undefined
      vaultDetailsFetcher.state = 'idle'
      setFetchId((prevId) => prevId + 1)
      dispatch({ type: 'START_TRANSACTION' })
    }
  }, [open, dispatch])

  const isTransactionStarted = [
    'approve-transaction',
    'transaction-pending',
    'awaiting',
    'confirm',
  ].includes(state.status)

  return vaultId ? (
    <Dialog
      defaultOpen
      open={open}
      onOpenChange={() => {
        handleClose()
      }}
    >
      <DialogContent
        className="flex flex-col md:w-[476px] gap-0"
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <SaveForm
          tag={tag}
          identity={identity}
          user_assets={vaultDetails?.user_assets ?? '0'}
          entry_fee={vaultDetails?.formatted_entry_fee ?? '0'}
          exit_fee={vaultDetails?.formatted_exit_fee ?? '0'}
          min_deposit={min_deposit ?? vaultDetails?.min_deposit ?? '0'}
          val={val}
          setVal={setVal}
          mode={mode}
          dispatch={dispatch}
          state={state}
          fetchReval={fetchReval}
          formRef={formRef}
          validationErrors={validationErrors}
          setValidationErrors={setValidationErrors}
          showErrors={showErrors}
          setShowErrors={setShowErrors}
          isLoading={isLoading}
        />
        <DialogFooter className="!justify-center !items-center gap-5">
          {!isTransactionStarted ? (
            isLoading && state.status !== 'complete' ? (
              <>
                <Skeleton className="h-7 w-40" />
                <Skeleton className="h-7 w-40" />
              </>
            ) : (
              <>
                <UnsaveButton
                  setMode={setMode}
                  handleAction={handleUnsaveButtonClick}
                  handleClose={handleClose}
                  dispatch={dispatch}
                  state={state}
                  vaultId={vaultId}
                  user_conviction={vaultDetails?.user_conviction ?? '0'}
                  className={`${(vaultDetails?.user_conviction && vaultDetails?.user_conviction > '0' && state.status === 'idle') || mode !== 'save' ? '' : 'hidden'}`}
                />
                <SaveButton
                  val={val}
                  setMode={setMode}
                  handleAction={handleSaveButtonClick}
                  handleClose={handleClose}
                  dispatch={dispatch}
                  state={state}
                  vaultId={vaultId}
                  min_deposit={vaultDetails?.min_deposit ?? '0'}
                  walletBalance={walletBalance}
                  conviction_price={vaultDetails?.conviction_price ?? '0'}
                  user_assets={vaultDetails?.user_assets ?? '0'}
                  setValidationErrors={setValidationErrors}
                  setShowErrors={setShowErrors}
                  className={`${mode === 'unsave' && 'hidden'}`}
                />
              </>
            )
          ) : null}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ) : null
}
