import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as n,T as m,d as s,C as a}from"./index-D4XbuSjZ.js";import"./QuestStatusCard-DfTRlnMT.js";import"./QuestSetProgressCard-ClGoFBEX.js";import"./Icon.types-9co6RU8J.js";import"./Label-DKqTtzje.js";import"./PieChart-B_dtFskq.js";import"./Resizable-B8LsIgh_.js";import"./SegmentedControl-DEtPxF6_.js";import"./Separator-y1Wg93hL.js";import"./Table-DiAONwIH.js";import"./Text-CvCwWh2A.js";import"./Textarea-DGcnJGMC.js";import"./ValueDisplay-s0UeY4GO.js";import"./QuestSetCard-CU4evGOs.js";import"./ProgressBar-BdoIrmiA.js";import"./QuestStatusIndicator-DbTTS57h.js";import{S as p,B as l}from"./SegmentedControl.stories-KZnEr4UZ.js";import"./index-CTjT7uj6.js";import"./iframe-CZgi1RCl.js";import"../sb-preview/runtime.js";import"./index-Ba1MzMRK.js";import"./index-DBez60WA.js";import"./index-BSh8g_S6.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-CuZnzU4K.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";import"./createLucideIcon-BfM7wYCo.js";function i(e){const o={h4:"h4",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:p}),`
`,t.jsx(m,{}),`
`,t.jsx(o.h4,{id:"used-to-switch-between-views-within-a-page",children:"Used to switch between views within a page."}),`
`,t.jsx(s,{dark:!0,language:"tsx",code:`
import React from 'react'

import { SegmentedControl } from '@0xintuition/1ui'

const options = [
{ value: 'overview', label: 'Overview' },
{ value: 'claims', label: 'Claims' },
{ value: 'positions', label: 'Positions' },
{ value: 'activity', label: 'Activity' },
]

const [selectedTab, setSelectedTab] = React.useState(options[0].value)

return (

<SegmentedControl>
  {options.map((option, index) => (
    <SegmentedControlItem
      key={index}
      isActive={selectedTab === option.value}
      onClick={() => setSelectedTab(option.value)}
    >
      {option.label}
    </SegmentedControlItem>
  ))}
</SegmentedControl>
) `}),`
`,t.jsx(a,{of:l,sourceState:"none"})]})}function J(e={}){const{wrapper:o}={...r(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(i,{...e})}):i(e)}export{J as default};
