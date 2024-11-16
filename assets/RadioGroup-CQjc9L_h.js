import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as n}from"./index-DSkyVWTJ.js";import{M as m,T as d,d as a,C as t}from"./index-CCv-gu3p.js";import{B as u}from"./TransactionStatusIndicator-BVtfR62v.js";import"./Checkbox-CPOTdBJo.js";import"./Icon.types-C3De9izv.js";import"./Label-CgXaQSDT.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-CLwyaxSZ.js";import"./ProgressCard-W_leyiJE.js";import"./ScrollArea-Dpd6zEPX.js";import"./SegmentedControl-DDi9rVur.js";import"./Separator-B4E8D3RY.js";import"./Skeleton-CIfu6pJi.js";import"./Table-sWfaeKPM.js";import"./Text-SXw3eAzI.js";import"./Textarea-C-i5JcFJ.js";import"./ValueDisplay-BdKJoXJc.js";import{S as p,B as s,a as l,b as c}from"./RadioGroup.stories-CipwUeZV.js";import"./index-CTjT7uj6.js";import"./iframe-Ca0eNMGI.js";import"../sb-preview/runtime.js";import"./index-1qoTW4fE.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-CfaE_EBA.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-9o982VWB.js";import"./index-Bb4qSo10.js";function r(o){const e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...n(),...o.components};return i.jsxs(i.Fragment,{children:[i.jsx(m,{of:p}),`
`,i.jsx(d,{}),`
`,i.jsx(e.h4,{id:"a-set-of-checkable-buttonsknown-as-radio-buttonswhere-no-more-than-one-of-the-buttons-can-be-checked-at-a-time",children:"A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."}),`
`,i.jsx(u,{variant:"accent",onClick:()=>window.open("https://www.radix-ui.com/primitives/docs/components/radio-group#api-reference","_blank"),children:"API Reference"}),`
`,i.jsx(a,{dark:!0,language:"tsx",code:`
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
`,i.jsx(t,{of:s,sourceState:"none"}),`
`,i.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,i.jsx(e.h3,{id:"simple",children:"Simple"}),`
`,i.jsxs(e.p,{children:["Add ",i.jsx(e.code,{children:'variant="simple"'})," to both ",i.jsx(e.code,{children:"RadioGroup"})," and ",i.jsx(e.code,{children:"RadioGroupItemContainer"})]}),`
`,i.jsx(a,{dark:!0,language:"tsx",code:`
<RadioGroup variant="simple" defaultValue={radioGroupData[0].value}>
  {radioGroupData.map((item, index) => (
    <div key={index}>
      <RadioGroupItemContainer variant="simple">
        <RadioGroupItem value={item.value} id={item.id} />
        <RadioGroupItemLabel
          htmlFor={item.id}
          value={item.displayValue}
        />
      </RadioGroupItemContainer>
    </div>
  ))}
</RadioGroup>
`}),`
`,i.jsx(t,{of:l,sourceState:"none"}),`
`,i.jsx(e.h3,{id:"simple-small",children:"Simple Small"}),`
`,i.jsxs(e.p,{children:["Add ",i.jsx(e.code,{children:'size="small"'})," to ",i.jsx(e.code,{children:"RadioGroupItem"})]}),`
`,i.jsx(a,{dark:!0,language:"tsx",code:`
<RadioGroup variant="simple" defaultValue={radioGroupData[0].value}>
  {radioGroupData.map((item, index) => (
    <div key={index}>
      <RadioGroupItemContainer variant="simple">
        <RadioGroupItem size="small" value={item.value} id={item.id} />
        <RadioGroupItemLabel
          htmlFor={item.id}
          value={item.displayValue}
        />
      </RadioGroupItemContainer>
    </div>
  ))}
</RadioGroup>
`}),`
`,i.jsx(t,{of:c,sourceState:"none"})]})}function K(o={}){const{wrapper:e}={...n(),...o.components};return e?i.jsx(e,{...o,children:i.jsx(r,{...o})}):r(o)}export{K as default};
