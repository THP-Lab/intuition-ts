import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{Q as i,R as a,S as m}from"./Tooltip-DVK0Dav-.js";import"./Avatar-DbIg4tiR.js";import"./Badge-VPO89ISs.js";import{B as l}from"./ProfileCard-C2vltaMr.js";import"./Icon.types-qTUclLwX.js";import"./Input-BkksL8Pg.js";import"./Label-DWg5NfQ5.js";import"./PieChart-B2bggzNI.js";import"./Resizable-CLGkaN1-.js";import"./SegmentedControl-DewWK8dB.js";import"./Separator-CrpZPajs.js";import"./Table-Cj0PeqN2.js";import{T as t}from"./Text-DO9zWwhA.js";import"./Textarea-zzPGycIM.js";import"./ValueDisplay-C049CGII.js";const c={title:"Components/Popover",component:i,argTypes:{side:{describe:"Side the content will open on",table:{type:{summary:"string"},defaultValue:{summary:"bottom"}},options:["top","right","bottom","left"],control:"select"},align:{describe:"Where to align content to trigger",table:{type:{summary:"string"},defaultValue:{summary:"center"}},options:["start","center","end"],control:"select"}}},e={render:p=>o.jsxs(i,{children:[o.jsx(a,{children:o.jsx(l,{size:"lg",children:"Open popover"})}),o.jsxs(m,{...p,children:[o.jsx(t,{variant:"bodyLarge",children:"Popover Content"}),o.jsx(t,{variant:"body",children:"Here is some very long content to test out this popover. It is good to see how it looks with lots of text!"})]})]})};var r,n,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
