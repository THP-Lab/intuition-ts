import {
  ClaimPositionsService,
  Identifier,
  IdentityPositionsService,
  PositionPresenter,
  PositionSortColumn,
  SortDirection,
  VaultType,
} from '@0xintuition/api'

import { calculateTotalPages, fetchWrapper } from '@lib/utils/misc'
import { getStandardPageParams } from '@lib/utils/params'
import { PaginationType } from 'types/pagination'

export async function getPositionsOnIdentity({
  identityId,
  searchParams,
}: {
  identityId: string
  searchParams: URLSearchParams
}) {
  const { page, limit, sortBy, direction } = getStandardPageParams({
    searchParams,
    paramPrefix: 'positions',
    defaultSortByValue: PositionSortColumn.ASSETS,
  })
  const positionsSearch =
    (searchParams.get('positionsSearch') as Identifier) || null

  const positions = await fetchWrapper({
    method: IdentityPositionsService.getIdentityPositions,
    args: {
      id: identityId,
      page,
      limit,
      sortBy: sortBy as PositionSortColumn,
      direction,
      creator: positionsSearch,
    },
  })

  return {
    data: positions.data as PositionPresenter[],
    pagination: {
      currentPage: Number(page),
      limit: Number(limit),
      totalEntries: positions.total,
      totalPages: Math.ceil(positions.total / Number(limit)),
    },
  }
}

export async function getPositionsOnClaim({
  claimId,
  searchParams,
}: {
  claimId: string
  searchParams: URLSearchParams
}): Promise<{
  data: PositionPresenter[]
  sortBy: PositionSortColumn
  direction: SortDirection
  pagination: PaginationType
}> {
  const { page, limit, sortBy, direction } = getStandardPageParams({
    searchParams,
    paramPrefix: 'positions',
    defaultSortByValue: PositionSortColumn.CREATED_AT,
  })
  const creator = searchParams.get('positionsSearch')
  const positionDirection =
    (searchParams.get('positionDirection') as VaultType) || null

  const positions = await fetchWrapper({
    method: ClaimPositionsService.getClaimPositions,
    args: {
      id: claimId,
      page,
      limit,
      sortBy: sortBy as PositionSortColumn,
      direction,
      creator,
      positionDirection,
    },
  })

  return {
    data: positions.data as PositionPresenter[],
    sortBy: sortBy as PositionSortColumn,
    direction,
    pagination: {
      currentPage: Number(page),
      limit: Number(limit),
      totalEntries: positions.total,
      totalPages: calculateTotalPages(positions.total ?? 0, Number(limit)),
    },
  }
}
