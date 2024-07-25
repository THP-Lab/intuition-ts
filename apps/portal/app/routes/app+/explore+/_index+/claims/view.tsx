import { ExploreSearch } from '@components/explore/ExploreSearch'
import { ClaimsList } from '@components/list/claims'

import { LoaderData } from './loader'

export const ExploreClaimsView = (data: LoaderData) => {
  const { claims, identities, claimsPagination } = data
  return (
    <div className="m-8 flex flex-col items-center gap-4">
      <ExploreSearch
        variant="claim"
        className="mb-12"
        identities={identities}
      />
      <ClaimsList
        claims={claims}
        pagination={claimsPagination}
        enableSearch={false}
        enableSort={true}
      />
    </div>
  )
}
