import { HTMLAttributes, ReactNode } from 'react'

import { cn } from 'styles'

import { useSidebarLayoutContext } from './SidebarLayoutProvider'

interface SidebarLayoutNavHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const SidebarLayoutNavHeader = ({
  className,
  ...props
}: SidebarLayoutNavHeaderProps) => {
  const { isCollapsed } = useSidebarLayoutContext()
  return (
    <div
      className={cn(
        'flex items-center justify-center h-[80px]',
        isCollapsed ?? 'px-2',
        className,
      )}
      {...props}
    ></div>
  )
}
