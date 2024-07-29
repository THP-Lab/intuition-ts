import { HTMLAttributes, Ref } from 'react'

import { ScrollAreaProps } from '@radix-ui/react-scroll-area'
import { ResizablePanel, ScrollArea } from 'components'

export interface SidebarLayoutContentProps extends ScrollAreaProps {
  viewportRef?: Ref<HTMLDivElement> | null
}

export const SidebarLayoutContent = ({
  viewportRef,
  ...props
}: SidebarLayoutContentProps) => {
  return (
    <ResizablePanel defaultSize={70}>
      <ScrollArea
        className="h-screen"
        {...props}
        viewportRef={viewportRef}
      ></ScrollArea>
    </ResizablePanel>
  )
}
