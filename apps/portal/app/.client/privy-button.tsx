import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
  Text,
  Trunctacular,
} from '@0xintuition/1ui'

import { usePrivy } from '@privy-io/react-auth'
import { NavLink, useNavigate } from '@remix-run/react'
import { PATHS } from 'consts'
import { useDisconnect } from 'wagmi'

export function PrivyButton({
  triggerComponent,
  onLogout,
}: {
  triggerComponent?: React.ReactNode
  onLogout?: () => void
}) {
  const { ready, authenticated, logout, user: privyUser } = usePrivy()

  const navigate = useNavigate()
  const { disconnect } = useDisconnect()

  async function handleSignout() {
    await logout()
    disconnect()
    onLogout?.()
  }

  if (!ready) {
    return null
  }

  if (ready && authenticated && privyUser !== null) {
    return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="p-0">
              {triggerComponent}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" className="bg-popover w-48">
            <DropdownMenuLabel className="flex items-center gap-2">
              <div className="space-y-1">
                <Text variant="footnote" className="text-muted-foreground">
                  Signed in as:
                </Text>
                <Trunctacular
                  value={privyUser?.wallet?.address ?? ''}
                  variant="body"
                  weight="medium"
                  className="text-foreground cursor-default"
                />
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="py-1">
              <DropdownMenuItem
                className="cursor-pointer justify-start"
                onSelect={(e) => {
                  e.preventDefault()
                  navigate('/app/profile')
                }}
              >
                <NavLink to={`/app/profile`} className="font-semibold">
                  <div className="space-y-1">
                    <Text className="text-foreground/70" weight="normal">
                      Profile
                    </Text>
                  </div>
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={(e) => {
                  e.preventDefault()
                  handleSignout()
                }}
                className="cursor-pointer justify-start"
              >
                <div className="space-y-1">
                  <Text className="text-foreground/70" weight="normal">
                    Sign Out
                  </Text>
                </div>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    )
  }
}
