import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as s,T as m,d as i,C as r,e as p}from"./index-DcC9B6SA.js";import{S as c,B as l,O as d}from"./IdentityInput.stories-Ch_PxdK2.js";import"./index-CTjT7uj6.js";import"./iframe-DPuozdI5.js";import"../sb-preview/runtime.js";import"./index-Ba1MzMRK.js";import"./index-DBez60WA.js";import"./index-BSh8g_S6.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./QuestStatusCard-CMcrk7RA.js";import"./index-DgtlF2hQ.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./QuestStatusIndicator-DHmvCJek.js";import"./Icon.types-D4lfunSt.js";import"./index-Bb4qSo10.js";import"./QuestSetProgressCard-BNr9QVR-.js";import"./createLucideIcon-BfM7wYCo.js";import"./ProgressBar-D75vLLzs.js";import"./Text-DsVeH9qI.js";import"./Label-4gKwHNvc.js";import"./PieChart-B_dtFskq.js";import"./Resizable-B7XdxUdz.js";import"./SegmentedControl-C43o2uqF.js";import"./Separator-EZUw1-4L.js";import"./Table-C0qIXiUM.js";import"./Textarea-CUiVvNKI.js";import"./ValueDisplay-D2U_pdiu.js";import"./QuestSetCard-BHXW0rRZ.js";function n(o){const t={h2:"h2",h3:"h3",h4:"h4",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
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
`,e.jsx(p,{}),`
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
`,e.jsx(r,{of:d,sourceState:"none"})]})}function K(o={}){const{wrapper:t}={...a(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{K as default};
