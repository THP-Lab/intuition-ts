import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{d as s,S as j}from"./Tag-B9s39eAD.js";const S={title:"Components/Avatar",component:s,parameters:{controls:{exclude:["className","style"]}},argTypes:{variant:{description:"Variant of avatar",options:Object.values(j),table:{type:{summary:"string"},defaultValue:{summary:"user"}},control:"select"},src:{type:"string",description:"Image source"},name:{type:"string",description:"Name of the user/entity"}}},e={args:{variant:"identity",src:"https://m.media-amazon.com/images/M/MV5BNDhiMWYzMjgtNTRiYi00ZTA3LThlODctNDRkMDk0NzFkMWI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg0MTkzMzA@._V1_.jpg",name:"Super Dave"},render:k=>n.jsx(s,{...k})},a={render:()=>n.jsx(s,{variant:"entity",src:"https://avatars.githubusercontent.com/u/94311139?s=200&v=4",name:"Intuition"})},t={render:()=>n.jsx(s,{name:"Super Dave"})},r={render:()=>n.jsx(s,{variant:"entity",name:"Intuition"})};var o,i,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'identity',
    src: 'https://m.media-amazon.com/images/M/MV5BNDhiMWYzMjgtNTRiYi00ZTA3LThlODctNDRkMDk0NzFkMWI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg0MTkzMzA@._V1_.jpg',
    name: 'Super Dave'
  },
  render: args => <Avatar {...args} />
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,p,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Avatar variant="entity" src="https://avatars.githubusercontent.com/u/94311139?s=200&v=4" name="Intuition" />
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,l,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Avatar name="Super Dave" />
}`,...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var v,y,M;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Avatar variant="entity" name="Intuition" />
}`,...(M=(y=r.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};const b=["BasicUsage","Entity","UserFallback","EntityFallback"],T=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,Entity:a,EntityFallback:r,UserFallback:t,__namedExportsOrder:b,default:S},Symbol.toStringTag,{value:"Module"}));export{e as B,a as E,T as S,t as U,r as a};
