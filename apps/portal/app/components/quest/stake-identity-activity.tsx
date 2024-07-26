import {
  Button,
  ButtonSize,
  ButtonVariant,
  Icon,
  IconName,
  Identity,
  InfoCard,
  ProfileCard,
} from '@0xintuition/1ui'
import {
  GetPositionByIdResponse,
  IdentityPresenter,
  QuestStatus,
} from '@0xintuition/api'

import { sliceString } from '@lib/utils/misc'

import ActivityContainer from './activity-container'

export interface StakeIdentityActivityProps
  extends React.HTMLAttributes<HTMLDivElement> {
  status: QuestStatus
  identity: IdentityPresenter
  position?: GetPositionByIdResponse | null
  handleClick: () => void
}

export default function StakeIdentityActivity({
  status,
  identity,
  position,
  handleClick,
  ...props
}: StakeIdentityActivityProps) {
  return (
    <ActivityContainer status={status} {...props}>
      {position ? (
        <div>hi</div>
      ) : (
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col gap-5 theme-border rounded-md p-5">
            <ProfileCard
              variant={Identity.nonUser}
              avatarSrc={identity?.image ?? ''}
              name={identity?.display_name ?? ''}
              walletAddress={sliceString(identity?.identity_id, 6, 4)}
              bio={identity?.description ?? ''}
            />
            <InfoCard
              variant={Identity.user}
              username={identity.creator?.display_name ?? ''}
              avatarImgSrc={identity.creator?.image ?? ''}
              timestamp={identity.created_at}
              className="p-0 border-none"
            />
          </div>
          <Button
            variant={ButtonVariant.primary}
            size={ButtonSize.lg}
            onClick={handleClick}
          >
            Deposit For
          </Button>
        </div>
      )}
    </ActivityContainer>
  )
}
