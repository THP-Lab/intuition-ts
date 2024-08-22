import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as s,T as m,d as i,C as n,e as p}from"./index-D20SQN9d.js";import"./AlertDialog-D-DUZV-F.js";import"./Checkbox-BVEY8e8G.js";import"./Icon.types-ByzLpCU-.js";import"./Label-BP8-Mx5Z.js";import"./PieChart-9tI5Soxs.js";import"./ProgressBar-B07pz6pZ.js";import"./ProgressCard-e5tcEEn0.js";import"./SegmentedControl-CoVeRGEn.js";import"./Separator-r-Tg2QWT.js";import"./Skeleton-k6WNkHQZ.js";import"./Table-4UgCNE7H.js";import"./Text-19x_d4-A.js";import"./Textarea-DtV2ds88.js";import"./ValueDisplay-ClYOGsr-.js";import{S as d,U as u,I as l}from"./IdentityPosition.stories-Es9PBT6Y.js";import"./index-CTjT7uj6.js";import"./iframe-CrC6i-gH.js";import"../sb-preview/runtime.js";import"./index-BqnMPuz1.js";import"./index-DVBfyTD9.js";import"./index-9r8iugjR.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-sXcn2mTS.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";function r(e){const o={h2:"h2",h3:"h3",h4:"h4",...a(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:d}),`
`,t.jsx(m,{}),`
`,t.jsx(o.h4,{id:"an-identity-position-component-is-used-to-display-a-position-that-a-user-holds-on-an-identity",children:"An Identity Position component is used to display a position that a user holds on an identity"}),`
`,t.jsx(i,{dark:!0,language:"tsx",code:`
import { IdentityPosition } from '@0xintuition/1ui'

<IdentityPosition
  variant="user"
  avatarSrc="https://avatars.githubusercontent.com/u/94311139?s=200&v=4"
  name="John Doe"
  walletAddress="0x1234567890abcdef1234567890abcdef12345678"
  amount={1.21}
  feesAccrued={0.005}
  updatedAt="2021-10-01T16:00:00Z"
/>
`}),`
`,t.jsx(n,{of:u,sourceState:"none"}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(p,{}),`
`,t.jsx(o.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(o.h3,{id:"entity",children:"Entity"}),`
`,t.jsx(i,{dark:!0,language:"tsx",code:`
import { IdentityPosition } from '@0xintuition/1ui'
import { Text } from 'components/Text'

<IdentityPosition
  variant="non-user"
  avatarSrc="https://avatars.githubusercontent.com/u/94311139?s=200&v=4"
  name="Amazon"
  walletAddress="0x1234567890abcdef1234567890abcdef12345678"
  amount={1.21}
  feesAccrued={0.005}
  tags={[
    { label: 'keyboard', value: 34 },
    { label: 'ergonomic', value: 56 },
    { label: 'wireless', value: 12 },
    { label: 'gaming', value: 77 },
    { label: 'work', value: 11 },
    { label: 'home', value: 34 },
  ]}
/>
`}),`
`,t.jsx(n,{of:l,sourceState:"none"})]})}function B(e={}){const{wrapper:o}={...a(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(r,{...e})}):r(e)}export{B as default};
