import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as n}from"./index-DSkyVWTJ.js";import{M as e,T as s,d as a,C as p,e as m}from"./index-F5Hhn7bu.js";import"./TransactionStatusIndicator-BFMjQQCJ.js";import{S as d,B as c}from"./PositionCard.stories-CnQm1kth.js";import"./index-CTjT7uj6.js";import"./iframe-Bnn_nZKh.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-jZxEZZ9l.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";import"./Icon.types-cQmbtfph.js";import"./Text-CIyuOUAi.js";import"./Label-l7hlfg-Q.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-CZqSfr2M.js";import"./ProgressCard-HIGHqO49.js";import"./progress-DxZziHAc.js";import"./QuestCriteriaCard-DKN7bypV.js";import"./QuestCriteriaDisplay-13wHbsZ-.js";import"./quest-BMAtC6cg.js";import"./QuestPointsDisplay-DOFHvDSK.js";import"./QuestSetCard-CAqByP9R.js";import"./QuestStatusIndicator-DRoc4dCN.js";import"./SegmentedControl-Dt9e-2dS.js";import"./Separator-DqkY-AaL.js";import"./Skeleton-CGZOk8OX.js";import"./Table-Cj9ooZRp.js";import"./Textarea-BN2eJ_eZ.js";import"./ValueDisplay-OcmgwD6b.js";function r(t){const i={h2:"h2",h4:"h4",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:d}),`
`,o.jsx(s,{}),`
`,o.jsx(i.h4,{id:"positioncard---a-card-to-display-a-position",children:"PositionCard - A card to display a position"}),`
`,o.jsx(a,{dark:!0,language:"tsx",code:`
import { PositionCard, PositionCardStaked, PositionCardOwnership, PositionCardFeesAccrued, PositionCardLastUpdated } from '@0xintuition/1ui'

const ExampleUsage = () => {
const handleSell = () => {
console.log('Sell button clicked')
}

return (

<PositionCard onButtonClick={handleSell}>
  <PositionCardStaked amount={0.512} />
  <PositionCardOwnership percentOwnership={24} />
  <PositionCardFeesAccrued amount={0.005} />
  <PositionCardLastUpdated timestamp="2024-05-10T00:00:00Z" />
</PositionCard>
) }

export default ExampleUsage
`}),`
`,o.jsx(p,{of:c,sourceState:"none"}),`
`,o.jsx(i.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(m,{})]})}function Q(t={}){const{wrapper:i}={...n(),...t.components};return i?o.jsx(i,{...t,children:o.jsx(r,{...t})}):r(t)}export{Q as default};
