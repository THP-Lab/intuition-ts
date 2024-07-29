import { useEffect, useRef } from 'react'

import { UserPresenter, UsersService } from '@0xintuition/api'

import PrivyLogout from '@client/privy-logout'
import SidebarNav from '@components/sidebar-nav'
import { fetchWrapper, invariant } from '@lib/utils/misc'
import { json, LoaderFunctionArgs, redirect } from '@remix-run/node'
import { Outlet, useLoaderData, useLocation } from '@remix-run/react'
import { requireUserWallet } from '@server/auth'
import { isSanctioned } from '@server/ofac'
import { Address } from 'viem'

export async function loader({ request }: LoaderFunctionArgs) {
  const wallet = await requireUserWallet(request)
  invariant(wallet, 'Unauthorized')

  const isWalletSanctioned = await isSanctioned(wallet as Address)
  if (isWalletSanctioned) {
    return redirect('/sanctioned')
  }

  const userObject = await fetchWrapper({
    method: UsersService.getUserByWalletPublic,
    args: {
      wallet,
    },
  })

  return json({
    wallet,
    userObject,
  })
}

export default function Index() {
  const { wallet, userObject } = useLoaderData<{
    wallet: string
    userObject: UserPresenter
  }>()
  const { pathname } = useLocation()
  const viewportRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (viewportRef.current) {
      viewportRef.current.scrollTo(0, 0)
    }
  }, [pathname])

  return (
    <div className="flex items-start w-full h-screen">
      <SidebarNav userObject={userObject} viewportRef={viewportRef}>
        <Outlet />
      </SidebarNav>
      <PrivyLogout wallet={wallet} />
    </div>
  )
}
