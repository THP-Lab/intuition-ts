import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as n,T as c,d as s,C as a,e as m}from"./index-0396i-GT.js";import{B as d}from"./Trunctacular-CQXa-Vsq.js";import"./Icon.types-D5zuhAbZ.js";import"./Input-BPM31_im.js";import"./Label-DzNLlIBV.js";import"./PieChart-B_dtFskq.js";import"./Resizable-X9Hr8Gxc.js";import"./SegmentedControl-Bhn13kRZ.js";import"./Separator-C_RZmUxf.js";import"./Table-BR553Jwj.js";import"./Text-DdASfXbZ.js";import"./Textarea-qTR3kLUl.js";import"./ValueDisplay-ChJkojwK.js";import{S as p,B as l}from"./Accordion.stories-C_RYWIwo.js";import"./index-CTjT7uj6.js";import"./iframe-BrF2RXen.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-D-lcGQm1.js";import"./palette-saq09hvB.js";function i(t){const e={h2:"h2",h4:"h4",...r(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:p}),`
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
`,o.jsx(m,{})]})}function U(t={}){const{wrapper:e}={...r(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}export{U as default};
