import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{a as d}from"./PieChart-9tI5Soxs.js";import{as as r,at as c,au as l,av as m,aw as p}from"./AlertDialog-D8jIGRzu.js";const u={title:"Components/PositionCard",component:r},t={render:s=>{const i=()=>{console.log("Redeem button clicked")};return e.jsxs(r,{...s,onButtonClick:i,children:[e.jsx(c,{amount:.512}),e.jsx(l,{percentOwnership:24,variant:d.default}),e.jsx(m,{amount:.005}),e.jsx(p,{timestamp:"2024-05-10T00:00:00Z"})]})}};var a,o,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    const handleSell = () => {
      console.log('Redeem button clicked');
    };
    return <PositionCard {...args} onButtonClick={handleSell}>
        <PositionCardStaked amount={0.512} />
        <PositionCardOwnership percentOwnership={24} variant={PieChartVariant.default} />
        <PositionCardFeesAccrued amount={0.005} />
        <PositionCardLastUpdated timestamp="2024-05-10T00:00:00Z" />
      </PositionCard>;
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const C=["BasicUsage"],g=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:t,__namedExportsOrder:C,default:u},Symbol.toStringTag,{value:"Module"}));export{t as B,g as S};
