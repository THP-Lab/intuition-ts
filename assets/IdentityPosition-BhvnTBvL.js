import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as s,T as m,d as i,C as n,e as p}from"./index-CNYa_APy.js";import"./TransactionStatusIndicator-CJJNfqwF.js";import"./Checkbox-DUkdGkqO.js";import"./Icon.types-7PkJ3kFX.js";import"./Label-BcH9Dz7N.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-Bfgyotpp.js";import"./ProgressCard-BYKzYHAL.js";import"./SegmentedControl-DQCOk3Kf.js";import"./Separator-CECijyNn.js";import"./Skeleton-pYLGnhFW.js";import"./Table-JXx_s4Wj.js";import"./Text-COZqca-9.js";import"./Textarea-74mgfiS7.js";import"./ValueDisplay-BLpqF4VW.js";import{S as d,U as u,I as l}from"./IdentityPosition.stories-uYbwrTt2.js";import"./index-CTjT7uj6.js";import"./iframe-0MBkIImr.js";import"../sb-preview/runtime.js";import"./index-C5rLi0fd.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Ca1CH5Oj.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";function r(e){const o={h2:"h2",h3:"h3",h4:"h4",...a(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:d}),`
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
