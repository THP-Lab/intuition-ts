import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import{M as m,T as a,d as r,C as o,e as p}from"./index-Y3muJgY8.js";import"./TransactionStatusIndicator-B41sf_Ni.js";import"./Checkbox-BUyDAOfm.js";import"./Icon.types-BJuqKE1d.js";import"./Label-TnSa-Vb6.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-B07pz6pZ.js";import"./ProgressCard-Di9JTD4k.js";import"./ScrollArea-Dhe45Eev.js";import"./SegmentedControl-CoVeRGEn.js";import"./Separator-DLMkV6af.js";import"./Skeleton-k6WNkHQZ.js";import"./Table-BlSnVnDo.js";import"./Text-BeXQet-m.js";import"./Textarea-DtV2ds88.js";import"./ValueDisplay-ClYOGsr-.js";import{S as d,B as c,N as u,H as x}from"./IdentityTag.stories-CrXl9GYC.js";import"./index-CTjT7uj6.js";import"./iframe-LEEPIt4I.js";import"../sb-preview/runtime.js";import"./index-1qoTW4fE.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-sXcn2mTS.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-9o982VWB.js";import"./index-Bb4qSo10.js";function e(n){const i={h2:"h2",h3:"h3",h4:"h4",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{of:d}),`
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
