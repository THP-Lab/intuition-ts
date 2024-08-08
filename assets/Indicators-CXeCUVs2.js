import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as s,T as a,d as n,C as m}from"./index-B7RPCXOR.js";import"./TransactionStatusIndicator-DoTqRaaY.js";import"./Checkbox-BUqe9RSH.js";import"./Icon.types-C1sI-gES.js";import"./Label-BcH9Dz7N.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-Bfgyotpp.js";import"./ProgressCard-BYKzYHAL.js";import"./SegmentedControl-DQCOk3Kf.js";import"./Separator-CECijyNn.js";import"./Skeleton-pYLGnhFW.js";import"./Table-JXx_s4Wj.js";import"./Text-COZqca-9.js";import"./Textarea-CSqXU4Tb.js";import"./ValueDisplay-BLpqF4VW.js";import{S as p,I as l}from"./Indicators.stories-BBnvwGYG.js";import"./index-CTjT7uj6.js";import"./iframe-Cvyg8Xzu.js";import"../sb-preview/runtime.js";import"./index-C5rLi0fd.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Ca1CH5Oj.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";function e(o){const t={h2:"h2",...r(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{of:p}),`
`,i.jsx(a,{}),`
`,i.jsx(t.h2,{id:"a-list-of-indicators-for-identities-claims-and-positions",children:"A list of indicators for Identities, Claims, and Positions"}),`
`,i.jsx(n,{dark:!0,language:"tsx",code:`
import { MonetaryValue, FeesAccrued, PositionValueDisplay, ClaimValueDisplay, IdentityValueDisplay } from '@0xintuition/1ui'

<MonetaryValue value={0.345} currency="ETH" />
<FeesAccrued value={0.005} currency="ETH" />
<PositionValueDisplay value={0.345} position="claimFor" feesAccrued={0.005} />
<PositionValueDisplay
  value={0.345}
  position="claimAgainst"
  feesAccrued={0.005}
/>
<PositionValueDisplay value={0.345} position="identity" feesAccrued={0.005} />
<ClaimValueDisplay value={0.345} claimsFor={230} claimsAgainst={125} />
<IdentityValueDisplay value={0.345} currency="ETH" followers={230} />
`}),`
`,i.jsx(m,{of:l,sourceState:"none"})]})}function z(o={}){const{wrapper:t}={...r(),...o.components};return t?i.jsx(t,{...o,children:i.jsx(e,{...o})}):e(o)}export{z as default};
