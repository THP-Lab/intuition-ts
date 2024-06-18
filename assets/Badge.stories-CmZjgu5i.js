import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{B as t}from"./Badge-VPO89ISs.js";const S={title:"Components/Badge",component:t,argTypes:{variant:{description:"Variant of badge",options:["default","secondary","destructive","outline"],table:{type:{summary:"string"},defaultValue:{summary:"default"}},control:"select"}}},e={args:{variant:"default"},render:y=>n.jsx(t,{...y,children:"Badge"})},r={render:()=>n.jsx(t,{variant:"secondary",children:"Badge"})},a={render:()=>n.jsx(t,{variant:"destructive",children:"Badge"})},s={render:()=>n.jsx(t,{variant:"outline",children:"Badge"})};var o,d,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  },
  render: args => <Badge {...args}>Badge</Badge>
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var i,u,g;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Badge variant="secondary">Badge</Badge>
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var m,l,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Badge variant="destructive">Badge</Badge>
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var B,v,f;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Badge variant="outline">Badge</Badge>
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const j=["BasicUsage","Secondary","Destructive","Outline"],_=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,Destructive:a,Outline:s,Secondary:r,__namedExportsOrder:j,default:S},Symbol.toStringTag,{value:"Module"}));export{e as B,a as D,s as O,_ as S,r as a};
