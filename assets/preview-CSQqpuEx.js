import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as m}from"./index-CTjT7uj6.js";import{useMDXComponents as s}from"./index-DSkyVWTJ.js";import{M as p,T as c,i as l,P as h,e as d,j as u}from"./index-BBR3neYb.js";import"./index-bugisSBR.js";import{p as r}from"./palette-saq09hvB.js";import"./Avatar-BOdXw9Ok.js";import"./Button-BLvVlH_2.js";import"./Popover-CEP5YIQn.js";import"./Tooltip-CdBPNrqr.js";import"./Text-x7qLX-eT.js";import"./Resizable-C4vcu0yH.js";import"./Icon-CR-nLIwf.js";import"./SidebarLayoutNavAvatar-BRfv8PkW.js";import"./Command-7WXSXKb2.js";import"./iframe-FcORtg30.js";import"../sb-preview/runtime.js";import"./index-DJaOuc6h.js";import"./index-DdAkmXN0.js";import"./extends-CCbyfPlC.js";import"./index-CcyUcsxs.js";import"./index-BaW8Z0I_.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-DZjgi4oU.js";import"./index-Ey1R3kC1.js";import"./index-Bb4qSo10.js";import"./createLucideIcon-BfM7wYCo.js";import"./index-Dkmgy-nq.js";const x=({theme:e})=>(m.useLayoutEffect(()=>{e&&window.document.documentElement.setAttribute("data-theme",e)},[e]),null),i=(e,o)=>{const a=o.parameters.theme||o.globals.theme;return t.jsxs(t.Fragment,{children:[t.jsx(x,{theme:a}),t.jsx(e,{})]})};i.__docgenInfo={description:`A decorator function for Storybook that ensures the selected theme is
passed down to the ThemeChanger component`,methods:[],displayName:"themeDecorator"};function n(e){const o={h2:"h2",hr:"hr",p:"p",...s(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{isTemplate:!0}),`
`,t.jsx(c,{}),`
`,t.jsx(l,{}),`
`,t.jsx(h,{}),`
`,t.jsx(o.h2,{id:"inputs",children:"Inputs"}),`
`,t.jsx(o.p,{children:"The component accepts the following inputs (props):"}),`
`,t.jsx(d,{}),`
`,t.jsx(o.hr,{}),`
`,t.jsx(o.h2,{id:"variations",children:"Variations"}),`
`,t.jsx(o.p,{children:"Here are the variations of this component."}),`
`,t.jsx(u,{})]})}function j(e={}){const{wrapper:o}={...s(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(n,{...e})}):n(e)}const J={parameters:{layout:"centered",actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},backgrounds:{default:"dark",values:[{name:"dark",value:r.black.base},{name:"light",value:r.white.base}]},options:{storySort:{order:["Documentation","Components","Styles"]}},docs:{page:j}}},K={theme:{name:"Theme",description:"Global theme for components",defaultValue:"dark",toolbar:{icon:"paintbrush",items:["dark","light"].map(e=>({value:e,title:`${e} theme`})),showName:!0}}},O=[i];export{O as decorators,J as default,K as globalTypes};
