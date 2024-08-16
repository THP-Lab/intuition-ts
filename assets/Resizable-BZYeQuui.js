import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as o}from"./index-DSkyVWTJ.js";import{M as l,T as s,d as n,C as t}from"./index-CjOY-Whl.js";import{B as p}from"./AlertDialog-BiTR62v-.js";import"./Checkbox-De90WoB4.js";import"./Icon.types-7PkJ3kFX.js";import"./Label-CkICs1_r.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-Bfgyotpp.js";import"./ProgressCard-BYKzYHAL.js";import"./SegmentedControl-DQCOk3Kf.js";import"./Separator-juOyYLvc.js";import"./Skeleton-pYLGnhFW.js";import"./Table-JXx_s4Wj.js";import"./Text-COZqca-9.js";import"./Textarea-74mgfiS7.js";import"./ValueDisplay-BLpqF4VW.js";import"./Banner-BQ9cebq8.js";import{S as d,B as m,V as b,a as u}from"./Resizable.stories-BG3L5c3L.js";import"./index-CTjT7uj6.js";import"./iframe-Cvdltt8H.js";import"../sb-preview/runtime.js";import"./index-BqnMPuz1.js";import"./index-DVBfyTD9.js";import"./index-9r8iugjR.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-Ca1CH5Oj.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";function r(i){const a={h2:"h2",h3:"h3",h4:"h4",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d}),`
`,e.jsx(s,{}),`
`,e.jsx(a.h4,{id:"accessible-resizable-panel-groups-and-layouts-with-keyboard-support",children:"Accessible resizable panel groups and layouts with keyboard support."}),`
`,e.jsx(p,{variant:"accent",onClick:()=>window.open("https://github.com/bvaughn/react-resizable-panels/tree/main/packages/react-resizable-panels","_blank"),children:"API Reference"}),`
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
`,e.jsx(t,{of:u,sourceState:"none"})]})}function J(i={}){const{wrapper:a}={...o(),...i.components};return a?e.jsx(a,{...i,children:e.jsx(r,{...i})}):r(i)}export{J as default};
