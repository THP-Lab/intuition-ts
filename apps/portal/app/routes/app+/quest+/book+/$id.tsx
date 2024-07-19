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
import { UserQuest } from '@0xintuition/api'

import questPlaceholder from '@assets/quest-placeholder.png'
import { fetchQuestById, searchUserQuests } from '@lib/utils/fetches'
import logger from '@lib/utils/logger'
import { invariant } from '@lib/utils/misc'
import { getQuestCriteria, getQuestThumbnailImage } from '@lib/utils/quest'
import { json, LoaderFunctionArgs } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { getPrivyAccessToken } from '@server/privy'

export async function loader({ request, params }: LoaderFunctionArgs) {
  const id = params.id
  invariant(id, 'id is required')

  // TODO: Replace me
  const CREATE_ATOM_ID = 'b4b7e0ed-a69a-4a0a-bf9b-8bf0afe979f9'
  const STAKE_IDENTITY_ID = '3b5315bb-f29b-4320-9997-6928b4bbf3e9'
  const CREATE_CLAIM_ID = 'dacdd63d-f978-433e-aeb0-54d165e8f936'
  const STAKE_CLAIM_ID = 'ac22e180-9923-4481-9cba-31e88f223e58'
  const COUNTER_STAKE_CLAIM_ID = 'daa5d6ff-9a8b-41c6-a259-302816655c5b'
  const UNDERSTANDING_ID = '90cf4398-f7e5-4ec7-8088-c64d2da6a715'
  const accessToken = getPrivyAccessToken(request)
  invariant(accessToken, 'accessToken is required')
  const quests = await Promise.all([
    fetchQuestById(CREATE_ATOM_ID, accessToken),
    fetchQuestById(STAKE_IDENTITY_ID, accessToken),
    fetchQuestById(CREATE_CLAIM_ID, accessToken),
    fetchQuestById(STAKE_CLAIM_ID, accessToken),
    fetchQuestById(COUNTER_STAKE_CLAIM_ID, accessToken),
    fetchQuestById(UNDERSTANDING_ID, accessToken),
  ])
  logger('Fetched quest', quests)

  const userQuests = (await searchUserQuests({})).data
  // create a mapping of questId to userQuests
  const questToUserQuestMap = new Map<string, UserQuest>()
  userQuests.forEach((userQuest) => {
    questToUserQuestMap.set(userQuest.id, userQuest)
  })

  return json({ quests, questToUserQuestMap })
}

export default function Quests() {
  const { quests, questToUserQuestMap } = useLoaderData<typeof loader>()

  return (
    <div className="px-10 w-full max-w-7xl mx-auto flex flex-col gap-10">
      <div className="space-y-10 mb-5">
        <img
          src={questPlaceholder}
          alt="Quest Placeholder"
          className="object-cover w-full h-[350px] border-x border-b border-border/20 rounded-b-lg"
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
              {'Tutorial Island: The Primitive Elements'}
            </Text>
            <Text variant="bodyLarge" className="text-foreground/50">
              Complete the chapters below to learn the core primitives that make
              up the Intuition system.
            </Text>
          </div>
          <ProgressCard
            title="Quest Progress"
            numberCompleted={0}
            numberTotal={6}
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
                    title={quest.title}
                    description={quest.description}
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
