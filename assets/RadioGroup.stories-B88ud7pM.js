import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{aj as t,ak as n,al as l,am as m,an as p}from"./ActivePositionCard-DXrOyMt3.js";const c={title:"Components/RadioGroup",component:t},i=[{id:"minimum",value:"Minimum",subValue:"+0.001 ETH"},{id:"default",value:"Default",subValue:"+0.01 ETH"},{id:"strong",value:"Strong",subValue:"+0.05 ETH"}],v=i.length,o={render:()=>e.jsx("div",{className:"w-[300px]",children:e.jsx(t,{defaultValue:i[0].id,children:i.map((a,r)=>e.jsxs("div",{children:[e.jsxs(n,{children:[e.jsx(l,{htmlFor:a.id,value:a.value,subValue:a.subValue}),e.jsx(m,{value:a.id,id:a.id})]}),r+1<v&&e.jsx(p,{})]},r))})})};var u,d,s;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="w-[300px]">
      <RadioGroup defaultValue={radioGroupData[0].id}>
        {radioGroupData.map((item, index) => <div key={index}>
            <RadioGroupItemContainer>
              <RadioGroupItemLabel htmlFor={item.id} value={item.value} subValue={item.subValue} />
              <RadioGroupItem value={item.id} id={item.id} />
            </RadioGroupItemContainer>
            {index + 1 < numberOfRadioGroupItems && <RadioGroupDivider />}
          </div>)}
      </RadioGroup>
    </div>
}`,...(s=(d=o.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const G=["BasicUsage"],b=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:o,__namedExportsOrder:G,default:c},Symbol.toStringTag,{value:"Module"}));export{o as B,b as S};
