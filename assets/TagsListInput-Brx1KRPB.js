import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as e}from"./index-DSkyVWTJ.js";import{M as m,T as g,C as o,d as r}from"./index-CZwz4F5N.js";import{S as p,T as s,E as d,a as c}from"./TagsListInput.stories-BRU8Uli7.js";import"./index-CTjT7uj6.js";import"./iframe-2ouhsgj_.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./TransactionStatusIndicator-MjfeweX4.js";import"./index-jZxEZZ9l.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";import"./Icon.types-cQmbtfph.js";import"./Text-CIyuOUAi.js";import"./Label-l7hlfg-Q.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-CZqSfr2M.js";import"./ProgressCard-8XoeDUlW.js";import"./QuestCriteriaCard-DKN7bypV.js";import"./QuestCriteriaDisplay-13wHbsZ-.js";import"./quest-BMAtC6cg.js";import"./QuestPointsDisplay-DOFHvDSK.js";import"./QuestStatusIndicator-DRoc4dCN.js";import"./SegmentedControl-Dt9e-2dS.js";import"./Separator-DqkY-AaL.js";import"./Skeleton-CGZOk8OX.js";import"./Table-Cj9ooZRp.js";import"./Textarea-BN2eJ_eZ.js";import"./ValueDisplay-OcmgwD6b.js";function n(i){const a={h3:"h3",h4:"h4",...e(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{of:p}),`
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
`})]})}function Q(i={}){const{wrapper:a}={...e(),...i.components};return a?t.jsx(a,{...i,children:t.jsx(n,{...i})}):n(i)}export{Q as default};
