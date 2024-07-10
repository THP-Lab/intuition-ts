import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as n,T as p,d as m,C as s}from"./index-CguyArF2.js";import{B as a}from"./Trunctacular-ZJ52VLFC.js";import"./Icon.types-bVvTOTyL.js";import"./Label-Ca4F4AkB.js";import"./PieChart-B_dtFskq.js";import"./Resizable-B4D6NlOM.js";import"./SegmentedControl-CpGzRY7X.js";import"./Separator-BPzIOX_U.js";import"./Table-DoQDVlQC.js";import"./Text-DRgAEttF.js";import"./Textarea-w5FyYqF_.js";import"./ValueDisplay-BGyvBqcS.js";import{S as l,B as c}from"./Tooltip.stories-YtOxUXdX.js";import"./index-CTjT7uj6.js";import"./iframe-NcvvqYlZ.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-DeHqaMYO.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";function i(t){const e={h4:"h4",...r(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:l}),`
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
`,o.jsx(s,{of:c,sourceState:"none"})]})}function L(t={}){const{wrapper:e}={...r(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}export{L as default};
