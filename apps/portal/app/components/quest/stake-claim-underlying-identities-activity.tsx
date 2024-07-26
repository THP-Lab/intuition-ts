import React from 'react'

import {
  IdentityTag,
  PositionCard,
  PositionCardFeesAccrued,
  PositionCardLastUpdated,
  PositionCardOwnership,
  PositionCardStaked,
  Separator,
  Text,
  TextVariant,
  Trunctacular,
} from '@0xintuition/1ui'
import { IdentityPresenter, QuestStatus } from '@0xintuition/api'

import StakeModal from '@components/stake/stake-modal'
import { stakeModalAtom } from '@lib/state/store'
import { calculatePercentageOfTvl, formatBalance } from '@lib/utils/misc'
import { useAtom } from 'jotai'
import { IdentityType, VaultDetailsType } from 'types'

import ActivityContainer from './activity-container'
import { HoverableIdentityTag } from './detail/claim-example'

export interface StakeClaimActivityUnderlyingIdentitiesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  status: QuestStatus
  identities: {
    vaultDetails: VaultDetailsType
    identity: IdentityPresenter
    type: IdentityType
  }[]
  userWallet: string
  handleSellClick: (identity: IdentityPresenter) => void
}

export default function StakeClaimUnderlyingIdentitiesActivity({
  identities,
  status,
  userWallet,
  handleSellClick,
  ...props
}: StakeClaimActivityUnderlyingIdentitiesProps) {
  return (
    <ActivityContainer status={status} {...props} className="pb-5">
      <div className="flex flex-col items-center gap-10 rounded-md p-5">
        {identities &&
          identities.map((identity) => {
            console.log('identity', identity)
            return (
              <div className="flex flex-col items-start gap-2.5">
                <Text
                  variant={TextVariant.body}
                  className="text-primary/60 capitalize"
                >
                  {identity.type}
                </Text>
                <PositionCardWrapper
                  vaultDetails={identity.vaultDetails}
                  identity={identity.identity}
                  handleSellClick={handleSellClick}
                  userWallet={userWallet}
                />
              </div>
            )
          })}
      </div>
    </ActivityContainer>
  )
}

export const PositionCardWrapper = ({
  vaultDetails,
  identity,
  handleSellClick,
  userWallet,
}: {
  vaultDetails: VaultDetailsType
  identity: IdentityPresenter
  handleSellClick: (identity: IdentityPresenter) => void
  userWallet: string
}) => {
  const [stakeModalActive, setStakeModalActive] = useAtom(stakeModalAtom)

  const { user_assets, assets_sum } = vaultDetails
  function handleSellIdentityClick(identity: IdentityPresenter) {
    setStakeModalActive((prevState) => ({
      ...prevState,
      isOpen: true,
      id: identity.id,
      modalType: 'identity',
      mode: 'redeem',
    }))
  }
  return (
    <>
      {vaultDetails && (
        <PositionCard onButtonClick={() => handleSellIdentityClick(identity)}>
          <div className="w-full col-span-2">
            <div className="w-fit">
              <HoverableIdentityTag identity={identity} />
            </div>
          </div>
          <PositionCardStaked
            amount={user_assets ? +formatBalance(user_assets, 18, 5) : 0}
          />
          <PositionCardOwnership
            percentOwnership={
              user_assets !== null && assets_sum
                ? +calculatePercentageOfTvl(user_assets ?? '0', assets_sum)
                : 0
            }
          />
          <PositionCardFeesAccrued amount={0} />
          <PositionCardLastUpdated timestamp={identity.updated_at} />
        </PositionCard>
      )}
      <StakeModal
        open={stakeModalActive.isOpen}
        identity={identity}
        userWallet={userWallet}
        contract={identity.contract}
        vaultDetails={vaultDetails}
        onClose={() =>
          setStakeModalActive((prevState) => ({ ...prevState, isOpen: false }))
        }
        onSuccess={() => {}}
        direction={stakeModalActive.direction}
      />
    </>
  )
}
function setStakeModalActive(arg0: (prevState: any) => any) {
  throw new Error('Function not implemented.')
}
