import { notFound } from "next/navigation";

import PageHeader from "@/components/admin/page-header";
import SectionCard from "@/components/admin/section-card";
import InfoRow from "@/components/admin/info-row";
import StatusBadge from "@/components/admin/status-badge";
import { getTransportRequest } from "@/services/transport.service";
import { Button } from "@/components/ui/button";
import ActionsCard from "@/components/admin/actions-card";
import DeleteRequestButton from "@/components/admin/delete-request-button";
import StatusSelect from "@/components/admin/status-select";
import { updateTransportInquiryStatus } from "@/actions/transport.actions";

export default async function TransportDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const inquiry = await getTransportRequest(id);

  if (!inquiry) {
    notFound();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
      <div className="space-y-8">
        <div
          className="
          flex
          flex-col
          gap-4
          sm:flex-row
          sm:items-start
          sm:justify-between
          "
        >
          <PageHeader title={inquiry.fullName} description={inquiry.service} />

          <StatusBadge status={inquiry.status} />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <SectionCard title="Customer Information">
            <InfoRow label="Full Name" value={inquiry.fullName} />
            <InfoRow label="Company" value={inquiry.company} />
            <InfoRow label="Email" value={inquiry.email} />
            <InfoRow label="Phone" value={inquiry.phone} />
          </SectionCard>

          <SectionCard title="Shipment Information">
            <InfoRow label="Service" value={inquiry.service} />
            <InfoRow label="Pickup" value={inquiry.pickup} />
            <InfoRow label="Destination" value={inquiry.destination} />
            <InfoRow label="Cargo" value={inquiry.cargo} />
            <InfoRow label="Shipment Date" value={inquiry.shipmentDate} />
          </SectionCard>
        </div>

        <SectionCard title="Additional Message">
          <p
            className="leading-7 break-words
whitespace-pre-wrap text-muted-foreground"
          >
            {inquiry.message}
          </p>
        </SectionCard>
      </div>

      <ActionsCard>
        <Button className="w-full">Contact Customer</Button>

        <div className="space-y-2">
          <p className="text-sm font-medium">Status</p>

          <StatusSelect
            id={inquiry.id}
            status={inquiry.status}
            onStatusChange={updateTransportInquiryStatus}
          />
        </div>

        <DeleteRequestButton id={inquiry.id} />
      </ActionsCard>
    </div>
  );
}
