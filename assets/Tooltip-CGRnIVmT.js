import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as n,T as p,d as m,C as s}from"./index-J2WzYzYa.js";import"./Avatar-BtHJmJsO.js";import"./Badge-DdnwakjS.js";import{B as a}from"./HoverCard-BtE0Zi4W.js";import"./Input-BOF_Ax6K.js";import"./Separator-CDCDkwLb.js";import"./Text-Ut-2NFPv.js";import"./Resizable-D6r50leV.js";import"./Icon-Cl8ckYc1.js";import"./Textarea-BcMsqAZI.js";import"./Label-Cn83oreb.js";import"./Table-DhRwqTN4.js";import"./ValueDisplay-D0Lul068.js";import{S as l,B as c}from"./Tooltip.stories-pcBQaHzx.js";import"./index-CTjT7uj6.js";import"./iframe-DWbv2EV2.js";import"../sb-preview/runtime.js";import"./index-D62jTv_I.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-BPrHwcGF.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-bugisSBR.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";function i(t){const e={h4:"h4",...r(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:l}),`
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
`,o.jsx(s,{of:c,sourceState:"none"})]})}function U(t={}){const{wrapper:e}={...r(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}export{U as default};
