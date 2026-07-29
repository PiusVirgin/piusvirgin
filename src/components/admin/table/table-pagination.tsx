import Link from "next/link";

interface TablePaginationProps {
  page: number;
  totalPages: number;
  searchParams: Record<string, string | undefined>;
}

export default function TablePagination({
  page,
  totalPages,
  searchParams,
}: TablePaginationProps) {
  // if (totalPages <= 1) return null;

  function createPageLink(nextPage: number) {
    const params = new URLSearchParams();

    Object.entries(searchParams).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      }
    });

    params.set("page", String(nextPage));

    return `?${params.toString()}`;
  }

  return (
    <div className="flex items-center justify-between rounded-xl border bg-background px-6 py-4">
      <Link
        href={createPageLink(page - 1)}
        className={`rounded-lg border px-4 py-2 text-sm transition ${
          page === 1
            ? "pointer-events-none opacity-50"
            : "hover:bg-muted"
        }`}
      >
        Previous
      </Link>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => {
          const current = index + 1;

          return (
            <Link
              key={current}
              href={createPageLink(current)}
              className={`flex h-10 w-10 items-center justify-center rounded-lg border text-sm transition ${
                current === page
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              {current}
            </Link>
          );
        })}
      </div>

      <Link
        href={createPageLink(page + 1)}
        className={`rounded-lg border px-4 py-2 text-sm transition ${
          page === totalPages
            ? "pointer-events-none opacity-50"
            : "hover:bg-muted"
        }`}
      >
        Next
      </Link>
    </div>
  );
}
