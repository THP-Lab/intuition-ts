import{j as s}from"./jsx-runtime-Cw0GR0a5.js";import{o as a,e as l}from"./QuestCard-EX4D-EbA.js";const c={title:"Components/Claim/ClaimStakeCard",component:a,argTypes:{currency:{description:"Currency type",options:Object.values(l),table:{type:{summary:"string"}},control:"select"}}},t={args:{currency:"ETH",totalTVL:4.928,tvlAgainst:.567,tvlFor:3.643,amountAgainst:39,amountFor:124,disableAgainstBtn:!1,disableForBtn:!1,onAgainstBtnClick:()=>console.log("Against button clicked!"),onForBtnClick:()=>console.log("For button clicked!")},render:r=>s.jsx(a,{...r})};var n,e,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(e=t.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const i=["BasicUsage"],u=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:t,__namedExportsOrder:i,default:c},Symbol.toStringTag,{value:"Module"}));export{t as B,u as S};
