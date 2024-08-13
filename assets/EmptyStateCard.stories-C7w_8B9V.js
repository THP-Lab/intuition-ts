import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{O as t,B as m}from"./TransactionStatusIndicator-YjNYn45K.js";const p={title:"Components/EmptyStateCard",component:t},e={args:{},render:()=>a.jsx("div",{className:"w-[600px]",children:a.jsx(t,{message:"You have no stake positions."})})},s={args:{},render:()=>a.jsx("div",{className:"w-[600px]",children:a.jsx(t,{message:"You have no stake positions.",children:a.jsx(m,{size:"md",onClick:()=>console.log("Clicked"),children:"Add Stake"})})})};var o,r,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="w-[600px]">
      <EmptyStateCard message="You have no stake positions." />
    </div>
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var i,d,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="w-[600px]">
      <EmptyStateCard message="You have no stake positions.">
        <Button size="md" onClick={() => console.log('Clicked')}>
          Add Stake
        </Button>
      </EmptyStateCard>
    </div>
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const l=["BasicUsage","WithChildren"],x=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,WithChildren:s,__namedExportsOrder:l,default:p},Symbol.toStringTag,{value:"Module"}));export{e as B,x as S,s as W};
