import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{V as n,I as y,l as v}from"./QuestCard-EX4D-EbA.js";const T={title:"Components/Identity/IdentityTag",component:n,argTypes:{variant:{description:"Variant of component",options:Object.values(y),table:{type:{summary:"string"},defaultValue:{summary:"user"}},control:"select"},size:{description:"Size of component",options:Object.values(v),table:{type:{summary:"string"},defaultValue:{summary:"default"}},control:"select"}}},r={args:{variant:"user",imgSrc:"https://m.media-amazon.com/images/M/MV5BNDhiMWYzMjgtNTRiYi00ZTA3LThlODctNDRkMDk0NzFkMWI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg0MTkzMzA@._V1_.jpg",size:"default",children:"super dave",disabled:!1},render:g=>e.jsx(n,{...g})},a={render:()=>e.jsx(n,{variant:"non-user",children:"identity name"})},t={render:()=>e.jsx("div",{className:"h-[200px]",children:e.jsx(n,{variant:"user",hoverCardContent:e.jsx("div",{children:e.jsx("p",{children:"Some more info..."})}),children:"identity name"})})};var s,i,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'user',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BNDhiMWYzMjgtNTRiYi00ZTA3LThlODctNDRkMDk0NzFkMWI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg0MTkzMzA@._V1_.jpg',
    size: 'default',
    children: 'super dave',
    disabled: false
  },
  render: args => <IdentityTag {...args} />
}`,...(o=(i=r.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var d,c,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <IdentityTag variant="non-user">identity name</IdentityTag>
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,p,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="h-[200px]">
      <IdentityTag variant="user" hoverCardContent={<div>
            <p>Some more info...</p>
          </div>}>
        identity name
      </IdentityTag>
    </div>
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const h=["BasicUsage","NonUser","HoverCard"],j=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:r,HoverCard:t,NonUser:a,__namedExportsOrder:h,default:T},Symbol.toStringTag,{value:"Module"}));export{r as B,t as H,a as N,j as S};
