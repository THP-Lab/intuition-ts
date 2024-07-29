import * as React from 'react'

import {
  SIDEBAR_LAYOUT_STORAGE_VARIABLE,
  SIDEBAR_LOCAL_STORAGE_VARIABLE,
} from '../constants'

interface ISidebarLayoutContext {
  isCollapsed: boolean | undefined
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
  layout: number[] | undefined
  setLayout: React.Dispatch<React.SetStateAction<number[]>>
}

const SidebarLayoutContext = React.createContext<ISidebarLayoutContext>({
  isCollapsed: undefined,
  setIsCollapsed: () => {},
  layout: undefined,
  setLayout: () => {},
})

export const useSidebarLayoutContext = () => {
  const context = React.useContext(SidebarLayoutContext)
  if (context.isCollapsed === undefined) {
    throw new Error('Must be used with a SidebarLayoutProvider')
  }
  if (context.layout === undefined) {
    throw new Error('Must be used with a SidebarLayoutProvider')
  }
  return context
}

export const SidebarLayoutProvider = ({ ...props }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(
    localStorage.getItem(SIDEBAR_LOCAL_STORAGE_VARIABLE) === 'true',
  )
  const [layout, setLayout] = React.useState(() => {
    const layout = localStorage.getItem(SIDEBAR_LAYOUT_STORAGE_VARIABLE)
    console.log(layout)
    return layout ? (JSON.parse(layout) as number[]) : []
  })

  return (
    <SidebarLayoutContext.Provider
      value={{ isCollapsed, setIsCollapsed, layout, setLayout }}
      {...props}
    ></SidebarLayoutContext.Provider>
  )
}
