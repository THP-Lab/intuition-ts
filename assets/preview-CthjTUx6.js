import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{r as m}from"./index-CTjT7uj6.js";import{useMDXComponents as i}from"./index-DSkyVWTJ.js";import{M as p,T as c,i as l,P as h,e as d,j as u}from"./index-BxxFiV1j.js";import"./ClaimRow-BR2Jwwt1.js";import"./index-CNBET2ao.js";import{p as r}from"./palette-saq09hvB.js";import"./Avatar-BUaynhXT.js";import"./Badge-D2xxBGMY.js";import"./Button-DtBxy_Zq.js";import"./Icon.types-DkS0gbR0.js";import"./Input-DFWTvv6T.js";import"./Label-ByAlek89.js";import"./PieChart-B2bggzNI.js";import"./PositionCard-CcD0LmY6.js";import"./ProfileCard-CY9m7nXW.js";import"./Resizable-Dk6Cp6at.js";import"./SegmentedControl-DAIY0sKg.js";import"./Separator-Ct33SRfh.js";import"./Table-D9p853bW.js";import"./Text-ANaTnboW.js";import"./Textarea-Ds9ZbOCk.js";import"./ValueDisplay-2lt2w_5b.js";import"./iframe-I5dSNmdF.js";import"../sb-preview/runtime.js";import"./index-D3WfGLRt.js";import"./index-DBez60WA.js";import"./index-BPrHwcGF.js";import"./index-BSh8g_S6.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./createLucideIcon-BfM7wYCo.js";const x=({theme:e})=>(m.useLayoutEffect(()=>{e&&window.document.documentElement.setAttribute("data-theme",e)},[e]),null),s=(e,o)=>{const a=o.parameters.theme||o.globals.theme;return t.jsxs(t.Fragment,{children:[t.jsx(x,{theme:a}),t.jsx(e,{})]})};s.__docgenInfo={description:`A decorator function for Storybook that ensures the selected theme is
passed down to the ThemeChanger component`,methods:[],displayName:"themeDecorator"};function n(e){const o={h2:"h2",hr:"hr",p:"p",...i(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{isTemplate:!0}),`
`,t.jsx(c,{}),`
`,t.jsx(l,{}),`
`,t.jsx(h,{}),`
`,t.jsx(o.h2,{id:"inputs",children:"Inputs"}),`
`,t.jsx(o.p,{children:"The component accepts the following inputs (props):"}),`
`,t.jsx(d,{}),`
`,t.jsx(o.hr,{}),`
`,t.jsx(o.h2,{id:"variations",children:"Variations"}),`
`,t.jsx(o.p,{children:"Here are the variations of this component."}),`
`,t.jsx(u,{})]})}function j(e={}){const{wrapper:o}={...i(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(n,{...e})}):n(e)}const W={parameters:{layout:"centered",actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},backgrounds:{default:"dark",values:[{name:"dark",value:r.black.base},{name:"light",value:r.white.base}]},options:{storySort:{method:"alphabetical",order:["Documentation","Components","Styles"]}},docs:{page:j}}},Y={theme:{name:"Theme",description:"Global theme for components",defaultValue:"dark",toolbar:{icon:"paintbrush",items:["dark","light"].map(e=>({value:e,title:`${e} theme`})),showName:!0}}},tt=[s];export{tt as decorators,W as default,Y as globalTypes};
