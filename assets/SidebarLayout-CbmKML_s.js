import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as i,T as n,d as m,C as d}from"./index-gm_XPJJF.js";import"./Avatar-4zGhZtDZ.js";import"./Badge-DdnwakjS.js";import"./Select-CVck_Aun.js";import"./Input-BOF_Ax6K.js";import"./Separator-C2dyLaF-.js";import"./Text-Ut-2NFPv.js";import"./Resizable-D6r50leV.js";import"./Icon-Cl8ckYc1.js";import"./Textarea-BcMsqAZI.js";import"./Label-CGvHXEnN.js";import{S as u,B as s}from"./SidebarLayout.stories-Blbev3qL.js";import"./index-CTjT7uj6.js";import"./iframe-YRPZ4UzD.js";import"../sb-preview/runtime.js";import"./index-B7lOVQLg.js";import"./index-DdAkmXN0.js";import"./extends-CCbyfPlC.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-CjhMTvA2.js";import"./index-bugisSBR.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";function e(t){const o={h4:"h4",...r(),...t.components};return a.jsxs(a.Fragment,{children:[a.jsx(i,{of:u}),`
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
`,a.jsx(d,{of:s,sourceState:"none"})]})}function z(t={}){const{wrapper:o}={...r(),...t.components};return o?a.jsx(o,{...t,children:a.jsx(e,{...t})}):e(t)}export{z as default};
