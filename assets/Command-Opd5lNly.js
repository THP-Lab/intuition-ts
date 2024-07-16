import{j as m}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as r,T as e,d as i,C as d}from"./index-CtqIhdaF.js";import{B as p}from"./QuestCard-Be0vVYuj.js";import"./Icon.types-DvvrcWKg.js";import"./Label-BSnWqvXc.js";import"./PieChart-B_dtFskq.js";import"./SegmentedControl-C43o2uqF.js";import"./Separator-8RGezXAr.js";import"./Table-C0qIXiUM.js";import"./Text-DsVeH9qI.js";import"./Textarea-CUiVvNKI.js";import"./ValueDisplay-D2U_pdiu.js";import"./QuestSetCard-gHXGTuki.js";import"./ProgressBar-D75vLLzs.js";import"./QuestStatusIndicator-_HPKLqrf.js";import{S as s,B as C}from"./Command.stories-CCfvZ-t4.js";import"./index-CTjT7uj6.js";import"./iframe-e-bNsg70.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-DgtlF2hQ.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";function n(o){const t={h4:"h4",...a(),...o.components};return m.jsxs(m.Fragment,{children:[m.jsx(r,{of:s}),`
`,m.jsx(e,{}),`
`,m.jsx(t.h4,{id:"fast-composable-unstyled-command-menu-for-react",children:"Fast, composable, unstyled command menu for React."}),`
`,m.jsx(p,{variant:"accent",onClick:()=>window.open("https://cmdk.paco.me/","_blank"),children:"API Reference"}),`
`,m.jsx(i,{dark:!0,language:"tsx",code:`
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
`,m.jsx(d,{of:C,sourceState:"none"})]})}function q(o={}){const{wrapper:t}={...a(),...o.components};return t?m.jsx(t,{...o,children:m.jsx(n,{...o})}):n(o)}export{q as default};
