import{j as u}from"./jsx-runtime-Cw0GR0a5.js";import{Q as r}from"./QuestStatusIndicator-B_BWZovd.js";import{aj as o}from"./QuestSetProgressCard-DoPsgKHz.js";const p={title:"Components/Quest/QuestStatusCard",component:o,argTypes:{status:{description:"Status of quest",options:Object.values(r),table:{type:{summary:"string"}},control:"select"},tooltip:{description:"Tooltip content",table:{type:{summary:"string"}}}}},t={args:{status:r.notStarted,tooltip:"Example text"},render:n=>u.jsx(o,{...n})};var e,s,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    status: QuestStatus.notStarted,
    tooltip: 'Example text'
  },
  render: args => <QuestStatusCard {...args} />
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const i=["BasicUsage"],d=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:t,__namedExportsOrder:i,default:p},Symbol.toStringTag,{value:"Module"}));export{t as B,d as S};
