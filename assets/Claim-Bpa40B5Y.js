import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as s,T as m,d as e,C as o,e as p}from"./index-RdMKM7Pj.js";import"./AlertDialog-9G2QIJ12.js";import"./Checkbox-BhpbQMJC.js";import"./Icon.types-cBi97MNl.js";import"./Label-BP8-Mx5Z.js";import"./PieChart-9tI5Soxs.js";import"./ProgressBar-B07pz6pZ.js";import"./ProgressCard-Di9JTD4k.js";import"./SegmentedControl-CoVeRGEn.js";import"./Separator-r-Tg2QWT.js";import"./Skeleton-k6WNkHQZ.js";import"./Table-BlSnVnDo.js";import"./Text-BeXQet-m.js";import"./Textarea-DtV2ds88.js";import"./ValueDisplay-ClYOGsr-.js";import"./ScrollArea-B2SgIFBV.js";import{S as c,B as l,U as d}from"./Claim.stories-MZbS3QDN.js";import"./index-CTjT7uj6.js";import"./iframe-DzMUUNWR.js";import"../sb-preview/runtime.js";import"./index-wo0pwFmI.js";import"./index-DVBfyTD9.js";import"./index-9r8iugjR.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-G5r2yAnn.js";import"./index-Bb4qSo10.js";import"./index-sXcn2mTS.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";function n(r){const i={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...a(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:c}),`
`,t.jsx(m,{}),`
`,t.jsx(i.h4,{id:"to-display-a-claim-with-subject-predicate-and-object",children:"To display a claim with subject, predicate, and object"}),`
`,t.jsx(e,{dark:!0,language:"tsx",code:`
import { Claim } from '@0xintuition/1ui'

<Claim
  size="md"
  subject={{
    variant: 'non-user',
    label: '0xintuition',
  }}
  predicate={{
    variant: 'non-user',
    label: 'is really',
  }}
  object={{
    variant: 'non-user',
    label: 'cool',
  }}
/>
`}),`
`,t.jsx(o,{of:l,sourceState:"none"}),`
`,t.jsx(i.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(p,{}),`
`,t.jsx(i.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(i.h3,{id:"user",children:"User"}),`
`,t.jsxs(i.p,{children:["With the ",t.jsx(i.code,{children:"user"})," variant of ",t.jsx(i.code,{children:"Identity"})]}),`
`,t.jsx(e,{dark:!0,language:"tsx",code:`
import { Claim } from '@0xintuition/1ui'

<Claim
  size="md"
  subject={{
    variant: 'user',
    label: 'Alice',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BNDhiMWYzMjgtNTRiYi00ZTA3LThlODctNDRkMDk0NzFkMWI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg0MTkzMzA@._V1_.jpg',
  }}
  predicate={{
    variant: 'non-user',
    label: 'likes',
  }}
  object={{
    variant: 'non-user',
    label: 'pizza',
  }}

/>
`}),`
`,t.jsx(o,{of:d,sourceState:"none"})]})}function O(r={}){const{wrapper:i}={...a(),...r.components};return i?t.jsx(i,{...r,children:t.jsx(n,{...r})}):n(r)}export{O as default};
