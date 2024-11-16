import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as s,T as m,d as r,C as n,e as p}from"./index-CCv-gu3p.js";import{S as c,B as l,W as h}from"./StakeTVL.stories-BBIHBSom.js";import"./index-CTjT7uj6.js";import"./iframe-Ca0eNMGI.js";import"../sb-preview/runtime.js";import"./index-1qoTW4fE.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./TransactionStatusIndicator-BVtfR62v.js";import"./index-CfaE_EBA.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./Checkbox-CPOTdBJo.js";import"./index-9o982VWB.js";import"./Icon.types-C3De9izv.js";import"./index-Bb4qSo10.js";import"./Text-SXw3eAzI.js";import"./ScrollArea-Dpd6zEPX.js";import"./Separator-B4E8D3RY.js";import"./Label-CgXaQSDT.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-CLwyaxSZ.js";import"./ProgressCard-W_leyiJE.js";import"./SegmentedControl-DDi9rVur.js";import"./Skeleton-CIfu6pJi.js";import"./Table-sWfaeKPM.js";import"./Textarea-C-i5JcFJ.js";import"./ValueDisplay-BdKJoXJc.js";function e(i){const o={h2:"h2",h3:"h3",h4:"h4",...a(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:c}),`
`,t.jsx(m,{}),`
`,t.jsx(o.h4,{id:"displays-tvl-total-value-locked-information-with-optional-pie-chart-visualization",children:"Displays TVL (Total Value Locked) information with optional pie chart visualization."}),`
`,t.jsx(r,{dark:!0,language:"tsx",code:`
import { StakeTVL } from '@0xintuition/1ui'

<StakeTVL totalTVL={420.69} tvlFor={240.69} currency="ETH" />
`}),`
`,t.jsx(n,{of:l,sourceState:"none"}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(p,{}),`
`,t.jsx(o.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(o.h3,{id:"with-pie-chart",children:"With Pie Chart"}),`
`,t.jsx(r,{dark:!0,language:"tsx",code:`
<StakeTVL
  totalTVL={420.69}
  tvlFor={240.69}
  currency="ETH"
  isClaim={true}
/>
`}),`
`,t.jsx(n,{of:h,sourceState:"none"})]})}function J(i={}){const{wrapper:o}={...a(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(e,{...i})}):e(i)}export{J as default};
