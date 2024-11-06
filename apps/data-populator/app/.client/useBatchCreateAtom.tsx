import { useCallback, useEffect, useReducer, useState } from 'react'

import { toast } from '@0xintuition/1ui'

import type { BatchAtomsRequest, PinDataResult } from '@lib/services/populate'
import logger from '@lib/utils/logger'
import { useFetcher } from '@remix-run/react'
import {
  InitiateActionData,
  LogTxActionData,
  PublishActionData,
} from '@routes/app+'
import { Thing, WithContext } from 'schema-dts'
import { useSendTransaction } from 'wagmi'

import { useUserClient } from './useUserWallet'

type State = {
  requestHash: string
  selectedAtoms: WithContext<Thing>[]
  selectedRows: number[]
  csvData: string[][]
  calls: BatchAtomsRequest[]
  existingCIDs: string[]
  newCIDs: string[]
  filteredData: PinDataResult[]
  txHash: string
  setNewAtoms: WithContext<Thing>[]
  error?: string
  step:
    | 'idle'
    | 'initiating'
    | 'publishing'
    | 'sending'
    | 'logging'
    | 'complete'
    | 'error'
}

type Action =
  | { type: 'SET_REQUEST_HASH'; payload: string }
  | { type: 'SET_SELECTED_ATOMS'; payload: WithContext<Thing>[] }
  | {
      type: 'SET_CALLS'
      payload: {
        calls: BatchAtomsRequest[]
        newCIDs: string[]
        existingCIDs: string[]
        filteredData: PinDataResult[]
      }
    }
  | { type: 'SET_TX_HASH'; payload: string }
  | { type: 'SET_STEP'; payload: State['step'] }
  | { type: 'SET_SELECTED_ROWS'; payload: number[] }
  | { type: 'SET_CSV_DATA'; payload: string[][] }
  | {
      type: 'SET_TX_COMPLETE'
      txHash?: string
    }
  | { type: 'SET_ERROR'; error: string }
  | { type: 'RESET' }

const initialState: State = {
  requestHash: '',
  selectedAtoms: [],
  selectedRows: [],
  csvData: [],
  calls: [],
  txHash: '',
  step: 'idle',
  setNewAtoms: [],
  error: '',
  newCIDs: [],
  existingCIDs: [],
  filteredData: [],
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_REQUEST_HASH':
      return { ...state, requestHash: action.payload }
    case 'SET_SELECTED_ATOMS':
      return { ...state, selectedAtoms: action.payload }
    case 'SET_CALLS':
      return {
        ...state,
        calls: action.payload.calls,
        newCIDs: action.payload.newCIDs,
        existingCIDs: action.payload.existingCIDs,
        filteredData: action.payload.filteredData,
      }
    case 'SET_TX_HASH':
      return { ...state, txHash: action.payload }
    case 'SET_STEP':
      return { ...state, step: action.payload }
    case 'SET_SELECTED_ROWS':
      return { ...state, selectedRows: action.payload }
    case 'SET_CSV_DATA':
      return { ...state, csvData: action.payload }
    case 'SET_ERROR':
      return { ...state, step: 'error', error: action.error }
    case 'SET_TX_COMPLETE':
      return {
        ...state,
        step: 'complete',
        txHash: action.txHash ?? '',
      }
    case 'RESET':
      console.log('Reducer returning to initial state')
      console.log('Initial state:', initialState)
      return initialState
    default:
      return state
  }
}

type InitiateActionResponse = {
  success: boolean
  requestHash: string
  selectedRows: number[]
  selectedAtoms: WithContext<Thing>[]
  csvData: string[][]
  error?: string
}

type PublishAtomsResponse = {
  success: boolean
  calls: BatchAtomsRequest[]
  newCIDs: string[]
  existingCIDs: string[]
  filteredData: PinDataResult[]
  error?: string
}

export function useBatchCreateAtom() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [isProcessing, setIsProcessing] = useState(false)
  const initiateFetcher = useFetcher({ key: 'initiate-batch' })
  const publishFetcher = useFetcher({ key: 'publish-atoms' })
  const logTxFetcher = useFetcher({ key: 'log-tx-hash-and-verify-atoms' })

  const { smartWalletClient, publicClient, address, isSmartWalletUser, ready } =
    useUserClient()

  const { sendTransaction } = useSendTransaction()

  const initiateBatchRequest = useCallback(
    (selectedRows: number[], csvData: string[][]) => {
      if (isProcessing) {
        return
      }
      if (!Array.isArray(selectedRows) || selectedRows.length === 0) {
        console.error('Invalid or empty selectedRows')
        return
      }
      if (!Array.isArray(csvData) || csvData.length === 0) {
        console.error('Invalid or empty csvData')
        return
      }

      console.log('Initiating batch request')
      console.log('Selected Rows:', selectedRows)
      console.log('CSV Data:', csvData)
      setIsProcessing(true)
      dispatch({ type: 'SET_STEP', payload: 'initiating' })

      const formData = new FormData()
      formData.append('action', 'initiateBatchAtomRequest')
      formData.append('selectedRows', JSON.stringify(selectedRows))
      formData.append('csvData', JSON.stringify(csvData))

      initiateFetcher.submit(formData, { method: 'post' })
    },
    [initiateFetcher, isProcessing],
  )

  const publishAtoms = useCallback(() => {
    if (!state.requestHash || isProcessing || publishFetcher.state !== 'idle') {
      return
    }

    console.log('Publishing atoms')
    setIsProcessing(true)

    const formData = new FormData()
    formData.append('action', 'publishAtoms')
    formData.append('requestHash', state.requestHash)
    formData.append('selectedAtoms', JSON.stringify(state.selectedAtoms))

    publishFetcher.submit(formData, { method: 'post' })
  }, [publishFetcher, state.requestHash, state.selectedAtoms, isProcessing])

  const sendBatchTx = useCallback(async () => {
    console.log('Sending batch transaction')
    dispatch({ type: 'SET_STEP', payload: 'sending' })
    setIsProcessing(true)

    if (!ready) {
      console.error('No active client or address found')
      return
    }

    try {
      let txHash
      if (isSmartWalletUser) {
        logger('[start] smart wallet sending batch tx')
        txHash = await smartWalletClient.sendTransaction({
          account: smartWalletClient.account,
          calls: state.calls.map((call) => ({
            to: call.to as `0x${string}`,
            data: call.data as `0x${string}`,
            value: BigInt(call.value),
          })),
        })
        logger('[end] smart wallet batch txHash', txHash)
      } else {
        logger('isSmartWalletUser', isSmartWalletUser)
        logger('[start] non-smart wallet atom tx calls', state.calls)

        const confirmedHashes: `0x${string}`[] = []

        for (const tx of state.calls) {
          await new Promise<void>((resolve, reject) => {
            sendTransaction(
              {
                to: tx.to as `0x${string}`,
                data: tx.data as `0x${string}`,
                value: BigInt(tx.value),
              },
              {
                onSuccess: async (hash) => {
                  try {
                    const receipt =
                      await publicClient?.waitForTransactionReceipt({ hash })
                    confirmedHashes.push(receipt?.transactionHash ?? hash)
                    logger(
                      `Transaction confirmed: ${receipt?.transactionHash ?? hash}`,
                    )
                    resolve()
                  } catch (confirmError) {
                    console.error('Error confirming transaction:', confirmError)
                    reject(confirmError)
                  }
                },
                onError: (error) => {
                  console.error('Error sending transaction:', error)
                  reject(error)
                },
              },
            )
          })
        }
        // Use the last transaction hash as the overall txHash
        txHash = confirmedHashes[confirmedHashes.length - 1]
      }

      dispatch({ type: 'SET_TX_HASH', payload: txHash })
      dispatch({ type: 'SET_STEP', payload: 'logging' })
      logger('txHash', txHash)
      return txHash
    } catch (error) {
      console.error('Error sending batch transaction:', error)
      dispatch({ type: 'SET_STEP', payload: 'idle' })

      const errorMessage =
        error instanceof Error ? error.message : String(error)
      logger('error', { message: errorMessage, context: 'sendBatchTx' })

      dispatch({
        type: 'SET_ERROR',
        error: errorMessage,
      })
      dispatch({ type: 'SET_STEP', payload: 'error' })
      toast.error(errorMessage)
    } finally {
      setIsProcessing(false)
    }
  }, [
    smartWalletClient,
    publicClient,
    isSmartWalletUser,
    state.calls,
    sendTransaction,
    ready,
  ])

  const logTxHash = useCallback(() => {
    if (!state.txHash || !state.requestHash || isProcessing) {
      return
    }
    console.log('Logging transaction hash')

    setIsProcessing(true)
    dispatch({ type: 'SET_STEP', payload: 'logging' })

    const formData = new FormData()
    formData.append('action', 'logTxHashAndVerifyAtoms')
    formData.append('txHash', state.txHash)
    formData.append('requestHash', state.requestHash)
    formData.append('filteredCIDs', JSON.stringify(state.newCIDs))
    formData.append('filteredData', JSON.stringify(state.filteredData))
    formData.append(
      'msgSender',
      isSmartWalletUser ? smartWalletClient?.account.address : address,
    )
    formData.append('oldAtomCIDs', JSON.stringify(state.existingCIDs))

    logTxFetcher.submit(formData, { method: 'post' })
  }, [
    logTxFetcher,
    state.txHash,
    state.requestHash,
    state.newCIDs,
    state.filteredData,
    state.existingCIDs,
    isSmartWalletUser,
    smartWalletClient,
    address,
    isProcessing,
  ])

  const resetState = useCallback(() => {
    console.log('initiating resetState')

    // Reset fetcher states by submitting empty data
    initiateFetcher.submit({}, { method: 'get' })
    publishFetcher.submit({}, { method: 'get' })
    logTxFetcher.submit({}, { method: 'get' })

    setIsProcessing(false)

    dispatch({ type: 'RESET' })
  }, [initiateFetcher, publishFetcher, logTxFetcher])

  const handleClose = useCallback(() => {
    if (state.step === 'error' || state.step === 'complete') {
      resetState()
    }
  }, [state.step, resetState])

  useEffect(() => {
    if (
      initiateFetcher.state === 'idle' &&
      initiateFetcher.data &&
      state.step === 'initiating'
    ) {
      const data = initiateFetcher.data as InitiateActionResponse
      console.log('Initiate fetcher data received:', data)
      if (data.success && data.requestHash) {
        dispatch({ type: 'SET_REQUEST_HASH', payload: data.requestHash })
        dispatch({ type: 'SET_SELECTED_ATOMS', payload: data.selectedAtoms })
        dispatch({ type: 'SET_SELECTED_ROWS', payload: data.selectedRows })
        dispatch({ type: 'SET_CSV_DATA', payload: data.csvData })
        dispatch({ type: 'SET_STEP', payload: 'publishing' })
      } else {
        console.error('Failed to initiate batch request:', data.error)
        toast.error('Failed to initiate batch request. Please try again.', {
          duration: 5000,
        })
        dispatch({ type: 'SET_STEP', payload: 'idle' })
      }
      setIsProcessing(false)
    }
  }, [initiateFetcher.state, initiateFetcher.data, state.step])

  useEffect(() => {
    if (
      publishFetcher.state === 'idle' &&
      publishFetcher.data &&
      state.step === 'publishing'
    ) {
      const data = publishFetcher.data as PublishAtomsResponse
      console.log('Publish fetcher data received:', data)
      if (data.success && data.calls) {
        dispatch({
          type: 'SET_CALLS',
          payload: {
            calls: data.calls,
            newCIDs: data.newCIDs || [],
            existingCIDs: data.existingCIDs || [],
            filteredData: data.filteredData || [],
          },
        })
        dispatch({ type: 'SET_STEP', payload: 'sending' })
      } else {
        console.error('Failed to publish atoms:', data.error)
        toast.error('Failed to publish atoms. Please try again.', {
          duration: 5000,
        })
        dispatch({ type: 'SET_STEP', payload: 'idle' })
      }
      setIsProcessing(false)
    }
  }, [publishFetcher.state, publishFetcher.data, state.step])

  useEffect(() => {
    if (state.step === 'sending' && state.txHash) {
      dispatch({ type: 'SET_STEP', payload: 'logging' })
      setIsProcessing(false)
    }
  }, [state.step, state.txHash])

  useEffect(() => {
    if (
      logTxFetcher.state === 'idle' &&
      logTxFetcher.data &&
      state.step === 'logging'
    ) {
      console.log('Log TX fetcher data received:', logTxFetcher.data)
      const data = logTxFetcher.data as LogTxActionData

      if (data.success) {
        console.log('logTxFetcher success')
        toast.success('Atom(s) created successfully', {
          duration: 5000,
        })
      } else {
        console.error('Failed to create atom(s):', data.error)
        toast.error('Failed to create atom(s). Please try again.', {
          duration: 5000,
        })
      }
      // Reset state in either case
      resetState()
    }
  }, [logTxFetcher.state, logTxFetcher.data, state.step, resetState])

  useEffect(() => {
    const handleAsyncOperations = async () => {
      if (isProcessing) {
        return
      }

      try {
        switch (state.step) {
          case 'sending':
            if (state.calls.length > 0) {
              await sendBatchTx()
            }
            break

          case 'logging':
            if (state.txHash) {
              logTxHash()
            }
            break

          case 'publishing':
            if (
              state.requestHash &&
              !publishFetcher.data &&
              publishFetcher.state === 'idle'
            ) {
              publishAtoms()
            }
            break
        }
      } catch (error) {
        console.error('Error in async operations:', error)
        dispatch({
          type: 'SET_ERROR',
          error: error instanceof Error ? error.message : String(error),
        })
      }
    }

    handleAsyncOperations()
  }, [
    state.step,
    state.requestHash,
    state.calls,
    state.txHash,
    publishAtoms,
    sendBatchTx,
    logTxHash,
    isProcessing,
    publishFetcher.state,
    publishFetcher.data,
  ])

  return {
    ...state,
    resetState,
    handleClose,
    initiateBatchRequest,
    publishAtoms,
    sendBatchTx,
    logTxHash,
    isLoading:
      state.step !== 'idle' &&
      state.step !== 'complete' &&
      state.step !== 'error',
    isInitiating: state.step === 'initiating',
    isPublishing: state.step === 'publishing',
    isSending: state.step === 'sending',
    isLoggingTx: state.step === 'logging',
    isComplete: state.step === 'complete',
    isError: state.step === 'error',
  }
}
