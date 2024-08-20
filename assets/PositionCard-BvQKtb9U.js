import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as n}from"./index-DSkyVWTJ.js";import{M as e,T as a,d as s,C as p,e as m}from"./index-1gKu10g8.js";import"./AlertDialog-DWG-bC6z.js";import{S as d,B as c}from"./PositionCard.stories-DCpQUeSJ.js";import"./index-CTjT7uj6.js";import"./iframe-bwU_3mJj.js";import"../sb-preview/runtime.js";import"./index-BqnMPuz1.js";import"./index-DVBfyTD9.js";import"./index-9r8iugjR.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./Checkbox-ZeP1BfCD.js";import"./Icon.types-DaL_GC-u.js";import"./index-Ca1CH5Oj.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";import"./Text-COZqca-9.js";import"./Label-CkICs1_r.js";import"./PieChart-9tI5Soxs.js";import"./ProgressBar-Bfgyotpp.js";import"./ProgressCard-BYKzYHAL.js";import"./SegmentedControl-DQCOk3Kf.js";import"./Separator-juOyYLvc.js";import"./Skeleton-pYLGnhFW.js";import"./Table-JXx_s4Wj.js";import"./Textarea-74mgfiS7.js";import"./ValueDisplay-BLpqF4VW.js";function r(o){const i={h2:"h2",h4:"h4",...n(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(e,{of:d}),`
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
