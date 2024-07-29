import { ScrollArea } from '@0xintuition/1ui'

import { Outlet } from '@remix-run/react'

import { OptionType, SegmentedNav } from './segmented-nav'

interface NestedLayoutProps {
  children: React.ReactNode
  outlet: typeof Outlet
  options?: OptionType[]
}

export function NestedLayout({
  children,
  outlet: OutletComponent,
  options,
}: NestedLayoutProps) {
  return (
    <div className="w-full h-full min-h-screen">
      <div className="flex items-start w-full gap-5">
        <div className="w-[400px] pl-8 py-6">
          <div className="flex flex-col items-start w-full">{children}</div>
        </div>
        <div className="flex flex-col flex-grow min-h-screen gap-4 flex-grow w-full">
          {options && (
            <div className="flex flex-row justify-end pt-10 pr-6">
              <SegmentedNav options={options} />
            </div>
          )}
          <div className="w-full pr-6 pb-20">
            <OutletComponent />
          </div>
        </div>
      </div>
    </div>
  )
}
