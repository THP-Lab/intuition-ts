import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as n}from"./index-DSkyVWTJ.js";import{M as r,T as m,d as s,C as a}from"./index-BzQ5RIq4.js";import"./StakeCard--cL89RRb.js";import"./Avatar-BqFJ6ENc.js";import"./Badge-BlZKMVE_.js";import"./Icon-BTTLXkGj.js";import"./Input-BkksL8Pg.js";import"./Label-FZHk6kRz.js";import"./Resizable-DNd95Y6K.js";import"./SegmentedControl-DewWK8dB.js";import"./Separator-ho1Nl6GX.js";import"./Table-Cj0PeqN2.js";import"./Text-BJFUDWxl.js";import"./Textarea-zzPGycIM.js";import"./ValueDisplay-CeuIe0pc.js";import"./PieChart-B2bggzNI.js";import{S as p,B as l}from"./SegmentedControl.stories-BVu8dKOX.js";import"./index-CTjT7uj6.js";import"./iframe-BMsfiRL_.js";import"../sb-preview/runtime.js";import"./index-CDJ69J4A.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-BPrHwcGF.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-B7U7eni1.js";import"./palette-saq09hvB.js";function i(e){const o={h4:"h4",...n(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{of:p}),`
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
`,t.jsx(a,{of:l,sourceState:"none"})]})}function z(e={}){const{wrapper:o}={...n(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(i,{...e})}):i(e)}export{z as default};
