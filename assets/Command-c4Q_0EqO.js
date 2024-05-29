import{j as m}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as e,T as r,d as i,C as d}from"./index-DjgCgwbp.js";import{S as s,B as p}from"./Command.stories-D5XDbmlF.js";import"./index-CTjT7uj6.js";import"./iframe-43aqDtGs.js";import"../sb-preview/runtime.js";import"./index-DJaOuc6h.js";import"./index-DdAkmXN0.js";import"./extends-CCbyfPlC.js";import"./index-CcyUcsxs.js";import"./index-BaW8Z0I_.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./Command-7WXSXKb2.js";import"./Icon-CR-nLIwf.js";import"./index-bugisSBR.js";import"./palette-saq09hvB.js";import"./index-Ey1R3kC1.js";import"./index-DZjgi4oU.js";import"./index-Dkmgy-nq.js";function n(o){const t={h4:"h4",...a(),...o.components};return m.jsxs(m.Fragment,{children:[m.jsx(e,{of:s}),`
`,m.jsx(r,{}),`
`,m.jsx(t.h4,{id:"a-short-description-goes-here",children:"A short description goes here."}),`
`,m.jsx(i,{dark:!0,language:"tsx",code:`
import { 
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator, } from '@0xintuition/1ui'

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
`,m.jsx(d,{of:p,sourceState:"none"})]})}function v(o={}){const{wrapper:t}={...a(),...o.components};return t?m.jsx(t,{...o,children:m.jsx(n,{...o})}):n(o)}export{v as default};
