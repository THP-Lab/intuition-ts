import { z } from 'zod'

const schema = z.object({
  NODE_ENV: z.enum(['production', 'development', 'test'] as const),
  WALLETCONNECT_PROJECT_ID: z.string(),
  ALCHEMY_MAINNET_RPC_URL: z.string(),
  ALCHEMY_BASE_SEPOLIA_RPC_URL: z.string(),
  ALCHEMY_BASE_RPC_URL: z.string(),
})

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof schema> { }
  }
}

export function init() {
  const parsed = schema.safeParse(process.env)

  if (parsed.success === false) {
    console.error(
      '❌ Invalid environment variables:',
      parsed.error.flatten().fieldErrors,
    )

    throw new Error('Invalid environment variables')
  }
}

/**
 * This is used in both `entry.server.ts` and `root.tsx` to ensure that
 * the environment variables are set and globally available before the app is
 * started.
 *
 * NOTE: Do *not* add any environment variables in here that you do not wish to
 * be included in the client.
 * @returns all public ENV variables
 */
export function getEnv() {
  return {
    MODE: process.env.NODE_ENV,
    WALLETCONNECT_PROJECT_ID: process.env.WALLETCONNECT_PROJECT_ID,
    ALCHEMY_MAINNET_RPC_URL: process.env.ALCHEMY_MAINNET_RPC_URL,
    ALCHEMY_BASE_SEPOLIA_RPC_URL: process.env.ALCHEMY_BASE_SEPOLIA_RPC_URL,
    ALCHEMY_BASE_RPC_URL: process.env.ALCHEMY_BASE_RPC_URL,
  }
}

type ENV = ReturnType<typeof getEnv>

declare global {
  var ENV: ENV
  interface Window {
    ENV: ENV
  }
}
