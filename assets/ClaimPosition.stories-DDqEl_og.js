import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{j as s,C as d}from"./Tooltip-C76MCh6_.js";import"./Icon.types-CdnF8hRC.js";import"./Input-ChUPLhCP.js";import"./Label-BE9934Bx.js";import"./PieChart-B_dtFskq.js";import"./Resizable-CYN5O2qj.js";import"./SegmentedControl-C8563B2q.js";import"./Separator-upiNYcQT.js";import"./Table-BRTqj0wF.js";import"./Text-dMYK5Tk0.js";import"./Textarea-D_YQ6kc-.js";import"./ValueDisplay-BU89B4rt.js";const p={title:"Components/ClaimPosition",component:s},a={args:{variant:"user",position:"claimFor",name:"John Doe",walletAddress:"0x1234567890abcdef1234567890abcdef12345678",avatarSrc:'https://avatars.githubusercontent.com/u/94311139?s=200&v=4"',amount:1.21,feesAccrued:.005,updatedAt:"2021-10-01T16:00:00Z"},render:r=>t.jsx("div",{className:"w-[800px]",children:t.jsx(s,{...r})})},e={args:{variant:"claim",position:"claimAgainst",claimsFor:30,claimsAgainst:70,amount:1.21,feesAccrued:.005},render:r=>t.jsx("div",{className:"w-[800px]",children:t.jsx(s,{...r,children:t.jsx(d,{size:"sm",subject:{variant:"default",label:"0xintuition"},predicate:{label:"is really"},object:{label:"cool"}})})})};var n,i,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var c,m,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
        <Claim size="sm" subject={{
        variant: 'default',
        label: '0xintuition'
      }} predicate={{
        label: 'is really'
      }} object={{
        label: 'cool'
      }} />
      </ClaimPosition>
    </div>
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const u=["UserVariant","IdentityVariant"],_=Object.freeze(Object.defineProperty({__proto__:null,IdentityVariant:e,UserVariant:a,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{e as I,_ as S,a as U};
