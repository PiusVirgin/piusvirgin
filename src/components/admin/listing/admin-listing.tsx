"use client";

import { ColumnDef } from "@tanstack/react-table";

import AdminTable from "../table/admin-table";
import TableToolbar from "../table/table-toolbar";
import TablePagination from "../table/table-pagination";
import { ReactNode } from "react";

interface AdminListingProps<TData, TValue> {
  title: string;
  description: string;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  page: number;
  totalPages: number;
  searchParams: Record<string, string | undefined>;
  filters?: ReactNode;
  searchPlaceholder?: string;
  createHref?: string;
  createLabel?: string;
}

export default function AdminListing<TData, TValue>({
  title,
  description,
  columns,
  data,
  page,
  totalPages,
  searchParams,
  filters,
  searchPlaceholder,
  createHref,
  createLabel,
}: AdminListingProps<TData, TValue>) {
  return (
    <div className="space-y-8">
      <TableToolbar
        title={title}
        description={description}
        searchPlaceholder={searchPlaceholder}
        filters={filters}
        createHref={createHref}
        createLabel={createLabel}
      />

      <AdminTable columns={columns} data={data} />

      <TablePagination
        page={page}
        totalPages={totalPages}
        searchParams={searchParams}
      />
    </div>
  );
}
