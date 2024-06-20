import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as n,T as m,d as s,C as p}from"./index-BjalGFmG.js";import"./InfoCard-7pwmEdEs.js";import"./Avatar-BUaynhXT.js";import"./Badge-D2xxBGMY.js";import"./Button-CzEHE8a5.js";import"./Icon.types-DkS0gbR0.js";import"./Input-DFWTvv6T.js";import"./Label-ByAlek89.js";import"./PieChart-DH4cDbJQ.js";import"./PositionCardStaked-BOl4kzrD.js";import"./ProfileCard--cviTZvn.js";import"./Resizable-Dk6Cp6at.js";import"./SegmentedControl-DbX5wOQO.js";import"./Separator-Ct33SRfh.js";import"./Table-D9p853bW.js";import"./Text-ANaTnboW.js";import"./Textarea-Ds9ZbOCk.js";import"./ValueDisplay-2lt2w_5b.js";import{S as a,B as l}from"./SegmentedControl.stories-DceKKzyT.js";import"./index-CTjT7uj6.js";import"./iframe-Dpk_j2dA.js";import"../sb-preview/runtime.js";import"./index-D3WfGLRt.js";import"./index-DBez60WA.js";import"./index-BPrHwcGF.js";import"./index-BSh8g_S6.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-CNBET2ao.js";import"./palette-saq09hvB.js";import"./createLucideIcon-BfM7wYCo.js";function i(o){const e={h4:"h4",...r(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:a}),`
`,t.jsx(m,{}),`
`,t.jsx(e.h4,{id:"used-to-switch-between-views-within-a-page",children:"Used to switch between views within a page."}),`
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
`,t.jsx(p,{of:l,sourceState:"none"})]})}function N(o={}){const{wrapper:e}={...r(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i(o)}export{N as default};
