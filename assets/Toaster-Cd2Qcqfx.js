import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as e}from"./index-DSkyVWTJ.js";import{M as i,T as c,d as r,C as n,e as m}from"./index-CwzE_U0-.js";import{S as u,B as p,I as x,a as d,E as h}from"./Toaster.stories-BhYm85VI.js";import"./index-CTjT7uj6.js";import"./iframe-B3kDBMWy.js";import"../sb-preview/runtime.js";import"./index-D62jTv_I.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-BPrHwcGF.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./Avatar-BqFJ6ENc.js";import"./index-B7U7eni1.js";import"./palette-saq09hvB.js";import"./Badge-BlZKMVE_.js";import"./index-Bb4qSo10.js";import"./Identity-BmlzQzyN.js";import"./Resizable-DNd95Y6K.js";import"./Input-CFrL2YAq.js";import"./Separator-ho1Nl6GX.js";import"./Text-BJFUDWxl.js";import"./Icon-Ba3_jQfB.js";import"./Textarea-DpSkS59a.js";import"./Label-FZHk6kRz.js";import"./Table-Cj0PeqN2.js";import"./ValueDisplay-CeuIe0pc.js";import"./SegmentedControl-DewWK8dB.js";function a(s){const o={h2:"h2",h3:"h3",h4:"h4",...e(),...s.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:u}),`
`,t.jsx(c,{}),`
`,t.jsx(o.h4,{id:"a-toaster-component-with-a-toast-utility",children:"A toaster component with a toast utility."}),`
`,t.jsx(r,{dark:!0,language:"tsx",code:`
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
`,t.jsx(r,{dark:!0,language:"tsx",code:`
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
`,t.jsx(r,{dark:!0,language:"tsx",code:`
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
`,t.jsx(r,{dark:!0,language:"tsx",code:`
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
`,t.jsx(n,{of:h,sourceState:"none"})]})}function J(s={}){const{wrapper:o}={...e(),...s.components};return o?t.jsx(o,{...s,children:t.jsx(a,{...s})}):a(s)}export{J as default};
