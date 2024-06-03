import{j as a}from"./jsx-runtime-qGIIFXMu.js";import{useMDXComponents as r}from"./index-CqcSDpoT.js";import"./Avatar-lC8ay4Bw.js";import"./index-DI7FrtIC.js";import"./Button-DIxyx14P.js";import"./Switch-ByJth10Q.js";import"./Tooltip-DgChau7Z.js";import"./Text-C1Eb4vO9.js";import"./Resizable-DHQBnRfD.js";import"./Icon-C_fIsRl8.js";import"./SidebarLayoutNavAvatar-BgyG1spr.js";import"./Command-BXO-Mg7H.js";import{M as i,T as n,d as m,C as d}from"./index-BjLM88Nq.js";import{S as u,B as s}from"./SidebarLayout.stories-Aabvk1Sa.js";import"./index-CDs2tPxN.js";import"./extends-CCbyfPlC.js";import"./index-CCD8SudB.js";import"./index-B-yFm4aN.js";import"./index-CBeK71W_.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";import"./createLucideIcon-BucF5Q8I.js";import"./index-CcyUcsxs.js";import"./index-CKUEfieN.js";import"./index-rwdFSQ0g.js";import"./index-BQ87-lmA.js";import"./iframe-Zqd23zKN.js";import"../sb-preview/runtime.js";import"./index-DXimoRZY.js";import"./index-BH_9z_ur.js";import"./index-DrFu-skq.js";function e(t){const o={h4:"h4",...r(),...t.components};return a.jsxs(a.Fragment,{children:[a.jsx(i,{of:u}),`
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
  SidebarLayoutNavHeaderContent,
  SidebarLayoutNavItem,
  SidebarLayoutNavItems,
  SidebarLayoutProvider, 
} from '@0xintuition/1ui'

<SidebarLayoutProvider>
  <SidebarLayout {...args}>
    <SidebarLayoutNav>
      <SidebarLayoutNavHeader>
        <SidebarLayoutNavHeaderContent imgLogo={<svg />} textLogo={<svg />} />
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
`,a.jsx(d,{of:s,sourceState:"none"})]})}function U(t={}){const{wrapper:o}={...r(),...t.components};return o?a.jsx(o,{...t,children:a.jsx(e,{...t})}):e(t)}export{U as default};
