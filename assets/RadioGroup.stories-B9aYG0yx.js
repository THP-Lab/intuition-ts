import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{ap as l,aq as t,ar as n,as as m,at as p}from"./TransactionStatusIndicator-BAlqj9yi.js";const c={title:"Components/Form Elements/RadioGroup",component:l},o=[{id:"minimum",value:"minimum",displayValue:"Minimum",displaySubValue:"+0.001 ETH"},{id:"minimum",value:"default",displayValue:"Default",displaySubValue:"+0.01 ETH"},{id:"minimum",value:"strong",displayValue:"Strong",displaySubValue:"+0.05 ETH"}],v=o.length,i={render:()=>a.jsx("div",{className:"w-[300px]",children:a.jsx(l,{defaultValue:o[0].value,children:o.map((e,r)=>a.jsxs("div",{children:[a.jsxs(t,{children:[a.jsx(n,{htmlFor:e.id,value:e.displayValue,subValue:e.displaySubValue}),a.jsx(m,{value:e.value,id:e.id})]}),r+1<v&&a.jsx(p,{})]},r))})})};var u,d,s;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
