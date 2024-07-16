import React from 'react'

import { Button } from '@0xintuition/1ui'

import { ClientOnly } from 'remix-utils/client-only'

import { ExtendedPrivyUser } from '../../types/user'
import { verifiedPlatforms } from '../lib/utils/constants'
import { VerifiedLinkBadges } from './privy-verified-links'

// if the user has not linked any accounts, render the Link CTA version
// if the user has linked at least one account, render the Edit CTA version

interface ProfileSocialAccountProps {
  privyUser: ExtendedPrivyUser

  handleOpenEditSocialLinksModal: () => void
}

export function ProfileSocialAccountsClient({
  privyUser,
  handleOpenEditSocialLinksModal,
}: ProfileSocialAccountProps) {
  const hasLinkedAccounts = verifiedPlatforms.some((platform) =>
    Boolean(privyUser[platform.platformPrivyName]),
  )

  return (
    <ClientOnly>
      {() => (
        <div>
          {hasLinkedAccounts ? (
            <EditSocialAccounts
              privyUser={privyUser}
              handleOpenEditSocialLinksModal={handleOpenEditSocialLinksModal}
            />
          ) : (
            <LinkSocialAccounts
              handleOpenEditSocialLinksModal={handleOpenEditSocialLinksModal}
            />
          )}
        </div>
      )}
    </ClientOnly>
  )
}

function LinkSocialAccounts({
  handleOpenEditSocialLinksModal,
}: {
  handleOpenEditSocialLinksModal: () => void
}) {
  return (
    <div className="flex flex-col items-center gap-5 border border-solid border-white/10 px-5 py-6 text-center max-w-xl rounded-lg bg-black/60">
      <p className="font-medium text-sm text-white/50">
        Strengthen your profile&apos;s credibility by linking your social
        accounts. This enhances trustworthiness. Verified accounts offer
        additional authenticity.
      </p>
      <Button variant="secondary" onClick={handleOpenEditSocialLinksModal}>
        Link Social Accounts
      </Button>
    </div>
  )
}

function EditSocialAccounts({
  privyUser,
  handleOpenEditSocialLinksModal,
}: {
  privyUser: ExtendedPrivyUser
  handleOpenEditSocialLinksModal: () => void
}) {
  if (!privyUser) {
    return null
  }
  return (
    <div className="flex flex-col w-full gap-5 mt-5">
      <VerifiedLinkBadges
        privyUser={privyUser}
        handleOpenEditSocialLinksModal={handleOpenEditSocialLinksModal}
      />
    </div>
  )
}
