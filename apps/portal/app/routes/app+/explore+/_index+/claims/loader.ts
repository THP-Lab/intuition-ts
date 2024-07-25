import {
  ClaimPresenter,
  ClaimSortColumn,
  ClaimsService,
  IdentitiesService,
  IdentityPresenter,
} from '@0xintuition/api'

import { calculateTotalPages, fetchWrapper } from '@lib/utils/misc'
import { getSearchParams, getStandardPageParams } from '@lib/utils/params'

export type LoaderData = {
  identities: IdentityPresenter[]
  claims: ClaimPresenter[]
  claimsPagination: {
    currentPage: number
    limit: number
    totalEntries: number
    totalPages: number
  }
}

export const fetchLoaderData = async (
  request: Request,
): Promise<LoaderData> => {
  const searchParams = getSearchParams(request)

  const { page, limit, sortBy, direction } = getStandardPageParams({
    searchParams,
  })
  const subjectId = searchParams.get('subject') || null
  const predicateId = searchParams.get('predicate') || null
  const objectId = searchParams.get('object') || null

  const claims = await fetchWrapper({
    method: ClaimsService.searchClaims,
    args: {
      page,
      limit,
      sortBy: sortBy as ClaimSortColumn,
      direction,
      subject: subjectId,
      predicate: predicateId,
      object: objectId,
    },
  })

  const identities = await fetchWrapper({
    method: IdentitiesService.searchIdentity,
    args: {
      page: 1,
      limit: 10,
      sortBy: 'AssetsSum',
      direction: 'desc',
    },
  })

  const claimsTotalPages = calculateTotalPages(claims?.total ?? 0, limit)

  return {
    identities: identities?.data,
    claims: claims?.data as ClaimPresenter[],
    claimsPagination: {
      currentPage: page,
      limit,
      totalEntries: claims?.total ?? 0,
      totalPages: claimsTotalPages,
    },
  }
}
