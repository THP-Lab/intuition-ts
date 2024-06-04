import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as m}from"./index-CTjT7uj6.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import{M as p,T as c,i as l,P as h,e as d,j as u}from"./index-CZqQnw6f.js";import"./RadioGroup-CzdKQ_G4.js";import"./index-bugisSBR.js";import{p as r}from"./palette-saq09hvB.js";import"./Avatar-DHlXruik.js";import"./Text-UPqpmiv5.js";import"./Resizable-D6r50leV.js";import"./Icon-C0jZa4Rx.js";import"./Textarea-DLU_1UrS.js";import"./iframe-tw4J3C-8.js";import"../sb-preview/runtime.js";import"./index-B7lOVQLg.js";import"./index-DdAkmXN0.js";import"./extends-CCbyfPlC.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";const x=({theme:t})=>(m.useLayoutEffect(()=>{t&&window.document.documentElement.setAttribute("data-theme",t)},[t]),null),a=(t,o)=>{const i=o.parameters.theme||o.globals.theme;return e.jsxs(e.Fragment,{children:[e.jsx(x,{theme:i}),e.jsx(t,{})]})};a.__docgenInfo={description:`A decorator function for Storybook that ensures the selected theme is
passed down to the ThemeChanger component`,methods:[],displayName:"themeDecorator"};function n(t){const o={h2:"h2",hr:"hr",p:"p",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{isTemplate:!0}),`
`,e.jsx(c,{}),`
`,e.jsx(l,{}),`
`,e.jsx(h,{}),`
`,e.jsx(o.h2,{id:"inputs",children:"Inputs"}),`
`,e.jsx(o.p,{children:"The component accepts the following inputs (props):"}),`
`,e.jsx(d,{}),`
`,e.jsx(o.hr,{}),`
`,e.jsx(o.h2,{id:"variations",children:"Variations"}),`
`,e.jsx(o.p,{children:"Here are the variations of this component."}),`
`,e.jsx(u,{})]})}function j(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}const N={parameters:{layout:"centered",actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},backgrounds:{default:"dark",values:[{name:"dark",value:r.black.base},{name:"light",value:r.white.base}]},options:{storySort:{method:"alphabetical",order:["Documentation","Components","Styles"]}},docs:{page:j}}},P={theme:{name:"Theme",description:"Global theme for components",defaultValue:"dark",toolbar:{icon:"paintbrush",items:["dark","light"].map(t=>({value:t,title:`${t} theme`})),showName:!0}}},R=[a];export{R as decorators,N as default,P as globalTypes};
