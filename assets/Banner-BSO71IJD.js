import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as s,T as m,d as e,C as o,e as p}from"./index-CCv-gu3p.js";import{S as h,B as g,W as d,E as c,a as l}from"./Banner.stories-BO4hkYBG.js";import"./index-CTjT7uj6.js";import"./iframe-Ca0eNMGI.js";import"../sb-preview/runtime.js";import"./index-1qoTW4fE.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./TransactionStatusIndicator-BVtfR62v.js";import"./index-CfaE_EBA.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./Checkbox-CPOTdBJo.js";import"./index-9o982VWB.js";import"./Icon.types-C3De9izv.js";import"./index-Bb4qSo10.js";import"./Text-SXw3eAzI.js";import"./ScrollArea-Dpd6zEPX.js";import"./Separator-B4E8D3RY.js";import"./Label-CgXaQSDT.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-CLwyaxSZ.js";import"./ProgressCard-W_leyiJE.js";import"./SegmentedControl-DDi9rVur.js";import"./Skeleton-CIfu6pJi.js";import"./Table-sWfaeKPM.js";import"./Textarea-C-i5JcFJ.js";import"./ValueDisplay-BdKJoXJc.js";function i(t){const n={h2:"h2",h3:"h3",h4:"h4",...a(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(s,{of:h}),`
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
