import{j as m}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as e,T as r,d,C as i}from"./index-tal4zyBl.js";import"./Avatar-DHlXruik.js";import"./index-bugisSBR.js";import{B as s}from"./RadioGroup-BfYxA_4Y.js";import"./Text-UPqpmiv5.js";import"./Resizable-D6r50leV.js";import"./Icon-C0jZa4Rx.js";import{S as p,B as C}from"./Command.stories-B-Juxrv4.js";import"./index-CTjT7uj6.js";import"./iframe-B5k9dtxy.js";import"../sb-preview/runtime.js";import"./index-B7lOVQLg.js";import"./index-DdAkmXN0.js";import"./extends-CCbyfPlC.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./palette-saq09hvB.js";function t(o){const n={h4:"h4",...a(),...o.components};return m.jsxs(m.Fragment,{children:[m.jsx(e,{of:p}),`
`,m.jsx(r,{}),`
`,m.jsx(n.h4,{id:"fast-composable-unstyled-command-menu-for-react",children:"Fast, composable, unstyled command menu for React."}),`
`,m.jsx(s,{variant:"accent",onClick:()=>window.open("https://cmdk.paco.me/","_blank"),children:"API Reference"}),`
`,m.jsx(d,{dark:!0,language:"tsx",code:`
import { 
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator, 
} from '@0xintuition/1ui'

<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Profile</CommandItem>
      <CommandItem>Billing</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
`}),`
`,m.jsx(i,{of:C,sourceState:"none"})]})}function R(o={}){const{wrapper:n}={...a(),...o.components};return n?m.jsx(n,{...o,children:m.jsx(t,{...o})}):t(o)}export{R as default};
