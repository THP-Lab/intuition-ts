import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as i,T as n,d as m,C as d}from"./index-Bv2K9QnH.js";import"./QuestStatusCard-CF08gGqm.js";import"./QuestSetProgressCard-ClGoFBEX.js";import"./Icon.types-9co6RU8J.js";import"./Label-DKqTtzje.js";import"./PieChart-B_dtFskq.js";import"./Resizable-B8LsIgh_.js";import"./SegmentedControl-DEtPxF6_.js";import"./Separator-y1Wg93hL.js";import"./Table-DiAONwIH.js";import"./Text-CvCwWh2A.js";import"./Textarea-DGcnJGMC.js";import"./ValueDisplay-s0UeY4GO.js";import"./QuestSetCard-CU4evGOs.js";import"./ProgressBar-BdoIrmiA.js";import"./QuestStatusIndicator-DbTTS57h.js";import{S as s,B as u}from"./SidebarLayout.stories-BK9fHPTE.js";import"./index-CTjT7uj6.js";import"./iframe-t4hGQwvI.js";import"../sb-preview/runtime.js";import"./index-Ba1MzMRK.js";import"./index-DBez60WA.js";import"./index-BSh8g_S6.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-CuZnzU4K.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";import"./createLucideIcon-BfM7wYCo.js";function e(t){const o={a:"a",code:"code",h4:"h4",p:"p",...r(),...t.components};return a.jsxs(a.Fragment,{children:[a.jsx(i,{of:s}),`
`,a.jsx(n,{}),`
`,a.jsx(o.h4,{id:"a-two-panel-layout-with-a-built-in-resizable-side-nav",children:"A two-panel layout with a built in resizable side nav."}),`
`,a.jsx(m,{dark:!0,language:"tsx",code:`
import {   
  SidebarLayout,
  SidebarLayoutContent,
  SidebarLayoutNav,
  SidebarLayoutNavAvatar,
  SidebarLayoutNavFooter,
  SidebarLayoutNavFooterItem,
  SidebarLayoutNavHeader,
  SidebarLayoutNavHeaderButton,
  SidebarLayoutNavItem,
  SidebarLayoutNavItems,
  SidebarLayoutProvider, 
} from '@0xintuition/1ui'

<SidebarLayoutProvider>
  <SidebarLayout {...args}>
    <SidebarLayoutNav>
      <SidebarLayoutNavHeader>
        <SidebarLayoutNavHeaderButton imgLogo={<svg />} textLogo={<svg />} />
      </SidebarLayoutNavHeader>
      <SidebarLayoutNavItems>
        <SidebarLayoutNavItem
          iconName="crystal-ball"
          label="Explore This"
          onClick={() => doSomething}
        />
        <SidebarLayoutNavItem
          iconName="megaphone"
          label="Explore That"
          onClick={() => doSomething}
        />
      </SidebarLayoutNavItems>
      <SidebarLayoutNavFooter>
        <SidebarLayoutNavFooterItem
          iconName="settings-gear"
          label="Settings"
          onClick={() => doSomething}
        />
        <SidebarLayoutNavAvatar
          imageSrc="image.jpg"
          name="Super Dave"
          onClick={() => doSomething}
        />
      </SidebarLayoutNavFooter>
    </SidebarLayoutNav>
    <SidebarLayoutContent>Content goes here.</SidebarLayoutContent>
  </SidebarLayout>
</SidebarLayoutProvider>
`}),`
`,a.jsxs(o.p,{children:[a.jsx(o.code,{children:"SidebarLayoutNav"})," leverages the same properties as ",a.jsx(o.a,{href:"/docs/components-resizable--docs",children:"ResizablePanel"}),"."]}),`
`,a.jsx(d,{of:u,sourceState:"none"})]})}function J(t={}){const{wrapper:o}={...r(),...t.components};return o?a.jsx(o,{...t,children:a.jsx(e,{...t})}):e(t)}export{J as default};
