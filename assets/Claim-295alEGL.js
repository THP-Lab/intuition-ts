import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as n}from"./index-DSkyVWTJ.js";import{M as s,T as m,d as o,C as r,e as c}from"./index-Bl8Xd3JS.js";import"./Tooltip-C76MCh6_.js";import"./Icon.types-CdnF8hRC.js";import"./Input-ChUPLhCP.js";import"./Label-BE9934Bx.js";import"./PieChart-B_dtFskq.js";import"./Resizable-CYN5O2qj.js";import"./SegmentedControl-C8563B2q.js";import"./Separator-upiNYcQT.js";import"./Table-BRTqj0wF.js";import"./Text-dMYK5Tk0.js";import"./Textarea-D_YQ6kc-.js";import"./ValueDisplay-BU89B4rt.js";import{S as p,B as l,U as d}from"./Claim.stories-DG9T4_DL.js";import"./index-CTjT7uj6.js";import"./iframe-CQr0hUZs.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-BIDtd1lf.js";import"./palette-saq09hvB.js";function a(e){const i={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...n(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:p}),`
`,t.jsx(m,{}),`
`,t.jsx(i.h4,{id:"to-display-a-claim-with-subject-predicate-and-object",children:"To display a claim with subject, predicate, and object"}),`
`,t.jsx(o,{dark:!0,language:"tsx",code:`
import { Claim } from '@0xintuition/1ui'

<Claim
  size="md"
  subject={{
    variant: 'default',
    label: '0xintuition',
  }}
  predicate={{ label: 'is really' }}
  object={{ label: 'cool' }}
/>
`}),`
`,t.jsx(r,{of:l,sourceState:"none"}),`
`,t.jsx(i.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(c,{}),`
`,t.jsx(i.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(i.h3,{id:"user",children:"User"}),`
`,t.jsxs(i.p,{children:["With the ",t.jsx(i.code,{children:"user"})," variant of ",t.jsx(i.code,{children:"Identity"})]}),`
`,t.jsx(o,{dark:!0,language:"tsx",code:`
import { Claim } from '@0xintuition/1ui'

<Claim
  size="md"
  subject={{
    variant: 'user',
    label: 'Alice',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BNDhiMWYzMjgtNTRiYi00ZTA3LThlODctNDRkMDk0NzFkMWI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg0MTkzMzA@._V1_.jpg',
  }}
  predicate={{ label: 'likes' }}
  object={{ label: 'pizza' }}

/>
`}),`
`,t.jsx(r,{of:d,sourceState:"none"})]})}function R(e={}){const{wrapper:i}={...n(),...e.components};return i?t.jsx(i,{...e,children:t.jsx(a,{...e})}):a(e)}export{R as default};
