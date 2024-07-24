import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{ac as i,ad as a,B as m,ae as l}from"./TransactionStatusIndicator-BasDO1WA.js";import"./Icon.types-cQmbtfph.js";import"./Label-l7hlfg-Q.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-CZqSfr2M.js";import"./ProgressCard-8XoeDUlW.js";import"./QuestCriteriaCard-DKN7bypV.js";import"./QuestCriteriaDisplay-13wHbsZ-.js";import"./QuestPointsDisplay-DOFHvDSK.js";import"./QuestStatusIndicator-DRoc4dCN.js";import"./SegmentedControl-Dt9e-2dS.js";import"./Separator-DqkY-AaL.js";import"./Skeleton-CGZOk8OX.js";import"./Table-Cj9ooZRp.js";import{T as t}from"./Text-CIyuOUAi.js";import"./Textarea-BN2eJ_eZ.js";import"./ValueDisplay-OcmgwD6b.js";const c={title:"Components/Popover",component:i,argTypes:{side:{describe:"Side the content will open on",table:{type:{summary:"string"},defaultValue:{summary:"bottom"}},options:["top","right","bottom","left"],control:"select"},align:{describe:"Where to align content to trigger",table:{type:{summary:"string"},defaultValue:{summary:"center"}},options:["start","center","end"],control:"select"}}},e={render:p=>o.jsxs(i,{children:[o.jsx(a,{children:o.jsx(m,{size:"lg",children:"Open popover"})}),o.jsxs(l,{...p,children:[o.jsx(t,{variant:"bodyLarge",children:"Popover Content"}),o.jsx(t,{variant:"body",children:"Here is some very long content to test out this popover. It is good to see how it looks with lots of text!"})]})]})};var r,n,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => <Popover>
      <PopoverTrigger>
        <Button size="lg">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent {...args}>
        <Text variant="bodyLarge">Popover Content</Text>
        <Text variant="body">
          Here is some very long content to test out this popover. It is good to
          see how it looks with lots of text!
        </Text>
      </PopoverContent>
    </Popover>
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const d=["BasicUsage"],k=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,__namedExportsOrder:d,default:c},Symbol.toStringTag,{value:"Module"}));export{e as B,k as S};
