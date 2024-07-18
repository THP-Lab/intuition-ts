import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as o}from"./index-DSkyVWTJ.js";import{M as l,T as s,d as t,C as n}from"./index-CPt3gzFX.js";import{B as p}from"./QuestCard-D64eSUEy.js";import"./Icon.types-DvvrcWKg.js";import"./Label-BSnWqvXc.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-D75vLLzs.js";import"./ProgressCard-BrCNH_y5.js";import"./SegmentedControl-C43o2uqF.js";import"./Separator-8RGezXAr.js";import"./Table-C0qIXiUM.js";import"./Text-DsVeH9qI.js";import"./Textarea-CUiVvNKI.js";import"./ValueDisplay-D2U_pdiu.js";import"./QuestSetCard-DXHyju0d.js";import"./QuestStatusIndicator-Dppz0ehK.js";import"./QuestCriteriaCard-A0DJuMkI.js";import"./QuestCriteriaDisplay-BzNuGZIV.js";import"./QuestPointsDisplay-ejZCRmtZ.js";import"./Skeleton-BtFXuCOi.js";import{S as d,B as m,V as b,a as u}from"./Resizable.stories-CaRLqCL4.js";import"./index-CTjT7uj6.js";import"./iframe-DjUcgIEC.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-DgtlF2hQ.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./quest-DnP0Hcox.js";import"./progress-DxZziHAc.js";function r(i){const a={h2:"h2",h3:"h3",h4:"h4",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d}),`
`,e.jsx(s,{}),`
`,e.jsx(a.h4,{id:"accessible-resizable-panel-groups-and-layouts-with-keyboard-support",children:"Accessible resizable panel groups and layouts with keyboard support."}),`
`,e.jsx(p,{variant:"accent",onClick:()=>window.open("https://github.com/bvaughn/react-resizable-panels/tree/main/packages/react-resizable-panels","_blank"),children:"API Reference"}),`
`,e.jsx(t,{dark:!0,language:"tsx",code:`
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
`,e.jsx(n,{of:m,sourceState:"none"}),`
`,e.jsx(a.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(a.h3,{id:"vertical",children:"Vertical"}),`
`,e.jsx(t,{dark:!0,language:"tsx",code:`
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
`,e.jsx(n,{of:b,sourceState:"none"}),`
`,e.jsx(a.h3,{id:"sidebar",children:"Sidebar"}),`
`,e.jsx(t,{dark:!0,language:"tsx",code:`
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
`,e.jsx(n,{of:u,sourceState:"none"})]})}function Y(i={}){const{wrapper:a}={...o(),...i.components};return a?e.jsx(a,{...i,children:e.jsx(r,{...i})}):r(i)}export{Y as default};
