import { validateUser } from '@lib/utils/validation'
import { json, LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { fetchLoaderData } from './loader'
import { ExploreClaimsView } from './view'

export async function loader({ request }: LoaderFunctionArgs) {
  await validateUser(request)
  const data = await fetchLoaderData(request)
  return json(data)
}

export default function ExploreClaims() {
  const data = useLoaderData<typeof loader>()
  return <ExploreClaimsView {...data} />
}
