import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{K as r}from"./Tag-Cu_Bu3YM.js";const u={title:"Components/IdentityPosition",component:r},e={args:{variant:"user",name:"John Doe",walletAddress:"0x1234567890abcdef1234567890abcdef12345678",avatarSrc:'https://avatars.githubusercontent.com/u/94311139?s=200&v=4"',amount:1.21,feesAccrued:.005,updatedAt:"2021-10-01T16:00:00Z"},render:t=>n.jsx("div",{className:"w-[800px]",children:n.jsx(r,{...t})})},a={args:{variant:"identity",name:"Amazon",walletAddress:"0x1234567890abcdef1234567890abcdef12345678",amount:1.21,feesAccrued:.005,tags:[{label:"keyboard",value:34},{label:"ergonomic",value:56},{label:"wireless",value:12},{label:"gaming",value:77},{label:"work",value:11},{label:"home",value:34}]},render:t=>n.jsx("div",{className:"w-[800px]",children:n.jsx(r,{...t})})};var s,o,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'user',
    name: 'John Doe',
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
    avatarSrc: 'https://avatars.githubusercontent.com/u/94311139?s=200&v=4"',
    amount: 1.21,
    feesAccrued: 0.005,
    updatedAt: '2021-10-01T16:00:00Z'
  },
  render: args => <div className="w-[800px]">
      <IdentityPosition {...args}></IdentityPosition>
    </div>
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var d,i,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'identity',
    name: 'Amazon',
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
    amount: 1.21,
    feesAccrued: 0.005,
    tags: [{
      label: 'keyboard',
      value: 34
    }, {
      label: 'ergonomic',
      value: 56
    }, {
      label: 'wireless',
      value: 12
    }, {
      label: 'gaming',
      value: 77
    }, {
      label: 'work',
      value: 11
    }, {
      label: 'home',
      value: 34
    }]
  },
  render: args => <div className="w-[800px]">
      <IdentityPosition {...args}></IdentityPosition>
    </div>
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const m=["UserVariant","IdentityVariant"],p=Object.freeze(Object.defineProperty({__proto__:null,IdentityVariant:a,UserVariant:e,__namedExportsOrder:m,default:u},Symbol.toStringTag,{value:"Module"}));export{a as I,p as S,e as U};
