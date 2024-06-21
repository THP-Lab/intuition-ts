import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as l}from"./index-DSkyVWTJ.js";import{M as i,T as r,d as m,C as n}from"./index-DCzPysel.js";import"./Tooltip-DcoLXkMZ.js";import"./Avatar-BUaynhXT.js";import"./Badge-D2xxBGMY.js";import"./Button-CzEHE8a5.js";import"./Icon.types-DkS0gbR0.js";import"./MonetaryValue-BH-vZ3Wu.js";import"./Input-DFWTvv6T.js";import"./Label-ByAlek89.js";import"./PieChart-B_dtFskq.js";import"./PositionCardStaked-CSnDpiat.js";import"./ProfileCard-Nm5GFBZ4.js";import"./Resizable-Dk6Cp6at.js";import"./SegmentedControl-DbX5wOQO.js";import"./Separator-Ct33SRfh.js";import"./Table-D9p853bW.js";import"./Text-ANaTnboW.js";import"./Textarea-Ds9ZbOCk.js";import"./ValueDisplay-2lt2w_5b.js";import{S as p,B as s}from"./Table.stories-0oYM73AS.js";import"./index-CTjT7uj6.js";import"./iframe-BfwKAbwT.js";import"../sb-preview/runtime.js";import"./index-D3WfGLRt.js";import"./index-DBez60WA.js";import"./index-BPrHwcGF.js";import"./index-BSh8g_S6.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-Bb4qSo10.js";import"./index-CNBET2ao.js";import"./palette-saq09hvB.js";import"./createLucideIcon-BfM7wYCo.js";function a(o){const t={h4:"h4",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:p}),`
`,e.jsx(r,{}),`
`,e.jsx(t.h4,{id:"a-responsive-table-component",children:"A responsive table component."}),`
`,e.jsx(m,{dark:!0,language:"tsx",code:`
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
`,e.jsx(n,{of:s,sourceState:"none"})]})}function P(o={}){const{wrapper:t}={...l(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(a,{...o})}):a(o)}export{P as default};
