import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as s,T as m,d as e,C as o,e as p}from"./index-Y3muJgY8.js";import{S as h,B as g,W as d,E as c,a as l}from"./Banner.stories-BdF-wdTN.js";import"./index-CTjT7uj6.js";import"./iframe-LEEPIt4I.js";import"../sb-preview/runtime.js";import"./index-1qoTW4fE.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./TransactionStatusIndicator-B41sf_Ni.js";import"./index-sXcn2mTS.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./Checkbox-BUyDAOfm.js";import"./index-9o982VWB.js";import"./Icon.types-BJuqKE1d.js";import"./index-Bb4qSo10.js";import"./Text-BeXQet-m.js";import"./ScrollArea-Dhe45Eev.js";import"./Label-TnSa-Vb6.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-B07pz6pZ.js";import"./ProgressCard-Di9JTD4k.js";import"./SegmentedControl-CoVeRGEn.js";import"./Separator-DLMkV6af.js";import"./Skeleton-k6WNkHQZ.js";import"./Table-BlSnVnDo.js";import"./Textarea-DtV2ds88.js";import"./ValueDisplay-ClYOGsr-.js";function i(t){const n={h2:"h2",h3:"h3",h4:"h4",...a(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:h}),`
`,r.jsx(m,{}),`
`,r.jsx(n.h4,{id:"a-banner-component-to-display-top-level-messaging-to-the-user",children:"A banner component to display top-level messaging to the user."}),`
`,r.jsx(e,{dark:!0,language:"tsx",code:`
import { Banner } from '@0xintuition/1ui'

<Banner variant="info" title="Warning" message="Here is some information." />
`}),`
`,r.jsx(o,{of:g,sourceState:"none"}),`
`,r.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,r.jsx(p,{}),`
`,r.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,r.jsx(n.h3,{id:"warning",children:"Warning"}),`
`,r.jsx(e,{dark:!0,language:"tsx",code:`
<Banner
  variant="warning"
  title="Warning"
  message="There is something going on!"
/>
`}),`
`,r.jsx(o,{of:d,sourceState:"none"}),`
`,r.jsx(n.h3,{id:"error",children:"Error"}),`
`,r.jsx(e,{dark:!0,language:"tsx",code:`
<Banner
  variant="error"
  title="Error"
  message="There is something horrible going on!"
/>
`}),`
`,r.jsx(o,{of:c,sourceState:"none"}),`
`,r.jsx(n.h3,{id:"with-children",children:"With Children"}),`
`,r.jsx(e,{dark:!0,language:"tsx",code:`
<Banner
  variant={BannerVariant.warning}
  title="Uh oh"
  message="There is something going on... Try refreshing the page."
>
  <Button variant="secondary">Refresh</Button>
</Banner>
`}),`
`,r.jsx(o,{of:l,sourceState:"none"})]})}function N(t={}){const{wrapper:n}={...a(),...t.components};return n?r.jsx(n,{...t,children:r.jsx(i,{...t})}):i(t)}export{N as default};
