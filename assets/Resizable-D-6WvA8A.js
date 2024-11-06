import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as o}from"./index-DSkyVWTJ.js";import{M as l,T as s,d as n,C as t}from"./index-DyQLgbBC.js";import{B as p}from"./AlertDialog-rYGbkc7W.js";import"./Checkbox-BhpbQMJC.js";import"./Icon.types-cBi97MNl.js";import"./Label-BP8-Mx5Z.js";import"./PieChart-9tI5Soxs.js";import"./ProgressBar-B07pz6pZ.js";import"./ProgressCard-Di9JTD4k.js";import"./SegmentedControl-CoVeRGEn.js";import"./Separator-r-Tg2QWT.js";import"./Skeleton-k6WNkHQZ.js";import"./Table-BlSnVnDo.js";import"./Text-BeXQet-m.js";import"./Textarea-DtV2ds88.js";import"./ValueDisplay-ClYOGsr-.js";import"./ScrollArea-B2SgIFBV.js";import{S as d,B as m,V as b,a as u}from"./Resizable.stories-CvtSIqIN.js";import"./index-CTjT7uj6.js";import"./iframe-BouWKvKU.js";import"../sb-preview/runtime.js";import"./index-wo0pwFmI.js";import"./index-DVBfyTD9.js";import"./index-9r8iugjR.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-G5r2yAnn.js";import"./index-Bb4qSo10.js";import"./index-sXcn2mTS.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";function r(i){const a={h2:"h2",h3:"h3",h4:"h4",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d}),`
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
`,e.jsx(t,{of:u,sourceState:"none"})]})}function K(i={}){const{wrapper:a}={...o(),...i.components};return a?e.jsx(a,{...i,children:e.jsx(r,{...i})}):r(i)}export{K as default};
