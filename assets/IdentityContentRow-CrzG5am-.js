import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as i}from"./index-DSkyVWTJ.js";import{M as s,T as m,d as n,C as r,e as l}from"./index-DaKTwIRJ.js";import"./QuestCard-oNbg6jzY.js";import"./Icon.types-DvvrcWKg.js";import"./Label-BSnWqvXc.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-D75vLLzs.js";import"./ProgressCard-BrCNH_y5.js";import"./SegmentedControl-C43o2uqF.js";import"./Separator-8RGezXAr.js";import"./Table-C0qIXiUM.js";import"./Text-DsVeH9qI.js";import"./Textarea-CUiVvNKI.js";import"./ValueDisplay-D2U_pdiu.js";import"./QuestSetCard-D4w27tWJ.js";import"./QuestStatusIndicator-Dppz0ehK.js";import"./QuestCriteriaCard-A0DJuMkI.js";import"./QuestCriteriaDisplay-BzNuGZIV.js";import"./QuestPointsDisplay-ejZCRmtZ.js";import{S as p,U as u,E as d}from"./IdentityContentRow.stories-BqvjQkPq.js";import"./index-CTjT7uj6.js";import"./iframe-DXMD3QVT.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-DgtlF2hQ.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./quest-DnP0Hcox.js";import"./progress-DxZziHAc.js";function a(e){const o={h2:"h2",h3:"h3",h4:"h4",...i(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:p}),`
`,t.jsx(m,{}),`
`,t.jsx(o.h4,{id:"an-identity-content-row-is-a-component-that-displays-the-identity-information-for-a-user-or-an-entity",children:"An Identity Content Row is a component that displays the identity information for a user or an entity"}),`
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
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(l,{}),`
`,t.jsx(o.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(o.h3,{id:"entity",children:"Entity"}),`
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
`,t.jsx(r,{of:d,sourceState:"none"})]})}function Q(e={}){const{wrapper:o}={...i(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(a,{...e})}):a(e)}export{Q as default};
