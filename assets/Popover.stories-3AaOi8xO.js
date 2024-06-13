import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import"./Avatar-BqFJ6ENc.js";import"./Badge-BlZKMVE_.js";import{N as i,O as a,B as m,Q as l}from"./Identity-Cw7cpngi.js";import"./Input-CFrL2YAq.js";import"./Separator-ho1Nl6GX.js";import{T as t}from"./Text-BJFUDWxl.js";import"./Resizable-DNd95Y6K.js";import"./Icon-Ba3_jQfB.js";import"./Textarea-DpSkS59a.js";import"./Label-FZHk6kRz.js";import"./Table-Cj0PeqN2.js";import"./ValueDisplay-CeuIe0pc.js";import"./SegmentedControl-DewWK8dB.js";const c={title:"Components/Popover",component:i,argTypes:{side:{describe:"Side the content will open on",table:{type:{summary:"string"},defaultValue:{summary:"bottom"}},options:["top","right","bottom","left"],control:"select"},align:{describe:"Where to align content to trigger",table:{type:{summary:"string"},defaultValue:{summary:"center"}},options:["start","center","end"],control:"select"}}},e={render:p=>o.jsxs(i,{children:[o.jsx(a,{children:o.jsx(m,{size:"lg",children:"Open popover"})}),o.jsxs(l,{...p,children:[o.jsx(t,{variant:"bodyLarge",children:"Popover Content"}),o.jsx(t,{variant:"body",children:"Here is some very long content to test out this popover. It is good to see how it looks with lots of text!"})]})]})};var r,n,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
