import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{bc as o}from"./TransactionStatusIndicator-DFtlRZ33.js";const y={title:"Components/Trunctacular",component:o,argTypes:{variant:{description:"Variant of text",options:["heading1","heading2","heading3","heading4","heading5","headline","bodyLarge","body","caption","footnote","small"],table:{type:{summary:"string"},defaultValue:{summary:"body"}},control:"select"},weight:{description:"Weight of text",options:["normal","medium","semibold","bold"],table:{type:{summary:"string"},defaultValue:{summary:"normal"}},control:"select"}}},e={args:{value:"reallyReallyLongName"},render:g=>t.jsx(o,{...g})},a={render:()=>t.jsx(o,{value:"0x1234567890abcdef1234567890abcdef12345678"})},r={render:()=>t.jsx(o,{value:"shortName"})};var s,n,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    value: 'reallyReallyLongName'
  },
  render: args => <Trunctacular {...args} />
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var l,u,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Trunctacular value="0x1234567890abcdef1234567890abcdef12345678" />
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Trunctacular value="shortName" />
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const b=["BasicUsage","WalletUsage","NoTruncation"],h=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,NoTruncation:r,WalletUsage:a,__namedExportsOrder:b,default:y},Symbol.toStringTag,{value:"Module"}));export{e as B,r as N,h as S,a as W};
