import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as i}from"./index-DSkyVWTJ.js";import{M as r,T as n,d as m,C as l}from"./index-Cugkjgmi.js";import"./TransactionStatusIndicator-C8bvcdgw.js";import"./Icon.types-D9mbN25E.js";import"./Label-BcH9Dz7N.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-Bfgyotpp.js";import"./ProgressCard-BYKzYHAL.js";import"./SegmentedControl-DQCOk3Kf.js";import"./Separator-CECijyNn.js";import"./Skeleton-pYLGnhFW.js";import"./Table-JXx_s4Wj.js";import"./Text-COZqca-9.js";import"./Textarea-CSqXU4Tb.js";import"./ValueDisplay-BLpqF4VW.js";import{S as d,B as s}from"./SidebarLayout.stories-anKRyZhx.js";import"./index-CTjT7uj6.js";import"./iframe-DZLBmECa.js";import"../sb-preview/runtime.js";import"./index-C5rLi0fd.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Ca1CH5Oj.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";function o(t){const e={h4:"h4",...i(),...t.components};return a.jsxs(a.Fragment,{children:[a.jsx(r,{of:d}),`
`,a.jsx(n,{}),`
`,a.jsx(e.h4,{id:"a-two-panel-layout-with-a-built-in-collapsible-side-panel",children:"A two-panel layout with a built in collapsible side panel."}),`
`,a.jsx(m,{dark:!0,language:"tsx",code:`
import {   
  SidebarLayout,
  SidebarLayoutContent,
  SidebarLayoutNav,
  SidebarLayoutNavAvatar,
  SidebarLayoutNavBody,
  SidebarLayoutNavHeader,
  SidebarLayoutNavHeaderButton,
  SidebarLayoutProvider,
  SidebarNavItem,
} from '@0xintuition/1ui'

<SidebarLayoutProvider>
  <SidebarLayout {...args}>
    <SidebarLayoutNav>
      <SidebarLayoutNavHeader>
        <SidebarLayoutNavHeaderButton imgLogo={<svg />} textLogo={<svg />} />
      </SidebarLayoutNavHeader>
      <SidebarLayoutNavBody className="flex flex-col justify-between">
        <div className="flex flex-col gap-px">
          <SidebarNavItem
            iconName="crystal-ball"
            label="Explore This"
            onClick={() => null}
          />
          <SidebarNavItem
            iconName="megaphone"
            label="Explore That"
            onClick={() => null}
          />
        </div>
        <div className="flex flex-col gap-px">
          <SidebarNavItem
            iconName="settings-gear"
            label="Settings"
            onClick={() => null}
          />
          <SidebarLayoutNavAvatar
            imageSrc="https://m.media-amazon.com/images/M/MV5BNDhiMWYzMjgtNTRiYi00ZTA3LThlODctNDRkMDk0NzFkMWI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg0MTkzMzA@._V1_.jpg"
            name="Super Dave"
            onClick={() => null}
          />
        </div>
      </SidebarLayoutNavBody>
    </SidebarLayoutNav>
    <SidebarLayoutContent className="flex items-center justify-center p-6">
      Content goes here.
    </SidebarLayoutContent>
  </SidebarLayout>
</SidebarLayoutProvider>
`}),`
`,a.jsx(l,{of:s,sourceState:"none"})]})}function F(t={}){const{wrapper:e}={...i(),...t.components};return e?a.jsx(e,{...t,children:a.jsx(o,{...t})}):o(t)}export{F as default};
