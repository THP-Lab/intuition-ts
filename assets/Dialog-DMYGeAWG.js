import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as n,T as a,d as m,C as p}from"./index-Bzave4_Z.js";import{B as s}from"./TransactionStatusIndicator-D_VxfvH8.js";import"./Icon.types-D9GNVByd.js";import"./Label-l7hlfg-Q.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-CZqSfr2M.js";import"./ProgressCard-Cezx5cpz.js";import"./SegmentedControl-BdOzZl2k.js";import"./Separator-DqkY-AaL.js";import"./Skeleton-CGZOk8OX.js";import"./Table-Cj9ooZRp.js";import"./Text-CIyuOUAi.js";import"./Textarea-BN2eJ_eZ.js";import"./ValueDisplay-OcmgwD6b.js";import{S as l,B as d}from"./Dialog.stories-BWecsX0B.js";import"./index-CTjT7uj6.js";import"./iframe-DafhDQDX.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-jZxEZZ9l.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";function e(i){const t={h4:"h4",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:l}),`
`,o.jsx(a,{}),`
`,o.jsx(t.h4,{id:"a-window-overlaid-on-either-the-primary-window-or-another-dialog-window-rendering-the-content-underneath-inert",children:"A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."}),`
`,o.jsx(s,{variant:"accent",onClick:()=>window.open("https://www.radix-ui.com/primitives/docs/components/dialog#api-reference","_blank"),children:"API Reference"}),`
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
`,o.jsx(p,{of:d,sourceState:"none"})]})}function U(i={}){const{wrapper:t}={...r(),...i.components};return t?o.jsx(t,{...i,children:o.jsx(e,{...i})}):e(i)}export{U as default};
