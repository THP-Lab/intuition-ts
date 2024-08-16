import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{b1 as t,b2 as T,b3 as a,b4 as r}from"./AlertDialog-Fa22hXYm.js";const c={title:"Components/Tabs",component:t},n={render:()=>e.jsx("div",{className:"w-[500px]",children:e.jsxs(t,{defaultValue:"one",children:[e.jsxs(T,{children:[e.jsx(a,{value:"one",label:"One",totalCount:69}),e.jsx(a,{value:"two",label:"Two",totalCount:69}),e.jsx(a,{disabled:!0,value:"three",label:"Three",totalCount:0})]}),e.jsxs("div",{className:"bg-primary/10 p-4 rounded-lg",children:[e.jsx(r,{value:"one",children:e.jsx("p",{children:"One"})}),e.jsx(r,{value:"two",children:e.jsx("p",{children:"Two"})})]})]})})},s={render:()=>e.jsx("div",{className:"w-[500px]",children:e.jsxs(t,{defaultValue:"one",children:[e.jsxs(T,{children:[e.jsx(a,{variant:"alternate",value:"one",label:"One"}),e.jsx(a,{variant:"alternate",value:"two",label:"Two"}),e.jsx(a,{disabled:!0,variant:"alternate",value:"three",label:"Three"})]}),e.jsxs("div",{className:"bg-primary/10 p-4 rounded-lg",children:[e.jsx(r,{value:"one",children:e.jsx("p",{children:"One"})}),e.jsx(r,{value:"two",children:e.jsx("p",{children:"Two"})})]})]})})};var l,o,i;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="w-[500px]">
      <Tabs defaultValue="one">
        <TabsList>
          <TabsTrigger value="one" label="One" totalCount={69} />
          <TabsTrigger value="two" label="Two" totalCount={69} />
          <TabsTrigger disabled value="three" label="Three" totalCount={0} />
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
}`,...(i=(o=n.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,b,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="w-[500px]">
      <Tabs defaultValue="one">
        <TabsList>
          <TabsTrigger variant="alternate" value="one" label="One" />
          <TabsTrigger variant="alternate" value="two" label="Two" />
          <TabsTrigger disabled variant="alternate" value="three" label="Three" />
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
}`,...(u=(b=s.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};const p=["BasicUsage","AlternateUsage"],m=Object.freeze(Object.defineProperty({__proto__:null,AlternateUsage:s,BasicUsage:n,__namedExportsOrder:p,default:c},Symbol.toStringTag,{value:"Module"}));export{s as A,n as B,m as S};
