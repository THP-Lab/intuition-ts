import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as s,T as m,d as i,C as r,e as p}from"./index-Bx7SPPRr.js";import{S as c,B as l,O as d}from"./IdentityInput.stories-CqobTg0p.js";import"./index-CTjT7uj6.js";import"./iframe-B6BeCIy7.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./TransactionStatusIndicator-C4pvw2Ss.js";import"./index-jZxEZZ9l.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";import"./Icon.types-cQmbtfph.js";import"./Text-CIyuOUAi.js";import"./Label-l7hlfg-Q.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-CZqSfr2M.js";import"./ProgressCard-8XoeDUlW.js";import"./QuestCriteriaCard-DKN7bypV.js";import"./QuestCriteriaDisplay-13wHbsZ-.js";import"./quest-BMAtC6cg.js";import"./QuestPointsDisplay-DOFHvDSK.js";import"./QuestStatusIndicator-DRoc4dCN.js";import"./SegmentedControl-Dt9e-2dS.js";import"./Separator-DqkY-AaL.js";import"./Skeleton-CGZOk8OX.js";import"./Table-Cj9ooZRp.js";import"./Textarea-BN2eJ_eZ.js";import"./ValueDisplay-OcmgwD6b.js";function n(o){const e={h2:"h2",h3:"h3",h4:"h4",...a(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:c}),`
`,t.jsx(m,{}),`
`,t.jsx(e.h4,{id:"allows-users-to-create-a-claim",children:"Allows users to create a claim."}),`
`,t.jsx(i,{dark:!0,language:"tsx",code:`
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
`,t.jsx(r,{of:l,sourceState:"none"}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(p,{}),`
`,t.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(e.h3,{id:"other",children:"Other"}),`
`,t.jsx(i,{dark:!0,language:"tsx",code:`
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
`,t.jsx(r,{of:d,sourceState:"none"})]})}function N(o={}){const{wrapper:e}={...a(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(n,{...o})}):n(o)}export{N as default};
