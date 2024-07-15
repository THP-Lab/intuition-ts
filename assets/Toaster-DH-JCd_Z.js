import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as e}from"./index-DSkyVWTJ.js";import{M as i,T as c,d as r,C as n,e as m}from"./index-C5XlIg-n.js";import{S as u,B as p,I as x,a as d,E as h}from"./Toaster.stories-jPk5Q2DV.js";import"./index-CTjT7uj6.js";import"./iframe-DipD9gOY.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./QuestCard-BYQ2a1mA.js";import"./QuestStatusIndicator-_HPKLqrf.js";import"./Icon.types-DvvrcWKg.js";import"./index-DgtlF2hQ.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./Text-DsVeH9qI.js";import"./index-Bb4qSo10.js";import"./Label-BSnWqvXc.js";import"./PieChart-B_dtFskq.js";import"./SegmentedControl-C43o2uqF.js";import"./Separator-8RGezXAr.js";import"./Table-C0qIXiUM.js";import"./Textarea-CUiVvNKI.js";import"./ValueDisplay-D2U_pdiu.js";import"./ProgressBar-D75vLLzs.js";import"./QuestSetCard-gHXGTuki.js";function a(s){const o={h2:"h2",h3:"h3",h4:"h4",...e(),...s.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:u}),`
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
