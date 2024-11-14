import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as i}from"./index-DSkyVWTJ.js";import{M as r,T as n,d as m,C as l}from"./index-DE7xyETj.js";import"./TransactionStatusIndicator-CeOhUi86.js";import"./Checkbox-BUyDAOfm.js";import"./Icon.types-BJuqKE1d.js";import"./Label-TnSa-Vb6.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-B07pz6pZ.js";import"./ProgressCard-Di9JTD4k.js";import"./ScrollArea-Dhe45Eev.js";import"./SegmentedControl-CoVeRGEn.js";import"./Separator-DLMkV6af.js";import"./Skeleton-k6WNkHQZ.js";import"./Table-BlSnVnDo.js";import"./Text-BeXQet-m.js";import"./Textarea-DtV2ds88.js";import"./ValueDisplay-ClYOGsr-.js";import{S as d,B as s}from"./SidebarLayout.stories-D5RO3opm.js";import"./index-CTjT7uj6.js";import"./iframe-CBCXgUgE.js";import"../sb-preview/runtime.js";import"./index-1qoTW4fE.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-sXcn2mTS.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-9o982VWB.js";import"./index-Bb4qSo10.js";function o(t){const e={h4:"h4",...i(),...t.components};return a.jsxs(a.Fragment,{children:[a.jsx(r,{of:d}),`
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
`,a.jsx(l,{of:s,sourceState:"none"})]})}function V(t={}){const{wrapper:e}={...i(),...t.components};return e?a.jsx(e,{...t,children:a.jsx(o,{...t})}):o(t)}export{V as default};
