import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as n}from"./index-DSkyVWTJ.js";import{M as e,T as s,d as a,C as p,e as m}from"./index-BtAstYU0.js";import"./ProfileCard-RX6h7HyT.js";import{S as d,B as c}from"./PositionCard.stories-BnIieDfF.js";import"./index-CTjT7uj6.js";import"./iframe-BXVHV9-b.js";import"../sb-preview/runtime.js";import"./index-DWkNYXSF.js";import"./index-Ch33dFXB.js";import"./index-BhgyLgKK.js";import"./index-BPrHwcGF.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-BIDtd1lf.js";import"./palette-saq09hvB.js";import"./createLucideIcon-BfM7wYCo.js";import"./Text-dMYK5Tk0.js";import"./Avatar-C06NoQCR.js";import"./Tag-DugRzgAY.js";import"./Icon.types-CbO5tIj7.js";import"./Input-ChUPLhCP.js";import"./Label-CHrQpPtq.js";import"./PieChart-B_dtFskq.js";import"./Resizable-CVVfJ2th.js";import"./SegmentedControl-C8563B2q.js";import"./Separator-K7xgKtVw.js";import"./Table-BRTqj0wF.js";import"./Textarea-D_YQ6kc-.js";import"./ValueDisplay-BU89B4rt.js";function r(t){const i={h2:"h2",h4:"h4",...n(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:d}),`
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
`,o.jsx(m,{})]})}function H(t={}){const{wrapper:i}={...n(),...t.components};return i?o.jsx(i,{...t,children:o.jsx(r,{...t})}):r(t)}export{H as default};
