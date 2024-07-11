import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as s,T as m,d as e,C as n,e as p}from"./index-55yGRXh0.js";import"./QuestStatusCard-DcIECmpp.js";import"./QuestSetProgressCard-lZkOsrNz.js";import"./Icon.types-bVvTOTyL.js";import"./Label-hoJUpLlw.js";import"./PieChart-B_dtFskq.js";import"./Resizable-vl710Htm.js";import"./SegmentedControl-CpGzRY7X.js";import"./Separator-ClB74Fps.js";import"./Table-DoQDVlQC.js";import"./Text-DRgAEttF.js";import"./Textarea-w5FyYqF_.js";import"./ValueDisplay-BGyvBqcS.js";import"./QuestSetCard-DtapH5js.js";import"./ProgressBar-DJT993xg.js";import{S as d,U as u,I as l}from"./IdentityPosition.stories-RzyCpJUy.js";import"./index-CTjT7uj6.js";import"./iframe-JqlC9_O1.js";import"../sb-preview/runtime.js";import"./index-Ba1MzMRK.js";import"./index-DBez60WA.js";import"./index-BSh8g_S6.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-DeHqaMYO.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";import"./createLucideIcon-BfM7wYCo.js";function r(i){const o={h2:"h2",h3:"h3",h4:"h4",...a(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:d}),`
`,t.jsx(m,{}),`
`,t.jsx(o.h4,{id:"an-identity-position-component-is-used-to-display-a-position-that-a-user-holds-on-an-identity",children:"An Identity Position component is used to display a position that a user holds on an identity"}),`
`,t.jsx(e,{dark:!0,language:"tsx",code:`
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
`,t.jsx(e,{dark:!0,language:"tsx",code:`
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
`,t.jsx(n,{of:l,sourceState:"none"})]})}function H(i={}){const{wrapper:o}={...a(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(r,{...i})}):r(i)}export{H as default};
