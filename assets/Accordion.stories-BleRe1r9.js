import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{A as a,a as n,b as o,c as s}from"./ClaimStakeCard-DTubEleb.js";const l={title:"Components/Accordion",component:a},t={args:{collapsible:!0,disabled:!1},render:d=>e.jsx("div",{className:"w-[400px]",children:e.jsxs(a,{className:"w-full",...d,children:[e.jsxs(n,{value:"item-1",children:[e.jsx(o,{children:"Is it accessible?"}),e.jsx(s,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),e.jsxs(n,{value:"item-2",children:[e.jsx(o,{children:"Is it styled?"}),e.jsx(s,{children:"Yes. It comes with default styles that matches the other components' aesthetic."})]}),e.jsxs(n,{value:"item-3",children:[e.jsx(o,{children:"Is it animated?"}),e.jsx(s,{children:"Yes. It's animated by default, but you can disable it if you prefer."})]})]})})};var c,r,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    collapsible: true,
    disabled: false
  },
  render: args => <div className="w-[400px]">
      <Accordion className="w-full" {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const m=["BasicUsage"],h=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:t,__namedExportsOrder:m,default:l},Symbol.toStringTag,{value:"Module"}));export{t as B,h as S};
