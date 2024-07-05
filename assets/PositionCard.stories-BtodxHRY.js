import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{ac as a,ad as d,ae as c,af as l,ag as p}from"./TransactionStatusIndicator-BvVj7K32.js";const m={title:"Components/PositionCard",component:a},o={render:r=>{const i=()=>{console.log("Sell button clicked")};return e.jsxs(a,{...r,onButtonClick:i,children:[e.jsx(d,{amount:.512}),e.jsx(c,{percentOwnership:24}),e.jsx(l,{amount:.005}),e.jsx(p,{timestamp:"2024-05-10T00:00:00Z"})]})}};var t,n,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    const handleSell = () => {
      console.log('Sell button clicked');
    };
    return <PositionCard {...args} onButtonClick={handleSell}>
        <PositionCardStaked amount={0.512} />
        <PositionCardOwnership percentOwnership={24} />
        <PositionCardFeesAccrued amount={0.005} />
        <PositionCardLastUpdated timestamp="2024-05-10T00:00:00Z" />
      </PositionCard>;
  }
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const u=["BasicUsage"],S=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:o,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{o as B,S};
