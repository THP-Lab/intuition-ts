import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as l}from"./index-DSkyVWTJ.js";import{M as i,T as r,d as n,C as m}from"./index-DZyOOjeG.js";import"./TransactionStatusIndicator-CWT9JMd6.js";import"./Icon.types-DihBWXYw.js";import"./Label-l7hlfg-Q.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-CZqSfr2M.js";import"./ProgressCard-Cezx5cpz.js";import"./SegmentedControl-BdOzZl2k.js";import"./Separator-DqkY-AaL.js";import"./Skeleton-CGZOk8OX.js";import"./Table-Cj9ooZRp.js";import"./Text-CIyuOUAi.js";import"./Textarea-BN2eJ_eZ.js";import"./ValueDisplay-OcmgwD6b.js";import{S as s,B as T}from"./Table.stories-CPsQkFxV.js";import"./index-CTjT7uj6.js";import"./iframe-CtAMZdAm.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-jZxEZZ9l.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";function t(o){const a={h4:"h4",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:s}),`
`,e.jsx(r,{}),`
`,e.jsx(a.h4,{id:"a-responsive-table-component",children:"A responsive table component."}),`
`,e.jsx(n,{dark:!0,language:"tsx",code:`
import { 
  Table
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow, 
} from '@0xintuition/1ui'

<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((invoice) => (
      <TableRow key={invoice.invoice}>
        <TableCell className="font-medium">{invoice.invoice}</TableCell>
        <TableCell>{invoice.paymentStatus}</TableCell>
        <TableCell>{invoice.paymentMethod}</TableCell>
        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={3}>Total</TableCell>
      <TableCell className="text-right">$2,500.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>
`}),`
`,e.jsx(m,{of:T,sourceState:"none"})]})}function $(o={}){const{wrapper:a}={...l(),...o.components};return a?e.jsx(a,{...o,children:e.jsx(t,{...o})}):t(o)}export{$ as default};
