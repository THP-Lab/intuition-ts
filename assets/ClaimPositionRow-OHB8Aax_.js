import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as e,T as m,d as n,C as r,e as p}from"./index-ycGxGkfk.js";import"./TransactionStatusIndicator-B3Y_MXqP.js";import"./Checkbox-CPOTdBJo.js";import"./Icon.types-C3De9izv.js";import"./Label-CgXaQSDT.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-CLwyaxSZ.js";import"./ProgressCard-W_leyiJE.js";import"./ScrollArea-Dpd6zEPX.js";import"./SegmentedControl-DDi9rVur.js";import"./Separator-B4E8D3RY.js";import"./Skeleton-CIfu6pJi.js";import"./Table-sWfaeKPM.js";import"./Text-SXw3eAzI.js";import"./Textarea-C-i5JcFJ.js";import"./ValueDisplay-BdKJoXJc.js";import{S as c,U as d,I as l}from"./ClaimPositionRow.stories-GhW6lYAj.js";import"./index-CTjT7uj6.js";import"./iframe-DCYPFz0E.js";import"../sb-preview/runtime.js";import"./index-1qoTW4fE.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-CfaE_EBA.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-9o982VWB.js";import"./index-Bb4qSo10.js";function s(i){const t={h2:"h2",h3:"h3",h4:"h4",p:"p",...a(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:c}),`
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
