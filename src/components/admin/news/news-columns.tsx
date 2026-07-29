"use client";

import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";

import StatusBadge from "../status-badge";
import NewsActions from "./news-actions";

export interface NewsColumn {
  id: string;
  title: string;
  coverImage: string | null;
  category: string;
  author: string;
  featured: boolean;
  published: boolean;
  publishedAt: Date | null;
}

export const newsColumns: ColumnDef<NewsColumn>[] = [
  {
    accessorKey: "coverImage",
    header: "Cover",

    cell: ({ row }) => (
      <div className="relative h-16 w-24 overflow-hidden rounded-md">
        {row.original.coverImage ? (
          <Image
            src={row.original.coverImage}
            alt={row.original.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
            No Image
          </div>
        )}
      </div>
    ),
  },

  {
    accessorKey: "title",
    header: "Title",
  },

  {
    accessorKey: "category",
    header: "Category",
  },

  {
    accessorKey: "author",
    header: "Author",
  },

  {
    accessorKey: "featured",
    header: "Featured",

    cell: ({ row }) => (
      <StatusBadge status={row.original.featured ? "Featured" : "No"} />
    ),
  },

  {
    accessorKey: "published",
    header: "Status",

    cell: ({ row }) => (
      <StatusBadge status={row.original.published ? "Published" : "Draft"} />
    ),
  },

  {
    accessorKey: "publishedAt",
    header: "Published",

    cell: ({ row }) =>
      row.original.publishedAt
        ? new Date(row.original.publishedAt).toLocaleDateString()
        : "-",
  },

  {
    id: "actions",

    cell: ({ row }) => <NewsActions news={row.original} />,
  },
];
