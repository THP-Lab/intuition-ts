import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as l}from"./index-DSkyVWTJ.js";import{M as i,T as n,d as r,C as m}from"./index-0396i-GT.js";import"./Trunctacular-CQXa-Vsq.js";import"./Icon.types-D5zuhAbZ.js";import"./Input-BPM31_im.js";import"./Label-DzNLlIBV.js";import"./PieChart-B_dtFskq.js";import"./Resizable-X9Hr8Gxc.js";import"./SegmentedControl-Bhn13kRZ.js";import"./Separator-C_RZmUxf.js";import"./Table-BR553Jwj.js";import"./Text-DdASfXbZ.js";import"./Textarea-qTR3kLUl.js";import"./ValueDisplay-ChJkojwK.js";import{S as s,B as T}from"./Table.stories-58erV3dW.js";import"./index-CTjT7uj6.js";import"./iframe-BrF2RXen.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-D-lcGQm1.js";import"./palette-saq09hvB.js";function t(a){const o={h4:"h4",...l(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:s}),`
`,e.jsx(n,{}),`
`,e.jsx(o.h4,{id:"a-responsive-table-component",children:"A responsive table component."}),`
`,e.jsx(r,{dark:!0,language:"tsx",code:`
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
`,e.jsx(m,{of:T,sourceState:"none"})]})}function L(a={}){const{wrapper:o}={...l(),...a.components};return o?e.jsx(o,{...a,children:e.jsx(t,{...a})}):t(a)}export{L as default};
