import {
  Button,
  ButtonSize,
  ButtonVariant,
  Icon,
  IconName,
  QuestCriteriaCard,
  QuestCriteriaType,
  QuestStatus,
  QuestStatusCard,
  QuestStatusType,
  Text,
} from '@0xintuition/1ui'

import questPlaceholder from '@assets/quest-placeholder-2.png'
import { MDXContent } from '@content-collections/mdx/react'
import { fetchQuestById, searchUserQuests } from '@lib/utils/fetches'
import logger from '@lib/utils/logger'
import { invariant } from '@lib/utils/misc'
import {
  getQuestContentBySlug,
  getQuestCriteria,
  getQuestImage,
  getQuestStatus,
} from '@lib/utils/quest'
import { json, LoaderFunctionArgs } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { requireUser } from '@server/auth'
import { getPrivyAccessToken } from '@server/privy'

export async function loader({ request, params }: LoaderFunctionArgs) {
  const user = await requireUser(request)
  invariant(user, 'Unauthorized')

  const id = params.id
  invariant(id, 'id is required')

  // TODO: Replace me
  const accessToken = getPrivyAccessToken(request)
  invariant(accessToken, 'accessToken is required')
  const quest = await fetchQuestById(id, accessToken)
  logger('Fetched quest', quest)

  const { data } = await searchUserQuests({
    questId: id,
    userId: user.id,
  })
  const userQuest = data.length ? data[0] : null

  const questIntro = getQuestContentBySlug(`${quest.id}-intro`)
  const questContent = getQuestContentBySlug(`${quest.id}-main`)
  const questClosing = getQuestContentBySlug(`${quest.id}-closing`)
  let questMain2
  try {
    questMain2 = getQuestContentBySlug(`${quest.id}-main-2`)
  } catch (e) {
    logger('No questMain2 found', e)
  }

  const questStatus = userQuest
    ? getQuestStatus(userQuest.status)
    : (QuestStatus.notStarted as QuestStatusType)

  const criteria = getQuestCriteria(quest.condition)

  return json({
    quest,
    questIntro,
    questContent,
    questClosing,
    questMain2,
    userQuest,
    questStatus,
    criteria,
  })
}

export default function Quests() {
  const {
    quest,
    questIntro,
    questContent,
    questMain2,
    questClosing,
    userQuest,
    questStatus,
    criteria,
  } = useLoaderData<typeof loader>()

  return (
    <div className="px-10 w-full max-w-7xl mx-auto flex flex-col gap-10">
      <div className="flex flex-col gap-10 mb-5">
        <img
          src={getQuestImage(quest.id)}
          alt="Quest Placeholder"
          className="object-cover w-full h-[350px] border-x border-b border-border/20 rounded-b-lg"
        />
        <div className="flex flex-col gap-10">
          <Link to="/app/quest/book/0">
            <Button variant={ButtonVariant.secondary} className="w-fit">
              <div className="flex items-center gap-2">
                <Icon name={IconName.arrowLeft} />
              </div>
            </Button>
          </Link>
          <div className="flex items-bottom justify-between w-full">
            <Text variant="heading4" weight="medium">
              {quest.title}
            </Text>
            <QuestStatusCard status={questStatus} />
          </div>
          {questIntro.body && <MDXLoreWrapper code={questIntro.body} />}

          <QuestCriteriaCard
            title={quest.title}
            criteria={
              {
                status: questStatus,
                criteria,
              } as QuestCriteriaType
            }
            questStatus={quest.status}
            points={quest.points}
          />
        </div>
        {questContent.body && (
          <MDXCoreContentWrapper code={questContent.body} />
        )}
        <div className="bg-warning/5 rounded-lg theme-border p-5 flex justify-center align-items h-96 border-warning/30 border-dashed text-warning/30 text-bold">
          Quest Activity
        </div>
        {questMain2 && (
          <div className="flex flex-col gap-5 py-5">
            <MDXLoreWrapper code={questMain2.body} />
          </div>
        )}

        {quest.id === 'ac22e180-9923-4481-9cba-31e88f223e58' && (
          <div className="bg-warning/5 rounded-lg theme-border p-5 flex justify-center align-items h-96 border-warning/30 border-dashed text-warning/30 text-bold">
            Quest Activity 2
          </div>
        )}
        {questClosing.body && (
          <div className="flex flex-col gap-5 py-5">
            <MDXLoreWrapper code={questClosing.body} />
          </div>
        )}

        <div className="flex flex-col items-center justify-center w-full gap-2 pb-20">
          <Button
            variant={ButtonVariant.primary}
            size={ButtonSize.lg}
            disabled={true} // TODO: replace me
          >
            Complete Quest
          </Button>
          <Text variant="bodyLarge" className="text-foreground/50">
            +{quest.points} Points
          </Text>
        </div>
      </div>
    </div>
  )
}

export function MDXCoreContentWrapper({ code }: { code: string }) {
  return (
    <div className="flex flex-col gap-5 py-5">
      <MDXContent
        code={code}
        components={{
          h1: (props) => <Text variant="headline" weight="medium" {...props} />,
          p: (props) => (
            <Text
              variant="bodyLarge"
              className="text-foreground/50"
              {...props}
            />
          ),
        }}
      />
    </div>
  )
}

export function MDXLoreWrapper({ code }: { code: string }) {
  return (
    <div className="flex flex-col gap-2">
      <MDXContent
        code={code}
        components={{
          h1: (props) => <Text variant="headline" weight="medium" {...props} />,
          p: (props) => (
            <Text
              variant="bodyLarge"
              className="text-foreground/50"
              {...props}
            />
          ),
        }}
      />
    </div>
  )
}
