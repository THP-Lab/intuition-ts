import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{ar as s,as as i,at as r}from"./Trunctacular-Cy9kh0pi.js";const h={title:"Components/Resizable",component:s},a={render:d=>e.jsx("div",{className:"w-[500px]",children:e.jsxs(i,{direction:"horizontal",className:"border-border/30 max-w-lg rounded-lg border",children:[e.jsx(s,{defaultSize:50,children:e.jsx("div",{className:"flex h-[200px] items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"One"})})}),e.jsx(r,{}),e.jsx(s,{defaultSize:50,children:e.jsxs(i,{direction:"vertical",children:[e.jsx(s,{defaultSize:25,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Two"})})}),e.jsx(r,{}),e.jsx(s,{defaultSize:75,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Three"})})})]})})]})})},n={render:d=>e.jsx("div",{className:"w-[500px]",children:e.jsxs(i,{direction:"vertical",className:"border-border/30 min-h-[200px] max-w-lg rounded-lg border",children:[e.jsx(s,{defaultSize:50,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Top"})})}),e.jsx(r,{}),e.jsx(s,{defaultSize:50,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Bottom"})})})]})})},l={render:d=>e.jsx("div",{className:"w-[500px]",children:e.jsxs(i,{direction:"horizontal",className:"border-border/30 min-h-[200px] rounded-lg border",children:[e.jsx(s,{defaultSize:30,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Sidebar"})})}),e.jsx(r,{withHandle:!0}),e.jsx(s,{defaultSize:70,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Content"})})})]})})};var t,c,o;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  // eslint-disable-next-line
  render: args => <div className="w-[500px]">
      <ResizablePanelGroup direction="horizontal" className="border-border/30 max-w-lg rounded-lg border">
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Three</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
}`,...(o=(c=a.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var m,p,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  // eslint-disable-next-line
  render: args => <div className="w-[500px]">
      <ResizablePanelGroup direction="vertical" className="border-border/30 min-h-[200px] max-w-lg rounded-lg border">
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Top</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Bottom</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
}`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var b,u,x;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  // eslint-disable-next-line
  render: args => <div className="w-[500px]">
      <ResizablePanelGroup direction="horizontal" className="border-border/30 min-h-[200px] rounded-lg border">
        <ResizablePanel defaultSize={30}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={70}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
}`,...(x=(u=l.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const z=["BasicUsage","Vertical","Sidebar"],v=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:a,Sidebar:l,Vertical:n,__namedExportsOrder:z,default:h},Symbol.toStringTag,{value:"Module"}));export{a as B,v as S,n as V,l as a};
