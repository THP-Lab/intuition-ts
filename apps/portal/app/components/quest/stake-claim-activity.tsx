import React from 'react'

import {
  Button,
  ButtonSize,
  ButtonVariant,
  ClaimStakeCard,
  Icon,
  IconName,
  PositionCard,
  PositionCardFeesAccrued,
  PositionCardLastUpdated,
  PositionCardOwnership,
  PositionCardStaked,
  Separator,
  Tag,
  TagSize,
  TagVariant,
} from '@0xintuition/1ui'
import {
  ClaimPresenter,
  GetPositionByIdResponse,
  PositionPresenter,
  QuestStatus,
} from '@0xintuition/api'

import { calculatePercentageOfTvl, formatBalance } from '@lib/utils/misc'
import { VaultDetailsType } from 'types'

import ActivityContainer from './activity-container'
import { ClaimExample } from './detail/claim-example'

export interface StakeClaimActivityProps
  extends React.HTMLAttributes<HTMLDivElement> {
  status: QuestStatus
  claim: ClaimPresenter
  vaultDetails: VaultDetailsType
  position?: PositionPresenter | GetPositionByIdResponse | null
  handleAgainstClick: () => void
  handleForClick: () => void
  handleSellClick: () => void
}

export default function StakeClaimActivity({
  status,
  claim,
  position,
  vaultDetails,
  handleAgainstClick,
  handleForClick,
  handleSellClick,
  ...props
}: StakeClaimActivityProps) {
  let direction: 'for' | 'against' = 'for'
  direction =
    (vaultDetails.user_conviction ?? claim.user_conviction_for) > '0' ||
    (vaultDetails.user_conviction_against ?? claim.user_conviction_against) ===
      '0'
      ? 'for'
      : 'against'

  let user_assets: string = '0'
  user_assets =
    (vaultDetails.user_conviction ?? claim.user_conviction_for) > '0'
      ? vaultDetails.user_assets ?? claim.user_assets_for
      : vaultDetails.user_assets_against ?? claim.user_assets_against

  let assets_sum: string = '0'
  assets_sum =
    (vaultDetails.assets_sum ?? claim.for_assets_sum) > '0'
      ? vaultDetails.assets_sum ?? claim.for_assets_sum
      : vaultDetails.against_assets_sum ?? claim.against_assets_sum

  const userConviction =
    vaultDetails.user_conviction ?? claim.user_conviction_for
  const directionTagVariant =
    +userConviction > 0 ? TagVariant.for : TagVariant.against
  const directionTagText = +userConviction > 0 ? 'FOR' : 'AGAINST'
  return (
    <ActivityContainer status={status} {...props} className="pb-5">
      {position ? (
        <div className="flex flex-col items-start gap-5 rounded-md p-5">
          <ClaimExample
            subject={claim.subject!}
            predicate={claim.predicate!}
            object={claim.object!}
          />
          <Separator />
          <div className="flex items-start justify-start gap-5 w-full">
            <ClaimStakeCard
              currency="ETH"
              totalTVL={
                +formatBalance(
                  +vaultDetails.assets_sum +
                    +(vaultDetails.against_assets_sum
                      ? vaultDetails.against_assets_sum
                      : '0'),
                )
              }
              tvlAgainst={
                +formatBalance(
                  vaultDetails.against_assets_sum ?? claim.against_assets_sum,
                )
              }
              tvlFor={
                +formatBalance(vaultDetails.assets_sum ?? claim.for_assets_sum)
              }
              amountAgainst={+formatBalance(claim.against_num_positions)}
              amountFor={+formatBalance(claim.for_num_positions)}
              onAgainstBtnClick={handleAgainstClick}
              onForBtnClick={handleForClick}
              disableForBtn={
                (vaultDetails.user_conviction_against ??
                  claim.user_conviction_against) > '0'
              }
              disableAgainstBtn={
                (vaultDetails.user_conviction ?? claim.user_conviction_for) >
                '0'
              }
              className="min-w-[400px]"
            />
            <PositionCard onButtonClick={handleSellClick}>
              <div>
                <PositionCardStaked
                  amount={user_assets ? +formatBalance(user_assets, 18, 4) : 0}
                />
                <Tag variant={directionTagVariant} size={TagSize.sm}>
                  {directionTagText}
                </Tag>
              </div>
              <PositionCardOwnership
                percentOwnership={
                  user_assets !== null && assets_sum
                    ? +calculatePercentageOfTvl(
                        user_assets,
                        (
                          +vaultDetails.assets_sum +
                          +(vaultDetails.against_assets_sum ?? '0')
                        ).toString(),
                      )
                    : 0
                }
              />
              <PositionCardFeesAccrued amount={0} />
              <PositionCardLastUpdated timestamp={claim.updated_at} />
            </PositionCard>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-10 rounded-md p-5">
          <ClaimExample
            subject={claim.subject!}
            predicate={claim.predicate!}
            object={claim.object!}
          />
          <Button
            variant={ButtonVariant.accent}
            size={ButtonSize.lg}
            onClick={handleForClick}
            className="w-fit"
          >
            Deposit For
          </Button>
        </div>
      )}
    </ActivityContainer>
  )
}
