import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as i}from"./index-DSkyVWTJ.js";import{M as r,T as m,d as s,C as u,e as x}from"./index-BA-ziRCw.js";import{B as p}from"./TransactionStatusIndicator-BNWelnuU.js";import"./Checkbox-BUyDAOfm.js";import"./Icon.types-BJuqKE1d.js";import"./Label-TnSa-Vb6.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-B07pz6pZ.js";import"./ProgressCard-Di9JTD4k.js";import"./ScrollArea-Dhe45Eev.js";import"./SegmentedControl-CoVeRGEn.js";import"./Separator-DLMkV6af.js";import"./Skeleton-k6WNkHQZ.js";import"./Table-BlSnVnDo.js";import"./Text-BeXQet-m.js";import"./Textarea-DtV2ds88.js";import"./ValueDisplay-ClYOGsr-.js";import{S as c,B as l}from"./ContextMenu.stories-DJjsiQrD.js";import"./index-CTjT7uj6.js";import"./iframe-DZusH_ob.js";import"../sb-preview/runtime.js";import"./index-1qoTW4fE.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-sXcn2mTS.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-9o982VWB.js";import"./index-Bb4qSo10.js";function o(n){const e={h2:"h2",h4:"h4",li:"li",p:"p",ul:"ul",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:c}),`
`,t.jsx(m,{}),`
`,t.jsx(e.h4,{id:"displays-a-context-menu-triggered-by-right-click",children:"Displays a context menu triggered by right click."}),`
`,t.jsx(p,{variant:"accent",onClick:()=>window.open("https://www.radix-ui.com/primitives/docs/components/context-menu","_blank"),children:"API Reference"}),`
`,t.jsx(s,{dark:!0,language:"tsx",code:`
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger
} from '@0xintuition/1ui'

<ContextMenu>
  <ContextMenuTrigger>
    <Button size="lg">Right click me</Button>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Settings</ContextMenuItem>
    <ContextMenuItem>Logout</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
`}),`
`,t.jsx(u,{of:l,sourceState:"none"}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(x,{}),`
`,t.jsx(e.h2,{id:"components",children:"Components"}),`
`,t.jsx(e.p,{children:"The ContextMenu consists of multiple components that can be composed together:"}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"ContextMenu - The root component"}),`
`,t.jsx(e.li,{children:"ContextMenuTrigger - The element that triggers the menu"}),`
`,t.jsx(e.li,{children:"ContextMenuContent - The content of the menu"}),`
`,t.jsx(e.li,{children:"ContextMenuItem - Individual menu items"}),`
`,t.jsx(e.li,{children:"ContextMenuSeparator - A visual separator"}),`
`,t.jsx(e.li,{children:"ContextMenuLabel - A label for groups of items"}),`
`,t.jsx(e.li,{children:"ContextMenuCheckboxItem - A menu item with a checkbox"}),`
`,t.jsx(e.li,{children:"ContextMenuRadioGroup - A group of radio items"}),`
`,t.jsx(e.li,{children:"ContextMenuRadioItem - A menu item that can be selected from a group"}),`
`]})]})}function N(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{N as default};
