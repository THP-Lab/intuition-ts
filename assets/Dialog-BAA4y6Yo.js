import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as n}from"./index-DSkyVWTJ.js";import{M as r,T as a,d as s,C as l}from"./index-tal4zyBl.js";import"./Avatar-DHlXruik.js";import"./index-bugisSBR.js";import{B as m}from"./RadioGroup-BfYxA_4Y.js";import"./Text-UPqpmiv5.js";import"./Resizable-D6r50leV.js";import"./Icon-C0jZa4Rx.js";import{S as d,B as g}from"./Dialog.stories-2ZqmOzSz.js";import"./index-CTjT7uj6.js";import"./iframe-B5k9dtxy.js";import"../sb-preview/runtime.js";import"./index-B7lOVQLg.js";import"./index-DdAkmXN0.js";import"./extends-CCbyfPlC.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./palette-saq09hvB.js";function t(e){const i={h4:"h4",...n(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{of:d}),`
`,o.jsx(a,{}),`
`,o.jsx(i.h4,{id:"a-window-overlaid-on-either-the-primary-window-or-another-dialog-window-rendering-the-content-underneath-inert",children:"A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."}),`
`,o.jsx(m,{variant:"accent",onClick:()=>window.open("https://www.radix-ui.com/primitives/docs/components/dialog#api-reference","_blank"),children:"API Reference"}),`
`,o.jsx(s,{dark:!0,language:"tsx",code:`
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
`,o.jsx(l,{of:g,sourceState:"none"})]})}function X(e={}){const{wrapper:i}={...n(),...e.components};return i?o.jsx(i,{...e,children:o.jsx(t,{...e})}):t(e)}export{X as default};
