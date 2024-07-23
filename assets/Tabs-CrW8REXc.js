import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as i}from"./index-DSkyVWTJ.js";import{M as s,T as p,d as o,C as n}from"./index-E5-lsTla.js";import{B as m}from"./TransactionStatusIndicator-C6RVtnax.js";import"./Icon.types-Csn6eVsj.js";import"./Label-l7hlfg-Q.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-CZqSfr2M.js";import"./ProgressCard-HIGHqO49.js";import"./QuestCriteriaCard-DU_nEwuR.js";import"./QuestCriteriaDisplay-BOc2v1Da.js";import"./QuestPointsDisplay-DOFHvDSK.js";import"./QuestSetCard-CAqByP9R.js";import"./QuestStatusIndicator-DjnhoyJG.js";import"./SegmentedControl-Dt9e-2dS.js";import"./Separator-DqkY-AaL.js";import"./Skeleton-CGZOk8OX.js";import"./Table-Cj9ooZRp.js";import"./Text-CIyuOUAi.js";import"./Textarea-BN2eJ_eZ.js";import"./ValueDisplay-OcmgwD6b.js";import{S as l,B as T,A as b}from"./Tabs.stories-BM2JBPQD.js";import"./index-CTjT7uj6.js";import"./iframe-Co1_NKgx.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-jZxEZZ9l.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";import"./progress-DxZziHAc.js";import"./quest-BMAtC6cg.js";function r(e){const a={h2:"h2",h3:"h3",h4:"h4",...i(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:l}),`
`,t.jsx(p,{}),`
`,t.jsx(a.h4,{id:"a-set-of-layered-sections-of-contentknown-as-tab-panelsthat-are-displayed-one-at-a-time",children:"A set of layered sections of content—known as tab panels—that are displayed one at a time."}),`
`,t.jsx(m,{variant:"accent",onClick:()=>window.open("https://www.radix-ui.com/primitives/docs/components/tabs#api-reference","_blank"),children:"API Reference"}),`
`,t.jsx(o,{dark:!0,language:"tsx",code:`
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@0xintuition/1ui'

<Tabs defaultValue="one">
  <TabsList>
    <TabsTrigger value="one" label="One " totalCount={69} />
    <TabsTrigger value="two" label="Two" totalCount={69} />
    <TabsTrigger disabled value="three" label="Three" totalCount={69} />
  </TabsList>
  <div className="bg-primary/10 rounded-lg p-4">
    <TabsContent value="one">
      <p>One</p>
    </TabsContent>
    <TabsContent value="two">
      <p>Two</p>
    </TabsContent>
  </div>
</Tabs>
`}),`
`,t.jsx(n,{of:T,sourceState:"none"}),`
`,t.jsx(a.h2,{id:"variants",children:"Variants"}),`
`,t.jsx(a.h3,{id:"alternate",children:"Alternate"}),`
`,t.jsx(o,{dark:!0,language:"tsx",code:`
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@0xintuition/1ui'

<Tabs defaultValue="one">
  <TabsList>
    <TabsTrigger variant="alternate" value="one" label="One" />
    <TabsTrigger variant="alternate" value="two" label="Two" />
    <TabsTrigger disabled variant="alternate" value="three" label="Three" />
  </TabsList>
  <div className="bg-primary/10 rounded-lg p-4">
    <TabsContent value="one">
      <p>One</p>
    </TabsContent>
    <TabsContent value="two">
      <p>Two</p>
    </TabsContent>
  </div>
</Tabs>
`}),`
`,t.jsx(n,{of:b,sourceState:"none"})]})}function W(e={}){const{wrapper:a}={...i(),...e.components};return a?t.jsx(a,{...e,children:t.jsx(r,{...e})}):r(e)}export{W as default};
