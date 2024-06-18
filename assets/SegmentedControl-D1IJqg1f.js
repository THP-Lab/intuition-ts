import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as n,T as m,d as s,C as a}from"./index-ooaS_y5C.js";import"./Tooltip-DVK0Dav-.js";import"./Avatar-DbIg4tiR.js";import"./Badge-VPO89ISs.js";import"./ProfileCard-C2vltaMr.js";import"./Icon.types-qTUclLwX.js";import"./Input-BkksL8Pg.js";import"./Label-DWg5NfQ5.js";import"./PieChart-B2bggzNI.js";import"./Resizable-CLGkaN1-.js";import"./SegmentedControl-DewWK8dB.js";import"./Separator-CrpZPajs.js";import"./Table-Cj0PeqN2.js";import"./Text-DO9zWwhA.js";import"./Textarea-zzPGycIM.js";import"./ValueDisplay-C049CGII.js";import{S as p,B as l}from"./SegmentedControl.stories-BVu8dKOX.js";import"./index-CTjT7uj6.js";import"./iframe-CGwargQl.js";import"../sb-preview/runtime.js";import"./index-C1lphb2L.js";import"./index-Ch33dFXB.js";import"./index-BhgyLgKK.js";import"./index-BPrHwcGF.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-B7U7eni1.js";import"./palette-saq09hvB.js";import"./createLucideIcon-BfM7wYCo.js";function i(e){const o={h4:"h4",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:p}),`
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
`,t.jsx(a,{of:l,sourceState:"none"})]})}function H(e={}){const{wrapper:o}={...r(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(i,{...e})}):i(e)}export{H as default};
