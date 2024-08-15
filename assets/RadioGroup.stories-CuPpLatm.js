import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{ao as s,ap as u,aq as n,ar as t,as as h}from"./TransactionStatusIndicator-DF0ORTNg.js";const y={title:"Components/Form Elements/RadioGroup",component:s},i=[{id:"minimum",value:"minimum",displayValue:"Minimum",displaySubValue:"+0.001 ETH"},{id:"minimum",value:"default",displayValue:"Default",displaySubValue:"+0.01 ETH"},{id:"minimum",value:"strong",displayValue:"Strong",displaySubValue:"+0.05 ETH"}],S=i.length,d={render:()=>a.jsx("div",{className:"w-[300px]",children:a.jsx(s,{defaultValue:i[0].value,children:i.map((e,r)=>a.jsxs("div",{children:[a.jsxs(u,{children:[a.jsx(n,{htmlFor:e.id,value:e.displayValue,subValue:e.displaySubValue}),a.jsx(t,{value:e.value,id:e.id})]}),r+1<S&&a.jsx(h,{})]},r))})})},o={render:()=>a.jsx("div",{className:"w-[300px]",children:a.jsx(s,{variant:"simple",defaultValue:i[0].value,children:i.map((e,r)=>a.jsx("div",{children:a.jsxs(u,{variant:"simple",children:[a.jsx(t,{value:e.value,id:e.id}),a.jsx(n,{htmlFor:e.id,value:e.displayValue})]})},r))})})},l={render:()=>a.jsx("div",{className:"w-[300px]",children:a.jsx(s,{variant:"simple",defaultValue:i[0].value,children:i.map((e,r)=>a.jsx("div",{children:a.jsxs(u,{variant:"simple",children:[a.jsx(t,{size:"small",value:e.value,id:e.id}),a.jsx(n,{htmlFor:e.id,value:e.displayValue})]})},r))})})};var m,p,v;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="w-[300px]">
      <RadioGroup defaultValue={radioGroupData[0].value}>
        {radioGroupData.map((item, index) => <div key={index}>
            <RadioGroupItemContainer>
              <RadioGroupItemLabel htmlFor={item.id} value={item.displayValue} subValue={item.displaySubValue} />
              <RadioGroupItem value={item.value} id={item.id} />
            </RadioGroupItemContainer>
            {index + 1 < numberOfRadioGroupItems && <RadioGroupDivider />}
          </div>)}
      </RadioGroup>
    </div>
}`,...(v=(p=d.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var c,x,G;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="w-[300px]">
      <RadioGroup variant="simple" defaultValue={radioGroupData[0].value}>
        {radioGroupData.map((item, index) => <div key={index}>
            <RadioGroupItemContainer variant="simple">
              <RadioGroupItem value={item.value} id={item.id} />
              <RadioGroupItemLabel htmlFor={item.id} value={item.displayValue} />
            </RadioGroupItemContainer>
          </div>)}
      </RadioGroup>
    </div>
}`,...(G=(x=o.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};var R,j,V;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="w-[300px]">
      <RadioGroup variant="simple" defaultValue={radioGroupData[0].value}>
        {radioGroupData.map((item, index) => <div key={index}>
            <RadioGroupItemContainer variant="simple">
              <RadioGroupItem size="small" value={item.value} id={item.id} />
              <RadioGroupItemLabel htmlFor={item.id} value={item.displayValue} />
            </RadioGroupItemContainer>
          </div>)}
      </RadioGroup>
    </div>
}`,...(V=(j=l.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};const b=["BasicUsage","Simple","SimpleSmall"],g=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:d,Simple:o,SimpleSmall:l,__namedExportsOrder:b,default:y},Symbol.toStringTag,{value:"Module"}));export{d as B,g as S,o as a,l as b};
