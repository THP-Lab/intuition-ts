import { wagmiConfig } from '@lib/utils/wagmi'
import type { PrivyClientConfig } from '@privy-io/react-auth'
import { PrivyProvider } from '@privy-io/react-auth'
import { WagmiProvider } from '@privy-io/wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const privyConfig: PrivyClientConfig = {
  embeddedWallets: {
    createOnLogin: 'users-without-wallets',
    requireUserPasswordOnCreate: true,
    noPromptOnSignature: false,
  },
  loginMethods: ['wallet', 'email', 'sms', 'discord', 'twitter', 'github'],
  appearance: {
    theme: 'dark',
    showWalletLoginFirst: true,
  },
}

export default function Providers({
  privyAppId,
  alchemyRpcUrl,
  alchemyApiKey,
  children,
}: {
  privyAppId: string
  alchemyRpcUrl: string
  alchemyApiKey: string
  children: React.ReactNode
}) {
  return (
    <PrivyProvider
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      appId={privyAppId as string}
      config={privyConfig}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig} reconnectOnMount={false}>
          <SmartAccountProvider
            alchemyRpcUrl={alchemyRpcUrl}
            alchemyApiKey={alchemyApiKey}
          >
            {children}
          </SmartAccountProvider>
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  )
}
