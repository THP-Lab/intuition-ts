import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as e,T as m,d as r,C as n,e as l}from"./index-C0ekE6uF.js";import{S as p,B as c,W as u}from"./ClaimRow.stories-Oa5Ah3pW.js";import"./index-CTjT7uj6.js";import"./iframe-5FbW-IxI.js";import"../sb-preview/runtime.js";import"./index-1qoTW4fE.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./TransactionStatusIndicator-B45suF28.js";import"./index-sXcn2mTS.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./Checkbox-BUyDAOfm.js";import"./index-9o982VWB.js";import"./Icon.types-BJuqKE1d.js";import"./index-Bb4qSo10.js";import"./Text-BeXQet-m.js";import"./ScrollArea-Dhe45Eev.js";import"./Separator-DLMkV6af.js";import"./Label-TnSa-Vb6.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-B07pz6pZ.js";import"./ProgressCard-Di9JTD4k.js";import"./SegmentedControl-CoVeRGEn.js";import"./Skeleton-k6WNkHQZ.js";import"./Table-BlSnVnDo.js";import"./Textarea-DtV2ds88.js";import"./ValueDisplay-ClYOGsr-.js";function s(i){const o={h2:"h2",h3:"h3",h4:"h4",...a(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(e,{of:p}),`
`,t.jsx(m,{}),`
`,t.jsx(o.h4,{id:"displays-a-claim-with-tvl-and-stake-actions",children:"Displays a claim with TVL and stake actions."}),`
`,t.jsx(r,{dark:!0,language:"tsx",code:`
import { ClaimRow } from '@0xintuition/1ui'

<ClaimRow
  numPositionsFor={69}
  numPositionsAgainst={42}
  totalTVL={420.69}
  tvlFor={240.69}
  currency="ETH"
>
  <Claim
    subject={{ variant: 'non-user', label: '0xintuition' }}
    predicate={{ variant: 'non-user', label: 'is really' }}
    object={{ variant: 'non-user', label: 'cool' }}
  />
</ClaimRow>
`}),`
`,t.jsx(n,{of:c,sourceState:"none"}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(l,{}),`
`,t.jsx(o.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(o.h3,{id:"with-user-position",children:"With User Position"}),`
`,t.jsx(r,{dark:!0,language:"tsx",code:`
<ClaimRow
  numPositionsFor={69}
  numPositionsAgainst={42}
  totalTVL={420.69}
  tvlFor={240.69}
  currency="ETH"
  userPosition={3.19}
  positionDirection="claimFor"
>
  <Claim
    subject={{ variant: 'non-user', label: '0xintuition' }}
    predicate={{ variant: 'non-user', label: 'is really' }}
    object={{ variant: 'non-user', label: 'cool' }}
  />
</ClaimRow>
`}),`
`,t.jsx(n,{of:u,sourceState:"none"})]})}function J(i={}){const{wrapper:o}={...a(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(s,{...i})}):s(i)}export{J as default};
