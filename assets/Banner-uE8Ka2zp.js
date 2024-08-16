import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as s,T as m,d as t,C as o,e as p}from"./index-D73XlBPJ.js";import{S as h,B as g,W as d,E as c,a as l}from"./Banner.stories-CDhzeizi.js";import"./index-CTjT7uj6.js";import"./iframe-Di4VFqzW.js";import"../sb-preview/runtime.js";import"./index-BqnMPuz1.js";import"./index-DVBfyTD9.js";import"./index-9r8iugjR.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./AlertDialog-Fa22hXYm.js";import"./Checkbox-BaXYeBzr.js";import"./Icon.types-Ck8KU8EG.js";import"./index-Ca1CH5Oj.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";import"./Text-COZqca-9.js";import"./Label-CkICs1_r.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-Bfgyotpp.js";import"./ProgressCard-BYKzYHAL.js";import"./SegmentedControl-DQCOk3Kf.js";import"./Separator-juOyYLvc.js";import"./Skeleton-pYLGnhFW.js";import"./Table-JXx_s4Wj.js";import"./Textarea-74mgfiS7.js";import"./ValueDisplay-BLpqF4VW.js";function i(e){const r={h2:"h2",h3:"h3",h4:"h4",...a(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:h}),`
`,n.jsx(m,{}),`
`,n.jsx(r.h4,{id:"a-banner-component-to-display-top-level-messaging-to-the-user",children:"A banner component to display top-level messaging to the user."}),`
`,n.jsx(t,{dark:!0,language:"tsx",code:`
import { Banner } from '@0xintuition/1ui'

<Banner variant="info" title="Warning" message="Here is some information." />
`}),`
`,n.jsx(o,{of:g,sourceState:"none"}),`
`,n.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(p,{}),`
`,n.jsx(r.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(r.h3,{id:"warning",children:"Warning"}),`
`,n.jsx(t,{dark:!0,language:"tsx",code:`
<Banner
  variant="warning"
  title="Warning"
  message="There is something going on!"
/>
`}),`
`,n.jsx(o,{of:d,sourceState:"none"}),`
`,n.jsx(r.h3,{id:"error",children:"Error"}),`
`,n.jsx(t,{dark:!0,language:"tsx",code:`
<Banner
  variant="error"
  title="Error"
  message="There is something horrible going on!"
/>
`}),`
`,n.jsx(o,{of:c,sourceState:"none"}),`
`,n.jsx(r.h3,{id:"with-children",children:"With Children"}),`
`,n.jsx(t,{dark:!0,language:"tsx",code:`
<Banner
  variant={BannerVariant.warning}
  title="Uh oh"
  message="There is something going on... Try refreshing the page."
>
  <Button variant="secondary">Refresh</Button>
</Banner>
`}),`
`,n.jsx(o,{of:l,sourceState:"none"})]})}function J(e={}){const{wrapper:r}={...a(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(i,{...e})}):i(e)}export{J as default};
