import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{z as s,e as i}from"./TransactionStatusIndicator-BNWelnuU.js";const l={title:"Components/Claim/ClaimStakeCard",component:s,argTypes:{currency:{description:"Currency type",options:Object.values(i),table:{type:{summary:"string"}},control:"select"}}},n={args:{currency:"ETH",totalTVL:4.928,tvlAgainst:.567,tvlFor:3.643,numPositionsAgainst:39,numPositionsFor:124,disableAgainstBtn:!1,disableForBtn:!1,onAgainstBtnClick:()=>console.log("Against button clicked!"),onForBtnClick:()=>console.log("For button clicked!")},render:r=>a.jsx(s,{...r})};var t,o,e;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    currency: 'ETH',
    totalTVL: 4.928,
    tvlAgainst: 0.567,
    tvlFor: 3.643,
    numPositionsAgainst: 39,
    numPositionsFor: 124,
    disableAgainstBtn: false,
    disableForBtn: false,
    onAgainstBtnClick: () => console.log('Against button clicked!'),
    onForBtnClick: () => console.log('For button clicked!')
  },
  render: args => <ClaimStakeCard {...args} />
}`,...(e=(o=n.parameters)==null?void 0:o.docs)==null?void 0:e.source}}};const c=["BasicUsage"],u=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:n,__namedExportsOrder:c,default:l},Symbol.toStringTag,{value:"Module"}));export{n as B,u as S};
