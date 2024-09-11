import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{bo as c,bp as d,bq as s,br as p,bs as u}from"./AlertDialog-Ds5OwQkm.js";const l=()=>e.jsx(e.Fragment,{});l.__docgenInfo={description:"",methods:[],displayName:"Indicators"};const y={title:"Components/Indicators",component:l},n=({children:t})=>e.jsx("div",{className:"flex flex-col justify-center items-center gap-2 border border-solid  border-white/50 rounded-md p-2.5",children:t}),i={render:()=>e.jsxs("div",{className:"w-[900px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[e.jsxs(n,{children:[e.jsx("p",{children:"MonetaryValue"}),e.jsx(c,{value:.345,currency:"ETH"})]}),e.jsxs(n,{children:[e.jsx("p",{children:"FeesAccrued"}),e.jsx(d,{value:.005,currency:"ETH"})]}),e.jsxs(n,{children:[e.jsx("p",{children:"PositionValueDisplay - claimFor"}),e.jsx(s,{value:.345,position:"claimFor",feesAccrued:.005})]}),e.jsxs(n,{children:[e.jsx("p",{children:"PositionValueDisplay - claimAgainst"}),e.jsx(s,{value:.5,position:"claimAgainst",feesAccrued:.01,currency:"ETH"})]}),e.jsxs(n,{children:[e.jsx("p",{children:"PositionValueDisplay - identity"}),e.jsx(s,{value:.789,position:"identity",feesAccrued:.02})]}),e.jsxs(n,{children:[e.jsx("p",{children:"ClaimValueDisplay"}),e.jsx(p,{tvl:.345,currency:"ETH",claimsFor:230,claimsAgainst:125})]}),e.jsxs(n,{children:[e.jsx("p",{children:"IdentityValueDisplay"}),e.jsx(u,{value:.345,currency:"ETH",followers:230})]})]})};var a,r,o;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <div className="w-[900px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Container>
        <p>MonetaryValue</p>
        <MonetaryValue value={0.345} currency="ETH" />
      </Container>
      <Container>
        <p>FeesAccrued</p>
        <FeesAccrued value={0.005} currency="ETH" />
      </Container>
      <Container>
        <p>PositionValueDisplay - claimFor</p>
        <PositionValueDisplay value={0.345} position="claimFor" feesAccrued={0.005} />
      </Container>
      <Container>
        <p>PositionValueDisplay - claimAgainst</p>
        <PositionValueDisplay value={0.5} position="claimAgainst" feesAccrued={0.01} currency="ETH" />
      </Container>
      <Container>
        <p>PositionValueDisplay - identity</p>
        <PositionValueDisplay value={0.789} position="identity" feesAccrued={0.02} />
      </Container>
      <Container>
        <p>ClaimValueDisplay</p>
        <ClaimValueDisplay tvl={0.345} currency="ETH" claimsFor={230} claimsAgainst={125} />
      </Container>
      <Container>
        <p>IdentityValueDisplay</p>
        <IdentityValueDisplay value={0.345} currency="ETH" followers={230} />
      </Container>
    </div>
}`,...(o=(r=i.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const m=["IndicatorUsage"],g=Object.freeze(Object.defineProperty({__proto__:null,IndicatorUsage:i,__namedExportsOrder:m,default:y},Symbol.toStringTag,{value:"Module"}));export{i as I,g as S};
