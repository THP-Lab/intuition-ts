import React, { ReactNode, useEffect, useMemo, useState } from 'react'

import {
  createLightAccount,
  createLightAccountClient,
  getDefaultLightAccountFactory,
  LightSmartContractAccount,
} from '@alchemy/aa-accounts'
import {
  BundlerClient,
  createPublicErc4337Client,
  createSmartAccountClient,
  SmartAccountClient,
  SmartContractAccount,
  WalletClientSigner,
  type SmartAccountSigner,
} from '@alchemy/aa-core'
import { ConnectedWallet, useWallets } from '@privy-io/react-auth'
import {
  Abi,
  createWalletClient,
  custom,
  encodeFunctionData,
  http,
  RpcTransactionRequest,
  WalletClient,
} from 'viem'
import { baseSepolia } from 'viem/chains'

export function SmartAccountProvider({
  children,
  alchemyRpcUrl,
  alchemyApiKey,
}: {
  children: ReactNode
  alchemyRpcUrl: string
  alchemyApiKey: string
}) {
  const { wallets } = useWallets()
  const embeddedWallet = wallets.find(
    (wallet) => wallet.walletClientType === 'privy',
  )

  // local state
  const [smartAccountReady, setSmartAccountReady] = useState(false)
  const [eoa, setEoa] = useState<ConnectedWallet | undefined>()
  const [smartAccountSigner, setSmartAccountSigner] = useState<
    SmartAccountSigner | undefined
  >()
  const [smartAccountAddress, setSmartAccountAddress] = useState<
    `0x${string}` | undefined
  >()
  const [smartAccountClient, setSmartAccountClient] = useState<
    SmartAccountClient | undefined
  >()

  // Initializing RPC clients
  const bundler: SmartAccountClient = useMemo(
    () =>
      createSmartAccountClient({
        transport: http(alchemyRpcUrl),
        chain: baseSepolia,
      }),
    [alchemyRpcUrl],
  )

  useEffect(() => {
    // Start of hook function
    const createSmartWallet = async (eoa: ConnectedWallet) => {
      setEoa(eoa)
      const eoaProvider = await eoa.getEthereumProvider()
      const eoaClient = createWalletClient({
        account: eoa.address as `0x${string}`,
        chain: baseSepolia,
        transport: custom(eoaProvider),
      })

      // Initialize SmartAccountSigner from EOA to authorize actions taken by the smart account
      const smartAccountSigner = new WalletClientSigner(eoaClient, 'json-rpc')
      setSmartAccountSigner(smartAccountSigner)

      // Create an Alchemy Light Account Client with the 'eoaSigner'
      const smartAccountClient = createSmartAccountClient({
        chain: baseSepolia,
        transport: http(alchemyRpcUrl),
        account: await createLightAccount({
          signer: smartAccountSigner,
          chain: baseSepolia,
          transport: http(alchemyRpcUrl),
        }),
      })
      setSmartAccountClient(smartAccountClient)

      // Store the smart account address so we don't need to make async calls to retrieve it
      setSmartAccountAddress(smartAccountClient.account.address)
      setSmartAccountReady(true)
    }

    // Start of hook logic
    if (embeddedWallet?.address) {
      createSmartWallet(embeddedWallet)
    }
  }, [embeddedWallet?.address])

  return <div>{children}</div>
}
