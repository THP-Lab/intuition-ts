import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as s,T as a,d as n,C as m}from"./index-Cc7U-mqO.js";import"./TransactionStatusIndicator-DylL52tj.js";import"./Checkbox-BUyDAOfm.js";import"./Icon.types-BJuqKE1d.js";import"./Label-TnSa-Vb6.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-B07pz6pZ.js";import"./ProgressCard-Di9JTD4k.js";import"./ScrollArea-Dhe45Eev.js";import"./SegmentedControl-CoVeRGEn.js";import"./Separator-DLMkV6af.js";import"./Skeleton-k6WNkHQZ.js";import"./Table-BlSnVnDo.js";import"./Text-BeXQet-m.js";import"./Textarea-DtV2ds88.js";import"./ValueDisplay-ClYOGsr-.js";import{S as p,I as l}from"./Indicators.stories-DUXgyag8.js";import"./index-CTjT7uj6.js";import"./iframe-DD4c80-G.js";import"../sb-preview/runtime.js";import"./index-1qoTW4fE.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-sXcn2mTS.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-9o982VWB.js";import"./index-Bb4qSo10.js";function e(o){const t={h2:"h2",...r(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{of:p}),`
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
`,i.jsx(m,{of:l,sourceState:"none"})]})}function G(o={}){const{wrapper:t}={...r(),...o.components};return t?i.jsx(t,{...o,children:i.jsx(e,{...o})}):e(o)}export{G as default};
