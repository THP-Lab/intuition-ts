import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{j as t,h as p}from"./QuestStatusCard-DHg4VJWa.js";import"./QuestSetProgressCard-ClGoFBEX.js";import"./Icon.types-9co6RU8J.js";import"./Label-DKqTtzje.js";import"./PieChart-B_dtFskq.js";import"./Resizable-B8LsIgh_.js";import"./SegmentedControl-DEtPxF6_.js";import"./Separator-y1Wg93hL.js";import"./Table-DiAONwIH.js";import"./Text-CvCwWh2A.js";import"./Textarea-DGcnJGMC.js";import"./ValueDisplay-s0UeY4GO.js";import"./QuestSetCard-CU4evGOs.js";import"./ProgressBar-BdoIrmiA.js";import"./QuestStatusIndicator-DbTTS57h.js";const d={title:"Components/Claim/ClaimPositionRow",component:t},a={args:{variant:"user",position:"claimFor",name:"John Doe",walletAddress:"0x1234567890abcdef1234567890abcdef12345678",avatarSrc:'https://avatars.githubusercontent.com/u/94311139?s=200&v=4"',amount:1.21,feesAccrued:.005,updatedAt:"2021-10-01T16:00:00Z"},render:e=>r.jsx("div",{className:"w-[800px]",children:r.jsx(t,{...e})})},n={args:{variant:"claim",position:"claimAgainst",claimsFor:30,claimsAgainst:70,amount:1.21,feesAccrued:.005},render:e=>r.jsx("div",{className:"w-[800px]",children:r.jsx(t,{...e,children:r.jsx(p,{subject:{variant:"non-user",label:"0xintuition"},predicate:{variant:"non-user",label:"is really"},object:{variant:"non-user",label:"cool"}})})})};var o,i,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'user',
    position: 'claimFor',
    name: 'John Doe',
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
    avatarSrc: 'https://avatars.githubusercontent.com/u/94311139?s=200&v=4"',
    amount: 1.21,
    feesAccrued: 0.005,
    updatedAt: '2021-10-01T16:00:00Z'
  },
  render: args => <div className="w-[800px]">
      <ClaimPositionRow {...args}></ClaimPositionRow>
    </div>
}`,...(s=(i=a.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var c,m,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'claim',
    position: 'claimAgainst',
    claimsFor: 30,
    claimsAgainst: 70,
    amount: 1.21,
    feesAccrued: 0.005
  },
  render: args => <div className="w-[800px]">
      <ClaimPositionRow {...args}>
        <Claim subject={{
        variant: 'non-user',
        label: '0xintuition'
      }} predicate={{
        variant: 'non-user',
        label: 'is really'
      }} object={{
        variant: 'non-user',
        label: 'cool'
      }} />
      </ClaimPositionRow>
    </div>
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const u=["UserVariant","IdentityVariant"],N=Object.freeze(Object.defineProperty({__proto__:null,IdentityVariant:n,UserVariant:a,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{n as I,N as S,a as U};
