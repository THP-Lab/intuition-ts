import { useEffect, useState } from 'react'

import { IconName } from '@0xintuition/1ui'
import {
  ClaimPresenter,
  ClaimSortColumn,
  ClaimsService,
} from '@0xintuition/api'

import { ErrorPage } from '@components/error-page'
import ExploreHeader from '@components/explore/ExploreHeader'
import { ExploreSearch } from '@components/explore/ExploreSearch'
import { HomeSectionHeader } from '@components/home/home-section-header'
import { ListClaimsList } from '@components/list/list-claims'
import { FeaturedListCarousel } from '@components/lists/featured-lists-carousel'
import { useLiveLoader } from '@lib/hooks/useLiveLoader'
import { getFeaturedLists } from '@lib/services/lists'
import { getFeaturedListObjectIds, getSpecialPredicate } from '@lib/utils/app'
import { calculateTotalPages, invariant, loadMore } from '@lib/utils/misc'
import { getStandardPageParams } from '@lib/utils/params'
import { json, LoaderFunctionArgs } from '@remix-run/node'
import { useSearchParams, useSubmit } from '@remix-run/react'
import { fetchWrapper } from '@server/api'
import { requireUserWallet } from '@server/auth'
import { CURRENT_ENV, HEADER_BANNER_LISTS, NO_WALLET_ERROR } from 'app/consts'

export async function loader({ request }: LoaderFunctionArgs) {
  const wallet = await requireUserWallet(request)
  invariant(wallet, NO_WALLET_ERROR)

  const url = new URL(request.url)
  const searchParams = new URLSearchParams(url.search)
  const { page, sortBy, direction } = getStandardPageParams({
    searchParams,
  })

  const displayName = searchParams.get('list') || null

  const initialLimit = 200
  const effectiveLimit = Number(
    searchParams.get('effectiveLimit') || initialLimit,
  )
  const limit = Math.max(effectiveLimit, initialLimit)

  const listClaims = await fetchWrapper(request, {
    method: ClaimsService.searchClaims,
    args: {
      page: 1,
      limit,
      sortBy: sortBy as ClaimSortColumn,
      direction,
      displayName,
      predicate: getSpecialPredicate(CURRENT_ENV).tagPredicate.vaultId,
    },
  })

  const featuredLists = await getFeaturedLists({
    request,
    listIds: getFeaturedListObjectIds(CURRENT_ENV),
  })

  const totalPages = calculateTotalPages(listClaims?.total ?? 0, limit)

  return json({
    listClaims: listClaims?.data as ClaimPresenter[],
    featuredLists,
    sortBy,
    direction,
    pagination: {
      currentPage: page,
      limit,
      totalEntries: listClaims?.total ?? 0,
      totalPages,
    },
  })
}

export default function ExploreLists() {
  const submit = useSubmit()
  const { listClaims, featuredLists, pagination, sortBy, direction } =
    useLiveLoader<typeof loader>(['create', 'attest'])
  const [searchParams] = useSearchParams()

  const currentPage = Number(searchParams.get('page') || '1')

  const [accumulatedClaims, setAccumulatedClaims] = useState<ClaimPresenter[]>(
    [],
  )

  useEffect(() => {
    const endIndex = currentPage * pagination.limit
    setAccumulatedClaims(listClaims.slice(0, endIndex))
  }, [listClaims, currentPage, pagination.limit])

  const handleLoadMore = loadMore({
    currentPage,
    pagination,
    sortBy,
    direction,
    submit,
  })

  return (
    <>
      <ExploreHeader
        title="Lists"
        content="Collaborate with the world to curate collections of information - or create your own."
        icon={IconName.bookmark}
        bgImage={HEADER_BANNER_LISTS}
      />
      <div className="flex flex-col gap-4">
        <HomeSectionHeader
          title="Featured Lists"
          buttonText="Explore Lists"
          buttonLink="/app/explore/lists"
        />
        <FeaturedListCarousel lists={featuredLists.featuredLists} />
      </div>
      <ExploreSearch variant="list" />
      <ListClaimsList
        listClaims={accumulatedClaims}
        pagination={{ ...pagination, currentPage }}
        enableSearch={false}
        enableSort={true}
        onLoadMore={handleLoadMore}
        variant="explore"
      />
    </>
  )
}

export function ErrorBoundary() {
  return <ErrorPage routeName="explore/lists" />
}
