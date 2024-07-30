import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{k as r,l as d}from"./TransactionStatusIndicator-D3i5dcUj.js";const u={title:"Components/Claim/Claim",component:r,argTypes:{subject:{description:"Subject of the claim",table:{type:{summary:"string"}}},predicate:{description:"Predicate of the claim",table:{type:{summary:"string"}}},object:{description:"Object of the claim",table:{type:{summary:"string"}}},size:{description:"Size of component",options:Object.values(d),table:{type:{summary:"string"},defaultValue:{summary:"default"}},control:"select"}}},e={args:{size:"md",disabled:!1,subject:{variant:"non-user",label:"0xintution"},predicate:{variant:"non-user",label:"is really"},object:{variant:"non-user",label:"cool"}},render:m=>n.jsx("div",{className:"w-max margin",children:n.jsx(r,{...m})})},a={render:()=>n.jsx("div",{className:"w-max margin",children:n.jsx(r,{size:"md",subject:{variant:"user",label:"Alice",imgSrc:"https://m.media-amazon.com/images/M/MV5BNDhiMWYzMjgtNTRiYi00ZTA3LThlODctNDRkMDk0NzFkMWI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg0MTkzMzA@._V1_.jpg"},predicate:{variant:"non-user",label:"likes"},object:{variant:"non-user",label:"pizza"}})})};var s,t,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    size: 'md',
    disabled: false,
    subject: {
      variant: 'non-user',
      label: '0xintution'
    },
    predicate: {
      variant: 'non-user',
      label: 'is really'
    },
    object: {
      variant: 'non-user',
      label: 'cool'
    }
  },
  render: args => <div className="w-max margin">
      <Claim {...args} />
    </div>
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var l,o,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="w-max margin">
      <Claim size="md" subject={{
      variant: 'user',
      label: 'Alice',
      imgSrc: 'https://m.media-amazon.com/images/M/MV5BNDhiMWYzMjgtNTRiYi00ZTA3LThlODctNDRkMDk0NzFkMWI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg0MTkzMzA@._V1_.jpg'
    }} predicate={{
      variant: 'non-user',
      label: 'likes'
    }} object={{
      variant: 'non-user',
      label: 'pizza'
    }} />
    </div>
}`,...(c=(o=a.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const p=["BasicUsage","User"],j=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,User:a,__namedExportsOrder:p,default:u},Symbol.toStringTag,{value:"Module"}));export{e as B,j as S,a as U};
