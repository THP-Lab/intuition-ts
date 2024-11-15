import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as o}from"./index-DSkyVWTJ.js";import{M as l,T as s,d as n,C as t}from"./index-ycGxGkfk.js";import{B as p}from"./TransactionStatusIndicator-B3Y_MXqP.js";import"./Checkbox-CPOTdBJo.js";import"./Icon.types-C3De9izv.js";import"./Label-CgXaQSDT.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-CLwyaxSZ.js";import"./ProgressCard-W_leyiJE.js";import"./ScrollArea-Dpd6zEPX.js";import"./SegmentedControl-DDi9rVur.js";import"./Separator-B4E8D3RY.js";import"./Skeleton-CIfu6pJi.js";import"./Table-sWfaeKPM.js";import"./Text-SXw3eAzI.js";import"./Textarea-C-i5JcFJ.js";import"./ValueDisplay-BdKJoXJc.js";import{S as d,B as m,V as b,a as u}from"./Resizable.stories-CrVFCreC.js";import"./index-CTjT7uj6.js";import"./iframe-DCYPFz0E.js";import"../sb-preview/runtime.js";import"./index-1qoTW4fE.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-CfaE_EBA.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-9o982VWB.js";import"./index-Bb4qSo10.js";function r(i){const a={h2:"h2",h3:"h3",h4:"h4",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d}),`
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
