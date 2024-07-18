// import logger from '@lib/utils/logger'
import { json, LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getTripleHashFromAtoms, getTriplesByHash } from '@server/multivault'

type LoaderData = {
  getTriplesByHashResult: string
}

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const subjectId = BigInt(47)
    const predicateId = BigInt(48)
    const objectId = BigInt(1111)
    console.log('Input values:', { subjectId, predicateId, objectId })

    const getTripleHashFromAtomsHash = await getTripleHashFromAtoms(
      subjectId,
      predicateId,
      objectId,
    )
    console.log('Hash from atoms:', getTripleHashFromAtomsHash)

    const getTriplesByHashResult = await getTriplesByHash(
      getTripleHashFromAtomsHash,
    )
    console.log('Result for actual hash:', getTriplesByHashResult.toString())

    return json({ result: getTriplesByHashResult.toString() })
  } catch (error) {
    console.error('Error fetching triple hash:', error)
    return json({ error: 'Error fetching triple hash' }, { status: 500 })
  }
}

export default function TagsTest() {
  const { getTriplesByHashResult } = useLoaderData<LoaderData>()

  return (
    <div className="p-10 space-y-5">
      <pre>result: {getTriplesByHashResult}</pre>
    </div>
  )
}
