import { Suspense } from 'react'

import { Banner, BannerVariant, ProfileCardHeader } from '@0xintuition/1ui'
import {
  ClaimsService,
  IdentityPresenter,
  QuestStatus,
  UserQuestsService,
  UsersService,
} from '@0xintuition/api'

import { ErrorPage } from '@components/error-page'
import { TagsList } from '@components/list/tags'
import {
  Header,
  Hero,
  MDXContentView,
  QuestBackButton,
} from '@components/quest/detail/layout'
import { QuestCriteriaCard } from '@components/quest/quest-criteria-card'
import SaveListModal from '@components/save-list/save-list-modal'
import { PaginatedListSkeleton } from '@components/skeleton'
import { useQuestMdxContent } from '@lib/hooks/useQuestMdxContent'
import { getListClaims } from '@lib/services/lists'
import { saveListModalAtom } from '@lib/state/store'
import { getQuestObjects } from '@lib/utils/app'
import logger from '@lib/utils/logger'
import { invariant } from '@lib/utils/misc'
import { getQuestCriteria, getQuestId, QuestRouteId } from '@lib/utils/quest'
import { ActionFunctionArgs, json, LoaderFunctionArgs } from '@remix-run/node'
import { Await, useLoaderData } from '@remix-run/react'
import { fetchWrapper } from '@server/api'
import { requireUser, requireUserId } from '@server/auth'
import { getUserQuest } from '@server/quest'
import {
  CHAPTER_6_MP3,
  CURRENT_ENV,
  MIN_DEPOSIT,
  MULTIVAULT_CONTRACT_ADDRESS,
  QUESTS_DISABLED_BANNER_MESSAGE,
  QUESTS_DISABLED_BANNER_TITLE,
  QUESTS_ENABLED,
} from 'app/consts'
import { MDXContentVariant } from 'app/types'
import { useAtom } from 'jotai'
import { parseUnits } from 'viem'

const ROUTE_ID = QuestRouteId.ALWAYS_TRUE

export async function loader({ request }: LoaderFunctionArgs) {
  const id = getQuestId(ROUTE_ID)
  invariant(id, 'id is required')

  // get fallback claim
  const discoverListFallbackAtomId =
    getQuestObjects(CURRENT_ENV).discoverListFallbackAtom.id

  const user = await requireUser(request)
  invariant(user, 'Unauthorized')
  invariant(user.wallet?.address, 'User wallet is required')

  const { quest, userQuest } = await getUserQuest(request, id)

  const { id: userId } = await fetchWrapper(request, {
    method: UsersService.getUserByWalletPublic,
    args: {
      wallet: user.wallet.address,
    },
  })

  const status = await fetchWrapper(request, {
    method: UserQuestsService.checkQuestStatus,
    args: {
      questId: id,
      userId,
    },
  })
  if (
    status === QuestStatus.CLAIMABLE &&
    userQuest?.status !== QuestStatus.COMPLETED
  ) {
    logger('Setting user quest status to claimable', status)
    userQuest && (userQuest.status = QuestStatus.CLAIMABLE)
  }

  const url = new URL(request.url)
  const searchParams = new URLSearchParams(url.search)

  const claim = await fetchWrapper(request, {
    method: ClaimsService.getClaimById,
    args: { id: discoverListFallbackAtomId },
  })

  const globalListClaims = await getListClaims({
    request,
    objectId: claim.object?.id ?? '',
    searchParams,
  })

  logger('Fetched user quest', userQuest)

  logger('Fetched user quest status', status)

  return json({
    quest,
    userQuest,
    userWallet: user.wallet?.address,
    claim,
    globalListClaims,
  })
}

export async function action({ request }: ActionFunctionArgs) {
  const userId = await requireUserId(request)
  invariant(userId, 'Unauthorized')

  const formData = await request.formData()
  const questId = formData.get('questId') as string

  try {
    const updatedUserQuest = await fetchWrapper(request, {
      method: UserQuestsService.completeQuest,
      args: {
        questId,
      },
    })
    if (updatedUserQuest.status === QuestStatus.COMPLETED) {
      return json({ success: true })
    }
  } catch (error) {
    logger('Error completing quest', error)
    return json({ success: false })
  }

  return json({ success: false })
}

export default function Quests() {
  const { quest, userQuest, userWallet, claim, globalListClaims } =
    useLoaderData<typeof loader>()
  const { introBody, mainBody, closingBody } = useQuestMdxContent(quest.id)

  const [saveListModalActive, setSaveListModalActive] =
    useAtom(saveListModalAtom)

  return (
    <div className="px-10 w-full max-w-7xl mx-auto flex flex-col gap-10 max-lg:px-4 max-md:gap-4">
      {!QUESTS_ENABLED && (
        <Banner
          variant={BannerVariant.warning}
          title={QUESTS_DISABLED_BANNER_TITLE}
          message={QUESTS_DISABLED_BANNER_MESSAGE}
        />
      )}
      <div className="flex flex-col gap-10 mb-5 max-md:gap-5 max-md:mb-2">
        <Hero imgSrc={`${quest.image}-header`} />
        <div className="flex flex-col gap-10 max-md:gap-4">
          <QuestBackButton />
          <Header
            position={quest.position}
            title={quest.title}
            questStatus={userQuest?.status}
            questAudio={CHAPTER_6_MP3}
          />
          <MDXContentView body={introBody} variant={MDXContentVariant.LORE} />
          <QuestCriteriaCard
            criteria={getQuestCriteria(quest.condition)}
            questStatus={userQuest?.status ?? QuestStatus.NOT_STARTED}
            points={quest.points}
          />
        </div>
        <MDXContentView body={mainBody} />

        <div className="rounded-lg theme-border p-5 flex min-h-96 theme-border text-warning/30 overflow-auto">
          <Suspense fallback={<PaginatedListSkeleton />}>
            <Await resolve={globalListClaims}>
              {(resolveGlobalListClaims) => {
                if (!resolveGlobalListClaims) {
                  return <PaginatedListSkeleton />
                }
                return (
                  <>
                    <div className="flex flex-col w-full gap-6 text-foreground">
                      <ProfileCardHeader
                        variant="non-user"
                        avatarSrc={claim.object?.image ?? ''}
                        name={claim.object?.display_name ?? ''}
                        id={claim.object?.identity_id ?? ''}
                        maxStringLength={72}
                      />
                      <TagsList
                        claims={resolveGlobalListClaims.claims}
                        pagination={resolveGlobalListClaims.pagination}
                        enableSearch={true}
                        enableSort={true}
                      />
                      <SaveListModal
                        contract={
                          claim.object?.contract ?? MULTIVAULT_CONTRACT_ADDRESS
                        }
                        identity={
                          saveListModalActive.identity as IdentityPresenter
                        }
                        tag={claim.object as IdentityPresenter}
                        userWallet={userWallet}
                        open={saveListModalActive.isOpen}
                        onClose={() =>
                          setSaveListModalActive({
                            ...saveListModalActive,
                            isOpen: false,
                          })
                        }
                        min_deposit={parseUnits(MIN_DEPOSIT, 18).toString()}
                      />
                    </div>
                  </>
                )
              }}
            </Await>
          </Suspense>
        </div>

        <MDXContentView
          body={closingBody}
          variant={MDXContentVariant.LORE}
          shouldDisplay={
            userQuest?.status === QuestStatus.CLAIMABLE ||
            userQuest?.status === QuestStatus.COMPLETED
          }
        />
      </div>
    </div>
  )
}

export function ErrorBoundary() {
  return <ErrorPage routeName="quest/chapter/1-6" />
}
