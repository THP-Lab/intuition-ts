import { useCallback, useMemo } from 'react'

import { Button } from '@0xintuition/1ui'

import PrivyLogout from '@client/privy-logout'
import { MULTIVAULT_CONTRACT_ADDRESS } from '@consts/general'
import { multivaultAbi } from '@lib/abis/multivault'
import { useBatchCreateAtomWagmi } from '@lib/hooks/useBatchCreateAtomWagmi'
import logger from '@lib/utils/logger'
import { invariant } from '@lib/utils/misc'
import { wagmiConfig } from '@lib/utils/wagmi'
// import { User as PrivyUser } from '@privy-io/react-auth'
import { useSmartWallets } from '@privy-io/react-auth/smart-wallets'
import { User } from '@privy-io/server-auth'
import { json, LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getUser, requireUserWallet } from '@server/auth'
import { publicClient } from '@server/viem'
import { multicall } from '@wagmi/core'
import { createClient, encodeFunctionData, http, toHex } from 'viem'
import {
  Config,
  createConfig,
  useAccount,
  usePublicClient,
  useWalletClient,
} from 'wagmi'

function hasSmartWallet(user: User | null): boolean {
  if (!user) {
    return false
  }

  if ('smartWallet' in user && user.smartWallet) {
    return true
  }

  const externalWallet = user.linkedAccounts.find(
    (account) =>
      account.type === 'wallet' && account.connectorType === 'injected',
  )

  return !externalWallet
}

export async function loader({ request }: LoaderFunctionArgs) {
  logger('[Loader] Entering app loader')

  const wallet = await requireUserWallet(request)
  const user = await getUser(request)
  logger('wallet', wallet)
  logger('user', user)
  invariant(wallet, 'Unauthorized')

  const userHasSmartWallet = hasSmartWallet(user)
  logger('userHasSmartWallet', userHasSmartWallet)

  // const transactions = [
  //   {
  //     to: '0x25709998B542f1Be27D19Fa0B3A9A67302bc1b94',
  //     value: '300000000000000', // 0.0003 ETH in wei
  //   },
  //   {
  //     to: '0x25709998B542f1Be27D19Fa0B3A9A67302bc1b94',
  //     value: '200000000000000', // 0.0002 ETH in wei
  //   },
  //   {
  //     to: '0x25709998B542f1Be27D19Fa0B3A9A67302bc1b94',
  //     value: '100000000000000', // 0.0001 ETH in wei
  //   },
  // ]

  // when we want to interact with our contract, we'd do it with this format:

  const atomTransactions = [
    {
      to: '0x1A6950807E33d5bC9975067e6D6b5Ea4cD661665', // multivault contract address
      data: encodeFunctionData({
        abi: multivaultAbi,
        functionName: 'batchCreateAtom',
        args: [[toHex('jpTest11'), toHex('jpTest11b')]],
      }),
      value: '600200002000000',
    },
    {
      to: '0x1A6950807E33d5bC9975067e6D6b5Ea4cD661665', // multivault contract address
      data: encodeFunctionData({
        abi: multivaultAbi,
        functionName: 'batchCreateAtom',
        args: [[toHex('jojiTest11'), toHex('jojiTest11b')]],
      }),
      value: '600200002000000',
    },
  ]

  const atomWagmiTransactions = [
    {
      address: '0x1A6950807E33d5bC9975067e6D6b5Ea4cD661665', // multivault contract address
      abi: multivaultAbi,
      functionName: 'batchCreateAtom',
      args: [[toHex('jpTest11'), toHex('jpTest11b')]],
      value: '600200002000000',
    },
    {
      address: '0x1A6950807E33d5bC9975067e6D6b5Ea4cD661665', // multivault contract address
      abi: multivaultAbi,
      functionName: 'batchCreateAtom',
      args: [[toHex('jojiTest11'), toHex('jojiTest11b')]],
      value: '600200002000000',
    },
  ]

  logger('atomWagmiTransactions', atomWagmiTransactions)

  return json({
    wallet,
    user,
    atomTransactions,
    atomWagmiTransactions,
    userHasSmartWallet,
  })
}

type AtomTransaction = {
  to: string
  data: string
  value: string
}
export default function Playground() {
  const {
    wallet,
    user,
    atomTransactions,
    atomWagmiTransactions,
    userHasSmartWallet,
  } = useLoaderData<{
    wallet: string
    user: User
    atomTransactions: AtomTransaction[]
    atomWagmiTransactions: any[]
    userHasSmartWallet: boolean
  }>()

  const { client: smartWalletClient } = useSmartWallets()
  const {
    writeContractAsync: writeBatchCreateAtom,
    awaitingWalletConfirmation,
    awaitingOnChainConfirmation,
  } = useBatchCreateAtomWagmi()

  const { address } = useAccount()
  const { data: walletClient } = useWalletClient()
  const publicClient = usePublicClient()

  const activeClient = useMemo(() => {
    return userHasSmartWallet ? smartWalletClient : walletClient
  }, [userHasSmartWallet, smartWalletClient, walletClient])

  const activeAddress = useMemo(() => {
    return userHasSmartWallet ? smartWalletClient?.account.address : address
  }, [userHasSmartWallet, smartWalletClient, address])

  const sendTx = useCallback(async () => {
    if (!activeClient || !activeAddress) {
      console.error('No active client or address found')
      return
    }

    const txParams = {
      to: '0x04EA475026a0AB3e280F749b206fC6332E6939F1' as `0x${string}`,
      value: BigInt(500000000000000), // 0.0005 ETH in wei
    }

    try {
      let txHash
      if (userHasSmartWallet) {
        txHash = await activeClient.sendTransaction({
          account: activeClient.account,
          ...txParams,
        })
      } else {
        txHash = await activeClient.sendTransaction(txParams)
      }
      logger('txHash', txHash)
    } catch (error) {
      console.error('Error sending transaction:', error)
    }
  }, [activeClient, activeAddress, userHasSmartWallet])

  const signMessage = useCallback(async () => {
    if (!activeClient || !activeAddress) {
      console.error('No active client or address found')
      return
    }

    const message = 'Do u want to build a smart dapp?'
    try {
      let signature
      if (userHasSmartWallet) {
        signature = await activeClient.signMessage({
          message,
        })
      } else {
        signature = await activeClient.signMessage({
          account: activeAddress,
          message,
        })
      }
      logger('signature', signature)
    } catch (error) {
      console.error('Error signing message:', error)
    }
  }, [activeClient, activeAddress, userHasSmartWallet])

  const sendBatchTx = useCallback(async () => {
    if (!activeClient || !activeAddress) {
      console.error('No active client or address found')
      return
    }

    try {
      if (userHasSmartWallet && 'sendTransaction' in activeClient) {
        const txHash = await activeClient.sendTransaction({
          account: activeClient.account,
          calls: atomTransactions.map((tx) => ({
            to: tx.to as `0x${string}`,
            data: tx.data as `0x${string}`,
            value: BigInt(tx.value),
          })),
        })
        logger('smart wallet batch txHash', txHash)
      } else {
        logger('non-smart wallet atom tx calls', atomTransactions)
        logger('atomWagmiTransactions', atomWagmiTransactions)

        if (!publicClient) {
          console.error('No public client found')
          return
        }

        // Execute multiple transactions
        const txHash1 = await writeBatchCreateAtom({
          address: MULTIVAULT_CONTRACT_ADDRESS,
          abi: multivaultAbi,
          functionName: 'batchCreateAtom',
          args: [[toHex('jpTest15'), toHex('jpTest15b')]],
          value: BigInt('600200002000000') * BigInt(2),
        })
        logger('txHash1', txHash1)

        // Wait for the first transaction to be mined
        await publicClient.waitForTransactionReceipt({ hash: txHash1 })

        // Execute the second transaction
        const txHash2 = await writeBatchCreateAtom({
          address: MULTIVAULT_CONTRACT_ADDRESS,
          abi: multivaultAbi,
          functionName: 'batchCreateAtom',
          args: [[toHex('jojiTest15'), toHex('jojiTest15b')]],
          value: BigInt('600200002000000') * BigInt(2),
        })
        logger('txHash2', txHash2)
      }
    } catch (error) {
      console.error('Error sending batch transaction:', error)
    }
  }, [
    activeClient,
    activeAddress,
    atomTransactions,
    atomWagmiTransactions,
    userHasSmartWallet,
    publicClient,
    writeBatchCreateAtom,
  ])

  return (
    <div className="h-screen flex flex-col items-center">
      <p>User has smart wallet: {userHasSmartWallet ? 'Yes' : 'No'}</p>
      <p>Active address: {activeAddress}</p>
      <div className="flex items-center gap-2">
        <Button onClick={signMessage}>Sign Message</Button>
        <Button onClick={sendTx}>Send Tx</Button>
        <Button onClick={sendBatchTx}>Send Batch Tx</Button>
      </div>
      <PrivyLogout wallet={wallet} />
    </div>
  )
}
