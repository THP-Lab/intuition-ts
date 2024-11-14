import{j as s}from"./jsx-runtime-Cw0GR0a5.js";import{a3 as h}from"./TransactionStatusIndicator-dDbDpFrm.js";const v={title:"Components/Lists/FeaturedListCard",component:h},t={args:{displayName:"Featured Claims Collection",imgSrc:"https://avatars.githubusercontent.com/u/94311139?s=200&v=4",identitiesCount:42,tvl:"4.928",holdersCount:69,stakeholders:[{name:"John Doe",avatar:"https://avatars.githubusercontent.com/u/94311139?s=200&v=4"},{name:"Jane Smith",avatar:"https://avatars.githubusercontent.com/u/94311139?s=200&v=4"}]},render:p=>s.jsx("div",{className:"w-[600px]",children:s.jsx(h,{...p})})},e={args:{displayName:"Featured Claims Without Stakeholders",imgSrc:"https://avatars.githubusercontent.com/u/94311139?s=200&v=4",identitiesCount:42,tvl:"4.928",holdersCount:69}},a={args:{displayName:"This is a very long featured list title that should be truncated properly using the Trunctacular component",imgSrc:"https://avatars.githubusercontent.com/u/94311139?s=200&v=4",identitiesCount:42,tvl:"4.928",holdersCount:69,stakeholders:[{name:"John Doe",avatar:"https://avatars.githubusercontent.com/u/94311139?s=200&v=4"}]}};var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    displayName: 'Featured Claims Collection',
    imgSrc: 'https://avatars.githubusercontent.com/u/94311139?s=200&v=4',
    identitiesCount: 42,
    tvl: '4.928',
    holdersCount: 69,
    stakeholders: [{
      name: 'John Doe',
      avatar: 'https://avatars.githubusercontent.com/u/94311139?s=200&v=4'
    }, {
      name: 'Jane Smith',
      avatar: 'https://avatars.githubusercontent.com/u/94311139?s=200&v=4'
    }]
  },
  render: args => <div className="w-[600px]">
      <FeaturedListCard {...args} />
    </div>
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var i,u,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    displayName: 'Featured Claims Without Stakeholders',
    imgSrc: 'https://avatars.githubusercontent.com/u/94311139?s=200&v=4',
    identitiesCount: 42,
    tvl: '4.928',
    holdersCount: 69
  }
}`,...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,m,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    displayName: 'This is a very long featured list title that should be truncated properly using the Trunctacular component',
    imgSrc: 'https://avatars.githubusercontent.com/u/94311139?s=200&v=4',
    identitiesCount: 42,
    tvl: '4.928',
    holdersCount: 69,
    stakeholders: [{
      name: 'John Doe',
      avatar: 'https://avatars.githubusercontent.com/u/94311139?s=200&v=4'
    }]
  }
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const g=["BasicUsage","NoStakeholders","LongTitle"],b=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:t,LongTitle:a,NoStakeholders:e,__namedExportsOrder:g,default:v},Symbol.toStringTag,{value:"Module"}));export{t as B,b as S};
