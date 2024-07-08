import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{a9 as i,aa as p,B as m,ab as l}from"./Trunctacular-CQXa-Vsq.js";import"./Icon.types-D5zuhAbZ.js";import"./Input-BPM31_im.js";import"./Label-DzNLlIBV.js";import"./PieChart-B_dtFskq.js";import"./Resizable-X9Hr8Gxc.js";import"./SegmentedControl-Bhn13kRZ.js";import"./Separator-C_RZmUxf.js";import"./Table-BR553Jwj.js";import{T as t}from"./Text-DdASfXbZ.js";import"./Textarea-qTR3kLUl.js";import"./ValueDisplay-ChJkojwK.js";const c={title:"Components/Popover",component:i,argTypes:{side:{describe:"Side the content will open on",table:{type:{summary:"string"},defaultValue:{summary:"bottom"}},options:["top","right","bottom","left"],control:"select"},align:{describe:"Where to align content to trigger",table:{type:{summary:"string"},defaultValue:{summary:"center"}},options:["start","center","end"],control:"select"}}},e={render:a=>o.jsxs(i,{children:[o.jsx(p,{children:o.jsx(m,{size:"lg",children:"Open popover"})}),o.jsxs(l,{...a,children:[o.jsx(t,{variant:"bodyLarge",children:"Popover Content"}),o.jsx(t,{variant:"body",children:"Here is some very long content to test out this popover. It is good to see how it looks with lots of text!"})]})]})};var r,n,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const d=["BasicUsage"],S=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,__namedExportsOrder:d,default:c},Symbol.toStringTag,{value:"Module"}));export{e as B,S};
