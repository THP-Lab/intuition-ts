import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{r as i,s as o,B as j}from"./AlertDialog-CEGB4aMO.js";const w={title:"Components/Banner",component:i,argTypes:{variant:{description:"Variant of banner",options:Object.values(o),table:{type:{summary:"string"},defaultValue:{summary:"info"}},control:"select"}}},r={args:{variant:"info",title:"Info",message:"Here is some information."},render:B=>e.jsx("div",{className:"w-[500px]",children:e.jsx(i,{...B})})},n={render:()=>e.jsx("div",{className:"w-[500px]",children:e.jsx(i,{variant:o.warning,title:"Warning",message:"There is something going on!"})})},a={render:()=>e.jsx("div",{className:"w-[500px]",children:e.jsx(i,{variant:o.error,title:"Error",message:"There is something horrible going on!"})})},s={render:()=>e.jsx("div",{children:e.jsx(i,{variant:o.warning,title:"Uh oh",message:"There is something going on... Try refreshing the page.",children:e.jsx(j,{variant:"secondary",children:"Refresh"})})})};var t,c,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Info',
    message: 'Here is some information.'
  },
  render: args => <div className="w-[500px]">
      <Banner {...args} />
    </div>
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,d,l;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="w-[500px]">
      <Banner variant={BannerVariant.warning} title="Warning" message="There is something going on!" />
    </div>
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,h,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="w-[500px]">
      <Banner variant={BannerVariant.error} title="Error" message="There is something horrible going on!" />
    </div>
}`,...(u=(h=a.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var v,x,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div>
      <Banner variant={BannerVariant.warning} title="Uh oh" message="There is something going on... Try refreshing the page.">
        <Button variant="secondary">Refresh</Button>
      </Banner>
    </div>
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const y=["BasicUsage","Warning","Error","WithChildren"],S=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:r,Error:a,Warning:n,WithChildren:s,__namedExportsOrder:y,default:w},Symbol.toStringTag,{value:"Module"}));export{r as B,a as E,S,n as W,s as a};
