import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as e}from"./index-DSkyVWTJ.js";import{M as n,T as s,d as p,C as m,e as a}from"./index-BA-ziRCw.js";import{S as d,B as l}from"./ListGrid.stories-C1s8PVCn.js";import"./index-CTjT7uj6.js";import"./iframe-DZusH_ob.js";import"../sb-preview/runtime.js";import"./index-1qoTW4fE.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./TransactionStatusIndicator-BNWelnuU.js";import"./index-sXcn2mTS.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./Checkbox-BUyDAOfm.js";import"./index-9o982VWB.js";import"./Icon.types-BJuqKE1d.js";import"./index-Bb4qSo10.js";import"./Text-BeXQet-m.js";import"./ScrollArea-Dhe45Eev.js";import"./Label-TnSa-Vb6.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-B07pz6pZ.js";import"./ProgressCard-Di9JTD4k.js";import"./SegmentedControl-CoVeRGEn.js";import"./Separator-DLMkV6af.js";import"./Skeleton-k6WNkHQZ.js";import"./Table-BlSnVnDo.js";import"./Textarea-DtV2ds88.js";import"./ValueDisplay-ClYOGsr-.js";function r(o){const i={h2:"h2",h4:"h4",...e(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:d}),`
`,t.jsx(s,{}),`
`,t.jsx(i.h4,{id:"a-grid-layout-component-with-profile-and-explore-variants-for-displaying-list-cards",children:"A grid layout component with profile and explore variants for displaying list cards"}),`
`,t.jsx(p,{dark:!0,language:"tsx",code:`
import { ListGrid } from '@0xintuition/1ui'

const MyListGrid = () => (

{' '}

<ListGrid variant="explore">
  <ListCard
    displayName="Best Crypto Portfolio Trackers"
    imgSrc="https://example.com/image.jpg"
    identitiesCount={45}
    buttonWrapper={(button) => (
      <Link to="/lists/portfolio-trackers">{button}</Link>
    )}
  />
  <ListCard
    displayName="Top DeFi Platforms"
    imgSrc="https://example.com/image.jpg"
    identitiesCount={32}
    buttonWrapper={(button) => <Link to="/lists/defi-platforms">{button}</Link>}
  />
</ListGrid>
) `}),`
`,t.jsx(m,{of:l,sourceState:"none"}),`
`,t.jsx(i.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(a,{})]})}function I(o={}){const{wrapper:i}={...e(),...o.components};return i?t.jsx(i,{...o,children:t.jsx(r,{...o})}):r(o)}export{I as default};
