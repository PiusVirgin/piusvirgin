"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import StatusBadge from "../status-badge";

import DeleteTourButton from "./delete-tour-button";

export interface TourColumn {
  id: string;

  name: string;
  email: string;

  tour: string;

  guests: number;

  travelDate: Date;

  status: string;
}

export const tourColumns: ColumnDef<TourColumn>[] = [
  {
    accessorKey: "name",

    header: "Traveller",

    cell: ({ row }) => (
      <div>
        <p className="font-medium">{row.original.name}</p>

        <p className="text-sm text-muted-foreground">{row.original.email}</p>
      </div>
    ),
  },

  {
    accessorKey: "tour",

    header: "Tour",
  },

  {
    accessorKey: "travelDate",

    header: "Travel Date",

    cell: ({ row }) => new Date(row.original.travelDate).toLocaleDateString(),
  },

  {
    accessorKey: "guests",

    header: "Guests",
  },

  {
    accessorKey: "status",

    header: "Status",

    cell: ({ row }) => <StatusBadge status={row.original.status} />,
  },

  {
    id: "actions",

    header: "Actions",

    cell: ({ row }) => (
      <div className="flex gap-2">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/admin/tours/${row.original.id}`}>View</Link>
        </Button>

        <DeleteTourButton id={row.original.id} />
      </div>
    ),
  },
];
