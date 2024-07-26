import { validateUser } from '@lib/utils/validation'
import { defer, LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { fetchLoaderData } from './loader'
import { ListsView } from './view'

export async function loader({ request }: LoaderFunctionArgs) {
  const wallet = await validateUser(request)
  const data = await fetchLoaderData(request, wallet)
  return defer(data)
}

export default function ListsRoute() {
  const data = useLoaderData<typeof loader>()
  return <ListsView {...data} />
}
