import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{x as t,v as p}from"./TransactionStatusIndicator-B3Y_MXqP.js";import"./Checkbox-CPOTdBJo.js";import"./Icon.types-C3De9izv.js";import"./Label-CgXaQSDT.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-CLwyaxSZ.js";import"./ProgressCard-W_leyiJE.js";import"./ScrollArea-Dpd6zEPX.js";import"./SegmentedControl-DDi9rVur.js";import"./Separator-B4E8D3RY.js";import"./Skeleton-CIfu6pJi.js";import"./Table-sWfaeKPM.js";import"./Text-SXw3eAzI.js";import"./Textarea-C-i5JcFJ.js";import"./ValueDisplay-BdKJoXJc.js";const d={title:"Components/Claim/ClaimPositionRow",component:t},a={args:{variant:"user",position:"for",name:"John Doe",id:"0x1234567890abcdef1234567890abcdef12345678",avatarSrc:'https://avatars.githubusercontent.com/u/94311139?s=200&v=4"',amount:1.21,feesAccrued:.005,updatedAt:"2021-10-01T16:00:00Z"},render:e=>r.jsx("div",{className:"w-[800px]",children:r.jsx(t,{...e})})},n={args:{variant:"claim",position:"against",claimsFor:30,claimsAgainst:70,amount:1.21,feesAccrued:.005},render:e=>r.jsx("div",{className:"w-[800px]",children:r.jsx(t,{...e,children:r.jsx(p,{subject:{variant:"non-user",label:"0xintuition"},predicate:{variant:"non-user",label:"is really"},object:{variant:"non-user",label:"cool"}})})})};var o,i,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'user',
    position: 'for',
    name: 'John Doe',
    id: '0x1234567890abcdef1234567890abcdef12345678',
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
    position: 'against',
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
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const u=["UserVariant","IdentityVariant"],V=Object.freeze(Object.defineProperty({__proto__:null,IdentityVariant:n,UserVariant:a,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{n as I,V as S,a as U};
