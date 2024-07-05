import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{aj as l,ak as t,al as n,am as m,an as p}from"./TransactionStatusIndicator-BT-UtpL1.js";const c={title:"Components/RadioGroup",component:l},o=[{id:"minimum",value:"minimum",displayValue:"Minimum",displaySubValue:"+0.001 ETH"},{id:"minimum",value:"default",displayValue:"Default",displaySubValue:"+0.01 ETH"},{id:"minimum",value:"strong",displayValue:"Strong",displaySubValue:"+0.05 ETH"}],v=o.length,i={render:()=>a.jsx("div",{className:"w-[300px]",children:a.jsx(l,{defaultValue:o[0].value,children:o.map((e,u)=>a.jsxs("div",{children:[a.jsxs(t,{children:[a.jsx(n,{htmlFor:e.id,value:e.displayValue,subValue:e.displaySubValue}),a.jsx(m,{value:e.value,id:e.id})]}),u+1<v&&a.jsx(p,{})]},u))})})};var r,d,s;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(s=(d=i.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const G=["BasicUsage"],b=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:i,__namedExportsOrder:G,default:c},Symbol.toStringTag,{value:"Module"}));export{i as B,b as S};
