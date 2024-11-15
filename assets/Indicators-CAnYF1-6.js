import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as s,T as a,d as n,C as m}from"./index-ycGxGkfk.js";import"./TransactionStatusIndicator-B3Y_MXqP.js";import"./Checkbox-CPOTdBJo.js";import"./Icon.types-C3De9izv.js";import"./Label-CgXaQSDT.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-CLwyaxSZ.js";import"./ProgressCard-W_leyiJE.js";import"./ScrollArea-Dpd6zEPX.js";import"./SegmentedControl-DDi9rVur.js";import"./Separator-B4E8D3RY.js";import"./Skeleton-CIfu6pJi.js";import"./Table-sWfaeKPM.js";import"./Text-SXw3eAzI.js";import"./Textarea-C-i5JcFJ.js";import"./ValueDisplay-BdKJoXJc.js";import{S as p,I as l}from"./Indicators.stories-CzmNY3W9.js";import"./index-CTjT7uj6.js";import"./iframe-DCYPFz0E.js";import"../sb-preview/runtime.js";import"./index-1qoTW4fE.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-CfaE_EBA.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-9o982VWB.js";import"./index-Bb4qSo10.js";function e(o){const t={h2:"h2",...r(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(s,{of:p}),`
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
