import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as e,T as m,d as n,C as r,e as p}from"./index-C0ekE6uF.js";import"./TransactionStatusIndicator-B45suF28.js";import"./Checkbox-BUyDAOfm.js";import"./Icon.types-BJuqKE1d.js";import"./Label-TnSa-Vb6.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-B07pz6pZ.js";import"./ProgressCard-Di9JTD4k.js";import"./ScrollArea-Dhe45Eev.js";import"./SegmentedControl-CoVeRGEn.js";import"./Separator-DLMkV6af.js";import"./Skeleton-k6WNkHQZ.js";import"./Table-BlSnVnDo.js";import"./Text-BeXQet-m.js";import"./Textarea-DtV2ds88.js";import"./ValueDisplay-ClYOGsr-.js";import{S as c,U as d,I as l}from"./ClaimPositionRow.stories-CZBhsGrz.js";import"./index-CTjT7uj6.js";import"./iframe-5FbW-IxI.js";import"../sb-preview/runtime.js";import"./index-1qoTW4fE.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-sXcn2mTS.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-9o982VWB.js";import"./index-Bb4qSo10.js";function s(i){const t={h2:"h2",h3:"h3",h4:"h4",p:"p",...a(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:c}),`
`,o.jsx(m,{}),`
`,o.jsx(t.h4,{id:"a-claim-position-component-is-used-to-display-a-position-on-a-claim",children:"A Claim Position component is used to display a position on a claim"}),`
`,o.jsx(n,{dark:!0,language:"tsx",code:`
import { ClaimPositionRow } from '@0xintuition/1ui'

<ClaimPositionRow
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
`,o.jsx(r,{of:d,sourceState:"none"}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(p,{}),`
`,o.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,o.jsx(t.h3,{id:"entity",children:"Entity"}),`
`,o.jsx(n,{dark:!0,language:"tsx",code:`
import { ClaimPositionRow } from '@0xintuition/1ui'
import { Text } from 'components/Text'

<ClaimPositionRow
  variant="claim"
  position="claimAgainst"
  claimsFor={30}
  claimsAgainst={70}
  amount={1.21}
  feesAccrued={0.005}
/>
`}),`
`,o.jsx(r,{of:l,sourceState:"none"}),`
`,o.jsx(t.p,{children:"./ClaimPositionRow.stories"})]})}function H(i={}){const{wrapper:t}={...a(),...i.components};return t?o.jsx(t,{...i,children:o.jsx(s,{...i})}):s(i)}export{H as default};
