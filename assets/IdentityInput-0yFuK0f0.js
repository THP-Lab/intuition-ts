import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as s,T as m,d as i,C as r,e as c}from"./index-CCv-gu3p.js";import{S as p,B as l,O as d}from"./IdentityInput.stories-CU8eXP8H.js";import"./index-CTjT7uj6.js";import"./iframe-Ca0eNMGI.js";import"../sb-preview/runtime.js";import"./index-1qoTW4fE.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./TransactionStatusIndicator-BVtfR62v.js";import"./index-CfaE_EBA.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./Checkbox-CPOTdBJo.js";import"./index-9o982VWB.js";import"./Icon.types-C3De9izv.js";import"./index-Bb4qSo10.js";import"./Text-SXw3eAzI.js";import"./ScrollArea-Dpd6zEPX.js";import"./Separator-B4E8D3RY.js";import"./Label-CgXaQSDT.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-CLwyaxSZ.js";import"./ProgressCard-W_leyiJE.js";import"./SegmentedControl-DDi9rVur.js";import"./Skeleton-CIfu6pJi.js";import"./Table-sWfaeKPM.js";import"./Textarea-C-i5JcFJ.js";import"./ValueDisplay-BdKJoXJc.js";function n(o){const t={h2:"h2",h3:"h3",h4:"h4",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:p}),`
`,e.jsx(m,{}),`
`,e.jsx(t.h4,{id:"allows-users-to-create-a-claim",children:"Allows users to create a claim."}),`
`,e.jsx(i,{dark:!0,language:"tsx",code:`
import { IdentityInput } from '@0xintuition/1ui'

<IdentityInput
  showLabels
  subject={{
    selectedValue: { name: 'Super Dave' },
    onClick: () => doSomething,
  }}
  predicate={{
    selectedValue: { name: 'is a', variant: 'non-user' },
    onClick: () => doSomething,
  }}
  object={{
    selectedValue: { name: 'daredevil', variant: 'non-user' },
    onClick: () => doSomething,
  }}
/>
`}),`
`,e.jsx(r,{of:l,sourceState:"none"}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{}),`
`,e.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(t.h3,{id:"other",children:"Other"}),`
`,e.jsx(i,{dark:!0,language:"tsx",code:`
<IdentityInput
  subject={{
    placeholder: 'Select an identity',
    selectedValue: {},
    onClick: () => doSomething,
  }}
  predicate={{
    placeholder: 'Select an identity',
    selectedValue: {},
    onClick: () => doSomething,
  }}
  object={{
    placeholder: 'Select an identity',
    selectedValue: {},
    onClick: () => doSomething,
  }}
/>
`}),`
`,e.jsx(r,{of:d,sourceState:"none"})]})}function J(o={}){const{wrapper:t}={...a(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{J as default};
