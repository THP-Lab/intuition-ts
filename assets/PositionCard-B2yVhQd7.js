import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as n}from"./index-DSkyVWTJ.js";import{M as e,T as a,d as s,C as p,e as m}from"./index-BeTrJyTI.js";import"./TransactionStatusIndicator-DM7TKmNz.js";import{S as d,B as c}from"./PositionCard.stories-BXD_Md2N.js";import"./index-CTjT7uj6.js";import"./iframe-BQfZ3Klt.js";import"../sb-preview/runtime.js";import"./index-1qoTW4fE.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-D-X2Hy5O.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./Checkbox-DDRJNEht.js";import"./index-9o982VWB.js";import"./Icon.types-B5jDNVEn.js";import"./index-Bb4qSo10.js";import"./Text-B6S_Q4Gu.js";import"./ScrollArea-OJYV--XD.js";import"./Separator-h_VeHU5A.js";import"./Label-CxmQ-uUQ.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-CRzF-TB2.js";import"./ProgressCard-CmICkurk.js";import"./SegmentedControl-C37gAbXj.js";import"./Skeleton-jKlmpfx8.js";import"./Table-CZzk1Z3b.js";import"./Textarea-D-Frm5Hg.js";import"./ValueDisplay-azd8k_WK.js";function r(o){const i={h2:"h2",h4:"h4",...n(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(e,{of:d}),`
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
