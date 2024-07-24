import {
  Button,
  ButtonVariant,
  Icon,
  IconName,
  ProgressCard,
  QuestCard,
  QuestCriteriaStatus,
  QuestStatus,
  QuestStatusType,
  Text,
} from '@0xintuition/1ui'
import {
  QuestStatus as APIQuestStatus,
  QuestsService,
  UserQuest,
  UserQuestsService,
} from '@0xintuition/api'

import { STANDARD_QUEST_SET } from '@lib/utils/constants/quest'
import logger from '@lib/utils/logger'
import { fetchWrapper, invariant } from '@lib/utils/misc'
import { getQuestCriteria, getQuestThumbnailImage } from '@lib/utils/quest'
import { json, LoaderFunctionArgs } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { requireUserId } from '@server/auth'

export async function loader({ request, params }: LoaderFunctionArgs) {
  const id = params.id
  invariant(id, 'id is required')
  const userId = await requireUserId(request)
  invariant(userId, 'Unauthorized')

  const quests = (
    await fetchWrapper({
      method: QuestsService.searchQuests,
      args: {
        requestBody: {
          narrative: 'Standard',
          active: true,
        },
      },
    })
  ).data
  logger('Fetched quest', quests)

  const userQuests = (
    await fetchWrapper({
      method: UserQuestsService.search,
      args: {
        requestBody: {
          userId,
          narrative: 'Standard',
        },
      },
    })
  ).data
  // create a mapping of questId to userQuests
  const questToUserQuestMap = new Map<string, UserQuest>()
  userQuests.forEach((userQuest) => {
    questToUserQuestMap.set(userQuest.id, userQuest)
  })
  const numQuests = quests.length
  const numCompletedQuests = Object.values(questToUserQuestMap).filter(
    (userQuest) => userQuest.status === APIQuestStatus.COMPLETED,
  ).length
  logger('User Quest Map', questToUserQuestMap)

  return json({ quests, questToUserQuestMap, numQuests, numCompletedQuests })
}

export default function Quests() {
  const { quests, questToUserQuestMap, numQuests, numCompletedQuests } =
    useLoaderData<typeof loader>()

  return (
    <div className="px-10 w-full max-w-7xl mx-auto flex flex-col gap-10">
      <div className="space-y-10 mb-5">
        <img
          src={STANDARD_QUEST_SET.imgSrc}
          alt={STANDARD_QUEST_SET.title}
          className="object-cover object-bottom w-full h-[350px] border-x border-b border-border/20 rounded-b-lg"
        />
        <div className="flex flex-col gap-5">
          <Link to="/app/quest">
            <Button variant={ButtonVariant.secondary} className="w-fit">
              <div className="flex items-center gap-2">
                <Icon name={IconName.arrowLeft} />
              </div>
            </Button>
          </Link>
          <div className="flex flex-col gap-2">
            <Text variant="heading4" weight="medium">
              {STANDARD_QUEST_SET.title}
            </Text>
            <Text variant="bodyLarge" className="text-foreground/50">
              {STANDARD_QUEST_SET.summary}
            </Text>
          </div>
          <ProgressCard
            title="Quest Progress"
            numberCompleted={numCompletedQuests}
            numberTotal={numQuests}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Text variant="headline">Chapters</Text>

        <div className="flex flex-col gap-10 pb-10">
          {quests.map((quest, i) => {
            // check if userQuestMap is empty, if it is, the quest hasnt started
            const userQuest =
              Object.keys(questToUserQuestMap).length === 0
                ? null
                : (Object.values(questToUserQuestMap).find(
                    (userQuest) => (userQuest as UserQuest).id === quest.id,
                  ) as UserQuest | undefined)
            let questStatus = QuestStatus.notStarted as QuestStatusType

            if (userQuest) {
              if (userQuest.status === 'Started') {
                questStatus = QuestStatus.inProgress
              } else if (userQuest.status && userQuest.status === 'Completed') {
                questStatus = QuestStatus.completed
              }
            }

            return (
              <Link
                to={`/app/quest/chapter/${quest.id}`}
                key={`${quest.id}-quest-card`}
              >
                <div>
                  <QuestCard
                    imgSrc={getQuestThumbnailImage(quest.id)}
                    title={quest.title ?? ''}
                    description={quest.description ?? ''}
                    questStatus={questStatus}
                    label={`Chapter ${i + 1}`}
                    points={quest.points}
                    questCriteria={getQuestCriteria(quest.condition)}
                    questCriteriaStatus={
                      questStatus === QuestStatus.completed
                        ? QuestCriteriaStatus.fulfilled
                        : QuestCriteriaStatus.notStarted
                    }
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
