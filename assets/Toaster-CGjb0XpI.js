import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as e}from"./index-DSkyVWTJ.js";import{M as i,T as c,d as s,C as n,e as m}from"./index-BeTrJyTI.js";import{S as u,B as p,I as x,a as d,E as h}from"./Toaster.stories-CxuUk3SP.js";import"./index-CTjT7uj6.js";import"./iframe-BQfZ3Klt.js";import"../sb-preview/runtime.js";import"./index-1qoTW4fE.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./TransactionStatusIndicator-DM7TKmNz.js";import"./index-D-X2Hy5O.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./Checkbox-DDRJNEht.js";import"./index-9o982VWB.js";import"./Icon.types-B5jDNVEn.js";import"./index-Bb4qSo10.js";import"./Text-B6S_Q4Gu.js";import"./ScrollArea-OJYV--XD.js";import"./Separator-h_VeHU5A.js";import"./Label-CxmQ-uUQ.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-CRzF-TB2.js";import"./ProgressCard-CmICkurk.js";import"./SegmentedControl-C37gAbXj.js";import"./Skeleton-jKlmpfx8.js";import"./Table-CZzk1Z3b.js";import"./Textarea-D-Frm5Hg.js";import"./ValueDisplay-azd8k_WK.js";function a(r){const o={h2:"h2",h3:"h3",h4:"h4",...e(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:u}),`
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
`,t.jsx(n,{of:h,sourceState:"none"})]})}function O(r={}){const{wrapper:o}={...e(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(a,{...r})}):a(r)}export{O as default};
