import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{Q as n}from"./QuestSetProgressCard-lZkOsrNz.js";const a={title:"Components/Quest/QuestSetProgressCard",component:n,argTypes:{image:{type:"string",description:"Image source"},title:{type:"string",description:"Title"},numberQuests:{type:"number",description:"Number of quests"},numberCompletedQuests:{type:"number",description:"Number of completed quests"},onButtonClick:{type:"function",description:"Button click handler"}}},e={args:{image:"https://m.media-amazon.com/images/M/MV5BNDhiMWYzMjgtNTRiYi00ZTA3LThlODctNDRkMDk0NzFkMWI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg0MTkzMzA@._V1_.jpg",title:"Tutorial Island: The Primitive Elements",numberQuests:10,numberCompletedQuests:5,onButtonClick:()=>console.log("Button clicked")},render:i=>t.jsx("div",{className:"w-[600px]",children:t.jsx(n,{...i})})};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    image: 'https://m.media-amazon.com/images/M/MV5BNDhiMWYzMjgtNTRiYi00ZTA3LThlODctNDRkMDk0NzFkMWI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg0MTkzMzA@._V1_.jpg',
    title: 'Tutorial Island: The Primitive Elements',
    numberQuests: 10,
    numberCompletedQuests: 5,
    onButtonClick: () => console.log('Button clicked')
  },
  render: args => <div className="w-[600px]">
      <QuestSetProgressCard {...args} />
    </div>
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const m=["BasicUsage"],u=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,__namedExportsOrder:m,default:a},Symbol.toStringTag,{value:"Module"}));export{e as B,u as S};
