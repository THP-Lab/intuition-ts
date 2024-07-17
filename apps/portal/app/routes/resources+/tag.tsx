import { json, LoaderFunctionArgs } from '@remix-run/node'
import { getTripleHashFromAtoms } from '@server/multivault'

export type TagLoaderData = {
  result: string
}

export async function loader({ request }: LoaderFunctionArgs) {
  if (request.method === 'POST') {
    const { subjectId, predicateId, objectId } = await request.json()

    try {
      const result = await getTripleHashFromAtoms(
        BigInt(subjectId),
        BigInt(predicateId),
        BigInt(objectId),
      )
      return json({ result: result.toString() } as TagLoaderData)
    } catch (error) {
      console.error('Error fetching triple hash:', error)
      return json({ error: 'Error fetching triple hash' }, { status: 500 })
    }
  } else {
    return json({ error: 'Method not allowed' }, { status: 405 })
  }
}
