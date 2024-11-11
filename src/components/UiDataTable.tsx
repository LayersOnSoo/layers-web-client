/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { LoadingSpinner } from "./loader";
import { ScrollArea } from "./ui/scroll-area";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  header: string;
  loading?: boolean;
  isTableNavigatable?: boolean;
  navigationRoute?: string;
  onRowClick?: (param?: any) => typeof param | void;
  handleDelete?: (param?: any) => typeof param | void;
  handleUnblock?: (param?: any) => typeof param | void;
  handleBlock?: (param?: any) => typeof param | void;
  handleEdit?: (param?: any) => typeof param | void;
  handleApprove?: (param?: any) => typeof param | void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  header,
  loading,
  isTableNavigatable = false,
  onRowClick,
  handleDelete,
  handleUnblock,
  handleBlock,
  handleEdit,
  handleApprove,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [selectedColumns, setSelectedColumns] = useState<string[]>([
    //@ts-expect-error due to library-issues
    columns[0].accessorKey as string,
  ]);

  const editColumn: ColumnDef<TData, TValue> = {
    id: "edit",
    header: "Edit",
    cell: ({ row }) => (
      <Button variant="secondary" onClick={() => handleEdit(row.original)}>
        Edit
      </Button>
    ),
  };

  const blockColumn: ColumnDef<TData | TValue> = {
    id: "block",
    header: "Block",
    cell: ({ row }) => (
      <Button variant="secondary" onClick={() => handleBlock(row.original)}>
        Block
      </Button>
    ),
  };

  const unblockColumn: ColumnDef<TData | TValue> = {
    id: "unblock",
    header: "Unblock",
    cell: ({ row }) => (
      <Button variant="secondary" onClick={() => handleUnblock(row.original)}>
        Unblock
      </Button>
    ),
  };

  const approveColumn: ColumnDef<TData, TValue> = {
    id: "approve",
    header: "Approve",
    cell: ({ row }) => (
      <Button variant="secondary" onClick={() => handleApprove(row.original)}>
        Approve
      </Button>
    ),
  };

  const deleteColumn: ColumnDef<TData, TValue> = {
    id: "delete",
    header: "Delete",
    cell: ({ row }) => (
      <Button variant="destructive" onClick={() => handleDelete(row.original)}>
        Delete
      </Button>
    ),
  };

  const finalColumns = [
    ...columns,
    ...(handleEdit ? [editColumn] : []),
    ...(handleDelete ? [deleteColumn] : []),
    ...(handleApprove ? [approveColumn] : []),
    ...(handleBlock ? [blockColumn] : []),
    ...(handleUnblock ? [unblockColumn] : []),
  ];

  const table = useReactTable({
    data,
    //@ts-expect-error due to library-issues
    columns: finalColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    // manualPagination: true,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
    filterFns: {
      customFilter: (row, columnId, filterValue) => {
        const value = row.getValue(columnId);
        if (typeof value === "number") {
          return value === Number(filterValue);
        }
        return String(value)
          .toLowerCase()
          .includes(String(filterValue).toLowerCase());
      },
    },
  });

  return (
    <div>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="text-[18px] px-4 font-semibold">{header}</div>

        <div className="flex flex-col space-y-4 px-4 py-4">
          {selectedColumns.map((columnKey, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Select
                value={columnKey}
                onValueChange={(value) => {
                  const newSelectedColumns = [...selectedColumns];
                  newSelectedColumns[index] = value;
                  setSelectedColumns(newSelectedColumns);
                }}
              >
                <SelectTrigger className="w-[180px] bg-white text-gray-800">
                  <SelectValue placeholder="Select Column" />
                </SelectTrigger>
                <SelectContent className="bg-white text-gray-800">
                  {columns.map((column) => (
                    <SelectItem
                      //@ts-expect-error due to library-issues
                      key={column.accessorKey as string}
                      //@ts-expect-error due to library issues
                      value={column.accessorKey as string}
                    >
                      {column.header as string}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Input
                placeholder={`Filter by ${columnKey} ...`}
                value={
                  (table.getColumn(columnKey)?.getFilterValue() as string) ?? ""
                }
                onChange={(event) =>
                  table.getColumn(columnKey)?.setFilterValue(event.target.value)
                }
                className="max-w-sm border text-gray-800 bg-white border-black"
              />
            </div>
          ))}
        </div>

        <div
          id="data-table"
          className="rounded-2xl h-[400px] p-2.5 overflow-scroll"
        >
          <div className="rounded-md border p-4">
            <Table>
              <TableHeader className="bg-gray-100 top-0 sticky m-0 ">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      <LoadingSpinner />
                    </TableCell>
                  </TableRow>
                ) : table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      style={{
                        cursor:
                          isTableNavigatable || onRowClick
                            ? "pointer"
                            : "default",
                      }}
                      onClick={() => {
                        if (onRowClick) {
                          onRowClick(row?.original);
                        }
                      }}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm hidden md:flex text-muted-foreground">
            Total of {table.getFilteredRowModel().rows.length} row(s)
          </div>

          <div className="flex items-center space-x-6 lg:space-x-8">
            {/* Page navigation */}
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
