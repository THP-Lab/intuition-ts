import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import{M as r,T as o,d as n,C as t}from"./index-CuiwBVEs.js";import"./Avatar-4zGhZtDZ.js";import"./index-bugisSBR.js";import{B as p}from"./RadioGroup-C4bq5qAy.js";import"./Text-Ut-2NFPv.js";import"./Resizable-D6r50leV.js";import"./Icon-C0jZa4Rx.js";import"./Textarea-DLU_1UrS.js";import"./Label-CGvHXEnN.js";import{S as d,B as b,V as u,a as c}from"./Resizable.stories--Fk1WyPa.js";import"./index-CTjT7uj6.js";import"./iframe-BltSk3ae.js";import"../sb-preview/runtime.js";import"./index-B7lOVQLg.js";import"./index-DdAkmXN0.js";import"./extends-CCbyfPlC.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-CjhMTvA2.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";function l(i){const a={h2:"h2",h3:"h3",h4:"h4",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(o,{}),`
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
`,e.jsx(t,{of:b,sourceState:"none"}),`
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
`,e.jsx(t,{of:u,sourceState:"none"}),`
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
`,e.jsx(t,{of:c,sourceState:"none"})]})}function A(i={}){const{wrapper:a}={...s(),...i.components};return a?e.jsx(a,{...i,children:e.jsx(l,{...i})}):l(i)}export{A as default};
