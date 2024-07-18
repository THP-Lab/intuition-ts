import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{a9 as i,aa as a,B as m,ab as l}from"./Trunctacular-Des6CcpU.js";import"./Icon.types-DvvrcWKg.js";import"./Label-BSnWqvXc.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-D75vLLzs.js";import"./ProgressCard-BrCNH_y5.js";import"./QuestCriteriaCard-yWCcMe1c.js";import"./QuestCriteriaDisplay-BeTNNq0T.js";import"./QuestPointsDisplay-BMWi52ZN.js";import"./QuestSetCard-DXHyju0d.js";import"./QuestStatusIndicator-DBJnmA6G.js";import"./SegmentedControl-C43o2uqF.js";import"./Separator-8RGezXAr.js";import"./Skeleton-BtFXuCOi.js";import"./Table-C0qIXiUM.js";import{T as e}from"./Text-DsVeH9qI.js";import"./Textarea-CUiVvNKI.js";import"./ValueDisplay-D2U_pdiu.js";const c={title:"Components/Popover",component:i,argTypes:{side:{describe:"Side the content will open on",table:{type:{summary:"string"},defaultValue:{summary:"bottom"}},options:["top","right","bottom","left"],control:"select"},align:{describe:"Where to align content to trigger",table:{type:{summary:"string"},defaultValue:{summary:"center"}},options:["start","center","end"],control:"select"}}},t={render:p=>o.jsxs(i,{children:[o.jsx(a,{children:o.jsx(m,{size:"lg",children:"Open popover"})}),o.jsxs(l,{...p,children:[o.jsx(e,{variant:"bodyLarge",children:"Popover Content"}),o.jsx(e,{variant:"body",children:"Here is some very long content to test out this popover. It is good to see how it looks with lots of text!"})]})]})};var r,n,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const d=["BasicUsage"],E=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:t,__namedExportsOrder:d,default:c},Symbol.toStringTag,{value:"Module"}));export{t as B,E as S};
