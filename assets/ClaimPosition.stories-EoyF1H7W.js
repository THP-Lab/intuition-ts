import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{m as t,k as d}from"./Trunctacular-CQXa-Vsq.js";import"./Icon.types-D5zuhAbZ.js";import"./Input-BPM31_im.js";import"./Label-DzNLlIBV.js";import"./PieChart-B_dtFskq.js";import"./Resizable-X9Hr8Gxc.js";import"./SegmentedControl-Bhn13kRZ.js";import"./Separator-C_RZmUxf.js";import"./Table-BR553Jwj.js";import"./Text-DdASfXbZ.js";import"./Textarea-qTR3kLUl.js";import"./ValueDisplay-ChJkojwK.js";const p={title:"Components/ClaimPosition",component:t},a={args:{variant:"user",position:"claimFor",name:"John Doe",walletAddress:"0x1234567890abcdef1234567890abcdef12345678",avatarSrc:'https://avatars.githubusercontent.com/u/94311139?s=200&v=4"',amount:1.21,feesAccrued:.005,updatedAt:"2021-10-01T16:00:00Z"},render:r=>e.jsx("div",{className:"w-[800px]",children:e.jsx(t,{...r})})},n={args:{variant:"claim",position:"claimAgainst",claimsFor:30,claimsAgainst:70,amount:1.21,feesAccrued:.005},render:r=>e.jsx("div",{className:"w-[800px]",children:e.jsx(t,{...r,children:e.jsx(d,{subject:{variant:"non-user",label:"0xintuition"},predicate:{variant:"non-user",label:"is really"},object:{variant:"non-user",label:"cool"}})})})};var s,i,o;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
      <ClaimPosition {...args}></ClaimPosition>
    </div>
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var c,m,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'claim',
    position: 'claimAgainst',
    claimsFor: 30,
    claimsAgainst: 70,
    amount: 1.21,
    feesAccrued: 0.005
  },
  render: args => <div className="w-[800px]">
      <ClaimPosition {...args}>
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
      </ClaimPosition>
    </div>
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const u=["UserVariant","IdentityVariant"],_=Object.freeze(Object.defineProperty({__proto__:null,IdentityVariant:n,UserVariant:a,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{n as I,_ as S,a as U};
