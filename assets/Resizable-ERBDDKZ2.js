import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{useMDXComponents as l}from"./index-CqcSDpoT.js";import"./Avatar-lC8ay4Bw.js";import"./index-DI7FrtIC.js";import{B as o}from"./Button-DIxyx14P.js";import"./Switch-ByJth10Q.js";import"./Tooltip-DgChau7Z.js";import"./Text-C1Eb4vO9.js";import"./Resizable-DHQBnRfD.js";import"./Icon-C_fIsRl8.js";import"./SidebarLayoutNavAvatar-BgyG1spr.js";import"./Command-BXO-Mg7H.js";import{M as s,T as p,d as n,C as t}from"./index-CBqhovEj.js";import{S as d,B as m,V as b,a as u}from"./Resizable.stories-qZaw5GEk.js";import"./index-CDs2tPxN.js";import"./extends-CCbyfPlC.js";import"./index-CCD8SudB.js";import"./index-B-yFm4aN.js";import"./index-CBeK71W_.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";import"./createLucideIcon-BucF5Q8I.js";import"./index-CcyUcsxs.js";import"./index-CKUEfieN.js";import"./index-rwdFSQ0g.js";import"./index-BQ87-lmA.js";import"./iframe-28O14N7B.js";import"../sb-preview/runtime.js";import"./index-DXimoRZY.js";import"./index-BH_9z_ur.js";import"./index-DrFu-skq.js";function r(i){const a={h2:"h2",h3:"h3",h4:"h4",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(p,{}),`
`,e.jsx(a.h4,{id:"accessible-resizable-panel-groups-and-layouts-with-keyboard-support",children:"Accessible resizable panel groups and layouts with keyboard support."}),`
`,e.jsx(o,{variant:"accent",onClick:()=>window.open("https://github.com/bvaughn/react-resizable-panels/tree/main/packages/react-resizable-panels","_blank"),children:"API Reference"}),`
`,e.jsx(n,{dark:!0,language:"tsx",code:`
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@0xintuition/1ui'

<ResizablePanelGroup
  direction="horizontal"
>
  <ResizablePanel defaultSize={50}>
    <div>
      <span>One</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={25}>
        <div>
          <span>Two</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div>
          <span>Three</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
`}),`
`,e.jsx(t,{of:m,sourceState:"none"}),`
`,e.jsx(a.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(a.h3,{id:"vertical",children:"Vertical"}),`
`,e.jsx(n,{dark:!0,language:"tsx",code:`
<ResizablePanelGroup
  direction="vertical"
>
  <ResizablePanel defaultSize={50}>
    Top
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    Bottom
  </ResizablePanel>
</ResizablePanelGroup>
`}),`
`,e.jsx(t,{of:b,sourceState:"none"}),`
`,e.jsx(a.h3,{id:"sidebar",children:"Sidebar"}),`
`,e.jsx(n,{dark:!0,language:"tsx",code:`
<ResizablePanelGroup
  direction="horizontal"
>
  <ResizablePanel defaultSize={30}>
    Sidebar
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={70}>
    Content
  </ResizablePanel>
</ResizablePanelGroup>
`}),`
`,e.jsx(t,{of:u,sourceState:"none"})]})}function q(i={}){const{wrapper:a}={...l(),...i.components};return a?e.jsx(a,{...i,children:e.jsx(r,{...i})}):r(i)}export{q as default};
