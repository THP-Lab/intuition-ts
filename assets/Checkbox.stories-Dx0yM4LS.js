import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{C as t}from"./Checkbox-hjarc4kX.js";const D={title:"Components/Checkbox",component:t,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"}}},e={args:{checked:!1,disabled:!1},render:d=>o.jsx(t,{...d})},s={args:{checked:!0,disabled:!1}},a={args:{checked:!1,disabled:!0}},r={args:{checked:!0,disabled:!0}},c={args:{checked:!1,disabled:!1},render:d=>o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx(t,{id:"terms",...d}),o.jsx("label",{htmlFor:"terms",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"Accept terms and conditions"})]})};var n,l,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false
  },
  render: args => <Checkbox {...args} />
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,h,g;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,k,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...(x=(k=r.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var C,S,j;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false
  },
  render: args => <div className="flex items-center space-x-2">
      <Checkbox id="terms" {...args} />
      <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Accept terms and conditions
      </label>
    </div>
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const _=["Default","Checked","Disabled","CheckedDisabled","WithLabel"],N=Object.freeze(Object.defineProperty({__proto__:null,Checked:s,CheckedDisabled:r,Default:e,Disabled:a,WithLabel:c,__namedExportsOrder:_,default:D},Symbol.toStringTag,{value:"Module"}));export{s as C,e as D,N as S,c as W,a};
