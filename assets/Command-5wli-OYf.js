import{j as m}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as r,T as e,d as i,C as p}from"./index-DD143MHS.js";import{B as d}from"./TransactionStatusIndicator-C6ESa80M.js";import"./Icon.types-cQmbtfph.js";import"./Label-l7hlfg-Q.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-CZqSfr2M.js";import"./ProgressCard-8XoeDUlW.js";import"./QuestCriteriaCard-DKN7bypV.js";import"./QuestCriteriaDisplay-13wHbsZ-.js";import"./QuestPointsDisplay-DOFHvDSK.js";import"./QuestStatusIndicator-DRoc4dCN.js";import"./SegmentedControl-Dt9e-2dS.js";import"./Separator-DqkY-AaL.js";import"./Skeleton-CGZOk8OX.js";import"./Table-Cj9ooZRp.js";import"./Text-CIyuOUAi.js";import"./Textarea-BN2eJ_eZ.js";import"./ValueDisplay-OcmgwD6b.js";import{S as s,B as C}from"./Command.stories-9XFsYsiL.js";import"./index-CTjT7uj6.js";import"./iframe-Dh2AnGk6.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-jZxEZZ9l.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";import"./quest-BMAtC6cg.js";function n(o){const t={h4:"h4",...a(),...o.components};return m.jsxs(m.Fragment,{children:[m.jsx(r,{of:s}),`
`,m.jsx(e,{}),`
`,m.jsx(t.h4,{id:"fast-composable-unstyled-command-menu-for-react",children:"Fast, composable, unstyled command menu for React."}),`
`,m.jsx(d,{variant:"accent",onClick:()=>window.open("https://cmdk.paco.me/","_blank"),children:"API Reference"}),`
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
`,m.jsx(p,{of:C,sourceState:"none"})]})}function O(o={}){const{wrapper:t}={...a(),...o.components};return t?m.jsx(t,{...o,children:m.jsx(n,{...o})}):n(o)}export{O as default};
