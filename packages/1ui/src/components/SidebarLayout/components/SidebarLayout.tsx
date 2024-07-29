import { HTMLAttributes } from 'react'

import { ResizablePanelGroup, useSidebarLayoutContext } from 'components'
import { cn } from 'styles'

import { SIDEBAR_LAYOUT_STORAGE_VARIABLE } from '../constants'

export interface SidebarLayoutProps
  extends HTMLAttributes<keyof HTMLElementTagNameMap> {}

export const SidebarLayout = ({ className, ...props }: SidebarLayoutProps) => {
  const { setLayout } = useSidebarLayoutContext()

  const updateLayoutValues = (newValue: number[]) => {
    setLayout(newValue)
    localStorage.setItem(
      SIDEBAR_LAYOUT_STORAGE_VARIABLE,
      JSON.stringify(newValue),
    )
  }
  return (
    <ResizablePanelGroup
      direction="horizontal"
      onLayout={(sizes: number[]) => {
        updateLayoutValues(sizes)
      }}
      className={cn('h-full max-h-screen items-stretch', className)}
      {...props}
    ></ResizablePanelGroup>
  )
}
