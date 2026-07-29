"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import TableFilters from "./table-filters";
import Link from "next/link";
import { Plus } from "lucide-react";

import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface TableToolbarProps {
  title: string;
  description: string;
  searchPlaceholder?: string;
  filters?: ReactNode;

  createHref?: string;
  createLabel?: string;
}

export default function TableToolbar({
  title,
  description,
  searchPlaceholder,
  filters,
  createHref,
  createLabel,
}: TableToolbarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") ?? "");

  useEffect(() => {
    setSearch(searchParams.get("search") ?? "");
  }, [searchParams]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      if (search.trim()) {
        params.set("search", search);
      } else {
        params.delete("search");
      }

      router.push(`?${params.toString()}`);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search, router, searchParams]);

  return (
    <div className="flex flex-col gap-6 rounded-2xl border bg-background p-6">
      <div className="space-y-1">
        <h1 className="font-heading text-3xl font-bold">{title}</h1>

        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="relative w-full xl:max-w-md">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />

          <Input
            placeholder={
              searchPlaceholder ?? `Search ${title.toLowerCase()}...`
            }
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3">
          {filters}

          {createHref && (
            <Button asChild>
              <Link href={createHref}>
                <Plus className="mr-2 h-4 w-4" />
                {createLabel ?? "Create"}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
