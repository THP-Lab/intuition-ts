import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as r,T as m,d as n,C as u}from"./index-DR7H15vo.js";import{B as p}from"./TransactionStatusIndicator-CHAjp0Bb.js";import"./Icon.types-cQmbtfph.js";import"./Label-l7hlfg-Q.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-CZqSfr2M.js";import"./ProgressCard-8XoeDUlW.js";import"./QuestCriteriaCard-DKN7bypV.js";import"./QuestCriteriaDisplay-13wHbsZ-.js";import"./QuestPointsDisplay-DOFHvDSK.js";import"./QuestStatusIndicator-DRoc4dCN.js";import"./SegmentedControl-Dt9e-2dS.js";import"./Separator-DqkY-AaL.js";import"./Skeleton-CGZOk8OX.js";import"./Table-Cj9ooZRp.js";import"./Text-CIyuOUAi.js";import"./Textarea-BN2eJ_eZ.js";import"./ValueDisplay-OcmgwD6b.js";import{S as d,B as s}from"./RadioGroup.stories-C7w6LS2q.js";import"./index-CTjT7uj6.js";import"./iframe-BqGYmkhz.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-jZxEZZ9l.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";import"./quest-BMAtC6cg.js";function e(t){const i={h4:"h4",...a(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{of:d}),`
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
`,o.jsx(u,{of:s,sourceState:"none"})]})}function K(t={}){const{wrapper:i}={...a(),...t.components};return i?o.jsx(i,{...t,children:o.jsx(e,{...t})}):e(t)}export{K as default};
