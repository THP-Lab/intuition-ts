import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as m,T as g,d as a,C as o}from"./index-CKDnBtIk.js";import{S as s,B as P,A as p}from"./Pagination.stories-BB7IAjBS.js";import"./index-CTjT7uj6.js";import"./iframe-cNgjuoEy.js";import"../sb-preview/runtime.js";import"./index-1qoTW4fE.js";import"./index-CjlJelaC.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./TransactionStatusIndicator-D5hUb7_k.js";import"./index-sXcn2mTS.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./Checkbox-BUyDAOfm.js";import"./index-9o982VWB.js";import"./Icon.types-BJuqKE1d.js";import"./index-Bb4qSo10.js";import"./Text-BeXQet-m.js";import"./ScrollArea-Dhe45Eev.js";import"./Separator-DLMkV6af.js";import"./Label-TnSa-Vb6.js";import"./PieChart-BO-LlzBG.js";import"./ProgressBar-B07pz6pZ.js";import"./ProgressCard-Di9JTD4k.js";import"./SegmentedControl-CoVeRGEn.js";import"./Skeleton-k6WNkHQZ.js";import"./Table-BlSnVnDo.js";import"./Textarea-DtV2ds88.js";import"./ValueDisplay-ClYOGsr-.js";function e(n){const t={h2:"h2",h3:"h3",h4:"h4",...r(),...n.components};return i.jsxs(i.Fragment,{children:[i.jsx(m,{of:s}),`
`,i.jsx(g,{}),`
`,i.jsx(t.h4,{id:"pagination-with-page-navigation-next-and-previous-links",children:"Pagination with page navigation, next and previous links."}),`
`,i.jsx(a,{dark:!0,language:"tsx",code:`
import { 
  Pagination,
  PaginationContent,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationNext,
  PaginationPageCounter,
  PaginationPrevious,
  PaginationRowSelection,
  PaginationSummary, 
  } from '@0xintuition/1ui'

<Pagination className="flex w-[800px] justify-between">
  <PaginationSummary totalEntries={100} label="users" />
  <div className="flex">
    <PaginationRowSelection defaultValue="10" />
    <PaginationPageCounter currentPage={1} totalPages={10} />
    <PaginationContent>
      <PaginationItem>
        <PaginationFirst href="#" disabled />
      </PaginationItem>
      <PaginationItem>
        <PaginationPrevious href="#" disabled />
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLast href="#" />
      </PaginationItem>
    </PaginationContent>
  </div>
</Pagination>
`}),`
`,i.jsx(o,{of:P,sourceState:"none"}),`
`,i.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,i.jsx(t.h3,{id:"alternate-setup",children:"Alternate Setup"}),`
`,i.jsx(a,{dark:!0,language:"tsx",code:`
  <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious href="#" disabled />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" isActive>
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
`}),`
`,i.jsx(o,{of:p,sourceState:"none"})]})}function H(n={}){const{wrapper:t}={...r(),...n.components};return t?i.jsx(t,{...n,children:i.jsx(e,{...n})}):e(n)}export{H as default};
