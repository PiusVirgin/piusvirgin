"use client";

import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";

import StatusBadge from "@/components/admin/status-badge";

export interface TransportColumn {
  id: string;
  fullName: string;
  email: string;
  service: string;
  pickup: string;
  destination: string;
  status: string;
  createdAt: Date;
}

export const transportColumns: ColumnDef<TransportColumn>[] = [
  {
    accessorKey: "fullName",
    header: "Customer",
    cell: ({ row }) => (
      <div>
        <p className="font-medium">{row.original.fullName}</p>

        <p className="text-sm text-muted-foreground">
          {row.original.email}
        </p>
      </div>
    ),
  },

  {
    accessorKey: "service",
    header: "Service",
  },

  {
    id: "route",
    header: "Route",
    cell: ({ row }) => (
      <span>
        {row.original.pickup} → {row.original.destination}
      </span>
    ),
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <StatusBadge status={row.original.status} />
    ),
  },

  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) =>
      row.original.createdAt.toLocaleDateString(),
  },

  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => (
      <Link
        href={`/admin/transport/${row.original.id}`}
        className="font-medium text-primary hover:underline"
      >
        View
      </Link>
    ),
  },
];
