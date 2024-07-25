import logger from '@lib/utils/logger'
import { ActionFunctionArgs, json, LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { performAction } from './action'
import { fetchLoaderData } from './loader'
import { LoginView } from './view'

export async function loader({ request }: LoaderFunctionArgs) {
  const data = fetchLoaderData(request)
  return json(data)
}
export async function action({ request }: ActionFunctionArgs) {
  await performAction(request)
}

export default function Login() {
  // No need to load data here as its only used to log
  const data = useLoaderData<typeof loader>()
  logger('[Login] authTokenClaims', data)
  return <LoginView />
}
