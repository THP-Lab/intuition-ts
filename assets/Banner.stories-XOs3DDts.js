import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{B as s,a as o}from"./Banner-BbS_KexI.js";const x={title:"Components/Banner",component:s,argTypes:{variant:{description:"Variant of banner",options:Object.values(o),table:{type:{summary:"string"},defaultValue:{summary:"info"}},control:"select"}}},r={args:{variant:"info",title:"Info",message:"Here is some information."},render:v=>e.jsx("div",{className:"w-[500px]",children:e.jsx(s,{...v})})},a={render:()=>e.jsx("div",{className:"w-[500px]",children:e.jsx(s,{variant:o.warning,title:"Warning",message:"There is something going on!"})})},n={render:()=>e.jsx("div",{className:"w-[500px]",children:e.jsx(s,{variant:o.error,title:"Error",message:"There is something horrible going on!"})})};var i,t,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Info',
    message: 'Here is some information.'
  },
  render: args => <div className="w-[500px]">
      <Banner {...args} />
    </div>
}`,...(m=(t=r.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};var c,g,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="w-[500px]">
      <Banner variant={BannerVariant.warning} title="Warning" message="There is something going on!" />
    </div>
}`,...(d=(g=a.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var l,p,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="w-[500px]">
      <Banner variant={BannerVariant.error} title="Error" message="There is something horrible going on!" />
    </div>
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const f=["BasicUsage","Warning","Error"],j=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:r,Error:n,Warning:a,__namedExportsOrder:f,default:x},Symbol.toStringTag,{value:"Module"}));export{r as B,n as E,j as S,a as W};
