import{j as t}from"./jsx-runtime-qGIIFXMu.js";import{useMDXComponents as e}from"./index-CqcSDpoT.js";import{M as i,T as c,d as s,C as n,e as m}from"./index-BjLM88Nq.js";import{S as u,B as p,I as x,a as d,E as h}from"./Toaster.stories-0-vQIeXi.js";import"./index-CDs2tPxN.js";import"./iframe-Zqd23zKN.js";import"../sb-preview/runtime.js";import"./index-BQ87-lmA.js";import"./index-B-yFm4aN.js";import"./extends-CCbyfPlC.js";import"./index-CcyUcsxs.js";import"./index-rwdFSQ0g.js";import"./index-DXimoRZY.js";import"./index-BH_9z_ur.js";import"./index-DrFu-skq.js";import"./Avatar-lC8ay4Bw.js";import"./index-CCD8SudB.js";import"./index-CBeK71W_.js";import"./index-DI7FrtIC.js";import"./palette-saq09hvB.js";import"./Button-DIxyx14P.js";import"./index-Bb4qSo10.js";import"./createLucideIcon-BucF5Q8I.js";import"./Switch-ByJth10Q.js";import"./Icon-C_fIsRl8.js";import"./index-CKUEfieN.js";import"./Command-BXO-Mg7H.js";import"./Tooltip-DgChau7Z.js";import"./Text-C1Eb4vO9.js";import"./Resizable-DHQBnRfD.js";import"./SidebarLayoutNavAvatar-BgyG1spr.js";function a(r){const o={h2:"h2",h3:"h3",h4:"h4",...e(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:u}),`
`,t.jsx(c,{}),`
`,t.jsx(o.h4,{id:"a-toaster-component-with-a-toast-utility",children:"A toaster component with a toast utility."}),`
`,t.jsx(s,{dark:!0,language:"tsx",code:`
import { Toaster, toast } from '@0xintuition/1ui'

<>
  <Toaster />
  <Button size="lg" onClick={() => toast('I am a toast!')}>
    Launch toast
  </Button>
</>
`}),`
`,t.jsx(n,{of:p,sourceState:"none"}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(m,{}),`
`,t.jsx(o.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(o.h3,{id:"info",children:"Info"}),`
`,t.jsx(s,{dark:!0,language:"tsx",code:`
<>
  <Toaster />
  <Button
    size="lg"
    variant="accent"
    onClick={() => toast.info('I am an info toast!')}
  >
    Launch toast
  </Button>
</>
`}),`
`,t.jsx(n,{of:x,sourceState:"none"}),`
`,t.jsx(o.h3,{id:"success",children:"Success"}),`
`,t.jsx(s,{dark:!0,language:"tsx",code:`
<>
  <Toaster />
  <Button
    size="lg"
    variant="success"
    onClick={() => toast.success('I am a success toast!')}
  >
    Launch toast
  </Button>
</>
`}),`
`,t.jsx(n,{of:d,sourceState:"none"}),`
`,t.jsx(o.h3,{id:"error",children:"Error"}),`
`,t.jsx(s,{dark:!0,language:"tsx",code:`
<>
  <Toaster />
  <Button
    size="lg"
    variant="destructive"
    onClick={() => toast.error('I am an error toast!')}
  >
    Launch toast
  </Button>
</>
`}),`
`,t.jsx(n,{of:h,sourceState:"none"})]})}function K(r={}){const{wrapper:o}={...e(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(a,{...r})}):a(r)}export{K as default};
