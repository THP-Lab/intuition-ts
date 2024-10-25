import { Checkbox } from '@0xintuition/1ui'

import { cn } from '@lib/styles'
import { ColumnDef } from '@tanstack/react-table'

import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'
import { Thing } from './schema/thing'

export const columns: ColumnDef<Thing>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <div className="flex items-center px-2 h-full">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex h-full items-center px-2">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    size: 40,
    enableSorting: false,
    enableHiding: false,
    enableResizing: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row, column }) => (
      <div className="flex items-center gap-2 h-full w-full pr-2">
        <img
          src={row.getValue('image')}
          alt={row.getValue('name')}
          className="w-12 h-12 min-w-12 object-cover rounded-md"
        />
        <div className="truncate" style={{ maxWidth: column.getSize() }}>
          {row.getValue('name')}
        </div>
      </div>
    ),
    size: 280,
    enableResizing: true,
  },
  {
    accessorKey: 'description',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row, column }) => {
      return (
        <div className="flex w-full pr-2">
          <span
            className="truncate font-medium"
            style={{ maxWidth: column.getSize() }}
          >
            {row.getValue('description')}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    size: 420,
    enableResizing: true,
  },
  {
    accessorKey: 'url',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Url" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 pr-2">
          <span className="truncate font-medium">{row.getValue('url')}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableResizing: true,
  },
  {
    accessorKey: '@context',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="@context" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 pr-2">
          <span className="truncate font-medium">
            {row.getValue('@context')}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: '@type',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="@type" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 pr-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue('@type')}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
    enableResizing: false,
    enableSorting: false,
    size: 32,
  },
  {
    accessorKey: 'image',
    header: () => null,
    cell: ({ row }) => null,
  },
]
