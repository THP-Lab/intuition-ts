import{j as d}from"./jsx-runtime-Cw0GR0a5.js";import{N as a,S as u,k as m}from"./IdentityCard-CmYiHgKZ.js";const p={title:"Components/Dataset/IdentityCard",component:a,argTypes:{variant:{description:"Variant of avatar",options:Object.values(u),table:{type:{summary:"string"},defaultValue:{summary:"identity"}},control:"select"},avatarSrc:{type:"string",description:"Avatar image source"},name:{type:"string",description:"Name of the identity/entity"},value:{type:"number",description:"Value associated to identity/entity"},currency:{description:"Currency of the value provided",options:Object.values(m),table:{type:{summary:"string"},defaultValue:{summary:"ETH"}},control:"select"},walletAddress:{type:"string",description:"Wallet address of identity/entity"}}},e={args:{variant:"identity",avatarSrc:"https://m.media-amazon.com/images/M/MV5BNDhiMWYzMjgtNTRiYi00ZTA3LThlODctNDRkMDk0NzFkMWI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg0MTkzMzA@._V1_.jpg",name:"Super Dave",value:4.123,currency:"ETH",walletAddress:"0x1234567890abcdef1234567890abcdef12345678"},render:l=>d.jsx(a,{...l})},t={render:()=>d.jsx(a,{variant:"entity",avatarSrc:"https://avatars.githubusercontent.com/u/94311139?s=200&v=4",name:"Intuition",value:7.892,currency:"ETH",walletAddress:"0x1234567890abcdef1234567890abcdef12345678"})};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    variant: 'identity',
    avatarSrc: 'https://m.media-amazon.com/images/M/MV5BNDhiMWYzMjgtNTRiYi00ZTA3LThlODctNDRkMDk0NzFkMWI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg0MTkzMzA@._V1_.jpg',
    name: 'Super Dave',
    value: 4.123,
    currency: 'ETH',
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678'
  },
  render: args => <IdentityCard {...args} />
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var i,c,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <IdentityCard variant="entity" avatarSrc="https://avatars.githubusercontent.com/u/94311139?s=200&v=4" name="Intuition" value={7.892} currency="ETH" walletAddress="0x1234567890abcdef1234567890abcdef12345678" />
}`,...(o=(c=t.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};const y=["BasicUsage","Entity"],b=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,Entity:t,__namedExportsOrder:y,default:p},Symbol.toStringTag,{value:"Module"}));export{e as B,t as E,b as S};
