import{j as s}from"./jsx-runtime-Cw0GR0a5.js";import{C as l}from"./MonetaryValue-BnN56IlB.js";import{e as r}from"./ClaimStakeCard-ButMG1DJ.js";const c={title:"Components/ClaimStakeCard",component:r,argTypes:{currency:{description:"Currency type",options:Object.values(l),table:{type:{summary:"string"}},control:"select"}}},t={args:{currency:"ETH",totalTVL:4.928,tvlAgainst:.567,tvlFor:3.643,amountAgainst:39,amountFor:124,disableAgainstBtn:!1,disableForBtn:!1,onAgainstBtnClick:()=>console.log("Against button clicked!"),onForBtnClick:()=>console.log("For button clicked!")},render:a=>s.jsx(r,{...a})};var n,o,e;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    currency: 'ETH',
    totalTVL: 4.928,
    tvlAgainst: 0.567,
    tvlFor: 3.643,
    amountAgainst: 39,
    amountFor: 124,
    disableAgainstBtn: false,
    disableForBtn: false,
    onAgainstBtnClick: () => console.log('Against button clicked!'),
    onForBtnClick: () => console.log('For button clicked!')
  },
  render: args => <ClaimStakeCard {...args} />
}`,...(e=(o=t.parameters)==null?void 0:o.docs)==null?void 0:e.source}}};const i=["BasicUsage"],d=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:t,__namedExportsOrder:i,default:c},Symbol.toStringTag,{value:"Module"}));export{t as B,d as S};
