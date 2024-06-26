import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{aP as _,aD as F,aE as D,aO as I,C as O}from"./Tag-Cu_Bu3YM.js";import{A as W,a as k,b as z}from"./Avatar-C06NoQCR.js";import{f as E}from"./ProfileCard-RX6h7HyT.js";import"./Icon.types-CbO5tIj7.js";import"./Input-ChUPLhCP.js";import"./Label-CHrQpPtq.js";import"./PieChart-B_dtFskq.js";import"./Resizable-CVVfJ2th.js";import"./SegmentedControl-C8563B2q.js";import"./Separator-K7xgKtVw.js";import"./Table-BRTqj0wF.js";import{T as l,a as o,b as U}from"./Text-dMYK5Tk0.js";import"./Textarea-D_YQ6kc-.js";import"./ValueDisplay-BU89B4rt.js";const u={claim:"claim",user:"user"},i=({variant:e,position:j,claimsFor:g=0,claimsAgainst:c=0,amount:N,currency:A,feesAccrued:y,name:n,walletAddress:w,avatarSrc:C,updatedAt:m,tags:t,children:P,...T})=>{const V=c/(g+c)*100;return a.jsxs("div",{className:"w-full flex justify-between",...T,children:[e===u.user&&a.jsxs("div",{className:"flex items-center",children:[a.jsxs(W,{className:"w-16 h-16 mr-4",children:[a.jsx(k,{src:C,alt:n}),a.jsx(z,{children:n.slice(0,2)})]}),a.jsxs("div",{className:"flex flex-col",children:[a.jsxs("div",{className:"flex items-center mb-1.5",children:[a.jsx(l,{variant:o.bodyLarge,className:"mr-1",children:n}),a.jsx(l,{variant:o.body,className:"text-secondary-foreground",children:E(w)})]}),m&&a.jsxs(l,{variant:o.caption,weight:U.medium,className:"text-secondary-foreground mb-2",children:["Last update ",_(m)]}),t&&t.length>0&&a.jsx("div",{className:"flex gap-2 mt-1",children:a.jsx(F,{numberOfTags:t.length,children:t.slice(0,4).map((d,S)=>a.jsx(D,{label:d.label,value:d.value},S))})})]})]}),e===u.claim&&a.jsxs("div",{className:"flex flex-col justify-between w-[60%]",children:[a.jsxs("div",{className:"flex items-center h-[6px] mb-4",children:[a.jsx("span",{className:"h-full bg-against block rounded-l-sm",style:{minWidth:`${V}%`}}),a.jsx("span",{className:"h-full w-full bg-for block rounded-r-sm"})]}),P]}),a.jsx(I,{value:N,position:j,feesAccrued:y,currency:A})]})};i.__docgenInfo={description:"",methods:[],displayName:"ClaimPosition",props:{claimsFor:{defaultValue:{value:"0",computed:!1},required:!1},claimsAgainst:{defaultValue:{value:"0",computed:!1},required:!1}}};const q={title:"Components/ClaimPosition",component:i},s={args:{variant:"user",position:"claimFor",name:"John Doe",walletAddress:"0x1234567890abcdef1234567890abcdef12345678",avatarSrc:'https://avatars.githubusercontent.com/u/94311139?s=200&v=4"',amount:1.21,feesAccrued:.005,updatedAt:"2021-10-01T16:00:00Z"},render:e=>a.jsx("div",{className:"w-[800px]",children:a.jsx(i,{...e})})},r={args:{variant:"claim",position:"claimAgainst",claimsFor:30,claimsAgainst:70,amount:1.21,feesAccrued:.005},render:e=>a.jsx("div",{className:"w-[800px]",children:a.jsx(i,{...e,children:a.jsx(O,{size:"sm",subject:{variant:"default",label:"0xintuition"},predicate:{label:"is really"},object:{label:"cool"}})})})};var p,x,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var b,v,h;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const J=["UserVariant","IdentityVariant"],ra=Object.freeze(Object.defineProperty({__proto__:null,IdentityVariant:r,UserVariant:s,__namedExportsOrder:J,default:q},Symbol.toStringTag,{value:"Module"}));export{r as I,ra as S,s as U};
