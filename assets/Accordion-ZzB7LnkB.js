import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as n,T as c,d as s,C as a,e as m}from"./index-D20SQN9d.js";import{B as d}from"./AlertDialog-D-DUZV-F.js";import"./Checkbox-BVEY8e8G.js";import"./Icon.types-ByzLpCU-.js";import"./Label-BP8-Mx5Z.js";import"./PieChart-9tI5Soxs.js";import"./ProgressBar-B07pz6pZ.js";import"./ProgressCard-e5tcEEn0.js";import"./SegmentedControl-CoVeRGEn.js";import"./Separator-r-Tg2QWT.js";import"./Skeleton-k6WNkHQZ.js";import"./Table-4UgCNE7H.js";import"./Text-19x_d4-A.js";import"./Textarea-DtV2ds88.js";import"./ValueDisplay-ClYOGsr-.js";import{S as p,B as l}from"./Accordion.stories-G0KoWnyk.js";import"./index-CTjT7uj6.js";import"./iframe-CrC6i-gH.js";import"../sb-preview/runtime.js";import"./index-BqnMPuz1.js";import"./index-DVBfyTD9.js";import"./index-9r8iugjR.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-sXcn2mTS.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";function i(t){const e={h2:"h2",h4:"h4",...r(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:p}),`
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
`,o.jsx(m,{})]})}function z(t={}){const{wrapper:e}={...r(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}export{z as default};
