import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as i}from"./index-DSkyVWTJ.js";import{M as s,T as m,d as n,C as a,e as l}from"./index-Cnf8KTLG.js";import"./IdentitySearchCombobox-CDoaH6By.js";import"./Icon.types-pRyTQzB2.js";import"./Input-ChUPLhCP.js";import"./Label-BE9934Bx.js";import"./PieChart-B_dtFskq.js";import"./Resizable-CYN5O2qj.js";import"./SegmentedControl-C8563B2q.js";import"./Separator-upiNYcQT.js";import"./Table-BRTqj0wF.js";import"./Text-dMYK5Tk0.js";import"./Textarea-D_YQ6kc-.js";import"./ValueDisplay-BU89B4rt.js";import{S as p,U as u,E as d}from"./IdentityContentRow.stories-Ci4Wr5Z7.js";import"./index-CTjT7uj6.js";import"./iframe-Crv-9O2X.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-BIDtd1lf.js";import"./palette-saq09hvB.js";function r(o){const e={h2:"h2",h3:"h3",h4:"h4",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:p}),`
`,t.jsx(m,{}),`
`,t.jsx(e.h4,{id:"an-identity-content-row-is-a-component-that-displays-the-identity-information-for-a-user-or-an-entity",children:"An Identity Content Row is a component that displays the identity information for a user or an entity"}),`
`,t.jsx(n,{dark:!0,language:"tsx",code:`
import { IdentityContentRow } from '@0xintuition/1ui'
import { Text } from 'components/Text'

<IdentityContentRow
  variant="user"
  avatarSrc="https://avatars.githubusercontent.com/u/94311139?s=200&v=4"
  name="John Doe"
  walletAddress="0x1234567890abcdef1234567890abcdef12345678"
  amount={1.21}
  totalFollowers={305}
  tags={[
    { label: 'keyboard', value: 34 },
    { label: 'ergonomic', value: 56 },
    { label: 'wireless', value: 12 },
    { label: 'gaming', value: 77 },
    { label: 'work', value: 11 },
    { label: 'home', value: 34 },
  ]}
>
  <Text variant="body" className="text-primary-foreground">
    Extra Content
  </Text>
</IdentityContentRow>
`}),`
`,t.jsx(a,{of:u,sourceState:"none"}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(l,{}),`
`,t.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(e.h3,{id:"entity",children:"Entity"}),`
`,t.jsx(n,{dark:!0,language:"tsx",code:`
import { IdentityContentRow } from '@0xintuition/1ui'
import { Text } from 'components/Text'

<IdentityContentRow
  variant="non-user"
  avatarSrc="https://avatars.githubusercontent.com/u/94311139?s=200&v=4"
  name="Amazon"
  walletAddress="0x1234567890abcdef1234567890abcdef12345678"
  amount={0.321}
  totalFollowers={123}
  tags={[
    { label: 'keyboard', value: 34 },
    { label: 'ergonomic', value: 56 },
    { label: 'wireless', value: 12 },
    { label: 'gaming', value: 77 },
    { label: 'work', value: 11 },
    { label: 'home', value: 34 },
  ]}
>
  <Text variant="body" className="text-primary-foreground">
    Extra Content
  </Text>
</IdentityContentRow>
`}),`
`,t.jsx(a,{of:d,sourceState:"none"})]})}function L(o={}){const{wrapper:e}={...i(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(r,{...o})}):r(o)}export{L as default};
