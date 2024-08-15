import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as n,T as m,d as s,C as a}from"./index-CVPBA-pi.js";import"./TransactionStatusIndicator-DF0ORTNg.js";import"./Checkbox-DUkdGkqO.js";import"./Icon.types-7PkJ3kFX.js";import"./Label-BcH9Dz7N.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-Bfgyotpp.js";import"./ProgressCard-BYKzYHAL.js";import"./SegmentedControl-DQCOk3Kf.js";import"./Separator-CECijyNn.js";import"./Skeleton-pYLGnhFW.js";import"./Table-JXx_s4Wj.js";import"./Text-COZqca-9.js";import"./Textarea-74mgfiS7.js";import"./ValueDisplay-BLpqF4VW.js";import"./Banner-BQ9cebq8.js";import{S as p,B as l}from"./SegmentedControl.stories-BTa4XpLF.js";import"./index-CTjT7uj6.js";import"./iframe-ChhbhtuU.js";import"../sb-preview/runtime.js";import"./index-C5rLi0fd.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Ca1CH5Oj.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";function i(e){const o={h4:"h4",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:p}),`
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
`,t.jsx(a,{of:l,sourceState:"none"})]})}function G(e={}){const{wrapper:o}={...r(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(i,{...e})}):i(e)}export{G as default};
