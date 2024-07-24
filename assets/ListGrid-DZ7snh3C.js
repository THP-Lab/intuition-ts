import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as n,T as m,d as s,C as o,e as d}from"./index-DR7H15vo.js";import{S as l,B as c,U as p}from"./ListGrid.stories-BFum-neJ.js";import"./index-CTjT7uj6.js";import"./iframe-BqGYmkhz.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./TransactionStatusIndicator-CHAjp0Bb.js";import"./index-jZxEZZ9l.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";import"./Icon.types-cQmbtfph.js";import"./Text-CIyuOUAi.js";import"./Label-l7hlfg-Q.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-CZqSfr2M.js";import"./ProgressCard-8XoeDUlW.js";import"./QuestCriteriaCard-DKN7bypV.js";import"./QuestCriteriaDisplay-13wHbsZ-.js";import"./quest-BMAtC6cg.js";import"./QuestPointsDisplay-DOFHvDSK.js";import"./QuestStatusIndicator-DRoc4dCN.js";import"./SegmentedControl-Dt9e-2dS.js";import"./Separator-DqkY-AaL.js";import"./Skeleton-CGZOk8OX.js";import"./Table-Cj9ooZRp.js";import"./Textarea-BN2eJ_eZ.js";import"./ValueDisplay-OcmgwD6b.js";function r(e){const i={h2:"h2",h3:"h3",h4:"h4",...a(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:l}),`
`,t.jsx(m,{}),`
`,t.jsx(i.h4,{id:"a-grid-layout-to-display-a-list-of-identities-or-other-data",children:"A grid layout to display a list of identities or other data"}),`
`,t.jsx(s,{dark:!0,language:"tsx",code:`
import { ListGrid } from '@0xintuition/1ui'

const simpleIdentities = [
{
displayName: 'Best Crypto Portfolio Trackers',
imgSrc: 'https://avatars.githubusercontent.com/u/94311139?s=200&v=4',
identitiesCount: 45,
savedAmount: '0.047',
onSaveClick: () => alert('Best Crypto Portfolio Trackers saved!'),
isSaved: true,
},
{
displayName: 'Top Decentralized Finance Platforms',
imgSrc: 'https://avatars.githubusercontent.com/u/94311139?s=200&v=4',
identitiesCount: 45,
savedAmount: '0.047',
onSaveClick: () => alert('Top Decentralized Finance Platforms saved!'),
isSaved: false,
},
// Add more identities as needed
];

<ListGrid identities={simpleIdentities} className="my-custom-class" />
`}),`
`,t.jsx(o,{of:c,sourceState:"none"}),`
`,t.jsx(i.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(d,{}),`
`,t.jsx(i.h3,{id:"children-variant",children:"Children Variant"}),`
`,t.jsx(s,{dark:!0,language:"tsx",code:`
import { ListGrid } from '@0xintuition/1ui'

const customChildren = [

{' '}

<div
  key="1"
  className="theme-border flex flex-col items-center rounded-xl p-8"
  style={{ height: '18rem' }}
>
  <img
    src="https://avatars.githubusercontent.com/u/94311139?s=200&v=4"
    alt="Best Crypto Portfolio Trackers"
    className="mb-4 h-16 w-16"
  />
  <div className="text-center">
    <h2 className="mb-2 text-xl font-bold">Best Crypto Portfolio Trackers</h2>
    <p className="text-secondary/50 mb-2">45 identities</p>
    <button className="mt-4 w-full">Saved: 0.047 ETH</button>
  </div>
</div>
,
<div
  key="2"
  className="theme-border flex flex-col items-center rounded-xl p-8"
  style={{ height: '18rem' }}
>
  <img
    src="https://avatars.githubusercontent.com/u/94311139?s=200&v=4"
    alt="Decentralized Finance Platforms"
    className="mb-4 h-16 w-16"
  />
  <div className="text-center">
    <h2 className="mb-2 text-xl font-bold">Decentralized Finance Platforms</h2>
    <p className="text-secondary/50 mb-2">45 identities</p>
    <button className="mt-4 w-full">Saved: 0.047 ETH</button>
  </div>
</div>
, // Add more children as needed ];

<ListGrid className="my-custom-class">{customChildren}</ListGrid>
`}),`
`,t.jsx(o,{of:p,sourceState:"none"})]})}function K(e={}){const{wrapper:i}={...a(),...e.components};return i?t.jsx(i,{...e,children:t.jsx(r,{...e})}):r(e)}export{K as default};
