import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as n,T as c,d as s,C as a,e as m}from"./index-J2WzYzYa.js";import"./Avatar-BtHJmJsO.js";import"./Badge-DdnwakjS.js";import{B as d}from"./HoverCard-BtE0Zi4W.js";import"./Input-BOF_Ax6K.js";import"./Separator-CDCDkwLb.js";import"./Text-Ut-2NFPv.js";import"./Resizable-D6r50leV.js";import"./Icon-Cl8ckYc1.js";import"./Textarea-BcMsqAZI.js";import"./Label-Cn83oreb.js";import"./Table-DhRwqTN4.js";import"./ValueDisplay-D0Lul068.js";import{S as p,B as l}from"./Accordion.stories-DW3EAIs0.js";import"./index-CTjT7uj6.js";import"./iframe-DWbv2EV2.js";import"../sb-preview/runtime.js";import"./index-D62jTv_I.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-BPrHwcGF.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-bugisSBR.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";function i(t){const e={h2:"h2",h4:"h4",...r(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:p}),`
`,o.jsx(c,{}),`
`,o.jsx(e.h4,{id:"a-vertically-stacked-set-of-interactive-headings-that-each-reveal-a-section-of-content",children:"A vertically stacked set of interactive headings that each reveal a section of content."}),`
`,o.jsx(d,{variant:"accent",onClick:()=>window.open("https://www.radix-ui.com/primitives/docs/components/accordion#api-reference","_blank"),children:"API Reference"}),`
`,o.jsx(s,{dark:!0,language:"tsx",code:`
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger, 
} from '@0xintuition/1ui'

<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that matches the other components&apos;
      aesthetic.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Yes. It&apos;s animated by default, but you can disable it if you prefer.
    </AccordionContent>
  </AccordionItem>
</Accordion>
`}),`
`,o.jsx(a,{of:l,sourceState:"none"}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(m,{})]})}function W(t={}){const{wrapper:e}={...r(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}export{W as default};
