import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as n,T as p,d as m,C as s}from"./index-D2FSRDLS.js";import{B as a}from"./StakeCard-D0x69Qez.js";import"./Avatar-BqFJ6ENc.js";import"./Badge-BlZKMVE_.js";import"./Icon-BTTLXkGj.js";import"./Input-CFrL2YAq.js";import"./Label-FZHk6kRz.js";import"./Resizable-DNd95Y6K.js";import"./SegmentedControl-DewWK8dB.js";import"./Separator-ho1Nl6GX.js";import"./Table-Cj0PeqN2.js";import"./Text-BJFUDWxl.js";import"./Textarea-DpSkS59a.js";import"./ValueDisplay-CeuIe0pc.js";import"./PieChart-DUa5jqQH.js";import{S as l,B as c}from"./Tooltip.stories-S6kz64Ts.js";import"./index-CTjT7uj6.js";import"./iframe-BrLz5YOQ.js";import"../sb-preview/runtime.js";import"./index-CDJ69J4A.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-BPrHwcGF.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-B7U7eni1.js";import"./palette-saq09hvB.js";function i(t){const e={h4:"h4",...r(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:l}),`
`,o.jsx(p,{}),`
`,o.jsx(e.h4,{id:"a-popup-that-displays-information-related-to-an-element-when-the-element-receives-keyboard-focus-or-the-mouse-hovers-over-it",children:"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."}),`
`,o.jsx(a,{variant:"accent",onClick:()=>window.open("https://www.radix-ui.com/primitives/docs/components/tooltip#api-reference","_blank"),children:"API Reference"}),`
`,o.jsx(m,{dark:!0,language:"tsx",code:`
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger, 
} from '@0xintuition/1ui'

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost" size="lg">
        Hover
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <Text variant="body">Some text</Text>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
`}),`
`,o.jsx(s,{of:c,sourceState:"none"})]})}function G(t={}){const{wrapper:e}={...r(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}export{G as default};
