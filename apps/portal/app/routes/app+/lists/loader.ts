import { ClaimPresenter } from '@0xintuition/api'

import { getUserCreatedLists, getUserSavedLists } from '@lib/services/lists'
import { getSearchParams } from '@lib/utils/params'
import { PaginationType } from 'types'

export type LoaderData = {
  userCreatedListClaims: Promise<{
    userCreatedListClaims: ClaimPresenter[]
    pagination: PaginationType
  }>
  savedListClaims: Promise<{
    savedListClaims: ClaimPresenter[]
    pagination: PaginationType
  }>
}
export const fetchLoaderData = async (
  request: Request,
  wallet: string,
): Promise<LoaderData> => {
  const searchParams = getSearchParams(request)
  return {
    userCreatedListClaims: getUserCreatedLists({
      userWallet: wallet,
      searchParams,
    }),
    savedListClaims: getUserSavedLists({
      userWallet: wallet,
      searchParams,
    }),
  }
}
