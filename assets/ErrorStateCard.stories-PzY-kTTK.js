import{j as s}from"./jsx-runtime-Cw0GR0a5.js";import{O as a,B as m}from"./TransactionStatusIndicator-D3i5dcUj.js";const l={title:"Components/ErrorStateCard",component:a},r={args:{},render:()=>s.jsx("div",{className:"w-[600px]",children:s.jsx(a,{message:"An error occured"})})},e={args:{},render:()=>s.jsx("div",{className:"w-[600px]",children:s.jsx(a,{message:"An error occured",children:s.jsx(m,{size:"md",onClick:()=>console.log("Clicked"),variant:"destructive",children:"Retry"})})})};var o,t,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="w-[600px]">
      <ErrorStateCard message="An error occured" />
    </div>
}`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,d,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="w-[600px]">
      <ErrorStateCard message="An error occured">
        <Button size="md" onClick={() => console.log('Clicked')} variant="destructive">
          Retry
        </Button>
      </ErrorStateCard>
    </div>
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const p=["BasicUsage","WithChildren"],x=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:r,WithChildren:e,__namedExportsOrder:p,default:l},Symbol.toStringTag,{value:"Module"}));export{r as B,x as S,e as W};
