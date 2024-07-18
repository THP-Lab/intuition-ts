import { useState } from 'react'

import {
  Button,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  IdentityTag,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Trunctacular,
} from '@0xintuition/1ui'
import { IdentityPresenter } from '@0xintuition/api'

import { useCreateTriple } from '@lib/hooks/useCreateTriple'
import { useLoaderFetcher } from '@lib/hooks/useLoaderFetcher'
import {
  initialTransactionState,
  transactionReducer,
  useTransactionState,
} from '@lib/hooks/useTransactionReducer'
import { CREATE_RESOURCE_ROUTE } from '@lib/utils/constants'
import logger from '@lib/utils/logger'
import { CreateLoaderData } from '@routes/resources+/create'
import { TransactionActionType, TransactionStateType } from 'types/transaction'
import { useAccount, usePublicClient, useWalletClient } from 'wagmi'

import { AddTags } from './add-tags'
import TagsReview from './tags-review'

// import { useFetcher } from '@remix-run/react'

interface TagsFormProps {
  identity: IdentityPresenter
  mode: 'view' | 'add'
  onSuccess?: () => void
  onClose: () => void
}

export function TagsForm({ identity, mode, onClose }: TagsFormProps) {
  logger('identity', identity)
  logger('onClose', onClose)
  // const tagsForm = useFetcher()

  const { state, dispatch } = useTransactionState<
    TransactionStateType,
    TransactionActionType
  >(transactionReducer, initialTransactionState)

  // const [transactionResponseData, setTransactionResponseData] =
  //   useState<ClaimPresenter | null>(null)

  const isTransactionStarted = [
    'approve',
    'awaiting',
    'confirm',
    'transaction-pending',
    'transaction-confirmed',
    'complete',
    'error',
  ].includes(state.status)

  const [selectedTags, setSelectedTags] = useState<IdentityPresenter[]>([])

  const handleAddTag = (newTag: IdentityPresenter) => {
    setSelectedTags((prevTags) => [...prevTags, newTag])
    logger('selectedTags', selectedTags)
  }

  const handleRemoveTag = (id: string) => {
    setSelectedTags((prevTags) => prevTags.filter((tag) => tag.vault_id !== id))
  }

  // async function handleOnChainCreateTags() {}

  return (
    <>
      {!isTransactionStarted && (
        <>
          {state.status === 'idle' && (
            <>
              <DialogHeader className="py-4">
                <DialogTitle>
                  <IdentityTag
                    imgSrc={identity?.user?.image ?? identity?.image}
                    variant={identity?.user ? 'user' : 'non-user'}
                  >
                    <Trunctacular
                      value={
                        identity?.user?.display_name ??
                        identity?.display_name ??
                        'Identity'
                      }
                    />
                  </IdentityTag>
                </DialogTitle>
              </DialogHeader>
              <Tabs defaultValue={mode}>
                <TabsList>
                  <TabsTrigger
                    variant="alternate"
                    value="view"
                    label="View tags"
                  />
                  <TabsTrigger
                    variant="alternate"
                    value="add"
                    label="Add tags"
                  />
                </TabsList>
                <div className="my-10">
                  <TabsContent value="add">
                    <AddTags
                      selectedTags={selectedTags}
                      onAddTag={handleAddTag}
                      dispatch={dispatch}
                      onRemoveTag={handleRemoveTag}
                      subjectVaultId={identity.vault_id}
                    />
                  </TabsContent>
                </div>
              </Tabs>
              <DialogFooter className="!justify-center !items-center mt-20">
                <div className="flex flex-col items-center gap-1">
                  <Button
                    variant="primary"
                    disabled={selectedTags.length === 0}
                    onClick={() => dispatch({ type: 'REVIEW_TRANSACTION' })}
                  >
                    Add Tags
                  </Button>
                </div>
              </DialogFooter>
            </>
          )}
          {state.status === 'review-transaction' && (
            <TagsReview
              dispatch={dispatch}
              subjectVaultId={identity.vault_id}
              tags={selectedTags}
            />
          )}
        </>
      )}
    </>
  )
}
