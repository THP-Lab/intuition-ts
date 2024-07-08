import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as m,T as s,d as n,C as a,e as d}from"./index-1VAAntYd.js";import{S as c,B as l,W as u}from"./IdentitySearchCombobox.stories-B1R7hbcH.js";import"./index-CTjT7uj6.js";import"./iframe-7XhdTFll.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./Trunctacular-Drj3Gtix.js";import"./index-Bb4qSo10.js";import"./index-D-lcGQm1.js";import"./palette-saq09hvB.js";import"./Resizable-X9Hr8Gxc.js";import"./Icon.types-TOnLKPNS.js";import"./Text-DdASfXbZ.js";import"./Input-BPM31_im.js";import"./Label-DzNLlIBV.js";import"./PieChart-B_dtFskq.js";import"./SegmentedControl-Bhn13kRZ.js";import"./Separator-C_RZmUxf.js";import"./Table-BR553Jwj.js";import"./Textarea-qTR3kLUl.js";import"./ValueDisplay-ChJkojwK.js";function i(o){const e={h2:"h2",h3:"h3",h4:"h4",...r(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{of:c}),`
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
