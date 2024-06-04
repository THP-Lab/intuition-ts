import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import"./Avatar-4zGhZtDZ.js";import"./index-bugisSBR.js";import{P as i,r as p,B as l,s as m}from"./RadioGroup-DRzIMFnL.js";import"./Input-BOF_Ax6K.js";import{T as t}from"./Text-Ut-2NFPv.js";import"./Resizable-D6r50leV.js";import"./Icon-C0jZa4Rx.js";import"./Textarea-BcMsqAZI.js";import"./Label-CGvHXEnN.js";const c={title:"Components/Popover",component:i,argTypes:{side:{describe:"Side the content will open on",table:{type:{summary:"string"},defaultValue:{summary:"bottom"}},options:["top","right","bottom","left"],control:"select"},align:{describe:"Where to align content to trigger",table:{type:{summary:"string"},defaultValue:{summary:"center"}},options:["start","center","end"],control:"select"}}},o={render:a=>e.jsxs(i,{children:[e.jsx(p,{children:e.jsx(l,{size:"lg",children:"Open popover"})}),e.jsxs(m,{...a,children:[e.jsx(t,{variant:"bodyLarge",children:"Popover Content"}),e.jsx(t,{variant:"body",children:"Here is some very long content to test out this popover. It is good to see how it looks with lots of text!"})]})]})};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const d=["BasicUsage"],j=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:o,__namedExportsOrder:d,default:c},Symbol.toStringTag,{value:"Module"}));export{o as B,j as S};
