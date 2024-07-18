import{j as u}from"./jsx-runtime-Cw0GR0a5.js";import{a as r}from"./quest-BMAtC6cg.js";import{Q as a}from"./QuestPointsDisplay-DOFHvDSK.js";const i={title:"Components/Quest/QuestPointsDisplay",component:a,argTypes:{questStatus:{description:"Status of quest",options:Object.values(r),table:{type:{summary:"string"}},control:"select"}}},t={args:{points:10,questStatus:r.notStarted},render:n=>u.jsx(a,{...n})};var s,e,o;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    points: 10,
    questStatus: QuestStatus.notStarted
  },
  render: args => <QuestPointsDisplay {...args} />
}`,...(o=(e=t.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const p=["BasicUsage"],d=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:t,__namedExportsOrder:p,default:i},Symbol.toStringTag,{value:"Module"}));export{t as B,d as S};
