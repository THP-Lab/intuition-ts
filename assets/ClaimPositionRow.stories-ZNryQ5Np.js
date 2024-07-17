import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{m as t,k as p}from"./QuestCard-BStuYoCQ.js";import"./Icon.types-DvvrcWKg.js";import"./Label-BSnWqvXc.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-D75vLLzs.js";import"./ProgressCard-BrCNH_y5.js";import"./SegmentedControl-C43o2uqF.js";import"./Separator-8RGezXAr.js";import"./Table-C0qIXiUM.js";import"./Text-DsVeH9qI.js";import"./Textarea-CUiVvNKI.js";import"./ValueDisplay-D2U_pdiu.js";import"./QuestSetCard-DXHyju0d.js";import"./QuestStatusIndicator-Dppz0ehK.js";import"./QuestCriteriaCard-A0DJuMkI.js";import"./QuestCriteriaDisplay-BzNuGZIV.js";import"./QuestPointsDisplay-ejZCRmtZ.js";import"./Skeleton-BtFXuCOi.js";const d={title:"Components/Claim/ClaimPositionRow",component:t},a={args:{variant:"user",position:"claimFor",name:"John Doe",walletAddress:"0x1234567890abcdef1234567890abcdef12345678",avatarSrc:'https://avatars.githubusercontent.com/u/94311139?s=200&v=4"',amount:1.21,feesAccrued:.005,updatedAt:"2021-10-01T16:00:00Z"},render:e=>n.jsx("div",{className:"w-[800px]",children:n.jsx(t,{...e})})},r={args:{variant:"claim",position:"claimAgainst",claimsFor:30,claimsAgainst:70,amount:1.21,feesAccrued:.005},render:e=>n.jsx("div",{className:"w-[800px]",children:n.jsx(t,{...e,children:n.jsx(p,{subject:{variant:"non-user",label:"0xintuition"},predicate:{variant:"non-user",label:"is really"},object:{variant:"non-user",label:"cool"}})})})};var o,i,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(i=a.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var m,c,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const u=["UserVariant","IdentityVariant"],O=Object.freeze(Object.defineProperty({__proto__:null,IdentityVariant:r,UserVariant:a,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{r as I,O as S,a as U};
