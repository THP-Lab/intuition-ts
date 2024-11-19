import { useState } from 'react'

import { Popover, PopoverContent, PopoverTrigger, Text } from '@0xintuition/1ui'
import { IdentityPresenter } from '@0xintuition/api'

import { IdentitySearchCombobox } from '@components/identity/identity-search-combo-box'
import { InfoTooltip } from '@components/info-tooltip'
import { AddListExistingCta } from '@components/lists/add-list-existing-cta'
import SaveListModal from '@components/save-list/save-list-modal'
import { useAtomSearch } from '@lib/hooks/useAtomSearch'
import { useCheckClaim } from '@lib/hooks/useCheckClaim'
import useInvalidItems from '@lib/hooks/useInvalidItems'
import {
  globalCreateIdentityModalAtom,
  saveListModalAtom,
} from '@lib/state/store'
import { getSpecialPredicate } from '@lib/utils/app'
import { TagLoaderData } from '@routes/resources+/tag'
import { CURRENT_ENV } from 'app/consts'
import { IdentityType } from 'app/types'
import { TransactionActionType } from 'app/types/transaction'
import { useAtom } from 'jotai'

import { TagsListInputPortal } from './tags-list-input-portal'

interface AddTagsProps {
  selectedTags: IdentityType[]
  existingTagIds: string[]
  identity: IdentityPresenter
  userWallet: string
  onAddTag: (newTag: IdentityType) => void
  onRemoveTag: (id: string) => void
  onRemoveInvalidTag: (id: string) => void
  dispatch: (action: TransactionActionType) => void
  subjectVaultId: string
  invalidTags: IdentityType[]
  setInvalidTags: React.Dispatch<React.SetStateAction<IdentityType[]>>
}

export function AddTags({
  selectedTags,
  identity,
  userWallet,
  onAddTag,
  onRemoveTag,
  onRemoveInvalidTag,
  subjectVaultId,
  invalidTags,
  setInvalidTags,
}: AddTagsProps) {
  const formattedTags = selectedTags?.map((tag) => ({
    name: tag.label,
    id: tag.vaultId,
    tagCount: 0,
  }))

  const [, setCreateIdentityModalActive] = useAtom(
    globalCreateIdentityModalAtom,
  )

  const [saveListModalActive, setSaveListModalActive] =
    useAtom(saveListModalAtom)

  const [selectedInvalidTag, setSelectedInvalidTag] =
    useState<IdentityType | null>(null)

  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const selectedAtomIds = selectedTags.map((tag) => tag.vaultId)

  const {
    atoms: identities,
    setSearchQuery,
    handleInput,
  } = useAtomSearch({
    selectedAtomIds,
  })

  const { data: claimCheckData = { result: '0' }, refetch: refetchClaimCheck } =
    useCheckClaim({
      subjectId: subjectVaultId,
      predicateId:
        getSpecialPredicate(CURRENT_ENV).tagPredicate.vaultId?.toString(),
      objectId: identity?.vault_id,
    })

  const handleIdentitySelect = (identity: IdentityType) => {
    onAddTag(identity)
    setSearchQuery('')
    refetchClaimCheck()
    setIsPopoverOpen(false)
  }

  const handleSaveClick = (invalidTag: IdentityType) => {
    setSelectedInvalidTag(invalidTag)
    setSaveListModalActive({
      isOpen: true,
      identity: invalidTag,
    })
  }

  useInvalidItems({
    data: claimCheckData as TagLoaderData,
    selectedItems: selectedTags,
    setInvalidItems: setInvalidTags,
    onRemoveItem: onRemoveTag,
    idKey: 'vaultId',
    dataIdKey: 'objectId',
  })

  return (
    <div className="flex flex-col min-h-36">
      <div className="mb-3 gap-2">
        <div className="flex flex-row gap-1 items-center">
          <Text variant="body" className="text-primary/70">
            Add tags to this identity
          </Text>
          <InfoTooltip
            title="Add Tags"
            content="Adding Tags to an Identity helps with discoverability for you and others later! Tagging is also how you add Identities to Lists. For example, to add this identity to the [Wallets] List, you would tag it with [Wallet]!

  Behind the scenes, tagging involves creating a Triple with the Predicate [has tag]."
          />
        </div>
        <Text variant="caption" className="text-primary/50">
          Select up to 5 tags to add to this identity.
        </Text>
      </div>
      <div className="mt-4 max-h-60 overflow-y-auto pr-4">
        <Popover
          open={isPopoverOpen}
          onOpenChange={setIsPopoverOpen}
          modal={true}
        >
          <PopoverContent className="bg-transparent border-none">
            <IdentitySearchCombobox
              onCreateIdentityClick={() => setCreateIdentityModalActive(true)}
              identities={identities}
              onIdentitySelect={handleIdentitySelect}
              onValueChange={setSearchQuery}
              onInput={handleInput}
              shouldFilter={false}
            />
          </PopoverContent>
          <div className="mb-8">
            <TagsListInputPortal
              variant="tag"
              tags={formattedTags}
              maxTags={5}
              onAddTag={() => setIsPopoverOpen(true)}
              onRemoveTag={onRemoveTag}
              PopoverTriggerComponent={PopoverTrigger}
            />
          </div>
        </Popover>
        {invalidTags.map((invalidTag) => (
          <AddListExistingCta
            key={invalidTag.vaultId}
            identity={invalidTag}
            variant="tag"
            onSaveClick={() => handleSaveClick(invalidTag)}
            onClose={() => onRemoveInvalidTag(invalidTag.vaultId)}
          />
        ))}
      </div>
      {selectedInvalidTag && (
        <SaveListModal
          contract={identity.contract}
          tag={selectedInvalidTag}
          vaultId={selectedInvalidTag.vaultId}
          identity={identity}
          userWallet={userWallet}
          open={saveListModalActive.isOpen}
          onClose={() => {
            setSaveListModalActive({
              isOpen: false,
              invalidIdentity: null,
            })
            setSelectedInvalidTag(null)
          }}
        />
      )}
    </div>
  )
}
