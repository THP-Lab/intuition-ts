import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as i}from"./index-DSkyVWTJ.js";import{M as m,T as s,d as n,C as r,e as l}from"./index-DCzPysel.js";import"./Tooltip-DcoLXkMZ.js";import"./Avatar-BUaynhXT.js";import"./Badge-D2xxBGMY.js";import"./Button-CzEHE8a5.js";import"./Icon.types-DkS0gbR0.js";import"./MonetaryValue-BH-vZ3Wu.js";import"./Input-DFWTvv6T.js";import"./Label-ByAlek89.js";import"./PieChart-B_dtFskq.js";import"./PositionCardStaked-CSnDpiat.js";import"./ProfileCard-Nm5GFBZ4.js";import"./Resizable-Dk6Cp6at.js";import"./SegmentedControl-DbX5wOQO.js";import"./Separator-Ct33SRfh.js";import"./Table-D9p853bW.js";import"./Text-ANaTnboW.js";import"./Textarea-Ds9ZbOCk.js";import"./ValueDisplay-2lt2w_5b.js";import{S as p,U as u,E as d}from"./IdentityContentRow.stories-PHspGc3-.js";import"./index-CTjT7uj6.js";import"./iframe-BfwKAbwT.js";import"../sb-preview/runtime.js";import"./index-D3WfGLRt.js";import"./index-DBez60WA.js";import"./index-BPrHwcGF.js";import"./index-BSh8g_S6.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-CNBET2ao.js";import"./palette-saq09hvB.js";import"./createLucideIcon-BfM7wYCo.js";function a(e){const o={h2:"h2",h3:"h3",h4:"h4",...i(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{of:p}),`
`,t.jsx(s,{}),`
`,t.jsx(o.h4,{id:"an-identity-content-row-is-a-component-that-displays-the-identity-information-for-a-user-or-an-entity",children:"An Identity Content Row is a component that displays the identity information for a user or an entity"}),`
`,t.jsx(n,{dark:!0,language:"tsx",code:`
import { IdentityContentRow } from '@0xintuition/1ui'
import { Text } from 'components/Text'

<IdentityContentRow
  variant="user"
  avatarSrc="https://avatars.githubusercontent.com/u/94311139?s=200&v=4"
  name="John Doe"
  walletAddress="0x1234567890abcdef1234567890abcdef12345678"
  amount="1.210 ETH"
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
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(l,{}),`
`,t.jsx(o.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(o.h3,{id:"entity",children:"Entity"}),`
`,t.jsx(n,{dark:!0,language:"tsx",code:`
import { IdentityContentRow } from '@0xintuition/1ui'
import { Text } from 'components/Text'

<IdentityContentRow
  variant="entity"
  avatarSrc="https://avatars.githubusercontent.com/u/94311139?s=200&v=4"
  name="Amazon"
  walletAddress="0x1234567890abcdef1234567890abcdef12345678"
  amount="0.321 ETH"
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
`,t.jsx(r,{of:d,sourceState:"none"})]})}function W(e={}){const{wrapper:o}={...i(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(a,{...e})}):a(e)}export{W as default};
