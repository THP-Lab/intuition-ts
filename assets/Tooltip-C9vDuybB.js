import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as n,T as p,d as m,C as s}from"./index-Y3muJgY8.js";import{B as a}from"./TransactionStatusIndicator-B41sf_Ni.js";import"./Checkbox-BUyDAOfm.js";import"./Icon.types-BJuqKE1d.js";import"./Label-TnSa-Vb6.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-B07pz6pZ.js";import"./ProgressCard-Di9JTD4k.js";import"./ScrollArea-Dhe45Eev.js";import"./SegmentedControl-CoVeRGEn.js";import"./Separator-DLMkV6af.js";import"./Skeleton-k6WNkHQZ.js";import"./Table-BlSnVnDo.js";import"./Text-BeXQet-m.js";import"./Textarea-DtV2ds88.js";import"./ValueDisplay-ClYOGsr-.js";import{S as l,B as c}from"./Tooltip.stories-Bp7lyioV.js";import"./index-CTjT7uj6.js";import"./iframe-LEEPIt4I.js";import"../sb-preview/runtime.js";import"./index-1qoTW4fE.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-sXcn2mTS.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-9o982VWB.js";import"./index-Bb4qSo10.js";function i(t){const e={h4:"h4",...r(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:l}),`
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
`,o.jsx(s,{of:c,sourceState:"none"})]})}function K(t={}){const{wrapper:e}={...r(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(i,{...t})}):i(t)}export{K as default};
