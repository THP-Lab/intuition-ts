import { cn } from 'styles'

import { useSidebarLayoutContext } from './SidebarLayoutProvider'

export const SidebarLayoutNavItems = ({ ...props }) => {
  const { isCollapsed } = useSidebarLayoutContext()

  return (
    <div
      className={cn(
        'flex w-full items-center flex-col gap-2 py-2',
        isCollapsed ? 'justify-center px-1' : 'px-1.5',
      )}
      {...props}
    ></div>
  )
}
