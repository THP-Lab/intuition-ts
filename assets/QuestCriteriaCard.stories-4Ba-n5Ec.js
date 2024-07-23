import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{a as i,Q as u}from"./quest-BMAtC6cg.js";import{Q as o}from"./QuestCriteriaCard-DKN7bypV.js";const c={title:"Components/Quest/QuestCriteriaCard",component:o,argTypes:{questStatus:{description:"Status of quest",options:Object.values(i),table:{type:{summary:"string"}},control:"select"},criteria:{description:"Criteria",table:{type:{summary:"object"}},control:"object"}}},t={args:{criteria:{criteria:"Criteria",status:u.notStarted},questStatus:i.inProgress,points:100},render:n=>e.jsx("div",{className:"w-[600px]",children:e.jsx(o,{...n})})};var r,s,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    criteria: {
      criteria: 'Criteria',
      status: QuestCriteriaStatus.notStarted
    },
    questStatus: QuestStatus.inProgress,
    points: 100
  },
  render: args => <div className="w-[600px]">
      <QuestCriteriaCard {...args} />
    </div>
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const p=["BasicUsage"],S=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:t,__namedExportsOrder:p,default:c},Symbol.toStringTag,{value:"Module"}));export{t as B,S};
