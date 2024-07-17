import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as e}from"./index-DSkyVWTJ.js";import{M as s,T as a,d as n,C as m}from"./index-DZA11wPX.js";import"./QuestCard-BStuYoCQ.js";import"./Icon.types-DvvrcWKg.js";import"./Label-BSnWqvXc.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-D75vLLzs.js";import"./ProgressCard-BrCNH_y5.js";import"./SegmentedControl-C43o2uqF.js";import"./Separator-8RGezXAr.js";import"./Table-C0qIXiUM.js";import"./Text-DsVeH9qI.js";import"./Textarea-CUiVvNKI.js";import"./ValueDisplay-D2U_pdiu.js";import"./QuestSetCard-DXHyju0d.js";import"./QuestStatusIndicator-Dppz0ehK.js";import"./QuestCriteriaCard-A0DJuMkI.js";import"./QuestCriteriaDisplay-BzNuGZIV.js";import"./QuestPointsDisplay-ejZCRmtZ.js";import"./Skeleton-BtFXuCOi.js";import{S as p,I as l}from"./Indicators.stories-BkrqYoqT.js";import"./index-CTjT7uj6.js";import"./iframe-BqyAIJpV.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-DgtlF2hQ.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./quest-DnP0Hcox.js";import"./progress-DxZziHAc.js";function r(o){const t={h2:"h2",...e(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{of:p}),`
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
