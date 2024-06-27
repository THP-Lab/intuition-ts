import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{d as _,aY as F,aZ as D,aK as I,aL as O,aV as W,C as z}from"./IdentityCard-CmYiHgKZ.js";import"./Icon.types-CdnF8hRC.js";import"./Input-ChUPLhCP.js";import"./Label-BE9934Bx.js";import"./PieChart-B_dtFskq.js";import"./Resizable-CYN5O2qj.js";import"./SegmentedControl-C8563B2q.js";import"./Separator-upiNYcQT.js";import"./Table-BRTqj0wF.js";import{T as n,a as l,b as L}from"./Text-dMYK5Tk0.js";import"./Textarea-D_YQ6kc-.js";import"./ValueDisplay-BU89B4rt.js";const u={claim:"claim",user:"user"},i=({variant:a,position:h,claimsFor:j=0,claimsAgainst:o=0,amount:N,currency:y,feesAccrued:w,name:c,walletAddress:A,avatarSrc:C,updatedAt:m,tags:t,children:P,...V})=>{const T=o/(j+o)*100;return e.jsxs("div",{className:"w-full flex justify-between",...V,children:[a===u.user&&e.jsxs("div",{className:"flex items-center",children:[e.jsx(_,{src:C,name:c,className:"w-16 h-16 mr-4"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-center mb-1.5",children:[e.jsx(n,{variant:l.bodyLarge,className:"mr-1",children:c}),e.jsx(n,{variant:l.body,className:"text-secondary-foreground",children:F(A)})]}),m&&e.jsxs(n,{variant:l.caption,weight:L.medium,className:"text-secondary-foreground mb-2",children:["Last update ",D(m)]}),t&&t.length>0&&e.jsx("div",{className:"flex gap-2 mt-1",children:e.jsx(I,{numberOfTags:t.length,children:t.slice(0,4).map((d,S)=>e.jsx(O,{label:d.label,value:d.value},S))})})]})]}),a===u.claim&&e.jsxs("div",{className:"flex flex-col justify-between w-[60%]",children:[e.jsxs("div",{className:"flex items-center h-[6px] mb-4",children:[e.jsx("span",{className:"h-full bg-against block rounded-l-sm",style:{minWidth:`${T}%`}}),e.jsx("span",{className:"h-full w-full bg-for block rounded-r-sm"})]}),P]}),e.jsx(W,{value:N,position:h,feesAccrued:w,currency:y})]})};i.__docgenInfo={description:"",methods:[],displayName:"ClaimPosition",props:{claimsFor:{defaultValue:{value:"0",computed:!1},required:!1},claimsAgainst:{defaultValue:{value:"0",computed:!1},required:!1}}};const U={title:"Components/ClaimPosition",component:i},s={args:{variant:"user",position:"claimFor",name:"John Doe",walletAddress:"0x1234567890abcdef1234567890abcdef12345678",avatarSrc:'https://avatars.githubusercontent.com/u/94311139?s=200&v=4"',amount:1.21,feesAccrued:.005,updatedAt:"2021-10-01T16:00:00Z"},render:a=>e.jsx("div",{className:"w-[800px]",children:e.jsx(i,{...a})})},r={args:{variant:"claim",position:"claimAgainst",claimsFor:30,claimsAgainst:70,amount:1.21,feesAccrued:.005},render:a=>e.jsx("div",{className:"w-[800px]",children:e.jsx(i,{...a,children:e.jsx(z,{size:"sm",subject:{variant:"default",label:"0xintuition"},predicate:{label:"is really"},object:{label:"cool"}})})})};var p,x,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var b,v,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const Z=["UserVariant","IdentityVariant"],X=Object.freeze(Object.defineProperty({__proto__:null,IdentityVariant:r,UserVariant:s,__namedExportsOrder:Z,default:U},Symbol.toStringTag,{value:"Module"}));export{r as I,X as S,s as U};
