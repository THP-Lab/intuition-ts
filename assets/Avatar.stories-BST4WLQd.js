import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{o as s,I as j}from"./AlertDialog-BYdjWSeT.js";const D={title:"Components/Avatar",component:s,parameters:{controls:{exclude:["className","style"]}},argTypes:{variant:{description:"Variant of avatar",options:Object.values(j),table:{type:{summary:"string"},defaultValue:{summary:"user"}},control:"select"},src:{type:"string",description:"Image source"},name:{type:"string",description:"Name of the identity"}}},e={args:{variant:"user",src:"https://m.media-amazon.com/images/M/MV5BNDhiMWYzMjgtNTRiYi00ZTA3LThlODctNDRkMDk0NzFkMWI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg0MTkzMzA@._V1_.jpg",name:"Super Dave"},render:k=>n.jsx(s,{...k})},a={render:()=>n.jsx(s,{variant:"non-user",src:"https://avatars.githubusercontent.com/u/94311139?s=200&v=4",name:"Intuition"})},r={render:()=>n.jsx(s,{name:"Super Dave"})},t={render:()=>n.jsx(s,{variant:"non-user",name:"Intuition"})};var o,c,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'user',
    src: 'https://m.media-amazon.com/images/M/MV5BNDhiMWYzMjgtNTRiYi00ZTA3LThlODctNDRkMDk0NzFkMWI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg0MTkzMzA@._V1_.jpg',
    name: 'Super Dave'
  },
  render: args => <Avatar {...args} />
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,u,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Avatar variant="non-user" src="https://avatars.githubusercontent.com/u/94311139?s=200&v=4" name="Intuition" />
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,l,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Avatar name="Super Dave" />
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var v,y,M;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Avatar variant="non-user" name="Intuition" />
}`,...(M=(y=t.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};const N=["BasicUsage","Entity","UserFallback","EntityFallback"],b=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,Entity:a,EntityFallback:t,UserFallback:r,__namedExportsOrder:N,default:D},Symbol.toStringTag,{value:"Module"}));export{e as B,a as E,b as S,r as U,t as a};
