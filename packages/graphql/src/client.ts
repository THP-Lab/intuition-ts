import { GraphQLClient } from 'graphql-request'

// Define chain configurations using environment variables
const CHAIN_CONFIGS = {
  8453: process.env.BASE_GRAPHQL_URL || 'https://api.i7n.app/v1/graphql', // Base
  84532:
    process.env.BASE_SEPOLIA_GRAPHQL_URL || 'https://api.i7n.dev/v1/graphql', // Base Sepolia
}

type ChainId = keyof typeof CHAIN_CONFIGS

type ClientParams = {
  token?: string
  userId?: string
  chainId?: ChainId
}

const X_HASURA_USER_ID = 'x-hasura-user-id'

const client = ({ token, userId, chainId }: ClientParams) => {
  // Determine API_URL based on chainId or fallback to environment variable
  const API_URL = chainId
    ? CHAIN_CONFIGS[chainId]
    : process.env.HASURA_PROJECT_ENDPOINT || ''

  if (!API_URL) {
    throw new Error(
      'No API URL provided. Please specify a chainId or set HASURA_PROJECT_ENDPOINT.',
    )
  }

  const headers: {
    authorization?: string
    [X_HASURA_USER_ID]?: string
  } = {}

  if (token) {
    headers.authorization = `Bearer ${token}`

    if (userId) {
      headers[X_HASURA_USER_ID] = userId
    }
  }

  return new GraphQLClient(API_URL, { headers })
}

export default client
