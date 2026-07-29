import AdminListing from "@/components/admin/listing/admin-listing";

import { transportColumns } from "@/components/admin/transport/transport-columns";

import { getTransportRequests } from "@/services/transport.service";

export default async function TransportPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const params = await searchParams;

  const status = params.status ?? "all";
  const sort = params.sort ?? "newest";
  const search = params.search ?? "";
  const page = Number(params.page ?? "1");

  const { requests, totalPages } = await getTransportRequests({
    page,
    status,
    sort,
    search,
  });

  return (
    <AdminListing
      title="Transport Requests"
      description="Manage all transport inquiries."
      columns={transportColumns}
      data={requests}
      page={page}
      totalPages={totalPages}
      searchParams={params}
      searchPlaceholder="Search transport requests..."
    />
  );
}
