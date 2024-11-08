import { useEffect } from 'react'

import { TagLoaderData } from '@routes/resources+/tag'
import type { UseQueryResult } from '@tanstack/react-query'

interface UseInvalidItemsProps<T> {
  query: UseQueryResult<{
    data: TagLoaderData
    isLoading: boolean
  }>
  selectedItems: T[]
  setInvalidItems: React.Dispatch<React.SetStateAction<T[]>>
  onRemoveItem?: (id: string) => void
  idKey: keyof T
  dataIdKey: 'subjectId' | 'objectId'
}

function useInvalidItems<T>({
  query,
  selectedItems,
  setInvalidItems,
  onRemoveItem,
  idKey,
  dataIdKey,
}: UseInvalidItemsProps<T>) {
  useEffect(() => {
    if (!query.isPending && query.data) {
      const result = query.data.data.result
      const itemId = query.data.data[dataIdKey]

      if (result === '0') {
        setInvalidItems((prev) => prev.filter((item) => item[idKey] !== itemId))
      } else if (itemId) {
        const itemToAdd = selectedItems.find((item) => item[idKey] === itemId)
        if (itemToAdd) {
          setInvalidItems((prev) => {
            if (prev.some((item) => item[idKey] === itemId)) {
              return prev
            }
            return [...prev, itemToAdd]
          })
          if (onRemoveItem) {
            onRemoveItem(itemId)
          }
        }
      }
    }
  }, [
    query.isPending,
    query.data,
    setInvalidItems,
    selectedItems,
    onRemoveItem,
    idKey,
    dataIdKey,
  ])
}

export default useInvalidItems
