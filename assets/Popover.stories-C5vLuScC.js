import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{av as i,aw as a,B as m,ax as l}from"./TransactionStatusIndicator-DM7TKmNz.js";import"./Checkbox-DDRJNEht.js";import"./Icon.types-B5jDNVEn.js";import"./Label-CxmQ-uUQ.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-CRzF-TB2.js";import"./ProgressCard-CmICkurk.js";import"./ScrollArea-OJYV--XD.js";import"./SegmentedControl-C37gAbXj.js";import"./Separator-h_VeHU5A.js";import"./Skeleton-jKlmpfx8.js";import"./Table-CZzk1Z3b.js";import{T as t}from"./Text-B6S_Q4Gu.js";import"./Textarea-D-Frm5Hg.js";import"./ValueDisplay-azd8k_WK.js";const c={title:"Components/Popover",component:i,argTypes:{side:{describe:"Side the content will open on",table:{type:{summary:"string"},defaultValue:{summary:"bottom"}},options:["top","right","bottom","left"],control:"select"},align:{describe:"Where to align content to trigger",table:{type:{summary:"string"},defaultValue:{summary:"center"}},options:["start","center","end"],control:"select"}}},e={render:p=>o.jsxs(i,{children:[o.jsx(a,{children:o.jsx(m,{size:"lg",children:"Open popover"})}),o.jsxs(l,{...p,children:[o.jsx(t,{variant:"bodyLarge",children:"Popover Content"}),o.jsx(t,{variant:"body",children:"Here is some very long content to test out this popover. It is good to see how it looks with lots of text!"})]})]})};var r,n,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const d=["BasicUsage"],O=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,__namedExportsOrder:d,default:c},Symbol.toStringTag,{value:"Module"}));export{e as B,O as S};
