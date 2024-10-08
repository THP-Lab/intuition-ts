<<<<<<< HEAD
import logger from '@lib/utils/logger'
import { invariant } from '@lib/utils/misc'
import { json, LoaderFunctionArgs } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import { requireUserWallet } from '@server/auth'

export async function loader({ request }: LoaderFunctionArgs) {
  logger('[Loader] Entering app loader')

=======
import { useEffect } from 'react'

import PrivyLogout from '@client/privy-logout'
import { invariant } from '@lib/utils/misc'
import { json, LoaderFunctionArgs } from '@remix-run/node'
import { Outlet, useLoaderData, useLocation } from '@remix-run/react'
import { requireUserWallet } from '@server/auth'

export async function loader({ request }: LoaderFunctionArgs) {
>>>>>>> 1814bcc60 (Add stripped down version of portal base)
  const wallet = await requireUserWallet(request)
  invariant(wallet, 'Unauthorized')

  return json({
    wallet,
  })
}

export default function App() {
<<<<<<< HEAD
  return (
    <div className="h-screen flex">
      <Outlet />
=======
  const { wallet } = useLoaderData<{ wallet: string }>()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="h-screen flex">
      <Outlet />
      <PrivyLogout wallet={wallet} />
>>>>>>> 1814bcc60 (Add stripped down version of portal base)
    </div>
  )
}
