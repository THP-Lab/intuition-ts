import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as e}from"./index-DSkyVWTJ.js";import{M as a,T as m,d as r,C as n,e as p}from"./index-ycGxGkfk.js";import{S as c,B as u,W as d}from"./IdentityRow.stories-9_ltpUWQ.js";import"./index-CTjT7uj6.js";import"./iframe-DCYPFz0E.js";import"../sb-preview/runtime.js";import"./index-1qoTW4fE.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./TransactionStatusIndicator-B3Y_MXqP.js";import"./index-CfaE_EBA.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./Checkbox-CPOTdBJo.js";import"./index-9o982VWB.js";import"./Icon.types-C3De9izv.js";import"./index-Bb4qSo10.js";import"./Text-SXw3eAzI.js";import"./ScrollArea-Dpd6zEPX.js";import"./Separator-B4E8D3RY.js";import"./Label-CgXaQSDT.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-CLwyaxSZ.js";import"./ProgressCard-W_leyiJE.js";import"./SegmentedControl-DDi9rVur.js";import"./Skeleton-CIfu6pJi.js";import"./Table-sWfaeKPM.js";import"./Textarea-C-i5JcFJ.js";import"./ValueDisplay-BdKJoXJc.js";function s(o){const i={h2:"h2",h3:"h3",h4:"h4",...e(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:c}),`
`,t.jsx(m,{}),`
`,t.jsx(i.h4,{id:"displays-identity-information-with-tvl-and-stake-actions",children:"Displays identity information with TVL and stake actions."}),`
`,t.jsx(r,{dark:!0,language:"tsx",code:`
import { IdentityRow } from '@0xintuition/1ui'

<IdentityRow
  variant="user"
  totalTVL={420.69}
  currency="ETH"
  name="John Doe"
  avatarSrc="https://avatars.githubusercontent.com/u/1?v=4"
  link="/identity/1"
  numPositions={69}
/>
`}),`
`,t.jsx(n,{of:u,sourceState:"none"}),`
`,t.jsx(i.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(p,{}),`
`,t.jsx(i.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(i.h3,{id:"with-user-position",children:"With User Position"}),`
`,t.jsx(r,{dark:!0,language:"tsx",code:`
<IdentityRow
  variant="user"
  totalTVL={420.69}
  currency="ETH"
  name="John Doe"
  avatarSrc="https://avatars.githubusercontent.com/u/1?v=4"
  link="/identity/1"
  numPositions={69}
  userPosition={3.19}
/>
`}),`
`,t.jsx(n,{of:d,sourceState:"none"})]})}function G(o={}){const{wrapper:i}={...e(),...o.components};return i?t.jsx(i,{...o,children:t.jsx(s,{...o})}):s(o)}export{G as default};
