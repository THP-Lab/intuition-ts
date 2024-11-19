import { getSpecialPredicate } from '@lib/utils/app'
import { CURRENT_ENV } from 'app/consts'
import { IdentityType } from 'app/types'

export const createTagArrays = (
  tags: IdentityType[],
  subjectVaultId: string,
) => {
  const subjectIdentityVaultIds = tags.map(() => subjectVaultId)
  const predicateHasTagVaultIds = tags.map(
    () => getSpecialPredicate(CURRENT_ENV).tagPredicate.vaultId,
  )
  const objectTagVaultIds = tags.map((tag) => tag.vaultId)

  return { subjectIdentityVaultIds, predicateHasTagVaultIds, objectTagVaultIds }
}
