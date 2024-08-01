import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{V as r}from"./ValueDisplay-BLpqF4VW.js";const x={title:"Components/ValueDisplay",component:r,argTypes:{variant:{description:"Variant of value display",options:["default","directionFor","directionAgainst","attestorFor","attestorAgainst"],table:{type:{summary:"string"},defaultValue:{summary:"default"}},control:"select"}}},e={args:{variant:"default",children:"-"},render:j=>n.jsx(r,{...j})},a={render:()=>n.jsx(r,{variant:"directionFor",children:"0.003"})},t={render:()=>n.jsx(r,{variant:"directionAgainst",children:"12345"})},s={render:()=>n.jsx(r,{variant:"attestorFor",children:"12345"})},o={render:()=>n.jsx(r,{variant:"attestorAgainst",children:"12345"})};var i,c,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    children: '-'
  },
  render: args => <ValueDisplay {...args} />
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,p,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <ValueDisplay variant="directionFor">0.003</ValueDisplay>
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,g,y;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <ValueDisplay variant="directionAgainst">12345</ValueDisplay>
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var D,A,V;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <ValueDisplay variant="attestorFor">12345</ValueDisplay>
}`,...(V=(A=s.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var v,f,F;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <ValueDisplay variant="attestorAgainst">12345</ValueDisplay>
}`,...(F=(f=o.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};const S=["BasicUsage","DirectionFor","DirectionAgainst","AttestorFor","AttestorAgainst"],b=Object.freeze(Object.defineProperty({__proto__:null,AttestorAgainst:o,AttestorFor:s,BasicUsage:e,DirectionAgainst:t,DirectionFor:a,__namedExportsOrder:S,default:x},Symbol.toStringTag,{value:"Module"}));export{s as A,e as B,a as D,b as S,t as a,o as b};
