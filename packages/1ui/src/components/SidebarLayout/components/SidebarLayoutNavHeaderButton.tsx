import { cn } from 'styles'

import { useSidebarLayoutContext } from './SidebarLayoutProvider'

export interface SidebarLayoutNavHeaderButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  imgLogo: React.ReactElement
  textLogo: React.ReactElement
}

export const SidebarLayoutNavHeaderButton = ({
  imgLogo,
  textLogo,
  className,
  ...props
}: SidebarLayoutNavHeaderButtonProps) => {
  const { isCollapsed } = useSidebarLayoutContext()
  return (
    <button className={cn('flex gap-3 items-center', className)} {...props}>
      {imgLogo}
      {!isCollapsed && textLogo}
    </button>
  )
}
