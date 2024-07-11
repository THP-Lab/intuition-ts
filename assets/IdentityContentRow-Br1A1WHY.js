import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as i}from"./index-DSkyVWTJ.js";import{M as s,T as m,d as n,C as r,e as l}from"./index-CGj0Zw4i.js";import"./QuestStatusCard-CgBHQXpo.js";import"./QuestSetProgressCard-lZkOsrNz.js";import"./Icon.types-bVvTOTyL.js";import"./Label-hoJUpLlw.js";import"./PieChart-B_dtFskq.js";import"./Resizable-vl710Htm.js";import"./SegmentedControl-CpGzRY7X.js";import"./Separator-ClB74Fps.js";import"./Table-DoQDVlQC.js";import"./Text-DRgAEttF.js";import"./Textarea-w5FyYqF_.js";import"./ValueDisplay-BGyvBqcS.js";import"./ProgressBar-DJT993xg.js";import{S as p,U as u,E as d}from"./IdentityContentRow.stories-BGCL1OpW.js";import"./index-CTjT7uj6.js";import"./iframe-Dy5Brjae.js";import"../sb-preview/runtime.js";import"./index-Ba1MzMRK.js";import"./index-DBez60WA.js";import"./index-BSh8g_S6.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-DeHqaMYO.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";import"./createLucideIcon-BfM7wYCo.js";function a(o){const e={h2:"h2",h3:"h3",h4:"h4",...i(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:p}),`
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
`,t.jsx(r,{of:u,sourceState:"none"}),`
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
`,t.jsx(r,{of:d,sourceState:"none"})]})}function G(o={}){const{wrapper:e}={...i(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(a,{...o})}):a(o)}export{G as default};
