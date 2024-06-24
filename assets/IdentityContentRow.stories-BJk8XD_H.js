import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{E as t}from"./ClaimStakeCard-ButMG1DJ.js";const m={title:"Components/IdentityContentRow",component:t},e={args:{variant:"user",name:"John Doe",walletAddress:"0x1234567890abcdef1234567890abcdef12345678",avatarSrc:'https://avatars.githubusercontent.com/u/94311139?s=200&v=4"',amount:1.21,totalFollowers:305,tags:[{label:"keyboard",value:34},{label:"ergonomic",value:56},{label:"wireless",value:12},{label:"gaming",value:77},{label:"work",value:11},{label:"home",value:34}]},render:l=>n.jsx("div",{className:"w-[800px]",children:n.jsx(t,{...l})})},a={args:{variant:"entity",name:"Amazon",walletAddress:"0x1234567890abcdef1234567890abcdef12345678",amount:.321,totalFollowers:123,tags:[{label:"keyboard",value:34},{label:"ergonomic",value:56},{label:"wireless",value:12},{label:"gaming",value:77},{label:"work",value:11},{label:"home",value:34}]},render:l=>n.jsx("div",{className:"w-[800px]",children:n.jsx(t,{...l})})};var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    variant: 'user',
    name: 'John Doe',
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
    avatarSrc: 'https://avatars.githubusercontent.com/u/94311139?s=200&v=4"',
    amount: 1.21,
    totalFollowers: 305,
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
      <IdentityContentRow {...args}></IdentityContentRow>
    </div>
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,d,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'entity',
    name: 'Amazon',
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
    amount: 0.321,
    totalFollowers: 123,
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
      <IdentityContentRow {...args}></IdentityContentRow>
    </div>
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const c=["UserVariant","EntityVariant"],g=Object.freeze(Object.defineProperty({__proto__:null,EntityVariant:a,UserVariant:e,__namedExportsOrder:c,default:m},Symbol.toStringTag,{value:"Module"}));export{a as E,g as S,e as U};
