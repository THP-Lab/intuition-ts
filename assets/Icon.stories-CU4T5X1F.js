import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{I as n,a as l}from"./Icon.types-CbO5tIj7.js";import"./index-CTjT7uj6.js";import"./index-BIDtd1lf.js";import"./palette-saq09hvB.js";const N={title:"Components/Icon",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Displays an icon."}}},argTypes:{name:{description:"Icon name",options:Object.values(l),table:{type:{summary:"string"}},control:"select"},className:{description:"class",table:{type:{summary:"string"}},control:"text"}}},e={render:s=>r.jsx(n,{...s}),args:{name:"crystal-ball",className:"h-10 w-10"}},a={render:s=>r.jsx("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",width:"700px"},...s,children:Object.values(l).map((d,x)=>r.jsx(n,{name:d},x))})};var o,t,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <Icon {...args} />,
  args: {
    name: 'crystal-ball',
    className: 'h-10 w-10'
  }
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var p,m,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    width: '700px'
  }} {...args}>
      {Object.values(IconName).map((iconName, index) => <Icon key={index} name={(iconName as IconNameType)} />)}
    </div>
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const b=["BasicUsage","AllIcons"];export{a as AllIcons,e as BasicUsage,b as __namedExportsOrder,N as default};
