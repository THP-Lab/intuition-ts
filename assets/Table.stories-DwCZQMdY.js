import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{T as d,a as m,b as T,c as o,d as l,e as b,f as a,g as p}from"./Table-C0qIXiUM.js";const h={title:"Components/Table",component:d},u=[{invoice:"INV001",paymentStatus:"Paid",totalAmount:"$250.00",paymentMethod:"Credit Card"},{invoice:"INV002",paymentStatus:"Pending",totalAmount:"$150.00",paymentMethod:"PayPal"},{invoice:"INV003",paymentStatus:"Unpaid",totalAmount:"$350.00",paymentMethod:"Bank Transfer"},{invoice:"INV004",paymentStatus:"Paid",totalAmount:"$450.00",paymentMethod:"Credit Card"},{invoice:"INV005",paymentStatus:"Paid",totalAmount:"$550.00",paymentMethod:"PayPal"},{invoice:"INV006",paymentStatus:"Pending",totalAmount:"$200.00",paymentMethod:"Bank Transfer"},{invoice:"INV007",paymentStatus:"Unpaid",totalAmount:"$300.00",paymentMethod:"Credit Card"}],n={args:{},render:c=>e.jsxs(d,{...c,children:[e.jsx(m,{children:"A list of your recent invoices."}),e.jsx(T,{children:e.jsxs(o,{children:[e.jsx(l,{className:"w-[100px]",children:"Invoice"}),e.jsx(l,{children:"Status"}),e.jsx(l,{children:"Method"}),e.jsx(l,{className:"text-right",children:"Amount"})]})}),e.jsx(b,{children:u.map(t=>e.jsxs(o,{children:[e.jsx(a,{className:"font-medium",children:t.invoice}),e.jsx(a,{children:t.paymentStatus}),e.jsx(a,{children:t.paymentMethod}),e.jsx(a,{className:"text-right",children:t.totalAmount})]},t.invoice))}),e.jsx(p,{children:e.jsxs(o,{children:[e.jsx(a,{colSpan:3,children:"Total"}),e.jsx(a,{className:"text-right",children:"$2,500.00"})]})})]})};var s,i,r;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  render: args => <Table {...args}>
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
        {invoices.map(invoice => <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>)}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
}`,...(r=(i=n.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const x=["BasicUsage"],j=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:n,__namedExportsOrder:x,default:h},Symbol.toStringTag,{value:"Module"}));export{n as B,j as S};
