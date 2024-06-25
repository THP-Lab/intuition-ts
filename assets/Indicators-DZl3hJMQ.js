import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as e}from"./index-DSkyVWTJ.js";import{M as n,T as s,d as m,C as a}from"./index-Cl2R7kgy.js";import"./ClaimStakeCard-DNBgITOJ.js";import"./Avatar-BUaynhXT.js";import"./Badge-D3rIyhdF.js";import"./Button-ikGPOU5T.js";import"./Icon.types-DkS0gbR0.js";import"./PositionValueDisplay-dYFOcf5V.js";import"./Input-DFWTvv6T.js";import"./Label-ByAlek89.js";import"./PieChart-B_dtFskq.js";import"./PositionCardStaked-Dh9BrwNU.js";import"./ProfileCard-cV73C5p9.js";import"./Resizable-Dk6Cp6at.js";import"./SegmentedControl-DbX5wOQO.js";import"./Separator-Ct33SRfh.js";import"./Table-D9p853bW.js";import"./Text-CRp-iyLU.js";import"./Textarea-Ds9ZbOCk.js";import"./ValueDisplay-2lt2w_5b.js";import{S as p,I as c}from"./Indicators.stories-DXjxNHVm.js";import"./index-CTjT7uj6.js";import"./iframe-DOj4DoWI.js";import"../sb-preview/runtime.js";import"./index-D3WfGLRt.js";import"./index-DBez60WA.js";import"./index-BPrHwcGF.js";import"./index-BSh8g_S6.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-CNBET2ao.js";import"./palette-saq09hvB.js";import"./createLucideIcon-BfM7wYCo.js";function r(i){const t={h2:"h2",h3:"h3",...e(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:p}),`
`,o.jsx(s,{}),`
`,o.jsx(t.h2,{id:"a-list-of-indicators-for-identities-claims-and-positions",children:"A list of indicators for Identities, Claims, and Positions"}),`
`,o.jsx(t.h3,{id:"monetaryvalue",children:"MonetaryValue"}),`
`,o.jsx(m,{dark:!0,language:"tsx",code:`
import { MonetaryValue, FeesAccrued, PositionValueDisplay } from '@0xintuition/1ui'

<MonetaryValue value={0.345} currency="ETH" />
<FeesAccrued value={0.005} currency="ETH" />
<PositionValueDisplay value={0.345} position="claimFor" feesAccrued={0.005} />
<PositionValueDisplay
  value={0.345}
  position="claimAgainst"
  feesAccrued={0.005}
/>
<PositionValueDisplay value={0.345} position="identity" feesAccrued={0.005} />
`}),`
`,o.jsx(a,{of:c,sourceState:"none"})]})}function O(i={}){const{wrapper:t}={...e(),...i.components};return t?o.jsx(t,{...i,children:o.jsx(r,{...i})}):r(i)}export{O as default};
