import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as i}from"./index-DSkyVWTJ.js";import{M as n,T as a,d as l,C as m}from"./index-D_UzIMni.js";import{B as s}from"./AlertDialog-CRkflvB7.js";import"./Checkbox-De90WoB4.js";import"./Icon.types-7PkJ3kFX.js";import"./Label-CkICs1_r.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-Bfgyotpp.js";import"./ProgressCard-BYKzYHAL.js";import"./SegmentedControl-DQCOk3Kf.js";import"./Separator-juOyYLvc.js";import"./Skeleton-pYLGnhFW.js";import"./Table-JXx_s4Wj.js";import"./Text-COZqca-9.js";import"./Textarea-74mgfiS7.js";import"./ValueDisplay-BLpqF4VW.js";import"./Banner-BQ9cebq8.js";import{S as p,B as c}from"./AlertDialog.stories-DADgcfT1.js";import"./index-CTjT7uj6.js";import"./iframe-06Ribu4h.js";import"../sb-preview/runtime.js";import"./index-BqnMPuz1.js";import"./index-DVBfyTD9.js";import"./index-9r8iugjR.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-Ca1CH5Oj.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";function r(o){const e={h4:"h4",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:p}),`
`,t.jsx(a,{}),`
`,t.jsx(e.h4,{id:"a-modal-dialog-that-interrupts-the-user-with-important-content-and-expects-a-response",children:"A modal dialog that interrupts the user with important content and expects a response."}),`
`,t.jsx(s,{variant:"accent",onClick:()=>window.open("https://www.radix-ui.com/primitives/docs/components/alert-dialog#api-reference","_blank"),children:"API Reference"}),`
`,t.jsx(l,{dark:!0,language:"tsx",code:`
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@0xintuition/1ui'

<AlertDialog>
  <AlertDialogTrigger>
    <Button size="lg">Open alert dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
`}),`
`,t.jsx(m,{of:c,sourceState:"none"})]})}function G(o={}){const{wrapper:e}={...i(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(r,{...o})}):r(o)}export{G as default};
