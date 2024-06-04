import{j as m}from"./jsx-runtime-qGIIFXMu.js";import{useMDXComponents as a}from"./index-CqcSDpoT.js";import"./Avatar-lC8ay4Bw.js";import"./index-DI7FrtIC.js";import{B as r}from"./Button-DIxyx14P.js";import"./Switch-ByJth10Q.js";import"./Tooltip-DgChau7Z.js";import"./Text-C1Eb4vO9.js";import"./Resizable-DHQBnRfD.js";import"./Icon-C_fIsRl8.js";import"./SidebarLayoutNavAvatar-BgyG1spr.js";import"./Command-BXO-Mg7H.js";import{M as e,T as i,d,C as p}from"./index-CBqhovEj.js";import{S as s,B as C}from"./Command.stories-COJjbsqf.js";import"./index-CDs2tPxN.js";import"./extends-CCbyfPlC.js";import"./index-CCD8SudB.js";import"./index-B-yFm4aN.js";import"./index-CBeK71W_.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";import"./createLucideIcon-BucF5Q8I.js";import"./index-CcyUcsxs.js";import"./index-CKUEfieN.js";import"./index-rwdFSQ0g.js";import"./index-BQ87-lmA.js";import"./iframe-28O14N7B.js";import"../sb-preview/runtime.js";import"./index-DXimoRZY.js";import"./index-BH_9z_ur.js";import"./index-DrFu-skq.js";function n(o){const t={h4:"h4",...a(),...o.components};return m.jsxs(m.Fragment,{children:[m.jsx(e,{of:s}),`
`,m.jsx(i,{}),`
`,m.jsx(t.h4,{id:"fast-composable-unstyled-command-menu-for-react",children:"Fast, composable, unstyled command menu for React."}),`
`,m.jsx(r,{variant:"accent",onClick:()=>window.open("https://cmdk.paco.me/","_blank"),children:"API Reference"}),`
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
`,m.jsx(p,{of:C,sourceState:"none"})]})}function z(o={}){const{wrapper:t}={...a(),...o.components};return t?m.jsx(t,{...o,children:m.jsx(n,{...o})}):n(o)}export{z as default};
