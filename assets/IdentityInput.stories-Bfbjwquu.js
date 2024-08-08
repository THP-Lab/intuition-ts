import{j as d}from"./jsx-runtime-Cw0GR0a5.js";import{W as t}from"./TransactionStatusIndicator-Dn1YmZrC.js";const u={title:"Components/Identity/IdentityInput",component:t},e={args:{showLabels:!0,subject:{selectedValue:{name:"Super Dave"}},predicate:{selectedValue:{name:"is a",variant:"non-user"}},object:{selectedValue:{name:"daredevil",variant:"non-user"}}},render:i=>d.jsx(t,{...i})},n={render:()=>d.jsx(t,{subject:{placeholder:"Select an identity",selectedValue:{},onClick:()=>{console.log("subject clicked")}},predicate:{placeholder:"Select an identity",selectedValue:{},onClick:()=>{console.log("predicate clicked")}},object:{placeholder:"Select an identity",selectedValue:{},onClick:()=>{console.log("object clicked")}}})};var a,c,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var o,r,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <IdentityInput subject={{
    placeholder: 'Select an identity',
    selectedValue: {},
    onClick: () => {
      console.log('subject clicked');
    }
  }} predicate={{
    placeholder: 'Select an identity',
    selectedValue: {},
    onClick: () => {
      console.log('predicate clicked');
    }
  }} object={{
    placeholder: 'Select an identity',
    selectedValue: {},
    onClick: () => {
      console.log('object clicked');
    }
  }} />
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const p=["BasicUsage","Other"],b=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,Other:n,__namedExportsOrder:p,default:u},Symbol.toStringTag,{value:"Module"}));export{e as B,n as O,b as S};
