import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as s,T as m,d as i,C as r,e as p}from"./index-D4XbuSjZ.js";import{S as c,B as l,O as d}from"./IdentityInput.stories-Cy4noGp2.js";import"./index-CTjT7uj6.js";import"./iframe-CZgi1RCl.js";import"../sb-preview/runtime.js";import"./index-Ba1MzMRK.js";import"./index-DBez60WA.js";import"./index-BSh8g_S6.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./QuestStatusCard-DfTRlnMT.js";import"./index-CuZnzU4K.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./QuestStatusIndicator-DbTTS57h.js";import"./Icon.types-9co6RU8J.js";import"./index-Bb4qSo10.js";import"./QuestSetProgressCard-ClGoFBEX.js";import"./createLucideIcon-BfM7wYCo.js";import"./ProgressBar-BdoIrmiA.js";import"./Text-CvCwWh2A.js";import"./Label-DKqTtzje.js";import"./PieChart-B_dtFskq.js";import"./Resizable-B8LsIgh_.js";import"./SegmentedControl-DEtPxF6_.js";import"./Separator-y1Wg93hL.js";import"./Table-DiAONwIH.js";import"./Textarea-DGcnJGMC.js";import"./ValueDisplay-s0UeY4GO.js";import"./QuestSetCard-CU4evGOs.js";function n(o){const t={h2:"h2",h3:"h3",h4:"h4",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
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
