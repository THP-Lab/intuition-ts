import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as n,T as a,d as m,C as s}from"./index-BKfWZafL.js";import"./Avatar-4zGhZtDZ.js";import"./index-bugisSBR.js";import{B as l}from"./RadioGroup-DRzIMFnL.js";import"./Input-BOF_Ax6K.js";import"./Text-Ut-2NFPv.js";import"./Resizable-D6r50leV.js";import"./Icon-C0jZa4Rx.js";import"./Textarea-BcMsqAZI.js";import"./Label-CGvHXEnN.js";import{S as p,B as d}from"./Dialog.stories-PdyR5789.js";import"./index-CTjT7uj6.js";import"./iframe-Q9ATBNdc.js";import"../sb-preview/runtime.js";import"./index-B7lOVQLg.js";import"./index-DdAkmXN0.js";import"./extends-CCbyfPlC.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-CjhMTvA2.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";function e(i){const t={h4:"h4",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:p}),`
`,o.jsx(a,{}),`
`,o.jsx(t.h4,{id:"a-window-overlaid-on-either-the-primary-window-or-another-dialog-window-rendering-the-content-underneath-inert",children:"A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."}),`
`,o.jsx(l,{variant:"accent",onClick:()=>window.open("https://www.radix-ui.com/primitives/docs/components/dialog#api-reference","_blank"),children:"API Reference"}),`
`,o.jsx(m,{dark:!0,language:"tsx",code:`
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger, } from '@0xintuition/1ui'

<Dialog>
  <DialogTrigger>
    <Button size="lg">Open dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
`}),`
`,o.jsx(s,{of:d,sourceState:"none"})]})}function F(i={}){const{wrapper:t}={...r(),...i.components};return t?o.jsx(t,{...i,children:o.jsx(e,{...i})}):e(i)}export{F as default};
