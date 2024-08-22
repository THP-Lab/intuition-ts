import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import{M as a,T as m,d as r,C as e,e as p}from"./index-DrThXbil.js";import"./AlertDialog-BYdjWSeT.js";import"./Checkbox-BVEY8e8G.js";import"./Icon.types-ByzLpCU-.js";import"./Label-BP8-Mx5Z.js";import"./PieChart-9tI5Soxs.js";import"./ProgressBar-B07pz6pZ.js";import"./ProgressCard-e5tcEEn0.js";import"./SegmentedControl-CoVeRGEn.js";import"./Separator-r-Tg2QWT.js";import"./Skeleton-k6WNkHQZ.js";import"./Table-4UgCNE7H.js";import"./Text-19x_d4-A.js";import"./Textarea-DtV2ds88.js";import"./ValueDisplay-ClYOGsr-.js";import{S as d,B as c,N as u,H as x}from"./IdentityTag.stories-C22NAcjX.js";import"./index-CTjT7uj6.js";import"./iframe-CDO6BHJs.js";import"../sb-preview/runtime.js";import"./index-BqnMPuz1.js";import"./index-DVBfyTD9.js";import"./index-9r8iugjR.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-sXcn2mTS.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";function o(i){const n={h2:"h2",h3:"h3",h4:"h4",...s(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:d}),`
`,t.jsx(m,{}),`
`,t.jsx(n.h4,{id:"a-clickable-component-representing-an-indentity",children:"A clickable component representing an indentity."}),`
`,t.jsx(r,{dark:!0,language:"tsx",code:`
import { Identity } from '@0xintuition/1ui'

<Identity imgSrc="image.jpg">super dave</Identity>
`}),`
`,t.jsx(e,{of:c,sourceState:"none"}),`
`,t.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(p,{}),`
`,t.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(n.h3,{id:"non-user",children:"Non User"}),`
`,t.jsx(r,{dark:!0,language:"tsx",code:`
import { Identity } from '@0xintuition/1ui'

<Identity variant="non-user">identity name</Identity>
`}),`
`,t.jsx(e,{of:u,sourceState:"none"}),`
`,t.jsx(n.h3,{id:"user-with-hover-card",children:"User With Hover Card"}),`
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
`,t.jsx(e,{of:x,sourceState:"none"})]})}function z(i={}){const{wrapper:n}={...s(),...i.components};return n?t.jsx(n,{...i,children:t.jsx(o,{...i})}):o(i)}export{z as default};
