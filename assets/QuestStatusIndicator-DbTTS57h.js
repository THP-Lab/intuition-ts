import{j as s}from"./jsx-runtime-Cw0GR0a5.js";import{I as n,a as e}from"./Icon.types-9co6RU8J.js";import{c as r}from"./index-CuZnzU4K.js";const t={notStarted:"not-started",inProgress:"in-progress",claimable:"claimable",completed:"completed"},l=a=>{switch(a){case t.notStarted:return{iconName:e.awaitAction,iconClass:"text-muted-foreground",bgClass:"fill-primary/10"};case t.inProgress:return{iconName:e.awaitAction,iconClass:"text-warning",bgClass:"fill-primary/10"};case t.claimable:return{iconName:e.circleCheck,iconClass:"text-success",bgClass:"fill-primary/10"};case t.completed:return{iconName:e.circleCheck,iconClass:"text-primary",bgClass:"fill-success/60"};default:return{iconName:e.awaitAction,iconClass:"text-muted-foreground",bgClass:"fill-primary/10"}}},m=({status:a})=>{const{iconName:i,iconClass:c,bgClass:o}=l(a);return s.jsxs("div",{className:"relative w-[58px] h-[64px]",children:[s.jsx("svg",{width:"58",height:"64",viewBox:"0 0 58 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M51.9628 12.6802L34.25 2.45374C31.0013 0.578094 26.9987 0.578094 23.75 2.45374L6.03719 12.6802C2.78848 14.5559 0.787188 18.0222 0.787188 21.7735V42.2265C0.787188 45.9778 2.78848 49.4441 6.03719 51.3198L23.75 61.5463C26.9987 63.4219 31.0013 63.4219 34.25 61.5463L51.9628 51.3198C55.2115 49.4441 57.2128 45.9778 57.2128 42.2265V21.7735C57.2128 18.0222 55.2115 14.5559 51.9628 12.6802Z",className:r(o,"shadow-md stroke-primary/20 backdrop-blur-md")})}),s.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:s.jsx(n,{name:i,className:r(c,"w-8 h-8")})})]})};m.__docgenInfo={description:"",methods:[],displayName:"QuestStatusIndicator",props:{status:{required:!0,tsType:{name:"QuestStatusType"},description:""}}};export{t as Q,m as a};
