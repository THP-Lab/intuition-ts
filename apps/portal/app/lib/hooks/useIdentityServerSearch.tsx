import { useState } from 'react'

import { useGetAtomsQuery } from '@0xintuition/graphql'

import { MULTIVAULT_CONTRACT_ADDRESS } from '@consts/general'
import useDebounce from '@lib/hooks/useDebounce'

export function useIdentityServerSearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const debouncedSearch = useDebounce(searchQuery, 300)

  const { data: atomsData } = useGetAtomsQuery(
    {
      where: debouncedSearch
        ? {
            _or: [{ label: { _ilike: `%${debouncedSearch}%` } }],
          }
        : undefined,
    },
    {
      queryKey: ['get-atoms-query', { search: debouncedSearch }],
    },
  )

  const identities =
    atomsData?.atoms?.map((atom) => ({
      vault_id: atom.vaultId?.toString(),
      display_name: atom.label,
      image: atom.image,
      contract: MULTIVAULT_CONTRACT_ADDRESS,
    })) || []

  const handleInput = (value: string) => {
    setSearchQuery(value)
  }

  return {
    setSearchQuery,
    identities,
    handleInput,
  }
}
