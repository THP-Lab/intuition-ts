import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as e}from"./index-DSkyVWTJ.js";import{M as m,T as g,C as o,d as r}from"./index-ycGxGkfk.js";import{S as p,T as s,E as d,a as c}from"./TagsListInput.stories-BA5J0VhU.js";import"./index-CTjT7uj6.js";import"./iframe-DCYPFz0E.js";import"../sb-preview/runtime.js";import"./index-1qoTW4fE.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./TransactionStatusIndicator-B3Y_MXqP.js";import"./index-CfaE_EBA.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./Checkbox-CPOTdBJo.js";import"./index-9o982VWB.js";import"./Icon.types-C3De9izv.js";import"./index-Bb4qSo10.js";import"./Text-SXw3eAzI.js";import"./ScrollArea-Dpd6zEPX.js";import"./Separator-B4E8D3RY.js";import"./Label-CgXaQSDT.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-CLwyaxSZ.js";import"./ProgressCard-W_leyiJE.js";import"./SegmentedControl-DDi9rVur.js";import"./Skeleton-CIfu6pJi.js";import"./Table-sWfaeKPM.js";import"./Textarea-C-i5JcFJ.js";import"./ValueDisplay-BdKJoXJc.js";function n(i){const a={h3:"h3",h4:"h4",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{of:p}),`
`,t.jsx(g,{}),`
`,t.jsx(a.h4,{id:"displays-list-of-tags-or-trust-circles-with-the-ability-to-add-more",children:"Displays list of Tags or Trust circles with the ability to add more"}),`
`,t.jsx(o,{of:s,sourceState:"none"}),`
`,t.jsx(a.h3,{id:"empty-state-variant",children:"Empty State Variant"}),`
`,t.jsx(o,{of:d}),`
`,t.jsx(r,{dark:!0,language:"tsx",code:`
import { TagsListInput } from '@0xintuition/1ui'

<TagsListInput
  variant="trustCircle"
  tags={[]}
  maxTags={5}
  onAddTag={() => console.log('Add Tag')}
  onRemoveTag={(id: string) => console.log('Remove Tag', id)}
/>
`}),`
`,t.jsx(a.h3,{id:"trust-circles-variant",children:"Trust Circles Variant"}),`
`,t.jsx(o,{of:s}),`
`,t.jsx(r,{dark:!0,language:"tsx",code:`
import { TagsListInput } from '@0xintuition/1ui'

const trustCirclesTags = [
{ name: 'Tag Name 1', id: '1' },
{ name: 'Tag Name 2', id: '2' },
{ name: 'Tag Name 3', id: '3' },
];

<TagsListInput
  variant="trustCircle"
  tags={trustCirclesTags}
  maxTags={5}
  onAddTag={() => console.log('Add Tag')}
  onRemoveTag={(id: string) => console.log('Remove Tag', id)}
/>
`}),`
`,t.jsx(a.h3,{id:"tags-variant",children:"Tags Variant"}),`
`,t.jsx(o,{of:c}),`
`,t.jsx(r,{dark:!0,language:"tsx",code:`
import { TagsListInput } from '@0xintuition/1ui'

const tags = [
{ name: 'Tag Name 1', id: '1' },
{ name: 'Tag Name 2', id: '2' },
{ name: 'Tag Name 3', id: '3' },
];

<TagsListInput
  variant="tag"
  tags={tags}
  maxTags={5}
  onAddTag={() => console.log('Add Tag')}
  onRemoveTag={(id: string) => console.log('Remove Tag', id)}
/>
`})]})}function O(i={}){const{wrapper:a}={...e(),...i.components};return a?t.jsx(a,{...i,children:t.jsx(n,{...i})}):n(i)}export{O as default};
