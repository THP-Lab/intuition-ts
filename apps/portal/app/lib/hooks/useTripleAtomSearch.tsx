import { useState } from 'react'

import { useGetAtomsQuery } from '@0xintuition/graphql'

import { useDebounce } from './useDebounce'

interface UseTripleAtomSearchProps {
  excludeIds?: string[]
}

export function useTripleAtomSearch({
  excludeIds = [],
}: UseTripleAtomSearchProps = {}) {
  const [searchQuery, setSearchQuery] = useState('')
  const debouncedSearch = useDebounce(searchQuery, 300)

  const { data: atomsData } = useGetAtomsQuery(
    {
      where: debouncedSearch
        ? {
            _or: [
              { label: { _ilike: `%${debouncedSearch}%` } },
              { type: { _ilike: `%${debouncedSearch}%` } },
            ],
            id: { _nin: excludeIds },
          }
        : { id: { _nin: excludeIds } },
    },
    {
      queryKey: ['get-atoms-query', { search: debouncedSearch, excludeIds }],
    },
  )

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchQuery((event.target as HTMLInputElement).value)
  }

  return {
    setSearchQuery,
    atoms: atomsData?.atoms_aggregate.nodes || [],
    handleInput,
  }
}
