import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as n}from"./index-DSkyVWTJ.js";import{M as s,T as m,d as o,C as r,e as p}from"./index-DZOfLO1e.js";import"./Tooltip-DwVgxN7K.js";import"./Avatar-DbIg4tiR.js";import"./Badge-BlZKMVE_.js";import"./ProfileCard-B2XbgE7T.js";import"./Icon-BTTLXkGj.js";import"./Input-BkksL8Pg.js";import"./Label-DWg5NfQ5.js";import"./PieChart-B2bggzNI.js";import"./Resizable-CLGkaN1-.js";import"./SegmentedControl-DewWK8dB.js";import"./Separator-CrpZPajs.js";import"./Table-Cj0PeqN2.js";import"./Text-BJFUDWxl.js";import"./Textarea-zzPGycIM.js";import"./ValueDisplay-CeuIe0pc.js";import{S as c,B as l,U as d}from"./Claim.stories-Yuf0D_C6.js";import"./index-CTjT7uj6.js";import"./iframe-UIz-cfhP.js";import"../sb-preview/runtime.js";import"./index-C1lphb2L.js";import"./index-Ch33dFXB.js";import"./index-BhgyLgKK.js";import"./index-BPrHwcGF.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-B7U7eni1.js";import"./palette-saq09hvB.js";import"./createLucideIcon-BfM7wYCo.js";function a(e){const i={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...n(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:c}),`
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
`,t.jsx(p,{}),`
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
`,t.jsx(r,{of:d,sourceState:"none"})]})}function O(e={}){const{wrapper:i}={...n(),...e.components};return i?t.jsx(i,{...e,children:t.jsx(a,{...e})}):a(e)}export{O as default};
