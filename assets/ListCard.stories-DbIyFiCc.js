import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{af as k}from"./TransactionStatusIndicator-B45suF28.js";const y={title:"Components/Lists/ListCard",component:k},o={args:{displayName:"My Favorite Claims",imgSrc:"https://avatars.githubusercontent.com/u/94311139?s=200&v=4",identitiesCount:42,buttonWrapper:n=>a.jsx("span",{role:"link",tabIndex:0,onClick:()=>console.log("View clicked"),onKeyDown:e=>{(e.key==="Enter"||e.key===" ")&&console.log("View clicked")},className:"w-full",children:n})}},t={args:{displayName:"List Without Image",identitiesCount:15,buttonWrapper:n=>a.jsx("span",{role:"link",tabIndex:0,onClick:()=>console.log("View clicked"),onKeyDown:e=>{(e.key==="Enter"||e.key===" ")&&console.log("View clicked")},className:"w-full",children:n})}},s={args:{displayName:"This is a very long list title that should be truncated properly using the Trunctacular component",imgSrc:"https://avatars.githubusercontent.com/u/94311139?s=200&v=4",identitiesCount:42,buttonWrapper:n=>a.jsx("span",{role:"link",tabIndex:0,onClick:()=>console.log("View clicked"),onKeyDown:e=>{(e.key==="Enter"||e.key===" ")&&console.log("View clicked")},className:"w-full",children:n})}};var i,r,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    displayName: 'My Favorite Claims',
    imgSrc: 'https://avatars.githubusercontent.com/u/94311139?s=200&v=4',
    identitiesCount: 42,
    buttonWrapper: button => <span role="link" tabIndex={0} onClick={() => console.log('View clicked')} onKeyDown={e => {
      if (e.key === 'Enter' || e.key === ' ') {
        console.log('View clicked');
      }
    }} className="w-full">
        {button}
      </span>
  }
}`,...(l=(r=o.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var c,u,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    displayName: 'List Without Image',
    identitiesCount: 15,
    buttonWrapper: button => <span role="link" tabIndex={0} onClick={() => console.log('View clicked')} onKeyDown={e => {
      if (e.key === 'Enter' || e.key === ' ') {
        console.log('View clicked');
      }
    }} className="w-full">
        {button}
      </span>
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,m,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    displayName: 'This is a very long list title that should be truncated properly using the Trunctacular component',
    imgSrc: 'https://avatars.githubusercontent.com/u/94311139?s=200&v=4',
    identitiesCount: 42,
    buttonWrapper: button => <span role="link" tabIndex={0} onClick={() => console.log('View clicked')} onKeyDown={e => {
      if (e.key === 'Enter' || e.key === ' ') {
        console.log('View clicked');
      }
    }} className="w-full">
        {button}
      </span>
  }
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const b=["BasicUsage","NoImage","LongTitle"],f=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:o,LongTitle:s,NoImage:t,__namedExportsOrder:b,default:y},Symbol.toStringTag,{value:"Module"}));export{o as B,t as N,f as S};
