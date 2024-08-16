import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as c}from"./index-DSkyVWTJ.js";import{M as r,T as d,d as n,C as o,e as h}from"./index-U1Ti8TsA.js";import{S as l,D as i,C as m,a as x,W as p}from"./Checkbox.stories-b_U55Pvo.js";import"./index-CTjT7uj6.js";import"./iframe-DVSgXuqv.js";import"../sb-preview/runtime.js";import"./index-BqnMPuz1.js";import"./index-DVBfyTD9.js";import"./index-9r8iugjR.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./Checkbox-BaXYeBzr.js";import"./Icon.types-Ck8KU8EG.js";import"./index-Ca1CH5Oj.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";function a(s){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(d,{}),`
`,e.jsx(t.h4,{id:"a-customizable-checkbox-component",children:"A customizable checkbox component."}),`
`,e.jsx(n,{dark:!0,language:"tsx",code:`
import { Checkbox } from '@0xintuition/1ui'

<Checkbox />
`}),`
`,e.jsx(o,{of:i,sourceState:"none"}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(h,{}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.p,{children:"The Checkbox component is a versatile input element that can be used in forms, settings, and other interactive interfaces. It supports various states such as checked, unchecked, and disabled."}),`
`,e.jsx(t.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n,{dark:!0,language:"tsx",code:`
<Checkbox />
`}),`
`,e.jsx(o,{of:i,sourceState:"none"}),`
`,e.jsx(t.h3,{id:"checked-state",children:"Checked State"}),`
`,e.jsx(n,{dark:!0,language:"tsx",code:`
<Checkbox checked />
`}),`
`,e.jsx(o,{of:m,sourceState:"none"}),`
`,e.jsx(t.h3,{id:"disabled-state",children:"Disabled State"}),`
`,e.jsx(n,{dark:!0,language:"tsx",code:`
<Checkbox disabled />
`}),`
`,e.jsx(o,{of:x,sourceState:"none"}),`
`,e.jsx(t.h3,{id:"with-label",children:"With Label"}),`
`,e.jsx(n,{dark:!0,language:"tsx",code:`
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
    Accept terms and conditions
  </label>
</div>
`}),`
`,e.jsx(o,{of:p,sourceState:"none"}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(t.p,{children:["The Checkbox component is built with accessibility in mind. It uses the native ",e.jsx(t.code,{children:'<input type="checkbox">'})," element, ensuring proper keyboard navigation and screen reader support."]}),`
`,e.jsx(t.h2,{id:"customization",children:"Customization"}),`
`,e.jsxs(t.p,{children:["The Checkbox component can be customized using Tailwind CSS classes. You can modify its appearance by passing a ",e.jsx(t.code,{children:"className"})," prop or by adjusting the default styles in the component definition."]})]})}function W(s={}){const{wrapper:t}={...c(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(a,{...s})}):a(s)}export{W as default};
