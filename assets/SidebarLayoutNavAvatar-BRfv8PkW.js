import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{a as N,R as m,b as S}from"./Resizable-C4vcu0yH.js";import{c as j}from"./index-bugisSBR.js";import{B as n}from"./Button-BLvVlH_2.js";import{I as u}from"./Icon-CR-nLIwf.js";import{T as y}from"./Text-x7qLX-eT.js";import{a as x,T as g,b as f,c as v}from"./Tooltip-CdBPNrqr.js";import{A as I,a as L,b as C}from"./Avatar-BOdXw9Ok.js";import{r as l}from"./index-CTjT7uj6.js";const b="isSideBarCollapsed",h=l.createContext({isCollapsed:void 0,setIsCollapsed:()=>{}}),d=()=>{const a=l.useContext(h);if(a.isCollapsed===void 0)throw new Error("Must be used with a SidebarLayoutProvider");return a},_=({...a})=>{const[t,s]=l.useState(localStorage.getItem(b)==="true");return e.jsx(h.Provider,{value:{isCollapsed:t,setIsCollapsed:s},...a})};_.__docgenInfo={description:"",methods:[],displayName:"SidebarLayoutProvider"};const T=({...a})=>e.jsx(N,{direction:"horizontal",...a});T.__docgenInfo={description:"",methods:[],displayName:"SidebarLayout"};const w=({...a})=>{const{isCollapsed:t,setIsCollapsed:s}=d(),r=o=>{s(o),localStorage.setItem(b,o.toString())};return e.jsxs(e.Fragment,{children:[e.jsx(m,{defaultSize:t?7:30,minSize:25,maxSize:50,collapsible:!0,collapsedSize:7.5,onCollapse:()=>r(!0),onExpand:()=>r(!1),className:j(t&&"min-w-[50px] transition-all duration-300 ease-in-out"),children:e.jsx("div",{className:"from-primary/10 to-primary/2 flex h-full flex-col items-center bg-gradient-to-b",...a})}),e.jsx(S,{withHandle:!0})]})};w.__docgenInfo={description:"",methods:[],displayName:"SidebarLayoutNav"};const R=({...a})=>e.jsx("div",{className:"border-primary/30 flex w-full items-center gap-2 border-0 border-b-[1px] border-solid p-4",...a});R.__docgenInfo={description:"",methods:[],displayName:"SidebarLayoutNavHeader"};const q=({imgLogo:a,textLogo:t})=>{const{isCollapsed:s}=d();return e.jsxs(e.Fragment,{children:[a,!s&&t]})};q.__docgenInfo={description:"",methods:[],displayName:"SidebarLayoutNavHeaderContent",props:{imgLogo:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},textLogo:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""}}};const z=({...a})=>e.jsx(m,{defaultSize:70,children:e.jsx("div",{className:"flex h-full items-center justify-center p-3",...a})});z.__docgenInfo={description:"",methods:[],displayName:"SidebarLayoutContent"};const P=({...a})=>e.jsx("div",{className:"flex h-full w-full flex-col justify-end gap-2 p-2",...a});P.__docgenInfo={description:"",methods:[],displayName:"SidebarLayoutNavFooter"};const c=({iconName:a,label:t,variant:s,onClick:r,...o})=>{const{isCollapsed:i}=d(),p={variant:s,className:"w-full",onClick:r,...o};return i?e.jsx(x,{children:e.jsxs(g,{children:[e.jsx(f,{asChild:!0,children:e.jsx(n,{size:"iconLg",...p,children:e.jsx(u,{name:a})})}),e.jsx(v,{side:"right",sideOffset:16,children:e.jsx(y,{variant:"body",children:t})})]})}):e.jsxs(n,{size:"lg",...p,children:[e.jsx(u,{name:a}),t]})};c.__docgenInfo={description:"",methods:[],displayName:"SidebarNavItem",props:{iconName:{required:!0,tsType:{name:"IconName"},description:""},label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["VariantProps"]};const A=({iconName:a,label:t,onClick:s,...r})=>e.jsx(c,{...r,variant:"navigation",label:t,iconName:a,onClick:s});A.__docgenInfo={description:"",methods:[],displayName:"SidebarLayoutNavFooterItem",props:{iconName:{required:!0,tsType:{name:"IconName"},description:""},label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["VariantProps"]};const E=({iconName:a,label:t,onClick:s,...r})=>e.jsx(c,{...r,variant:"navigation",label:t,iconName:a,onClick:s});E.__docgenInfo={description:"",methods:[],displayName:"SidebarLayoutNavItem",props:{iconName:{required:!0,tsType:{name:"IconName"},description:""},label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["VariantProps"]};const F=({...a})=>e.jsx("div",{className:"flex w-full flex-col gap-2 p-2",...a});F.__docgenInfo={description:"",methods:[],displayName:"SidebarLayoutNavItems"};const H=({imageSrc:a,name:t,onClick:s})=>{const{isCollapsed:r}=d(),o={className:"w-full",onClick:s},i=()=>e.jsxs(I,{className:"h-6 w-6",children:[e.jsx(L,{src:a,alt:`${t} avatar`}),e.jsx(C,{className:"text-xs",children:t.substring(0,2).toUpperCase()})]});return r?e.jsx(x,{children:e.jsxs(g,{children:[e.jsx(f,{asChild:!0,children:e.jsx(n,{variant:"navigation",size:"iconLg",...o,children:e.jsx(i,{})})}),e.jsx(v,{side:"right",sideOffset:16,children:e.jsx(y,{variant:"body",children:t})})]})}):e.jsxs(n,{variant:"navigation",size:"lg",...o,children:[e.jsx(i,{}),t]})};H.__docgenInfo={description:"",methods:[],displayName:"SidebarLayoutNavAvatar",props:{imageSrc:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["VariantProps"]};export{T as S,_ as a,w as b,R as c,q as d,F as e,E as f,P as g,A as h,H as i,z as j};
