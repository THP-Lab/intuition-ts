import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as e}from"./index-DSkyVWTJ.js";import{M as i,T as c,d as n,C as r,e as u}from"./index-CE0p5dH6.js";import{S as m,B as x,I as p,a as d,E as h}from"./Toaster.stories-BwReyFEq.js";import"./index-CTjT7uj6.js";import"./iframe-DsbzPvMQ.js";import"../sb-preview/runtime.js";import"./index-B7lOVQLg.js";import"./index-DdAkmXN0.js";import"./extends-CCbyfPlC.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./Avatar-DHlXruik.js";import"./index-bugisSBR.js";import"./palette-saq09hvB.js";import"./Switch-CkLKCI0u.js";import"./Text-UPqpmiv5.js";import"./Resizable-D6r50leV.js";import"./Icon-C0jZa4Rx.js";function a(s){const o={h2:"h2",h3:"h3",h4:"h4",...e(),...s.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:m}),`
`,t.jsx(c,{}),`
`,t.jsx(o.h4,{id:"a-toaster-component-with-a-toast-utility",children:"A toaster component with a toast utility."}),`
`,t.jsx(n,{dark:!0,language:"tsx",code:`
import { Toaster, toast } from '@0xintuition/1ui'

<>
  <Toaster />
  <Button size="lg" onClick={() => toast('I am a toast!')}>
    Launch toast
  </Button>
</>
`}),`
`,t.jsx(r,{of:x,sourceState:"none"}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(u,{}),`
`,t.jsx(o.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(o.h3,{id:"info",children:"Info"}),`
`,t.jsx(n,{dark:!0,language:"tsx",code:`
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
`,t.jsx(r,{of:p,sourceState:"none"}),`
`,t.jsx(o.h3,{id:"success",children:"Success"}),`
`,t.jsx(n,{dark:!0,language:"tsx",code:`
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
`,t.jsx(r,{of:d,sourceState:"none"}),`
`,t.jsx(o.h3,{id:"error",children:"Error"}),`
`,t.jsx(n,{dark:!0,language:"tsx",code:`
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
`,t.jsx(r,{of:h,sourceState:"none"})]})}function A(s={}){const{wrapper:o}={...e(),...s.components};return o?t.jsx(o,{...s,children:t.jsx(a,{...s})}):a(s)}export{A as default};
