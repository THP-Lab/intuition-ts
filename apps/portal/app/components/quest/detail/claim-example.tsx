import {
  cn,
  Identity,
  IdentityTag,
  IdentityTagSize,
  ProfileCard,
  Separator,
  Trunctacular,
} from '@0xintuition/1ui'
import { IdentityPresenter } from '@0xintuition/api'

import { sliceString } from '@lib/utils/misc'

export interface ClaimProps {
  size?: keyof typeof IdentityTagSize
  disabled?: boolean
  subject: IdentityPresenter
  predicate: IdentityPresenter
  object: IdentityPresenter
}

export const ClaimExample = ({
  subject,
  predicate,
  object,
  disabled,
  size,
}: ClaimProps) => {
  const separatorWidth = size !== IdentityTagSize.default ? 'w-4' : 'w-2'
  return (
    <div className="flex items-center w-full max-w-full">
      <HoverableIdentityTag identity={subject} disabled={disabled} />
      <Separator className={cn(separatorWidth)} />
      <HoverableIdentityTag identity={predicate} disabled={disabled} />
      <Separator className={cn(separatorWidth)} />
      <HoverableIdentityTag identity={object} disabled={disabled} />
    </div>
  )
}

export const HoverableIdentityTag = ({
  identity,
  disabled,
}: {
  identity: IdentityPresenter
  disabled?: boolean
}) => {
  return (
    <IdentityTag
      variant={identity?.is_user === true ? Identity.user : Identity.nonUser}
      imgSrc={identity?.image ?? ''}
      disabled={disabled}
      size={IdentityTagSize.lg}
      className="group-hover:border-primary group-hover:bg-primary/20"
      hoverCardContent={
        <div>
          <ProfileCard
            className="w-fit max-w-64"
            variant={
              identity?.is_user === true ? Identity.user : Identity.nonUser
            }
            avatarSrc={identity?.image ?? ''}
            name={
              identity?.is_user === true
                ? identity?.user?.display_name ?? ''
                : identity?.display_name
            }
            walletAddress={
              identity?.is_user === true
                ? identity?.user?.ens_name ??
                  sliceString(identity?.creator_address, 6, 4)
                : identity?.identity_id
            }
            stats={
              identity?.is_user === true
                ? {
                    numberOfFollowers: identity?.follower_count ?? 0,
                    numberOfFollowing: identity?.followed_count ?? 0,
                  }
                : undefined
            }
            bio={
              identity?.is_user === true
                ? identity?.user?.description ?? ''
                : identity?.description ?? ''
            }
          />
        </div>
      }
    >
      <Trunctacular value={identity.display_name} />
    </IdentityTag>
  )
}
