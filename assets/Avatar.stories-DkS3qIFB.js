import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{A as s,a as p,b as d}from"./Avatar-BtHJmJsO.js";const g={title:"Components/Avatar",component:s,parameters:{controls:{exclude:["className","style"]}},argTypes:{src:{type:"string",description:"Image URL (for AvatarImage)",control:!1},alt:{type:"string",description:"Alternate text (for AvatarImage)",control:!1}}},r={render:t=>a.jsxs(s,{...t,children:[a.jsx(p,{src:"https://avatars.githubusercontent.com/u/94311139?s=200&v=4",alt:"intuition"}),a.jsx(d,{children:"IN"})]})},e={render:t=>a.jsxs(s,{...t,children:[a.jsx(p,{src:"broken-link",alt:"broken-link"}),a.jsx(d,{children:"IN"})]})};var n,o,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <Avatar {...args}>
      <AvatarImage src="https://avatars.githubusercontent.com/u/94311139?s=200&v=4" alt="intuition" />
      <AvatarFallback>IN</AvatarFallback>
    </Avatar>
}`,...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var l,i,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Avatar {...args}>
      <AvatarImage src="broken-link" alt="broken-link" />
      <AvatarFallback>IN</AvatarFallback>
    </Avatar>
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const v=["BasicUsage","Fallback"],b=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:r,Fallback:e,__namedExportsOrder:v,default:g},Symbol.toStringTag,{value:"Module"}));export{r as B,e as F,b as S};
