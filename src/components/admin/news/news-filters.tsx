"use client";

import { useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function NewsFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function updateQuery(key: string, value: string) {
    const params = new URLSearchParams(searchParams);

    if (value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    params.delete("page");

    router.push(`?${params.toString()}`);
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {/* Published */}
      <Select
        defaultValue={searchParams.get("status") ?? "all"}
        onValueChange={(value) => updateQuery("status", value)}
      >
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Published" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All Articles</SelectItem>
          <SelectItem value="published">Published</SelectItem>
          <SelectItem value="draft">Draft</SelectItem>
        </SelectContent>
      </Select>

      {/* Sort */}
      <Select
        defaultValue={searchParams.get("sort") ?? "newest"}
        onValueChange={(value) => updateQuery("sort", value)}
      >
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="newest">Newest First</SelectItem>
          <SelectItem value="oldest">Oldest First</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
