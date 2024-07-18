import { url } from 'inspector'
import { useEffect, useState } from 'react'

import { Popover, PopoverContent, PopoverTrigger, Text } from '@0xintuition/1ui'
import { IdentityPresenter } from '@0xintuition/api'

import { IdentitySearchCombobox } from '@components/identity/identity-search-combo-box'
import { useIdentityServerSearch } from '@lib/hooks/useIdentityServerSearch'
import {
  TAG_PREDICATE_VAULT_ID_TESTNET,
  TAG_RESOURCE_ROUTE,
} from '@lib/utils/constants'
import logger from '@lib/utils/logger'
import { useFetcher } from '@remix-run/react'
import { TagLoaderData } from '@routes/resources+/tag'
import { TransactionActionType } from 'types/transaction'

import { TagsListInputPortal } from './tags-list-input-portal'

interface AddTagsProps {
  selectedTags: IdentityPresenter[]
  onAddTag: (newTag: IdentityPresenter) => void
  onRemoveTag: (id: string) => void
  dispatch: (action: TransactionActionType) => void
  subjectVaultId: string
}

export function AddTags({
  selectedTags,
  onAddTag,
  onRemoveTag,
  subjectVaultId,
}: AddTagsProps) {
  const formattedTags = selectedTags?.map((tag) => ({
    name: tag.display_name,
    id: tag.vault_id,
  }))

  const { setSearchQuery, identities, handleInput } = useIdentityServerSearch()
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const filteredIdentities = identities.filter(
    (identity) =>
      !selectedTags.some((tag) => tag.vault_id === identity.vault_id),
  )

  const [invalidTags, setInvalidTags] = useState<string[]>([])

  // this is for testing using the identity_id of tags that exist on the identity already
  const testIdentityTags = [
    'QmNrF6pE3RNXwFNbBCmvJMBBGKbe1yhK1E6YRPsAU23saj',
    'QmVfxo1di6CsaJaVGodnUS6gcGPLahYowHwA6UEUiRqG5v',
    'QmZndE239C65EhKXpX1funQH5XGaMSpaX9cwWC7DA2kBnY',
  ]

  // const handleIdentitySelect = (identity: IdentityPresenter) => {
  //   logger('tag', identity)
  //   onAddTag(identity)
  //   setSearchQuery('')
  // }

  const tagFetcher = useFetcher<TagLoaderData>()

  const handleIdentitySelect = (identity: IdentityPresenter) => {
    logger('tag', identity)
    onAddTag(identity)
    setSearchQuery('')

    const searchParams = new URLSearchParams({
      subjectId: subjectVaultId,
      predicateId: TAG_PREDICATE_VAULT_ID_TESTNET.toString(),
      objectId: identity.vault_id,
    })

    const finalUrl = `${TAG_RESOURCE_ROUTE}?${searchParams.toString()}`

    tagFetcher.load(finalUrl)
  }

  useEffect(() => {
    if (tagFetcher.state === 'idle' && tagFetcher.data !== undefined) {
      const result = tagFetcher.data.result
      if (result === '0') {
        logger('in fetcher: valid')

        setInvalidTags((prev) =>
          prev.filter((id) => id !== tagFetcher?.data?.objectId),
        )
      } else {
        logger('in fetcher: invalid')
        setInvalidTags((prev) => {
          const objectId = tagFetcher?.data?.objectId
          return objectId ? [...prev, objectId] : prev
        })
      }
    }
  }, [tagFetcher.state, tagFetcher.data])

  return (
    <div className="flex flex-col">
      <div className="mb-8 gap-1">
        <Text variant="body" className="text-primary/70">
          Add tags to this identity
        </Text>
        <Text variant="caption" className="text-primary/50">
          Select up to 5 tags to add to this identity.
        </Text>
      </div>
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverContent className="bg-transparent border-none">
          <IdentitySearchCombobox
            identities={filteredIdentities}
            existingIdentityIds={testIdentityTags}
            onIdentitySelect={handleIdentitySelect}
            onValueChange={setSearchQuery}
            onInput={handleInput}
            shouldFilter={false}
          />
        </PopoverContent>
        <TagsListInputPortal
          variant="tag"
          tags={formattedTags}
          maxTags={5}
          onAddTag={() => setIsPopoverOpen(true)}
          onRemoveTag={onRemoveTag}
          PopoverTriggerComponent={PopoverTrigger}
          invalidTags={invalidTags}
        />
      </Popover>
    </div>
  )
}
