import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as n}from"./index-DSkyVWTJ.js";import{M as e,T as a,d as s,C as p,e as m}from"./index-CKDnBtIk.js";import"./TransactionStatusIndicator-D5hUb7_k.js";import{S as d,B as c}from"./PositionCard.stories-C2Z1wGnM.js";import"./index-CTjT7uj6.js";import"./iframe-cNgjuoEy.js";import"../sb-preview/runtime.js";import"./index-1qoTW4fE.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-sXcn2mTS.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./Checkbox-BUyDAOfm.js";import"./index-9o982VWB.js";import"./Icon.types-BJuqKE1d.js";import"./index-Bb4qSo10.js";import"./Text-BeXQet-m.js";import"./ScrollArea-Dhe45Eev.js";import"./Separator-DLMkV6af.js";import"./Label-TnSa-Vb6.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-B07pz6pZ.js";import"./ProgressCard-Di9JTD4k.js";import"./SegmentedControl-CoVeRGEn.js";import"./Skeleton-k6WNkHQZ.js";import"./Table-BlSnVnDo.js";import"./Textarea-DtV2ds88.js";import"./ValueDisplay-ClYOGsr-.js";function r(o){const i={h2:"h2",h4:"h4",...n(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(e,{of:d}),`
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
`,t.jsx(m,{})]})}function H(o={}){const{wrapper:i}={...n(),...o.components};return i?t.jsx(i,{...o,children:t.jsx(r,{...o})}):r(o)}export{H as default};
