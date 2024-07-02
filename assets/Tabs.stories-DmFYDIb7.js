import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{aH as l,aI as i,aJ as s,aK as n}from"./IdentityInput-mw73YtJF.js";const d={title:"Components/Tabs",component:l},a={render:()=>e.jsx("div",{className:"w-[500px]",children:e.jsxs(l,{defaultValue:"one",children:[e.jsxs(i,{children:[e.jsx(s,{value:"one",label:"One",totalCount:69}),e.jsx(s,{value:"two",label:"Two",totalCount:69}),e.jsx(s,{disabled:!0,value:"three",label:"Three",totalCount:69})]}),e.jsxs("div",{className:"bg-primary/10 p-4 rounded-lg",children:[e.jsx(n,{value:"one",children:e.jsx("p",{children:"One"})}),e.jsx(n,{value:"two",children:e.jsx("p",{children:"Two"})})]})]})})};var t,o,r;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <div className="w-[500px]">
      <Tabs defaultValue="one">
        <TabsList>
          <TabsTrigger value="one" label="One" totalCount={69} />
          <TabsTrigger value="two" label="Two" totalCount={69} />
          <TabsTrigger disabled value="three" label="Three" totalCount={69} />
        </TabsList>
        <div className="bg-primary/10 p-4 rounded-lg">
          <TabsContent value="one">
            <p>One</p>
          </TabsContent>
          <TabsContent value="two">
            <p>Two</p>
          </TabsContent>
        </div>
      </Tabs>
    </div>
}`,...(r=(o=a.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const u=["BasicUsage"],T=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:a,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{a as B,T as S};
