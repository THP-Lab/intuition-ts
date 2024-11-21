import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as i}from"./index-DSkyVWTJ.js";import{M as n,T as a,d as l,C as m}from"./index-BeTrJyTI.js";import{B as s}from"./TransactionStatusIndicator-DM7TKmNz.js";import"./Checkbox-DDRJNEht.js";import"./Icon.types-B5jDNVEn.js";import"./Label-CxmQ-uUQ.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-CRzF-TB2.js";import"./ProgressCard-CmICkurk.js";import"./ScrollArea-OJYV--XD.js";import"./SegmentedControl-C37gAbXj.js";import"./Separator-h_VeHU5A.js";import"./Skeleton-jKlmpfx8.js";import"./Table-CZzk1Z3b.js";import"./Text-B6S_Q4Gu.js";import"./Textarea-D-Frm5Hg.js";import"./ValueDisplay-azd8k_WK.js";import{S as p,B as c}from"./AlertDialog.stories-BPTCjgK7.js";import"./index-CTjT7uj6.js";import"./iframe-BQfZ3Klt.js";import"../sb-preview/runtime.js";import"./index-1qoTW4fE.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-D-X2Hy5O.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-9o982VWB.js";import"./index-Bb4qSo10.js";function r(o){const e={h4:"h4",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:p}),`
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
`,t.jsx(m,{of:c,sourceState:"none"})]})}function J(o={}){const{wrapper:e}={...i(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(r,{...o})}):r(o)}export{J as default};
