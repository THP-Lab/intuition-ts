import { env } from 'node:process'

import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from '@aws-sdk/client-secrets-manager'
import { z } from 'zod'

export const featureFlagsSchema = z.object({
  FF_GENERIC_BANNER_ENABLED: z.string().optional(),
  FF_INCIDENT_BANNER_ENABLED: z.string().optional(),
  FF_FULL_LOCKDOWN_ENABLED: z.string().optional(),
})

const schema = z.object({
  NODE_ENV: z.enum(['production', 'development'] as const), // remix only has development (local) and production (deployed)
  DEPLOY_ENV: z.enum(['production', 'staging', 'development'] as const), // based on the environment context
  API_URL: z.string(),
  WALLETCONNECT_PROJECT_ID: z.string(),
  ALCHEMY_MAINNET_RPC_URL: z.string(),
  ALCHEMY_BASE_SEPOLIA_RPC_URL: z.string(),
  ALCHEMY_BASE_RPC_URL: z.string(),
  ALCHEMY_SEPOLIA_RPC_URL: z.string(),
  MULTIVAULT_ADDRESS_BASE_SEPOLIA: z.string(),
  MULTIVAULT_ADDRESS_BASE_MAINNET: z.string(),
  ORIGIN_URL: z.string(),
  PRIVY_APP_ID: z.string(),
  GTM_TRACKING_ID: z.string(),
  featureFlagsSchema,
})

declare global {
  /* eslint-disable @typescript-eslint/no-namespace */
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof schema> {}
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
export async function getEnv() {
  // Fetch secrets from AWS Secrets Manager
  await fetchSecrets()

  return {
    MODE: process.env.NODE_ENV,
    DEPLOY_ENV: process.env.DEPLOY_ENV,
    API_URL: process.env.API_URL,
    WALLETCONNECT_PROJECT_ID: process.env.WALLETCONNECT_PROJECT_ID,
    ALCHEMY_MAINNET_RPC_URL: process.env.ALCHEMY_MAINNET_RPC_URL,
    ALCHEMY_BASE_SEPOLIA_RPC_URL: process.env.ALCHEMY_BASE_SEPOLIA_RPC_URL,
    ALCHEMY_BASE_RPC_URL: process.env.ALCHEMY_BASE_RPC_URL,
    ALCHEMY_SEPOLIA_RPC_URL: process.env.ALCHEMY_SEPOLIA_RPC_URL,
    MULTIVAULT_ADDRESS_BASE_SEPOLIA:
      process.env.MULTIVAULT_ADDRESS_BASE_SEPOLIA,
    MULTIVAULT_ADDRESS_BASE_MAINNET:
      process.env.MULTIVAULT_ADDRESS_BASE_MAINNET,
    ORIGIN_URL: process.env.ORIGIN_URL,
    PRIVY_APP_ID: process.env.PRIVY_APP_ID,
    GTM_TRACKING_ID: process.env.GTM_TRACKING_ID,
    // Feature flags
    FF_GENERIC_BANNER_ENABLED: process.env.FF_GENERIC_BANNER_ENABLED,
    FF_INCIDENT_BANNER_ENABLED: process.env.FF_INCIDENT_BANNER_ENABLED,
    FF_FULL_LOCKDOWN_ENABLED: process.env.FF_FULL_LOCKDOWN_ENABLED,
  }
}

export function getFeatureFlags(): z.infer<typeof featureFlagsSchema> {
  return {
    FF_GENERIC_BANNER_ENABLED: process.env.FF_GENERIC_BANNER_ENABLED,
    FF_INCIDENT_BANNER_ENABLED: process.env.FF_INCIDENT_BANNER_ENABLED,
    FF_FULL_LOCKDOWN_ENABLED: process.env.FF_FULL_LOCKDOWN_ENABLED,
  }
}

export type FeatureFlags = z.infer<typeof featureFlagsSchema>

type ENV = ReturnType<typeof getEnv>

declare global {
  const ENV: ENV
  interface Window {
    ENV: ENV
  }
}

/**
 * Gets the environment variables from Secrets Manager and sets them globally.
 */
async function fetchSecrets() {
  const BACKEND_ENV: string = env.BACKEND_ENV!
  const AWS_REGION: string = env.AWS_REGION!
  const AWS_ACCOUNT: string = env.AWS_ACCOUNT!
  const AWS_SECRETS_CONFIG: string = env.AWS_SECRETS_CONFIG!
  const SECRET_KEY = `portal.${BACKEND_ENV}`

  console.log(`BACKEND ENV = ${BACKEND_ENV}`)
  console.log(`AWS REGION = ${AWS_REGION}`)
  console.log(`AWS ACCOUNT = ${AWS_ACCOUNT}`)
  console.log(`AWS SECRETS CONFIG = ${AWS_SECRETS_CONFIG}`)
  console.log(`SECRET KEY = ${SECRET_KEY}`)

  const client = new SecretsManagerClient({ region: AWS_REGION })

  // First access the config secrets to get the desired secrets key
  let arn = get_arn(AWS_REGION, AWS_ACCOUNT, AWS_SECRETS_CONFIG)
  console.log(`ARN = ${arn}`)
  let cmd = new GetSecretValueCommand({ SecretId: arn })
  let secrets = await get_secrets(cmd)
  if (typeof secrets[SECRET_KEY] !== 'undefined') {
    const secret_code = secrets[SECRET_KEY]
    const repo_name = `${SECRET_KEY}-${secret_code}`

    console.log(`REPO NAME = ${repo_name}`)

    // Now get the secrets for this key
    arn = get_arn(AWS_REGION, AWS_ACCOUNT, repo_name)
    console.log(`ARN = ${arn}`)
    cmd = new GetSecretValueCommand({ SecretId: arn })
    secrets = await get_secrets(cmd)
    for (const s in secrets) {
      process.env[s] = secrets[s]
      console.log(`SECRET ${s} = ${secrets[s]}`)
    }
  }

  function get_arn(region: string, account: string, repo_name: string) {
    return `arn:aws:secretsmanager:${region}:${account}:secret:${repo_name}`
  }

  async function get_secrets(
    cmd: GetSecretValueCommand,
  ): Promise<{ [id: string]: string }> {
    const vars: { [id: string]: string } = {}
    const res = await client.send(cmd)
    const secrets = res.SecretString
    if (secrets !== undefined) {
      const secretsList = JSON.parse(secrets)
      for (const k in secretsList) {
        const v = secretsList[k]
        vars[k] = v
      }
    }
    return vars
  }
}
