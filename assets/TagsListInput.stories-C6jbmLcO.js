import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{aU as n}from"./QuestStatusCard-CJAcnthM.js";const u={title:"Components/Tags/TagsListInput",component:n},v=[{name:"Tag Name 1",id:"1"},{name:"Tag Name 2",id:"2"},{name:"Tag Name 3",id:"3"},{name:"Tag Name 4",id:"4"}],s={render:()=>a.jsx("div",{className:"w-[400px]",children:a.jsx(n,{variant:"tag",tags:[],maxTags:5,onAddTag:()=>console.log("Add Tag"),onRemoveTag:e=>console.log("Remove Tag",e)})})},o={render:()=>a.jsx("div",{className:"w-[400px]",children:a.jsx(n,{variant:"trustCircle",tags:v,maxTags:5,onAddTag:()=>console.log("Add Tag"),onRemoveTag:e=>console.log("Remove Tag",e)})})},r={render:()=>a.jsx("div",{className:"w-[400px]",children:a.jsx(n,{variant:"tag",tags:v,maxTags:5,onAddTag:()=>console.log("Add Tag"),onRemoveTag:e=>console.log("Remove Tag",e)})})};var t,g,d;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <div className="w-[400px]">
      <TagsListInput variant="tag" tags={[]} maxTags={5} onAddTag={() => console.log('Add Tag')} onRemoveTag={(id: string) => console.log('Remove Tag', id)} />
    </div>
}`,...(d=(g=s.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var i,m,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="w-[400px]">
      <TagsListInput variant="trustCircle" tags={tags} maxTags={5} onAddTag={() => console.log('Add Tag')} onRemoveTag={(id: string) => console.log('Remove Tag', id)} />
    </div>
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,T,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="w-[400px]">
      <TagsListInput variant="tag" tags={tags} maxTags={5} onAddTag={() => console.log('Add Tag')} onRemoveTag={(id: string) => console.log('Remove Tag', id)} />
    </div>
}`,...(p=(T=r.parameters)==null?void 0:T.docs)==null?void 0:p.source}}};const x=["EmptyStateVariant","TrustCirclesVariant","TagsVariant"],j=Object.freeze(Object.defineProperty({__proto__:null,EmptyStateVariant:s,TagsVariant:r,TrustCirclesVariant:o,__namedExportsOrder:x,default:u},Symbol.toStringTag,{value:"Module"}));export{s as E,j as S,o as T,r as a};
