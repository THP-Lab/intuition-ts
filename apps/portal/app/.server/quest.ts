import { QuestNarrative, QuestPresenter, QuestSortColumn, QuestsService, QuestStatus, SortDirection, UserQuest, UserQuestsService, UsersService } from '@0xintuition/api'

import { fetchWrapper, invariant } from './../lib/utils/misc'
import { requireUser } from './auth'
import logger from '@lib/utils/logger'
import { User } from 'types'

export interface QuestProgressProps {
  request: Request
  options?: {
    narrative: QuestNarrative
    active?: boolean
    sortBy?: QuestSortColumn,
    direction?: SortDirection
  }

}

export async function getQuestsProgress({
  request,
  options = {
    narrative: QuestNarrative.STANDARD,
    active: true,
    sortBy: QuestSortColumn.POSITION,
    direction: SortDirection.ASC,
  },
}: QuestProgressProps): Promise<{
  user: User
  quests: QuestPresenter[]
  userQuests: UserQuest[]
  numQuests: number
  numCompletedQuests: number
  completedQuestsIds: string[]
  userQuestMap: Record<string, UserQuest>
}> {
  const user = await requireUser(request)
  invariant(user, 'User not found')

  const { narrative, active, sortBy, direction } = options
  const quests = (await fetchWrapper({
    method: QuestsService.searchQuests,
    args: {
      requestBody: {
        narrative,
        active,
        sortBy,
        direction,
      }
    },
  })).data
  invariant(quests, 'Failed to fetch quests')

  const { id: userId } = await fetchWrapper({
    method: UsersService.getUserByWalletPublic,
    args: {
      wallet: user.wallet?.address!,
    },
  })

  let userQuests = (
    await fetchWrapper({
      method: UserQuestsService.search,
      args: {
        requestBody: {
          userId,
          narrative,
        },
      },
    })
  ).data
  // TODO: Remove
  // TEMP: filter out userQuests where user_id is not userId
  userQuests = userQuests.filter(userQuest => userQuest.user_id === userId)

  const userQuestMap = userQuests.reduce((acc, userQuest) => {
    acc[userQuest.quest_id] = userQuest
    return acc
  }, {} as Record<string, UserQuest>)

  const numQuests = quests.length
  const numCompletedQuests = userQuests.filter(userQuest => userQuest.status === QuestStatus.COMPLETED && userQuest.user_id === userId).length

  const completedQuestsIds = userQuests.filter(userQuest => userQuest.status === QuestStatus.COMPLETED && userQuest.user_id === userId).map(userQuest => userQuest.quest_id)
  logger('userQuestMap', JSON.stringify(userQuestMap, null, 2))
  logger('completedQuestsIds', JSON.stringify(completedQuestsIds, null, 2))
  logger('numCompletedQuests', numCompletedQuests)
  logger('numQuests', numQuests)
  return {
    user,
    quests,
    userQuests,
    numQuests,
    numCompletedQuests,
    completedQuestsIds,
    userQuestMap,
  }
}

