import{j as i}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as r}from"./index-DSkyVWTJ.js";import{M as m,T as g,d as a,C as o}from"./index-k-rK3J2S.js";import{S as s,B as P,A as p}from"./Pagination.stories-BQOsoi3K.js";import"./index-CTjT7uj6.js";import"./iframe-Dz7oYbF-.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./TransactionStatusIndicator-CHAjp0Bb.js";import"./index-jZxEZZ9l.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";import"./Icon.types-cQmbtfph.js";import"./Text-CIyuOUAi.js";import"./Label-l7hlfg-Q.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-CZqSfr2M.js";import"./ProgressCard-8XoeDUlW.js";import"./QuestCriteriaCard-DKN7bypV.js";import"./QuestCriteriaDisplay-13wHbsZ-.js";import"./quest-BMAtC6cg.js";import"./QuestPointsDisplay-DOFHvDSK.js";import"./QuestStatusIndicator-DRoc4dCN.js";import"./SegmentedControl-Dt9e-2dS.js";import"./Separator-DqkY-AaL.js";import"./Skeleton-CGZOk8OX.js";import"./Table-Cj9ooZRp.js";import"./Textarea-BN2eJ_eZ.js";import"./ValueDisplay-OcmgwD6b.js";function e(t){const n={h2:"h2",h3:"h3",h4:"h4",...r(),...t.components};return i.jsxs(i.Fragment,{children:[i.jsx(m,{of:s}),`
`,i.jsx(g,{}),`
`,i.jsx(n.h4,{id:"pagination-with-page-navigation-next-and-previous-links",children:"Pagination with page navigation, next and previous links."}),`
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
`,i.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,i.jsx(n.h3,{id:"alternate-setup",children:"Alternate Setup"}),`
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
`,i.jsx(o,{of:p,sourceState:"none"})]})}function K(t={}){const{wrapper:n}={...r(),...t.components};return n?i.jsx(n,{...t,children:i.jsx(e,{...t})}):e(t)}export{K as default};
