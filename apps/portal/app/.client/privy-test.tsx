import React from 'react'

import { Button, toast } from '@0xintuition/1ui'

import logger from '@lib/utils/logger'
import { useLinkAccount } from '@privy-io/react-auth'
import { useRevalidator } from '@remix-run/react'
import { ClientOnly } from 'remix-utils/client-only'

const PrivyTest = () => {
  const { revalidate } = useRevalidator()
  const { linkTwitter, linkGithub } = useLinkAccount({
    onSuccess: (user, linkMethod, linkedAccount) => {
      logger('revalidate', revalidate)
      logger('Link successful:', user, linkMethod, linkedAccount)
      // toast.success('Account link successful.')
      revalidate()
    },
    onError: (error) => {
      logger('Link error:', error)
      toast.success(`Account link failed: ${error}`)
    },
  })

  return (
    <ClientOnly>
      {() => (
        <div>
          <Button onClick={linkGithub}>test gh</Button>
          <Button onClick={linkTwitter}>test twittr</Button>
        </div>
      )}
    </ClientOnly>
  )
}

export default PrivyTest
