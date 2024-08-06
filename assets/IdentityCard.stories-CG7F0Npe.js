import{j as d}from"./jsx-runtime-Cw0GR0a5.js";import{U as t,I as l,e as m}from"./TransactionStatusIndicator-BM00ufCT.js";const p={title:"Components/Identity/IdentityCard",component:t,argTypes:{variant:{description:"Variant of avatar",options:Object.values(l),table:{type:{summary:"string"},defaultValue:{summary:"user"}},control:"select"},avatarSrc:{type:"string",description:"Avatar image source"},name:{type:"string",description:"Name of the identity"},value:{type:"number",description:"Value associated to identity"},currency:{description:"Currency of the value provided",options:Object.values(m),table:{type:{summary:"string"},defaultValue:{summary:"ETH"}},control:"select"},walletAddress:{type:"string",description:"Wallet address of identity"}}},e={args:{variant:"user",avatarSrc:"https://m.media-amazon.com/images/M/MV5BNDhiMWYzMjgtNTRiYi00ZTA3LThlODctNDRkMDk0NzFkMWI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg0MTkzMzA@._V1_.jpg",name:"Super Dave",value:4.123,currency:"ETH",walletAddress:"0x1234567890abcdef1234567890abcdef12345678"},render:u=>d.jsx(t,{...u})},a={render:()=>d.jsx(t,{variant:"non-user",avatarSrc:"https://avatars.githubusercontent.com/u/94311139?s=200&v=4",name:"Intuition",value:7.892,currency:"ETH",walletAddress:"0x1234567890abcdef1234567890abcdef12345678"})};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    variant: 'user',
    avatarSrc: 'https://m.media-amazon.com/images/M/MV5BNDhiMWYzMjgtNTRiYi00ZTA3LThlODctNDRkMDk0NzFkMWI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg0MTkzMzA@._V1_.jpg',
    name: 'Super Dave',
    value: 4.123,
    currency: 'ETH',
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678'
  },
  render: args => <IdentityCard {...args} />
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var c,i,o;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <IdentityCard variant="non-user" avatarSrc="https://avatars.githubusercontent.com/u/94311139?s=200&v=4" name="Intuition" value={7.892} currency="ETH" walletAddress="0x1234567890abcdef1234567890abcdef12345678" />
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const y=["BasicUsage","Entity"],f=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,Entity:a,__namedExportsOrder:y,default:p},Symbol.toStringTag,{value:"Module"}));export{e as B,a as E,f as S};
