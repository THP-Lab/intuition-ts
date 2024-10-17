import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as n}from"./index-DSkyVWTJ.js";import{M as e,T as a,d as s,C as p,e as m}from"./index-D6crG5Y3.js";import"./AlertDialog-D_AkaajA.js";import{S as d,B as c}from"./PositionCard.stories-CgXV1H56.js";import"./index-CTjT7uj6.js";import"./iframe-BApvpYkI.js";import"../sb-preview/runtime.js";import"./index-BqnMPuz1.js";import"./index-DVBfyTD9.js";import"./index-9r8iugjR.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./Checkbox-BGNaxvcv.js";import"./Icon.types-cBi97MNl.js";import"./index-sXcn2mTS.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";import"./Text-19x_d4-A.js";import"./Label-BP8-Mx5Z.js";import"./PieChart-9tI5Soxs.js";import"./ProgressBar-B07pz6pZ.js";import"./ProgressCard-e5tcEEn0.js";import"./SegmentedControl-CoVeRGEn.js";import"./Separator-r-Tg2QWT.js";import"./Skeleton-k6WNkHQZ.js";import"./Table-CTn7jy6b.js";import"./Textarea-DtV2ds88.js";import"./ValueDisplay-ClYOGsr-.js";function r(o){const i={h2:"h2",h4:"h4",...n(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(e,{of:d}),`
`,t.jsx(a,{}),`
`,t.jsx(i.h4,{id:"positioncard---a-card-to-display-a-position",children:"PositionCard - A card to display a position"}),`
`,t.jsx(s,{dark:!0,language:"tsx",code:`
import { PieChartVariant, PositionCard, PositionCardStaked, PositionCardOwnership, PositionCardFeesAccrued, PositionCardLastUpdated } from '@0xintuition/1ui'

const ExampleUsage = () => {
const handleSell = () => {
console.log('Redeem button clicked')
}

return (

<PositionCard onButtonClick={handleSell}>
  <PositionCardStaked amount={0.512} />
  <PositionCardOwnership
    percentOwnership={24}
    variant={PieChartVariant.default}
  />
  <PositionCardFeesAccrued amount={0.005} />
  <PositionCardLastUpdated timestamp="2024-05-10T00:00:00Z" />
</PositionCard>
) }

export default ExampleUsage
`}),`
`,t.jsx(p,{of:c,sourceState:"none"}),`
`,t.jsx(i.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(m,{})]})}function z(o={}){const{wrapper:i}={...n(),...o.components};return i?t.jsx(i,{...o,children:t.jsx(r,{...o})}):r(o)}export{z as default};
