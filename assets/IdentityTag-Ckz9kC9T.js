import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import{M as a,T as m,d as r,C as e,e as p}from"./index-DqWARhjg.js";import"./TransactionStatusIndicator-DZfM1JOg.js";import"./Icon.types-xxOQRm7p.js";import"./Label-CLv4BT0x.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-Bfgyotpp.js";import"./ProgressCard-BYKzYHAL.js";import"./SegmentedControl-DQCOk3Kf.js";import"./Separator-BEma7yvq.js";import"./Skeleton-pYLGnhFW.js";import"./Table-JXx_s4Wj.js";import"./Text-COZqca-9.js";import"./Textarea-CSqXU4Tb.js";import"./ValueDisplay-BLpqF4VW.js";import{S as d,B as c,N as u,H as x}from"./IdentityTag.stories-rSert52s.js";import"./index-CTjT7uj6.js";import"./iframe-qqh-uzPE.js";import"../sb-preview/runtime.js";import"./index-BJDhk0Ya.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Ca1CH5Oj.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";function o(i){const n={h2:"h2",h3:"h3",h4:"h4",...s(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:d}),`
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
`,t.jsx(e,{of:x,sourceState:"none"})]})}function q(i={}){const{wrapper:n}={...s(),...i.components};return n?t.jsx(n,{...i,children:t.jsx(o,{...i})}):o(i)}export{q as default};
