import{j as c}from"./jsx-runtime-Cw0GR0a5.js";import{U as a,I as l,i as p}from"./QuestStatusCard-CF08gGqm.js";const u={title:"Components/Identity/IdentityTag",component:a,argTypes:{variant:{description:"Variant of component",options:Object.values(l),table:{type:{summary:"string"},defaultValue:{summary:"user"}},control:"select"},size:{description:"Size of component",options:Object.values(p),table:{type:{summary:"string"},defaultValue:{summary:"default"}},control:"select"}}},e={args:{variant:"user",imgSrc:"https://m.media-amazon.com/images/M/MV5BNDhiMWYzMjgtNTRiYi00ZTA3LThlODctNDRkMDk0NzFkMWI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg0MTkzMzA@._V1_.jpg",size:"default",children:"super dave",disabled:!1},render:m=>c.jsx(a,{...m})},t={render:()=>c.jsx(a,{variant:"non-user",children:"identity name"})};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    variant: 'user',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BNDhiMWYzMjgtNTRiYi00ZTA3LThlODctNDRkMDk0NzFkMWI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg0MTkzMzA@._V1_.jpg',
    size: 'default',
    children: 'super dave',
    disabled: false
  },
  render: args => <IdentityTag {...args} />
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var i,o,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <IdentityTag variant="non-user">identity name</IdentityTag>
}`,...(d=(o=t.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const g=["BasicUsage","User"],M=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,User:t,__namedExportsOrder:g,default:u},Symbol.toStringTag,{value:"Module"}));export{e as B,M as S,t as U};
