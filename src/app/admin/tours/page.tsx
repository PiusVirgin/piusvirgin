import { getTourInquiries } from "@/services/tour.service";

import AdminListing from "@/components/admin/listing/admin-listing";

import { tourColumns } from "@/components/admin/tours/tour-columns";

export default async function ToursAdminPage() {
  const inquiries = await getTourInquiries();

  return (
    <AdminListing
      title="Tour Inquiries"
      description="Manage all submitted tour inquiries."
      columns={tourColumns}
      data={inquiries}
      page={1}
      totalPages={1}
      searchParams={{}}
      searchPlaceholder="Search by name, email or tour..."
    />
  );
}
