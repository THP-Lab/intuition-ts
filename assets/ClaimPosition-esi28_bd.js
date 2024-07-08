import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import{M as e,T as m,d as n,C as r,e as p}from"./index-Ma-3EkjM.js";import"./Trunctacular-Cb6EfIcd.js";import"./Icon.types-TOnLKPNS.js";import"./Input-BPM31_im.js";import"./Label-DzNLlIBV.js";import"./PieChart-B_dtFskq.js";import"./Resizable-X9Hr8Gxc.js";import"./SegmentedControl-Bhn13kRZ.js";import"./Separator-C_RZmUxf.js";import"./Table-BR553Jwj.js";import"./Text-DdASfXbZ.js";import"./Textarea-qTR3kLUl.js";import"./ValueDisplay-ChJkojwK.js";import{S as c,U as d,I as u}from"./ClaimPosition.stories-OoIjCw8A.js";import"./index-CTjT7uj6.js";import"./iframe-zjlIdMA3.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-D-lcGQm1.js";import"./palette-saq09hvB.js";function a(i){const o={h2:"h2",h3:"h3",h4:"h4",...s(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(e,{of:c}),`
`,t.jsx(m,{}),`
`,t.jsx(o.h4,{id:"a-claim-position-component-is-used-to-display-a-position-on-a-claim",children:"A Claim Position component is used to display a position on a claim"}),`
`,t.jsx(n,{dark:!0,language:"tsx",code:`
import { ClaimPosition } from '@0xintuition/1ui'

<ClaimPosition
  variant="user"
  position="claimFor"
  avatarSrc="https://avatars.githubusercontent.com/u/94311139?s=200&v=4"
  name="John Doe"
  walletAddress="0x1234567890abcdef1234567890abcdef12345678"
  amount={1.21}
  feesAccrued={0.005}
  updatedAt="2021-10-01T16:00:00Z"
/>
`}),`
`,t.jsx(r,{of:d,sourceState:"none"}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(p,{}),`
`,t.jsx(o.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(o.h3,{id:"entity",children:"Entity"}),`
`,t.jsx(n,{dark:!0,language:"tsx",code:`
import { ClaimPosition } from '@0xintuition/1ui'
import { Text } from 'components/Text'

<ClaimPosition
  variant="claim"
  position="claimAgainst"
  claimsFor={30}
  claimsAgainst={70}
  amount={1.21}
  feesAccrued={0.005}
/>
`}),`
`,t.jsx(r,{of:u,sourceState:"none"})]})}function Z(i={}){const{wrapper:o}={...s(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(a,{...i})}):a(i)}export{Z as default};
