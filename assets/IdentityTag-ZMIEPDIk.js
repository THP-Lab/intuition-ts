import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import{M as m,T as a,d as r,C as o,e as p}from"./index-BeTrJyTI.js";import"./TransactionStatusIndicator-DM7TKmNz.js";import"./Checkbox-DDRJNEht.js";import"./Icon.types-B5jDNVEn.js";import"./Label-CxmQ-uUQ.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-CRzF-TB2.js";import"./ProgressCard-CmICkurk.js";import"./ScrollArea-OJYV--XD.js";import"./SegmentedControl-C37gAbXj.js";import"./Separator-h_VeHU5A.js";import"./Skeleton-jKlmpfx8.js";import"./Table-CZzk1Z3b.js";import"./Text-B6S_Q4Gu.js";import"./Textarea-D-Frm5Hg.js";import"./ValueDisplay-azd8k_WK.js";import{S as d,B as c,N as u,H as x}from"./IdentityTag.stories-DhvY5c4s.js";import"./index-CTjT7uj6.js";import"./iframe-BQfZ3Klt.js";import"../sb-preview/runtime.js";import"./index-1qoTW4fE.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-D-X2Hy5O.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-9o982VWB.js";import"./index-Bb4qSo10.js";function e(n){const i={h2:"h2",h3:"h3",h4:"h4",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{of:d}),`
`,t.jsx(a,{}),`
`,t.jsx(i.h4,{id:"a-clickable-component-representing-an-indentity",children:"A clickable component representing an indentity."}),`
`,t.jsx(r,{dark:!0,language:"tsx",code:`
import { Identity } from '@0xintuition/1ui'

<Identity imgSrc="image.jpg">super dave</Identity>
`}),`
`,t.jsx(o,{of:c,sourceState:"none"}),`
`,t.jsx(i.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(p,{}),`
`,t.jsx(i.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(i.h3,{id:"non-user",children:"Non User"}),`
`,t.jsx(r,{dark:!0,language:"tsx",code:`
import { Identity } from '@0xintuition/1ui'

<Identity variant="non-user">identity name</Identity>
`}),`
`,t.jsx(o,{of:u,sourceState:"none"}),`
`,t.jsx(i.h3,{id:"user-with-hover-card",children:"User With Hover Card"}),`
`,t.jsx(r,{dark:!0,language:"tsx",code:`
import { Identity } from '@0xintuition/1ui'

<IdentityTag
  variant="user"
  hoverCardContent={
    <div>
      <p>Some more info...</p>
    </div>
  }
>
  identity name
</IdentityTag>
`}),`
`,t.jsx(o,{of:x,sourceState:"none"})]})}function J(n={}){const{wrapper:i}={...s(),...n.components};return i?t.jsx(i,{...n,children:t.jsx(e,{...n})}):e(n)}export{J as default};
