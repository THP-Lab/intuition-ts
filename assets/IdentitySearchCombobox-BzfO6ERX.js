import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as m,T as s,d as n,C as a,e as d}from"./index-D9FJ0TkA.js";import{S as c,B as l,W as u}from"./IdentitySearchCombobox.stories-BBTOwGxH.js";import"./index-CTjT7uj6.js";import"./iframe-BdLT4eHg.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./ActivePositionCard-DfkKqomj.js";import"./index-Bb4qSo10.js";import"./index-BIDtd1lf.js";import"./palette-saq09hvB.js";import"./Resizable-CYN5O2qj.js";import"./Icon.types-pRyTQzB2.js";import"./Text-dMYK5Tk0.js";import"./Input-ChUPLhCP.js";import"./Label-BE9934Bx.js";import"./PieChart-B_dtFskq.js";import"./SegmentedControl-C8563B2q.js";import"./Separator-upiNYcQT.js";import"./Table-BRTqj0wF.js";import"./Textarea-D_YQ6kc-.js";import"./ValueDisplay-BU89B4rt.js";function i(o){const e={h2:"h2",h3:"h3",h4:"h4",...r(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{of:c}),`
`,t.jsx(s,{}),`
`,t.jsx(e.h4,{id:"a-searchable-component-to-handle-indentity-creation-and-selection",children:"A searchable component to handle indentity creation and selection."}),`
`,t.jsx(n,{dark:!0,language:"tsx",code:`
import { 
  IdentitySearchCombobox, 
  IdentitySearchComboboxItem 
} from '@0xintuition/1ui'

const items = [
{
variant: "non-user",
name: "mech",
value: 0.039,
walletAddress: "0x1234567890abcdef1234567890abcdef12345678",
socialCount: 34,
tagCount: 34
},
{
variant: "non-user",
name: "mechanical",
value: 0.345,
walletAddress: "0x1234567890abcdef1234567890abcdef12345678",
socialCount: 34,
tagCount: 34
},
{
variant: "non-user",
name: "mechanize",
value: 0.003,
walletAddress: "0x1234567890abcdef1234567890abcdef12345678",
socialCount: 34,
tagCount: 34
},
{
variant: "non-user",
name: "mechanist",
value: 0.019,
walletAddress: "0x1234567890abcdef1234567890abcdef12345678",
socialCount: 34,
tagCount: 34
},
]

<IdentitySearchCombobox onCreateIdentityClick={() => doSomething}>
  {items.map((item, index) => (
    <IdentitySearchComboboxItem
      key={index}
      variant={item.variant}
      name={item.name}
      value={item.value}
      walletAddress={item.walletAddress}
      socialCount={item.socialCount}
      tagCount={item.tagCount}
    />
  ))}
</IdentitySearchCombobox>
`}),`
`,t.jsx(a,{of:l,sourceState:"none"}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(d,{}),`
`,t.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(e.h3,{id:"without-create-identity-button",children:"Without Create Identity Button"}),`
`,t.jsx(n,{dark:!0,language:"tsx",code:`
<IdentitySearchCombobox>
  {items.map((item, index) => (
    <IdentitySearchComboboxItem
      key={index}
      variant={item.variant}
      name={item.name}
      value={item.value}
      walletAddress={item.walletAddress}
      socialCount={item.socialCount}
      tagCount={item.tagCount}
    />
  ))}
</IdentitySearchCombobox>
`}),`
`,t.jsx(a,{of:u,sourceState:"none"})]})}function U(o={}){const{wrapper:e}={...r(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i(o)}export{U as default};
