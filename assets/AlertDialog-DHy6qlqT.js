import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as i}from"./index-DSkyVWTJ.js";import{M as n,T as a,d as l,C as s}from"./index-XfgPeUmG.js";import{B as m}from"./AlertDialog-GapZpS-e.js";import"./Checkbox-BGNaxvcv.js";import"./Icon.types-cBi97MNl.js";import"./Label-BP8-Mx5Z.js";import"./PieChart-9tI5Soxs.js";import"./ProgressBar-B07pz6pZ.js";import"./ProgressCard-e5tcEEn0.js";import"./SegmentedControl-CoVeRGEn.js";import"./Separator-r-Tg2QWT.js";import"./Skeleton-k6WNkHQZ.js";import"./Table-4UgCNE7H.js";import"./Text-19x_d4-A.js";import"./Textarea-DtV2ds88.js";import"./ValueDisplay-ClYOGsr-.js";import{S as p,B as c}from"./AlertDialog.stories-mGolPGag.js";import"./index-CTjT7uj6.js";import"./iframe-sLJU9E5z.js";import"../sb-preview/runtime.js";import"./index-BqnMPuz1.js";import"./index-DVBfyTD9.js";import"./index-9r8iugjR.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-sXcn2mTS.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";function r(o){const e={h4:"h4",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:p}),`
`,t.jsx(a,{}),`
`,t.jsx(e.h4,{id:"a-modal-dialog-that-interrupts-the-user-with-important-content-and-expects-a-response",children:"A modal dialog that interrupts the user with important content and expects a response."}),`
`,t.jsx(m,{variant:"accent",onClick:()=>window.open("https://www.radix-ui.com/primitives/docs/components/alert-dialog#api-reference","_blank"),children:"API Reference"}),`
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
`,t.jsx(s,{of:c,sourceState:"none"})]})}function q(o={}){const{wrapper:e}={...i(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(r,{...o})}):r(o)}export{q as default};
