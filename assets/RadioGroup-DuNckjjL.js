import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as a,T as m,d as n,C as p}from"./index-jD1mmVJQ.js";import{B as u}from"./Trunctacular-BB92s1Jy.js";import"./Icon.types-Csn6eVsj.js";import"./Label-l7hlfg-Q.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-CZqSfr2M.js";import"./ProgressCard-HIGHqO49.js";import"./QuestCriteriaCard-DU_nEwuR.js";import"./QuestCriteriaDisplay-BOc2v1Da.js";import"./QuestPointsDisplay-DOFHvDSK.js";import"./QuestSetCard-CAqByP9R.js";import"./QuestStatusIndicator-DjnhoyJG.js";import"./SegmentedControl-Dt9e-2dS.js";import"./Separator-DqkY-AaL.js";import"./Skeleton-CGZOk8OX.js";import"./Table-Cj9ooZRp.js";import"./Text-CIyuOUAi.js";import"./Textarea-BN2eJ_eZ.js";import"./ValueDisplay-OcmgwD6b.js";import{S as d,B as s}from"./RadioGroup.stories-BdVFKkJb.js";import"./index-CTjT7uj6.js";import"./iframe-CnGYYJrY.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-jZxEZZ9l.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./progress-DxZziHAc.js";import"./quest-BMAtC6cg.js";function e(t){const i={h4:"h4",...r(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:d}),`
`,o.jsx(m,{}),`
`,o.jsx(i.h4,{id:"a-set-of-checkable-buttonsknown-as-radio-buttonswhere-no-more-than-one-of-the-buttons-can-be-checked-at-a-time",children:"A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."}),`
`,o.jsx(u,{variant:"accent",onClick:()=>window.open("https://www.radix-ui.com/primitives/docs/components/radio-group#api-reference","_blank"),children:"API Reference"}),`
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
`,o.jsx(p,{of:s,sourceState:"none"})]})}function Q(t={}){const{wrapper:i}={...r(),...t.components};return i?o.jsx(i,{...t,children:o.jsx(e,{...t})}):e(t)}export{Q as default};
