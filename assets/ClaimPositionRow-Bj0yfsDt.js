import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as m,T as e,d as r,C as n,e as p}from"./index-Bc7JS8cO.js";import"./Trunctacular-Des6CcpU.js";import"./Icon.types-DvvrcWKg.js";import"./Label-BSnWqvXc.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-D75vLLzs.js";import"./ProgressCard-BrCNH_y5.js";import"./QuestCriteriaCard-yWCcMe1c.js";import"./QuestCriteriaDisplay-BeTNNq0T.js";import"./QuestPointsDisplay-BMWi52ZN.js";import"./QuestSetCard-DXHyju0d.js";import"./QuestStatusIndicator-DBJnmA6G.js";import"./SegmentedControl-C43o2uqF.js";import"./Separator-8RGezXAr.js";import"./Skeleton-BtFXuCOi.js";import"./Table-C0qIXiUM.js";import"./Text-DsVeH9qI.js";import"./Textarea-CUiVvNKI.js";import"./ValueDisplay-D2U_pdiu.js";import{S as c,U as d,I as l}from"./ClaimPositionRow.stories-Do99XD0M.js";import"./index-CTjT7uj6.js";import"./iframe-C9QG-1zF.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-DgtlF2hQ.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./progress-DxZziHAc.js";import"./quest-BMAtC6cg.js";function s(i){const t={h2:"h2",h3:"h3",h4:"h4",p:"p",...a(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:c}),`
`,o.jsx(e,{}),`
`,o.jsx(t.h4,{id:"a-claim-position-component-is-used-to-display-a-position-on-a-claim",children:"A Claim Position component is used to display a position on a claim"}),`
`,o.jsx(r,{dark:!0,language:"tsx",code:`
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
`,o.jsx(n,{of:d,sourceState:"none"}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(p,{}),`
`,o.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,o.jsx(t.h3,{id:"entity",children:"Entity"}),`
`,o.jsx(r,{dark:!0,language:"tsx",code:`
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
`,o.jsx(n,{of:l,sourceState:"none"}),`
`,o.jsx(t.p,{children:"./ClaimPositionRow.stories"})]})}function Q(i={}){const{wrapper:t}={...a(),...i.components};return t?o.jsx(t,{...i,children:o.jsx(s,{...i})}):s(i)}export{Q as default};
