import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as i,T as n,d as m,C as d}from"./index-JNSOf_yg.js";import"./Avatar-UxDhLsv0.js";import"./Badge-DdnwakjS.js";import"./HoverCard-DZGUrJgR.js";import"./Input-BOF_Ax6K.js";import"./Separator-DYgGFWWP.js";import"./Text-Ut-2NFPv.js";import"./Resizable-D6r50leV.js";import"./Icon-Cl8ckYc1.js";import"./Textarea-BcMsqAZI.js";import"./Label-BD0qxwcT.js";import"./Table-DhRwqTN4.js";import{S as u,B as s}from"./SidebarLayout.stories-Da7ybaI2.js";import"./index-CTjT7uj6.js";import"./iframe-B6eFN1Rm.js";import"../sb-preview/runtime.js";import"./index-D5E_9go9.js";import"./index-DCLEVAFB.js";import"./index-DdAkmXN0.js";import"./index-BPrHwcGF.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-bugisSBR.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";function e(t){const o={h4:"h4",...r(),...t.components};return a.jsxs(a.Fragment,{children:[a.jsx(i,{of:u}),`
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
`,a.jsx(d,{of:s,sourceState:"none"})]})}function B(t={}){const{wrapper:o}={...r(),...t.components};return o?a.jsx(o,{...t,children:a.jsx(e,{...t})}):e(t)}export{B as default};
