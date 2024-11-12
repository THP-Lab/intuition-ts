import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{d as o,C as g,e as x}from"./TransactionStatusIndicator-DylL52tj.js";const y={title:"Components/ActivePositionCard",component:o,argTypes:{claimPosition:{description:"Position of claim",options:Object.values(g),table:{type:{summary:"string"},defaultValue:{summary:void 0}},control:"select"},currency:{description:"Currency type",options:Object.values(x),table:{type:{summary:"string"},defaultValue:{summary:"ETH"}},control:"select"}}},s={args:{value:.567},render:v=>e.jsx("div",{className:"w-[500px]",children:e.jsx(o,{...v})})},a={render:()=>e.jsx("div",{className:"w-[500px]",children:e.jsx(o,{value:.567,claimPosition:"for"})})},r={render:()=>e.jsx("div",{className:"w-[500px]",children:e.jsx(o,{value:.567,claimPosition:"against"})})};var t,i,n;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    value: 0.567
  },
  render: args => <div className="w-[500px]">
      <ActivePositionCard {...args} />
    </div>
}`,...(n=(i=s.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="w-[500px]">
      <ActivePositionCard value={0.567} claimPosition="for" />
    </div>
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="w-[500px]">
      <ActivePositionCard value={0.567} claimPosition="against" />
    </div>
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const P=["BasicUsage","For","Against"],C=Object.freeze(Object.defineProperty({__proto__:null,Against:r,BasicUsage:s,For:a,__namedExportsOrder:P,default:y},Symbol.toStringTag,{value:"Module"}));export{r as A,s as B,a as F,C as S};
