import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as r,T as m,d as n,C as u}from"./index-CgulYimk.js";import"./QuestStatusCard-Diq74wPq.js";import{B as p}from"./QuestSetProgressCard-BNr9QVR-.js";import"./Icon.types-D4lfunSt.js";import"./Label-4gKwHNvc.js";import"./PieChart-B_dtFskq.js";import"./Resizable-B7XdxUdz.js";import"./SegmentedControl-C43o2uqF.js";import"./Separator-EZUw1-4L.js";import"./Table-C0qIXiUM.js";import"./Text-DsVeH9qI.js";import"./Textarea-CUiVvNKI.js";import"./ValueDisplay-D2U_pdiu.js";import"./QuestSetCard-BHXW0rRZ.js";import"./ProgressBar-D75vLLzs.js";import"./QuestStatusIndicator-DHmvCJek.js";import{S as d,B as s}from"./RadioGroup.stories-CvTG3sX7.js";import"./index-CTjT7uj6.js";import"./iframe-BpbDlaPT.js";import"../sb-preview/runtime.js";import"./index-Ba1MzMRK.js";import"./index-DBez60WA.js";import"./index-BSh8g_S6.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-DgtlF2hQ.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";import"./createLucideIcon-BfM7wYCo.js";function e(t){const i={h4:"h4",...a(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{of:d}),`
`,o.jsx(m,{}),`
`,o.jsx(i.h4,{id:"a-set-of-checkable-buttonsknown-as-radio-buttonswhere-no-more-than-one-of-the-buttons-can-be-checked-at-a-time",children:"A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."}),`
`,o.jsx(p,{variant:"accent",onClick:()=>window.open("https://www.radix-ui.com/primitives/docs/components/radio-group#api-reference","_blank"),children:"API Reference"}),`
`,o.jsx(n,{dark:!0,language:"tsx",code:`
import { 
  RadioGroup,
  RadioGroupDivider,
  RadioGroupItem,
  RadioGroupItemContainer,
  RadioGroupItemLabel,
} from '@0xintuition/1ui'

const radioGroupData = [
{
id: 'minimum',
value: 'minimum',
displayValue: 'Minimum',
displaySubValue: '+0.001 ETH',
},
{
id: 'minimum',
value: 'default',
displayValue: 'Default',
displaySubValue: '+0.01 ETH',
},
{
id: 'minimum',
value: 'strong',
displayValue: 'Strong',
displaySubValue: '+0.05 ETH',
},
]

const numberOfRadioGroupItems = radioGroupData.length

<RadioGroup defaultValue={radioGroupData[0].value}>
  {radioGroupData.map((item, index) => (
    <div key={index}>
      <RadioGroupItemContainer>
        <RadioGroupItemLabel
          htmlFor={item.id}
          value={item.displayValue}
          subValue={item.displaySubValue}
        />
        <RadioGroupItem value={item.value} id={item.id} />
      </RadioGroupItemContainer>
      {index + 1 < numberOfRadioGroupItems && <RadioGroupDivider />}
    </div>
  ))}
</RadioGroup>
`}),`
`,o.jsx(u,{of:s,sourceState:"none"})]})}function J(t={}){const{wrapper:i}={...a(),...t.components};return i?o.jsx(i,{...t,children:o.jsx(e,{...t})}):e(t)}export{J as default};
