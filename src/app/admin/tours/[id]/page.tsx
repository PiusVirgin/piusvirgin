import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getTourInquiry } from "@/services/tour.service";
import StatusSelect from "@/components/admin/tours/status-select";
import DeleteTourButton from "@/components/admin/tours/delete-tour-button";
import AdminDetailsHeader from "@/components/admin/details/admin-details-header";
import StatusBadge from "@/components/admin/status-badge";

export default async function TourInquiryDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const inquiry = await getTourInquiry(id);

  if (!inquiry) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <AdminDetailsHeader
        title={inquiry.name}
        subtitle={inquiry.tour}
        backHref="/admin/tours"
        backLabel="Tour Inquiries"
      >
        <StatusBadge status={inquiry.status} />

        <StatusSelect id={inquiry.id} status={inquiry.status} />

        <DeleteTourButton id={inquiry.id} />
      </AdminDetailsHeader>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <InfoRow label="Email" value={inquiry.email} />

            <InfoRow label="Phone" value={inquiry.phone} />

            <InfoRow label="Country" value={inquiry.country ?? "-"} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trip Details</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <InfoRow label="Tour" value={inquiry.tour} />

            <InfoRow label="Guests" value={String(inquiry.guests)} />

            <InfoRow
              label="Travel Date"
              value={new Date(inquiry.travelDate).toLocaleDateString()}
            />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Special Requests</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="leading-7 text-muted-foreground">
            {inquiry.message || "No message provided."}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between border-b pb-3">

      <span className="font-medium">
        {label}
      </span>

      <span className="text-muted-foreground">
        {value}
      </span>

    </div>
  );
}
