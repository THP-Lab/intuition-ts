import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as n}from"./index-DSkyVWTJ.js";import{M as e,T as s,d as a,C as p,e as m}from"./index-Cl-ITZ4t.js";import"./Button-CzEHE8a5.js";import{S as d,B as c}from"./PositionCard.stories-DPMG6DfH.js";import"./index-CTjT7uj6.js";import"./iframe-ONcrSGGw.js";import"../sb-preview/runtime.js";import"./index-D3WfGLRt.js";import"./index-DBez60WA.js";import"./index-BPrHwcGF.js";import"./index-BSh8g_S6.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-CNBET2ao.js";import"./palette-saq09hvB.js";import"./createLucideIcon-BfM7wYCo.js";import"./PositionCardStaked-CSnDpiat.js";import"./Text-ANaTnboW.js";import"./PieChart-B_dtFskq.js";function r(t){const i={h2:"h2",h4:"h4",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:d}),`
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
`,o.jsx(m,{})]})}function X(t={}){const{wrapper:i}={...n(),...t.components};return i?o.jsx(i,{...t,children:o.jsx(r,{...t})}):r(t)}export{X as default};
