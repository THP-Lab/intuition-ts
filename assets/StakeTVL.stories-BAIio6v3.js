import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{b7 as a}from"./TransactionStatusIndicator-B3Y_MXqP.js";const u={title:"Components/StakeTVL",component:a,parameters:{docs:{description:{component:"Displays TVL (Total Value Locked) information with optional pie chart."}},controls:{exclude:["className","style"]}},argTypes:{totalTVL:{description:"Total TVL amount",table:{type:{summary:"number"},defaultValue:{summary:"420.69"}},control:"number"},tvlFor:{description:'TVL amount for the "For" position',table:{type:{summary:"number"},defaultValue:{summary:"240.69"}},control:"number"},currency:{description:"The currency symbol",table:{type:{summary:"string"},defaultValue:{summary:"ETH"}},control:"text"},isClaim:{description:"Whether to show the pie chart",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}}},e={args:{totalTVL:420.69,currency:"ETH",isClaim:!1},render:t=>i.jsx(a,{...t})},r={args:{totalTVL:420.69,tvlFor:240.69,currency:"ETH",isClaim:!0},render:t=>i.jsx(a,{...t})};var o,s,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    totalTVL: 420.69,
    currency: 'ETH',
    isClaim: false
  },
  render: args => <StakeTVL {...args} />
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var l,c,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    totalTVL: 420.69,
    tvlFor: 240.69,
    currency: 'ETH',
    isClaim: true
  },
  render: args => <StakeTVL {...args} />
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const p=["BasicUsage","WithPieChart"],T=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,WithPieChart:r,__namedExportsOrder:p,default:u},Symbol.toStringTag,{value:"Module"}));export{e as B,T as S,r as W};
