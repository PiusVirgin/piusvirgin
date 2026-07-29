"use client";

import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";

import StatusBadge from "../status-badge";

export type RailColumn = {
  id: string;

  fullName: string;
  email: string;

  departure: string;
  destination: string;

  passengers: number;

  status: string;

  createdAt: Date;
};

export const railColumns: ColumnDef<RailColumn>[] = [
  {
    accessorKey: "fullName",
    header: "Customer",

    cell: ({ row }) => (
      <div>
        <p className="font-medium">
          {row.original.fullName}
        </p>

        <p className="text-sm text-muted-foreground">
          {row.original.email}
        </p>
      </div>
    ),
  },

  {
    accessorKey: "route",

    header: "Route",

    cell: ({ row }) => (
      <span>
        {row.original.departure} → {row.original.destination}
      </span>
    ),
  },

  {
    accessorKey: "passengers",

    header: "Passengers",
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
      new Date(
        row.original.createdAt
      ).toLocaleDateString(),
  },

  {
    id: "actions",

    header: "Action",

    cell: ({ row }) => (
      <Link
        href={`/admin/rail/${row.original.id}`}
        className="
          font-medium
          text-primary
          hover:underline
        "
      >
        View
      </Link>
    ),
  },
];
