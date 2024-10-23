import { useCallback } from 'react'

import { Button } from '@0xintuition/1ui'

import PrivyLogout from '@client/privy-logout'
import { multivaultAbi } from '@lib/abis/multivault'
import { useUserClient } from '@lib/hooks/useUserWallet'
import logger from '@lib/utils/logger'
import { invariant } from '@lib/utils/misc'
import { generateRandomAtoms } from '@lib/utils/mock'
import { User } from '@privy-io/server-auth'
import { json, LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getUser, requireUserWallet } from '@server/auth'
import { encodeFunctionData } from 'viem'
import { useSendTransaction } from 'wagmi'

export async function loader({ request }: LoaderFunctionArgs) {
  logger('[Loader] Entering app loader')

  const wallet = await requireUserWallet(request)
  const user = await getUser(request)
  logger('wallet', wallet)
  logger('user', user)
  invariant(wallet, 'Unauthorized')

  // when we want to interact with our contract, we'd do it with this format:
  // generate 2 random

  const atomTransactions = [
    {
      to: '0x1A6950807E33d5bC9975067e6D6b5Ea4cD661665', // multivault contract address
      data: encodeFunctionData({
        abi: multivaultAbi,
        functionName: 'batchCreateAtom',
        args: [generateRandomAtoms(2)],
      }),
      value: '600200002000000',
    },
    {
      to: '0x1A6950807E33d5bC9975067e6D6b5Ea4cD661665', // multivault contract address
      data: encodeFunctionData({
        abi: multivaultAbi,
        functionName: 'batchCreateAtom',
        args: [generateRandomAtoms(2)],
      }),
      value: '600200002000000',
    },
  ]

  return json({
    wallet,
    user,
    atomTransactions,
  })
}

type AtomTransaction = {
  to: string
  data: string
  value: string
}
export default function Playground() {
  const { wallet, atomTransactions } = useLoaderData<{
    wallet: string
    user: User
    atomTransactions: AtomTransaction[]
  }>()

  const {
    smartWalletClient,
    walletClient,
    publicClient,
    address,
    isSmartWalletUser,
    ready,
  } = useUserClient()

  const sendTx = useCallback(async () => {
    if (!ready) {
      console.error('No active client or address found')
      return
    }

    const txParams = {
      to: '0x04EA475026a0AB3e280F749b206fC6332E6939F1' as `0x${string}`,
      value: BigInt(500000000000000), // 0.0005 ETH in wei
    }

    try {
      let txHash
      if (isSmartWalletUser) {
        txHash = await smartWalletClient.sendTransaction({
          account: smartWalletClient.account,
          ...txParams,
        })
      } else {
        txHash = await walletClient?.sendTransaction({
          account: address as `0x${string}`,
          chain: publicClient?.chain,
          ...txParams,
        })
      }
      logger('txHash', txHash)
    } catch (error) {
      console.error('Error sending transaction:', error)
    }
  }, [smartWalletClient, walletClient, address, isSmartWalletUser, ready])

  const signMessage = useCallback(async () => {
    if (!ready) {
      console.error('No active client or address found')
      return
    }

    const message = 'Do u want to build a smart dapp?'
    try {
      let signature
      if (isSmartWalletUser) {
        signature = await smartWalletClient.signMessage({
          message,
        })
      } else {
        signature = await walletClient?.signMessage({
          account: address as `0x${string}`,
          message,
        })
      }
      logger('signature', signature)
    } catch (error) {
      console.error('Error signing message:', error)
    }
  }, [smartWalletClient, walletClient, address, isSmartWalletUser, ready])

  const { data: sendTxHash, sendTransaction } = useSendTransaction()

  const sendBatchTx = useCallback(async () => {
    if (!ready) {
      console.error('No active client or address found')
      return
    }

    try {
      if (isSmartWalletUser) {
        const txHash = await smartWalletClient.sendTransaction({
          account: smartWalletClient.account,
          calls: atomTransactions.map((tx) => ({
            to: tx.to as `0x${string}`,
            data: tx.data as `0x${string}`,
            value: BigInt(tx.value),
          })),
        })
        logger('smart wallet batch txHash', txHash)
      } else {
        logger('non-smart wallet atom tx calls', atomTransactions)

        for (const tx of atomTransactions) {
          await sendTransaction({
            to: tx.to as `0x${string}`,
            data: tx.data as `0x${string}`,
            value: BigInt(tx.value),
          })
          logger(`Transaction hash for atom: ${sendTxHash}`)

          // Wait for the transaction to be mined
          if (sendTxHash) {
            await publicClient?.waitForTransactionReceipt({ hash: sendTxHash })
          }
        }
      }
    } catch (error) {
      console.error('Error sending batch transaction:', error)
    }
  }, [
    smartWalletClient,
    walletClient,
    address,
    isSmartWalletUser,
    atomTransactions,
    publicClient,
    sendTransaction,
    sendTxHash,
    ready,
  ])

  return (
    <div className="h-screen flex flex-col items-center">
      <p>User has smart wallet: {isSmartWalletUser ? 'Yes' : 'No'}</p>
      <p>Active address: {address}</p>
      <div className="flex items-center gap-2">
        <Button onClick={signMessage}>Sign Message</Button>
        <Button onClick={sendTx}>Send Tx</Button>
        <Button onClick={sendBatchTx}>Send Batch Tx</Button>
      </div>
      <PrivyLogout wallet={wallet} />
    </div>
  )
}
