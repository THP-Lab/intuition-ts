import { Suspense, useEffect, useState } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@0xintuition/1ui'

import { ListClaimsList } from '@components/list/list-claims'
import { ListOverview } from '@components/list/list-overview'
import {
  ListClaimsSkeletonLayout,
  TabsSkeleton,
} from '@components/list/list-skeletons'
import logger from '@lib/utils/logger'
import { Await, useNavigation, useSearchParams } from '@remix-run/react'

import { LoaderData } from './loader'

const TabValue = {
  saved: 'saved',
  created: 'created',
} as const

type TabValueType = keyof typeof TabValue

export const ListsView = (data: LoaderData) => {
  const { userCreatedListClaims, savedListClaims } = data
  const [searchParams, setSearchParams] = useSearchParams()
  const [isNavigating, setIsNavigating] = useState(false)
  const { state } = useNavigation()

  const defaultTab = searchParams.get('tab') || TabValue.created

  logger('userCreatedListClaims: ', userCreatedListClaims)
  logger('savedListClaims: ', savedListClaims)

  function handleTabChange(value: TabValueType) {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('tab', value)
    newParams.delete('search')
    newParams.set('page', '1')
    setSearchParams(newParams)
    setIsNavigating(true)
  }

  useEffect(() => {
    if (state === 'idle') {
      setIsNavigating(false)
    }
  }, [state])
  return (
    <div className="m-8 flex flex-col">
      <ListOverview />
      <Tabs defaultValue={defaultTab}>
        <Suspense fallback={<TabsSkeleton />}>
          <Await
            resolve={Promise.all([savedListClaims, userCreatedListClaims])}
          >
            {([savedListClaims, userCreatedListClaims]) => (
              <>
                <TabsList>
                  <TabsTrigger
                    value={TabValue.saved}
                    label="Saved"
                    totalCount={savedListClaims?.pagination.totalEntries}
                    onClick={(e) => {
                      e.preventDefault()
                      handleTabChange(TabValue.saved)
                    }}
                  />
                  <TabsTrigger
                    value={TabValue.created}
                    label="Created"
                    totalCount={userCreatedListClaims?.pagination.totalEntries}
                    onClick={(e) => {
                      e.preventDefault()
                      handleTabChange(TabValue.created)
                    }}
                  />
                </TabsList>
                <TabsContent value={TabValue.saved}>
                  {isNavigating ? (
                    <ListClaimsSkeletonLayout
                      totalItems={savedListClaims?.pagination.totalEntries || 6}
                    />
                  ) : (
                    <Suspense
                      fallback={
                        <ListClaimsSkeletonLayout
                          totalItems={
                            savedListClaims?.pagination.totalEntries || 6
                          }
                        />
                      }
                    >
                      <Await resolve={savedListClaims}>
                        {(resolvedSavedListClaims) => (
                          <ListClaimsList
                            listClaims={resolvedSavedListClaims.savedListClaims}
                            pagination={resolvedSavedListClaims.pagination}
                            enableSort={true}
                            enableSearch={true}
                          />
                        )}
                      </Await>
                    </Suspense>
                  )}
                </TabsContent>
                <TabsContent value={TabValue.created}>
                  {isNavigating ? (
                    <ListClaimsSkeletonLayout
                      totalItems={
                        userCreatedListClaims?.pagination.totalEntries
                      }
                    />
                  ) : (
                    <Suspense
                      fallback={
                        <ListClaimsSkeletonLayout
                          totalItems={
                            userCreatedListClaims?.pagination.totalEntries
                          }
                        />
                      }
                    >
                      <Await resolve={userCreatedListClaims}>
                        {(resolvedUserCreatedListClaims) => (
                          <ListClaimsList
                            listClaims={
                              resolvedUserCreatedListClaims.userCreatedListClaims
                            }
                            pagination={
                              resolvedUserCreatedListClaims.pagination
                            }
                            enableSort={true}
                            enableSearch={true}
                          />
                        )}
                      </Await>
                    </Suspense>
                  )}
                </TabsContent>
              </>
            )}
          </Await>
        </Suspense>
      </Tabs>
    </div>
  )
}
