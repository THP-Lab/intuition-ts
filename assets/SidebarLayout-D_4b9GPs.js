import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as i,T as n,d as m,C as d}from"./index-CuB-VDwd.js";import"./Avatar-BqFJ6ENc.js";import"./Badge-BlZKMVE_.js";import"./Identity-B5T8pjat.js";import"./Input-CFrL2YAq.js";import"./Separator-ho1Nl6GX.js";import"./Text-BJFUDWxl.js";import"./Resizable-DNd95Y6K.js";import"./Icon-Ba3_jQfB.js";import"./Textarea-DpSkS59a.js";import"./Label-FZHk6kRz.js";import"./Table-Cj0PeqN2.js";import"./ValueDisplay-CeuIe0pc.js";import"./SegmentedControl-DewWK8dB.js";import{S as s,B as u}from"./SidebarLayout.stories-Bt5LbEdF.js";import"./index-CTjT7uj6.js";import"./iframe-Da7C98Pf.js";import"../sb-preview/runtime.js";import"./index-D62jTv_I.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-BPrHwcGF.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-B7U7eni1.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";function t(o){const e={a:"a",code:"code",h4:"h4",p:"p",...r(),...o.components};return a.jsxs(a.Fragment,{children:[a.jsx(i,{of:s}),`
`,a.jsx(n,{}),`
`,a.jsx(e.h4,{id:"a-two-panel-layout-with-a-built-in-resizable-side-nav",children:"A two-panel layout with a built in resizable side nav."}),`
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
`,a.jsxs(e.p,{children:[a.jsx(e.code,{children:"SidebarLayoutNav"})," leverages the same properties as ",a.jsx(e.a,{href:"/docs/components-resizable--docs",children:"ResizablePanel"}),"."]}),`
`,a.jsx(d,{of:u,sourceState:"none"})]})}function _(o={}){const{wrapper:e}={...r(),...o.components};return e?a.jsx(e,{...o,children:a.jsx(t,{...o})}):t(o)}export{_ as default};
