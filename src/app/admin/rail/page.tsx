import AdminListing from "@/components/admin/listing/admin-listing";

import { railColumns } from "@/components/admin/rail/rail-columns";

import { getRailInquiries } from "@/services/rail.service";

interface RailPageProps {
  searchParams: Promise<Record<string, string | undefined>>;
}

export default async function RailPage({ searchParams }: RailPageProps) {
  const params = await searchParams;

  const page = Number(params.page ?? "1");
  const status = params.status ?? "all";
  const sort = params.sort ?? "newest";
  const search = params.search ?? "";

  const { requests, totalPages } = await getRailInquiries({
    page,
    status,
    sort,
    search,
  });

  return (
    <AdminListing
      title="Rail Bookings"
      description="Manage all railway booking requests."
      columns={railColumns}
      data={requests}
      page={page}
      totalPages={totalPages}
      searchParams={params}
      searchPlaceholder="Search rail bookings..."
    />
  );
}
