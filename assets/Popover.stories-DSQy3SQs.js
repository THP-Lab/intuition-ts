import{j as o}from"./jsx-runtime-qGIIFXMu.js";import"./Avatar-lC8ay4Bw.js";import"./index-DI7FrtIC.js";import{B as p}from"./Button-DIxyx14P.js";import{P as i,f as l,g as m}from"./Popover-CEwwvII7.js";import"./Tooltip-sA3mfm35.js";import{T as t}from"./Text-C1Eb4vO9.js";import"./Resizable-DHQBnRfD.js";import"./Icon-C_fIsRl8.js";import"./SidebarLayoutNavAvatar-DR-zcPSg.js";import"./Command-BXO-Mg7H.js";const c={title:"Components/Popover",component:i,argTypes:{side:{describe:"Side the content will open on",table:{type:{summary:"string"},defaultValue:{summary:"bottom"}},options:["top","right","bottom","left"],control:"select"},align:{describe:"Where to align content to trigger",table:{type:{summary:"string"},defaultValue:{summary:"center"}},options:["start","center","end"],control:"select"}}},e={render:a=>o.jsxs(i,{children:[o.jsx(l,{children:o.jsx(p,{size:"lg",children:"Open popover"})}),o.jsxs(m,{...a,children:[o.jsx(t,{variant:"bodyLarge",children:"Popover Content"}),o.jsx(t,{variant:"body",children:"Here is some very long content to test out this popover. It is good to see how it looks with lots of text!"})]})]})};var r,n,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const g=["BasicUsage"],B=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,__namedExportsOrder:g,default:c},Symbol.toStringTag,{value:"Module"}));export{e as B,B as S};
