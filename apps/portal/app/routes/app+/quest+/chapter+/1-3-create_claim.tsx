import { useState } from 'react'

import { Banner, BannerVariant } from '@0xintuition/1ui'
import {
  ClaimPresenter,
  ClaimsService,
  QuestStatus,
  UserQuestsService,
} from '@0xintuition/api'

import CreateClaimModal from '@components/create-claim/create-claim-modal'
import { ErrorPage } from '@components/error-page'
import CreateClaimActivity from '@components/quest/activities/create-claim-activity'
import {
  Header,
  Hero,
  MDXContentView,
  QuestBackButton,
} from '@components/quest/detail/layout'
import { QuestCriteriaCard } from '@components/quest/quest-criteria-card'
import { useQuestCompletion } from '@lib/hooks/useQuestCompletion'
import { useQuestMdxContent } from '@lib/hooks/useQuestMdxContent'
import logger from '@lib/utils/logger'
import { invariant } from '@lib/utils/misc'
import { getQuestCriteria, getQuestId, QuestRouteId } from '@lib/utils/quest'
import { ActionFunctionArgs, json, LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { fetchWrapper } from '@server/api'
import { requireUser, requireUserId } from '@server/auth'
import { getUserQuest } from '@server/quest'
import {
  CHAPTER_3_MP3,
  QUESTS_DISABLED_BANNER_MESSAGE,
  QUESTS_DISABLED_BANNER_TITLE,
  QUESTS_ENABLED,
} from 'app/consts'
import { MDXContentVariant } from 'app/types'

const ROUTE_ID = QuestRouteId.CREATE_CLAIM

export async function loader({ request }: LoaderFunctionArgs) {
  const id = getQuestId(ROUTE_ID)
  invariant(id, 'id is required')

  const user = await requireUser(request)
  invariant(user, 'Unauthorized')
  const wallet = user.wallet?.address
  invariant(wallet, 'Wallet is required')

  const { userQuest, quest } = await getUserQuest(request, id)
  invariant(userQuest, 'User quest not found')
  invariant(quest, 'Quest not found')

  let claim: ClaimPresenter | undefined
  if (userQuest.quest_completion_object_id) {
    claim = await fetchWrapper(request, {
      method: ClaimsService.getClaimById,
      args: {
        id: userQuest.quest_completion_object_id,
      },
    })
  }
  return json({
    wallet,
    quest,
    userQuest,
    claim,
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
      await fetchWrapper(request, {
        method: UserQuestsService.checkQuestStatus,
        args: {
          questId,
        },
      })
      return json({ success: true })
    }
  } catch (error) {
    logger('Error completing quest', error)
    return json({ success: false })
  }
  return json({ success: false })
}

export default function Quests() {
  const { wallet, quest, userQuest, claim } = useLoaderData<typeof loader>()
  const { checkQuestSuccess, isLoading: checkQuestSuccessLoading } =
    useQuestCompletion(userQuest)
  const { introBody, mainBody, closingBody } = useQuestMdxContent(quest.id)
  const [activityModalOpen, setActivityModalOpen] = useState(false)

  function handleOpenActivityModal() {
    setActivityModalOpen(true)
  }

  function handleCloseActivityModal() {
    setActivityModalOpen(false)
  }

  function handleActivitySuccess(claim: ClaimPresenter) {
    logger('Activity success', claim)
    checkQuestSuccess()
  }

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
            questAudio={CHAPTER_3_MP3}
          />
          <MDXContentView body={introBody} variant={MDXContentVariant.LORE} />
          <QuestCriteriaCard
            criteria={getQuestCriteria(quest.condition)}
            questStatus={userQuest?.status ?? QuestStatus.NOT_STARTED}
            points={quest.points}
          />
        </div>
        <MDXContentView body={mainBody} />
        <CreateClaimActivity
          claim={claim}
          status={userQuest?.status ?? QuestStatus.NOT_STARTED}
          handleClick={handleOpenActivityModal}
          isLoading={checkQuestSuccessLoading}
          isDisabled={
            userQuest?.status === QuestStatus.CLAIMABLE ||
            checkQuestSuccessLoading
          }
        />
        <MDXContentView
          body={closingBody}
          variant={MDXContentVariant.LORE}
          shouldDisplay={
            userQuest?.status === QuestStatus.CLAIMABLE ||
            userQuest?.status === QuestStatus.COMPLETED
          }
        />
      </div>
      <CreateClaimModal
        wallet={wallet}
        successAction="close"
        onClose={handleCloseActivityModal}
        open={activityModalOpen}
        onSuccess={handleActivitySuccess}
      />
    </div>
  )
}

export function ErrorBoundary() {
  return <ErrorPage routeName="quest/chapter/1-3" />
}
