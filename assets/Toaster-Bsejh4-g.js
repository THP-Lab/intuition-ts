import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as i}from"./index-DSkyVWTJ.js";import{M as e,T as m,d as s,C as n,e as c}from"./index-DLu5awkq.js";import{S as p,B as u,I as x,a as d,E as h}from"./Toaster.stories-BRNfSc51.js";import"./index-CTjT7uj6.js";import"./iframe-Cm9ajbgI.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./Trunctacular-CJOIAuVG.js";import"./index-Bb4qSo10.js";import"./index-jZxEZZ9l.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./Icon.types-Csn6eVsj.js";import"./Text-CIyuOUAi.js";import"./Label-l7hlfg-Q.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-CZqSfr2M.js";import"./ProgressCard-HIGHqO49.js";import"./progress-DxZziHAc.js";import"./QuestCriteriaCard-DU_nEwuR.js";import"./QuestCriteriaDisplay-BOc2v1Da.js";import"./quest-BMAtC6cg.js";import"./QuestPointsDisplay-DOFHvDSK.js";import"./QuestSetCard-CAqByP9R.js";import"./QuestStatusIndicator-DjnhoyJG.js";import"./SegmentedControl-Dt9e-2dS.js";import"./Separator-DqkY-AaL.js";import"./Skeleton-CGZOk8OX.js";import"./Table-Cj9ooZRp.js";import"./Textarea-BN2eJ_eZ.js";import"./ValueDisplay-OcmgwD6b.js";function a(r){const o={h2:"h2",h3:"h3",h4:"h4",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(e,{of:p}),`
`,t.jsx(m,{}),`
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
`,t.jsx(n,{of:u,sourceState:"none"}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(c,{}),`
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
`,t.jsx(n,{of:h,sourceState:"none"})]})}function Z(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(a,{...r})}):a(r)}export{Z as default};
