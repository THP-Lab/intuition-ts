import{j as d}from"./jsx-runtime-Cw0GR0a5.js";import{T as n}from"./TransactionStatusIndicator-C2digs4e.js";const u={title:"Components/IdentityInput",component:n},e={args:{showLabels:!0,subject:{selectedValue:{name:"Super Dave"}},predicate:{selectedValue:{name:"is a",variant:"non-user"}},object:{selectedValue:{name:"daredevil",variant:"non-user"}}},render:i=>d.jsx(n,{...i})},t={render:()=>d.jsx(n,{subject:{placeholder:"Select an identity",selectedValue:{}},predicate:{placeholder:"Select an identity",selectedValue:{}},object:{placeholder:"Select an identity",selectedValue:{}}})};var a,r,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    showLabels: true,
    subject: {
      selectedValue: {
        name: 'Super Dave'
      }
    },
    predicate: {
      selectedValue: {
        name: 'is a',
        variant: 'non-user'
      }
    },
    object: {
      selectedValue: {
        name: 'daredevil',
        variant: 'non-user'
      }
    }
  },
  render: args => <IdentityInput {...args} />
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var c,l,o;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <IdentityInput subject={{
    placeholder: 'Select an identity',
    selectedValue: {}
  }} predicate={{
    placeholder: 'Select an identity',
    selectedValue: {}
  }} object={{
    placeholder: 'Select an identity',
    selectedValue: {}
  }} />
}`,...(o=(l=t.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const p=["BasicUsage","Other"],S=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,Other:t,__namedExportsOrder:p,default:u},Symbol.toStringTag,{value:"Module"}));export{e as B,t as O,S};
