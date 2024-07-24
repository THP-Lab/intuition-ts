import { QuestStatus as ApiQuestStatus, QuestCondition } from '@0xintuition/api'

import counterStakeClaimThumbnailPlaceholder from '@assets/counter-stake-claim-thumbnail.png'
import counterStakeClaimPlaceholder from '@assets/counter-stake-claim.png'
import createAtomThumbnailPlaceholder from '@assets/create-atom-thumbnail.png'
import createAtomPlaceholder from '@assets/create-atom.png'
import createClaimThumbnailPlaceholder from '@assets/create-claim-thumbnail.png'
import createClaimPlaceholder from '@assets/create-claim.png'
import stakeClaimThumbnailPlaceholder from '@assets/stake-claim-thumbnail.png'
import stakeClaimPlaceholder from '@assets/stake-claim.png'
import stakeIdentityThumbnailPlaceholder from '@assets/stake-identity-thumbnail.png'
import stakeIdentityPlaceholder from '@assets/stake-identity.png'
import understandingThumbnailPlaceholder from '@assets/understanding-thumbnail.png'
import understandingPlaceholder from '@assets/understanding.png'
import { allQuests, QuestContentType } from 'content-collections'

export function getQuestContentBySlug(slug: string): QuestContentType {
  const quest = allQuests.find((quest) => quest.slug === slug)
  if (!quest) {
    throw new Error(`Quest with slug ${slug} not found`)
  }
  return quest
}

export function getQuestCriteria(condition: QuestCondition) {
  switch (condition) {
    case QuestCondition.CREATE_ATOM:
      return 'Create an atom'
    case QuestCondition.STAKE_IDENTITY:
      return 'Stake on an atom'
    case QuestCondition.CREATE_CLAIM:
      return 'Create a claim'
    case QuestCondition.STAKE_CLAIM:
      return 'Stake ETH For a claim'
    case QuestCondition.COUNTER_STAKE_CLAIM:
      return 'Stake ETH Against a claim'
    case QuestCondition.ALWAYS_TRUE:
      return 'Search and explore the intuition knowledge graph'
    default:
      return 'Unknown'
  }
}

export function getQuestStatus(status: ApiQuestStatus) {
  switch (status) {
    case ApiQuestStatus.NOT_STARTED:
      return 'Not started'
    case ApiQuestStatus.STARTED:
      return 'In progress'
    case ApiQuestStatus.COMPLETED:
      return 'Completed'
    default:
      return 'Unknown'
  }
}

export function getQuestThumbnailImage(questId: string) {
  switch (questId) {
    case 'b4b7e0ed-a69a-4a0a-bf9b-8bf0afe979f9':
      return createAtomThumbnailPlaceholder
    case '3b5315bb-f29b-4320-9997-6928b4bbf3e9':
      return stakeIdentityThumbnailPlaceholder
    case 'dacdd63d-f978-433e-aeb0-54d165e8f936':
      return createClaimThumbnailPlaceholder
    case 'ac22e180-9923-4481-9cba-31e88f223e58':
      return stakeClaimThumbnailPlaceholder
    case 'daa5d6ff-9a8b-41c6-a259-302816655c5b':
      return counterStakeClaimThumbnailPlaceholder
    case '90cf4398-f7e5-4ec7-8088-c64d2da6a715':
      return understandingThumbnailPlaceholder
    default:
      return stakeIdentityThumbnailPlaceholder
  }
}

export function getQuestImage(questId: string) {
  switch (questId) {
    case 'b4b7e0ed-a69a-4a0a-bf9b-8bf0afe979f9':
      return createAtomPlaceholder
    case '3b5315bb-f29b-4320-9997-6928b4bbf3e9':
      return stakeIdentityPlaceholder
    case 'dacdd63d-f978-433e-aeb0-54d165e8f936':
      return createClaimPlaceholder
    case 'ac22e180-9923-4481-9cba-31e88f223e58':
      return stakeClaimPlaceholder
    case 'daa5d6ff-9a8b-41c6-a259-302816655c5b':
      return counterStakeClaimPlaceholder
    case '90cf4398-f7e5-4ec7-8088-c64d2da6a715':
      return understandingPlaceholder
    default:
      return stakeIdentityPlaceholder
  }
}
