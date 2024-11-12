import{j as s}from"./jsx-runtime-Cw0GR0a5.js";import{aa as m,I as u}from"./TransactionStatusIndicator-DylL52tj.js";const d={title:"Components/Identity/IdentityRow",component:m,parameters:{docs:{description:{component:"Displays identity information with TVL and stake actions."}},controls:{exclude:["className","style"]}},argTypes:{variant:{description:"Type of identity",options:Object.values(u),table:{type:{summary:"string"},defaultValue:{summary:"user"}},control:"select"},totalTVL:{description:"Total TVL amount",table:{type:{summary:"number"},defaultValue:{summary:"420.69"}},control:"number"},numPositions:{description:"Number of positions",table:{type:{summary:"number"},defaultValue:{summary:"69"}},control:"number"},userPosition:{description:"Amount staked by the user",table:{type:{summary:"number"},defaultValue:{summary:"3.19"}},control:"number"}}},e={args:{variant:u.user,totalTVL:"420.69",currency:"ETH",name:"John Doe",avatarSrc:"https://avatars.githubusercontent.com/u/1?v=4",link:"/identity/1",numPositions:69,onStakeClick:()=>console.log("Clicked!")},render:l=>s.jsx("div",{className:"w-[800px]",children:s.jsx(m,{...l})})},t={args:{...e.args,userPosition:"3.19"},render:e.render};var r,a,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    variant: Identity.user,
    totalTVL: '420.69',
    currency: 'ETH',
    name: 'John Doe',
    avatarSrc: 'https://avatars.githubusercontent.com/u/1?v=4',
    link: '/identity/1',
    numPositions: 69,
    onStakeClick: () => console.log('Clicked!')
  },
  render: args => <div className="w-[800px]">
      <IdentityRow {...args} />
    </div>
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var o,i,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ...BasicUsage.args,
    userPosition: '3.19'
  },
  render: BasicUsage.render
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const p=["BasicUsage","WithUserPosition"],b=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,WithUserPosition:t,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{e as B,b as S,t as W};
