import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{b5 as e,b6 as s}from"./TransactionStatusIndicator-CeOhUi86.js";const C={title:"Components/StakeButton",component:e,parameters:{docs:{description:{component:"Displays a button for inline staking on Claim and Identity row components."}},controls:{exclude:["className","style","asChild"]}},argTypes:{numPositions:{description:"Number of positions on the vault.",table:{type:{summary:"number"},defaultValue:{summary:"69"}},control:"number"},variant:{description:"Variant of stake button",options:Object.values(s),table:{type:{summary:"string"},defaultValue:{summary:"primary"}},control:"select"},onClick:{description:"Callback function when the stake button is clicked",control:!1}}},n={args:{variant:s.identity,numPositions:69,onClick:()=>console.log("Clicked!")},render:a=>r.jsx(e,{...a})},t={args:{variant:s.claimFor,numPositions:69,onClick:()=>console.log("Clicked!")},render:a=>r.jsx(e,{...a})},o={args:{variant:s.claimAgainst,numPositions:69,onClick:()=>console.log("Clicked!")},render:a=>r.jsx(e,{...a})};var i,c,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: StakeButtonVariant.identity,
    numPositions: 69,
    onClick: () => console.log('Clicked!')
  },
  render: args => <StakeButton {...args} />
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,u,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: StakeButtonVariant.claimFor,
    numPositions: 69,
    onClick: () => console.log('Clicked!')
  },
  render: args => <StakeButton {...args} />
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,g,k;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: StakeButtonVariant.claimAgainst,
    numPositions: 69,
    onClick: () => console.log('Clicked!')
  },
  render: args => <StakeButton {...args} />
}`,...(k=(g=o.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const S=["BasicUsage","ClaimFor","ClaimAgainst"],f=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:n,ClaimAgainst:o,ClaimFor:t,__namedExportsOrder:S,default:C},Symbol.toStringTag,{value:"Module"}));export{n as B,t as C,f as S,o as a};
