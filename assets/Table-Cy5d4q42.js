import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as l}from"./index-DSkyVWTJ.js";import{M as i,T as r,d as n,C as m}from"./index-B22MNPWV.js";import"./Tag-Cu_Bu3YM.js";import"./Avatar-C06NoQCR.js";import"./ProfileCard-RX6h7HyT.js";import"./Icon.types-CbO5tIj7.js";import"./Input-ChUPLhCP.js";import"./Label-CHrQpPtq.js";import"./PieChart-B_dtFskq.js";import"./Resizable-CVVfJ2th.js";import"./SegmentedControl-C8563B2q.js";import"./Separator-K7xgKtVw.js";import"./Table-BRTqj0wF.js";import"./Text-dMYK5Tk0.js";import"./Textarea-D_YQ6kc-.js";import"./ValueDisplay-BU89B4rt.js";import{S as s,B as p}from"./Table.stories-BKb8CXpv.js";import"./index-CTjT7uj6.js";import"./iframe-BBQcrE3j.js";import"../sb-preview/runtime.js";import"./index-DWkNYXSF.js";import"./index-Ch33dFXB.js";import"./index-BhgyLgKK.js";import"./index-BPrHwcGF.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-BIDtd1lf.js";import"./palette-saq09hvB.js";import"./createLucideIcon-BfM7wYCo.js";function t(o){const a={h4:"h4",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:s}),`
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
`,e.jsx(m,{of:p,sourceState:"none"})]})}function z(o={}){const{wrapper:a}={...l(),...o.components};return a?e.jsx(a,{...o,children:e.jsx(t,{...o})}):t(o)}export{z as default};
