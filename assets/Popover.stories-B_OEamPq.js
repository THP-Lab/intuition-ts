import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{R as i,S as a,T as m}from"./QuestHeaderCard-JvyciQX5.js";import"./Avatar-BUaynhXT.js";import"./Badge-D2xxBGMY.js";import{B as l}from"./Button-CzEHE8a5.js";import"./Icon.types-DkS0gbR0.js";import"./Input-DFWTvv6T.js";import"./Label-ByAlek89.js";import"./PieChart-DH4cDbJQ.js";import"./PositionCardStaked-BOl4kzrD.js";import"./ProfileCard--cviTZvn.js";import"./Resizable-Dk6Cp6at.js";import"./SegmentedControl-DbX5wOQO.js";import"./Separator-Ct33SRfh.js";import"./Table-D9p853bW.js";import{T as e}from"./Text-ANaTnboW.js";import"./Textarea-Ds9ZbOCk.js";import"./ValueDisplay-2lt2w_5b.js";const c={title:"Components/Popover",component:i,argTypes:{side:{describe:"Side the content will open on",table:{type:{summary:"string"},defaultValue:{summary:"bottom"}},options:["top","right","bottom","left"],control:"select"},align:{describe:"Where to align content to trigger",table:{type:{summary:"string"},defaultValue:{summary:"center"}},options:["start","center","end"],control:"select"}}},t={render:p=>o.jsxs(i,{children:[o.jsx(a,{children:o.jsx(l,{size:"lg",children:"Open popover"})}),o.jsxs(m,{...p,children:[o.jsx(e,{variant:"bodyLarge",children:"Popover Content"}),o.jsx(e,{variant:"body",children:"Here is some very long content to test out this popover. It is good to see how it looks with lots of text!"})]})]})};var r,n,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const d=["BasicUsage"],k=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:t,__namedExportsOrder:d,default:c},Symbol.toStringTag,{value:"Module"}));export{t as B,k as S};
