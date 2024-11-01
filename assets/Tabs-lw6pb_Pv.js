import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as i}from"./index-DSkyVWTJ.js";import{M as s,T as l,d as o,C as n}from"./index-RdMKM7Pj.js";import{B as p}from"./AlertDialog-9G2QIJ12.js";import"./Checkbox-BhpbQMJC.js";import"./Icon.types-cBi97MNl.js";import"./Label-BP8-Mx5Z.js";import"./PieChart-9tI5Soxs.js";import"./ProgressBar-B07pz6pZ.js";import"./ProgressCard-Di9JTD4k.js";import"./SegmentedControl-CoVeRGEn.js";import"./Separator-r-Tg2QWT.js";import"./Skeleton-k6WNkHQZ.js";import"./Table-BlSnVnDo.js";import"./Text-BeXQet-m.js";import"./Textarea-DtV2ds88.js";import"./ValueDisplay-ClYOGsr-.js";import"./ScrollArea-B2SgIFBV.js";import{S as m,B as T,A as b}from"./Tabs.stories-CEATfEuD.js";import"./index-CTjT7uj6.js";import"./iframe-DzMUUNWR.js";import"../sb-preview/runtime.js";import"./index-wo0pwFmI.js";import"./index-DVBfyTD9.js";import"./index-9r8iugjR.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-G5r2yAnn.js";import"./index-Bb4qSo10.js";import"./index-sXcn2mTS.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";function r(e){const a={h2:"h2",h3:"h3",h4:"h4",...i(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:m}),`
`,t.jsx(l,{}),`
`,t.jsx(a.h4,{id:"a-set-of-layered-sections-of-contentknown-as-tab-panelsthat-are-displayed-one-at-a-time",children:"A set of layered sections of content—known as tab panels—that are displayed one at a time."}),`
`,t.jsx(p,{variant:"accent",onClick:()=>window.open("https://www.radix-ui.com/primitives/docs/components/tabs#api-reference","_blank"),children:"API Reference"}),`
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
`,t.jsx(n,{of:b,sourceState:"none"})]})}function H(e={}){const{wrapper:a}={...i(),...e.components};return a?t.jsx(a,{...e,children:t.jsx(r,{...e})}):r(e)}export{H as default};
