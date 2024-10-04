import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export const loader: LoaderFunction = async () => {
  const response = await fetch(process.env.HASURA_PROJECT_ENDPOINT || '', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET || '',
    },
    body: JSON.stringify({
      query: `
      query GetAtoms {
        atoms {
          id
          label
          creator {
            id
            label
            image
          }
        }
      }
    `,
    }),
  })

  const data = await response.json()
  return json(data)
}

export default function Atoms() {
  const data = useLoaderData<typeof loader>()

  return (
    <div>
      <h1>Atoms</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
