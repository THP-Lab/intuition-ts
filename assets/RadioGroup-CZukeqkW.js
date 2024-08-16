import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as n}from"./index-DSkyVWTJ.js";import{M as d,T as m,d as a,C as t}from"./index-BDoWMfd9.js";import{B as u}from"./AlertDialog-CEGB4aMO.js";import"./Checkbox-BaXYeBzr.js";import"./Icon.types-Ck8KU8EG.js";import"./Label-CkICs1_r.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-Bfgyotpp.js";import"./ProgressCard-BYKzYHAL.js";import"./SegmentedControl-DQCOk3Kf.js";import"./Separator-juOyYLvc.js";import"./Skeleton-pYLGnhFW.js";import"./Table-JXx_s4Wj.js";import"./Text-COZqca-9.js";import"./Textarea-74mgfiS7.js";import"./ValueDisplay-BLpqF4VW.js";import{S as p,B as s,a as l,b as c}from"./RadioGroup.stories-CHVzqbHb.js";import"./index-CTjT7uj6.js";import"./iframe-DSuHRg6f.js";import"../sb-preview/runtime.js";import"./index-BqnMPuz1.js";import"./index-DVBfyTD9.js";import"./index-9r8iugjR.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-Ca1CH5Oj.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";function r(o){const i={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:p}),`
`,e.jsx(m,{}),`
`,e.jsx(i.h4,{id:"a-set-of-checkable-buttonsknown-as-radio-buttonswhere-no-more-than-one-of-the-buttons-can-be-checked-at-a-time",children:"A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."}),`
`,e.jsx(u,{variant:"accent",onClick:()=>window.open("https://www.radix-ui.com/primitives/docs/components/radio-group#api-reference","_blank"),children:"API Reference"}),`
`,e.jsx(a,{dark:!0,language:"tsx",code:`
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
`,e.jsx(t,{of:s,sourceState:"none"}),`
`,e.jsx(i.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(i.h3,{id:"simple",children:"Simple"}),`
`,e.jsxs(i.p,{children:["Add ",e.jsx(i.code,{children:'variant="simple"'})," to both ",e.jsx(i.code,{children:"RadioGroup"})," and ",e.jsx(i.code,{children:"RadioGroupItemContainer"})]}),`
`,e.jsx(a,{dark:!0,language:"tsx",code:`
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
`,e.jsx(t,{of:l,sourceState:"none"}),`
`,e.jsx(i.h3,{id:"simple-small",children:"Simple Small"}),`
`,e.jsxs(i.p,{children:["Add ",e.jsx(i.code,{children:'size="small"'})," to ",e.jsx(i.code,{children:"RadioGroupItem"})]}),`
`,e.jsx(a,{dark:!0,language:"tsx",code:`
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
`,e.jsx(t,{of:c,sourceState:"none"})]})}function q(o={}){const{wrapper:i}={...n(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(r,{...o})}):r(o)}export{q as default};
