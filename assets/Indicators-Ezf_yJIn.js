import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as e}from"./index-DSkyVWTJ.js";import{M as s,T as a,d as n,C as m}from"./index-E5-lsTla.js";import"./TransactionStatusIndicator-C6RVtnax.js";import"./Icon.types-Csn6eVsj.js";import"./Label-l7hlfg-Q.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-CZqSfr2M.js";import"./ProgressCard-HIGHqO49.js";import"./QuestCriteriaCard-DU_nEwuR.js";import"./QuestCriteriaDisplay-BOc2v1Da.js";import"./QuestPointsDisplay-DOFHvDSK.js";import"./QuestSetCard-CAqByP9R.js";import"./QuestStatusIndicator-DjnhoyJG.js";import"./SegmentedControl-Dt9e-2dS.js";import"./Separator-DqkY-AaL.js";import"./Skeleton-CGZOk8OX.js";import"./Table-Cj9ooZRp.js";import"./Text-CIyuOUAi.js";import"./Textarea-BN2eJ_eZ.js";import"./ValueDisplay-OcmgwD6b.js";import{S as p,I as l}from"./Indicators.stories-DlrobdMk.js";import"./index-CTjT7uj6.js";import"./iframe-Co1_NKgx.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-jZxEZZ9l.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";import"./progress-DxZziHAc.js";import"./quest-BMAtC6cg.js";function r(o){const t={h2:"h2",...e(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{of:p}),`
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
`,i.jsx(m,{of:l,sourceState:"none"})]})}function O(o={}){const{wrapper:t}={...e(),...o.components};return t?i.jsx(t,{...o,children:i.jsx(r,{...o})}):r(o)}export{O as default};
