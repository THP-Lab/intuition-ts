import{j as s}from"./jsx-runtime-Cw0GR0a5.js";import{C as t,I as d}from"./InfoCard-7pwmEdEs.js";const p={title:"Components/Claim",component:t,argTypes:{subject:{description:"Subject of the claim",table:{type:{summary:"string"}}},predicate:{description:"Predicate of the claim",table:{type:{summary:"string"}}},object:{description:"Object of the claim",table:{type:{summary:"string"}}},size:{description:"Size of component",options:Object.values(d),table:{type:{summary:"string"},defaultValue:{summary:"default"}},control:"select"}}},e={args:{size:"md",disabled:!1,subject:{label:"0xintution"},predicate:{label:"is really"},object:{label:"cool"}},render:m=>s.jsx("div",{className:"w-[500px]",children:s.jsx(t,{...m})})},a={render:()=>s.jsx("div",{className:"w-[500px]",children:s.jsx(t,{size:"md",subject:{variant:"user",label:"Alice",imgSrc:"https://m.media-amazon.com/images/M/MV5BNDhiMWYzMjgtNTRiYi00ZTA3LThlODctNDRkMDk0NzFkMWI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg0MTkzMzA@._V1_.jpg"},predicate:{label:"likes"},object:{label:"pizza"}})})};var r,i,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    size: 'md',
    disabled: false,
    subject: {
      label: '0xintution'
    },
    predicate: {
      label: 'is really'
    },
    object: {
      label: 'cool'
    }
  },
  render: args => <div className="w-[500px]">
      <Claim {...args} />
    </div>
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var n,c,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div className="w-[500px]">
      <Claim size="md" subject={{
      variant: 'user',
      label: 'Alice',
      imgSrc: 'https://m.media-amazon.com/images/M/MV5BNDhiMWYzMjgtNTRiYi00ZTA3LThlODctNDRkMDk0NzFkMWI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg0MTkzMzA@._V1_.jpg'
    }} predicate={{
      label: 'likes'
    }} object={{
      label: 'pizza'
    }} />
    </div>
}`,...(o=(c=a.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};const b=["BasicUsage","User"],j=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,User:a,__namedExportsOrder:b,default:p},Symbol.toStringTag,{value:"Module"}));export{e as B,j as S,a as U};
