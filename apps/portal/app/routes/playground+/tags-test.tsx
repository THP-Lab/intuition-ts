import logger from '@lib/utils/logger'
import { json, LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getTripleHashFromAtoms } from '@server/multivault'

export async function loader({ request }: LoaderFunctionArgs) {
  // const url = new URL(request.url)
  // const subjectId = BigInt(url.searchParams.get('subjectId') || '0')
  // const predicateId = BigInt(url.searchParams.get('predicateId') || '0')
  // const objectId = BigInt(url.searchParams.get('objectId') || '0')

  try {
    const result = await getTripleHashFromAtoms(
      BigInt(1),
      BigInt(2),
      BigInt(600),
    )
    logger('resulting hash', result)
    return json({ result: result.toString() })
  } catch (error) {
    console.error('Error fetching triple hash:', error)
    return json({ error: 'Error fetching triple hash' }, { status: 500 })
  }
}

export default function TagsTest() {
  return <div className="p-10 space-y-5"></div>
}
