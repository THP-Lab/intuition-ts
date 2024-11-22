import { useWriteContract, useTransaction, usePublicClient } from 'wagmi'
import { parseEther, toHex } from 'viem'
import type { Hash } from 'viem'
import { MULTIVAULT_CONTRACT_ADDRESS } from 'app/consts'
import { multivaultAbi } from '@lib/abis/multivault'

interface CreateAtomArgs {
  ipfsCid: string
  deposit: string
  onSuccess?: (hash: Hash) => void
  onError?: (error: Error) => void
}

type CreateAtomReturn = {
  createAtom: (args: CreateAtomArgs) => Promise<Hash>
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  error: Error | null
  isWaitingForSignature: boolean
  isWaitingForConfirmation: boolean
  hasStarted: boolean
}

export default function useCreateAtom(): CreateAtomReturn {
  const {
    writeContractAsync,
    data: hash,
    isPending: isWaitingForSignature,
    isError: isWriteError,
    error: writeError,
    status: writeStatus,
  } = useWriteContract()

  const {
    isLoading: isWaitingForConfirmation,
    isSuccess,
    isError: isConfirmError,
    error: confirmError,
    status: confirmStatus,
  } = useTransaction({
    hash,
  })

  // Check if transaction has started
  const hasStarted = Boolean(writeStatus !== 'idle' || hash)

  // Wrapper function to handle the atom creation
  const createAtom = async ({ ipfsCid, deposit, onSuccess, onError }: CreateAtomArgs) => {
    try {
      if (!writeContractAsync) {
        throw new Error('Write function not ready')
      }

      const depositInWei = parseEther(deposit)

      const txHash = await writeContractAsync({
        address: MULTIVAULT_CONTRACT_ADDRESS,
        abi: multivaultAbi,
        functionName: 'createAtom',
        args: [toHex(ipfsCid)],
        value: depositInWei,
      })

      if (onSuccess) {
        onSuccess(txHash)
      }

      return txHash
    } catch (err) {
      if (onError) {
        onError(err as Error)
      }
      console.error('Failed to create atom:', err)
      throw err
    }
  }

  return {
    createAtom,
    isLoading: isWaitingForSignature || isWaitingForConfirmation,
    isSuccess,
    isError: (isWriteError || isConfirmError) && hasStarted,
    error: writeError || confirmError,
    isWaitingForSignature,
    isWaitingForConfirmation,
    hasStarted,
  }
} 