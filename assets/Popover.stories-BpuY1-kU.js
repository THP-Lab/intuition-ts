import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{a8 as i,a9 as a,B as m,aa as l}from"./QuestCard-DNDc4437.js";import"./Icon.types-DvvrcWKg.js";import"./Label-BSnWqvXc.js";import"./PieChart-B_dtFskq.js";import"./SegmentedControl-C43o2uqF.js";import"./Separator-8RGezXAr.js";import"./Table-C0qIXiUM.js";import{T as t}from"./Text-DsVeH9qI.js";import"./Textarea-CUiVvNKI.js";import"./ValueDisplay-D2U_pdiu.js";import"./QuestSetCard-gHXGTuki.js";import"./ProgressBar-D75vLLzs.js";import"./QuestStatusIndicator-Dppz0ehK.js";import"./QuestCriteriaCard-A0DJuMkI.js";import"./QuestCriteriaDisplay-BzNuGZIV.js";import"./QuestPointsDisplay-ejZCRmtZ.js";const c={title:"Components/Popover",component:i,argTypes:{side:{describe:"Side the content will open on",table:{type:{summary:"string"},defaultValue:{summary:"bottom"}},options:["top","right","bottom","left"],control:"select"},align:{describe:"Where to align content to trigger",table:{type:{summary:"string"},defaultValue:{summary:"center"}},options:["start","center","end"],control:"select"}}},e={render:p=>o.jsxs(i,{children:[o.jsx(a,{children:o.jsx(m,{size:"lg",children:"Open popover"})}),o.jsxs(l,{...p,children:[o.jsx(t,{variant:"bodyLarge",children:"Popover Content"}),o.jsx(t,{variant:"body",children:"Here is some very long content to test out this popover. It is good to see how it looks with lots of text!"})]})]})};var r,n,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const d=["BasicUsage"],z=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,__namedExportsOrder:d,default:c},Symbol.toStringTag,{value:"Module"}));export{e as B,z as S};
