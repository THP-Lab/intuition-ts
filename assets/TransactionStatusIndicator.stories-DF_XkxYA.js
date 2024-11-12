import{j as c}from"./jsx-runtime-Cw0GR0a5.js";import{br as r,bq as n,bs as o}from"./TransactionStatusIndicator-B41sf_Ni.js";const p={title:"Components/TransactionStatus/TransactionStatusIndicator",component:r,argTypes:{status:{description:"Status of transaction",options:Object.values(n),table:{type:{summary:"string"}},control:"select"},type:{description:"Type of transaction",options:Object.values(o),table:{type:{summary:"string"}},control:"select"}}},t={args:{status:n.awaiting,type:o.identity},render:i=>c.jsx(r,{...i})};var a,s,e;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    status: TransactionStatus.awaiting,
    type: Transaction.identity
  },
  render: args => <TransactionStatusIndicator {...args} />
}`,...(e=(s=t.parameters)==null?void 0:s.docs)==null?void 0:e.source}}};const u=["BasicUsage"],l=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:t,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{t as B,l as S};
