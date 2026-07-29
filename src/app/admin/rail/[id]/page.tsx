import { notFound } from "next/navigation";

import { getRailInquiry } from "@/services/rail.service";

import PageHeader from "@/components/admin/page-header";
import SectionCard from "@/components/admin/section-card";
import InfoRow from "@/components/admin/info-row";
import StatusBadge from "@/components/admin/status-badge";
import ActionsCard from "@/components/admin/actions-card";
import StatusSelect from "@/components/admin/status-select";
import DeleteRailButton from "@/components/admin/rail/delete-rail-button";
import { updateRailInquiryStatusAction } from "@/actions/rail.actions";

import { Button } from "@/components/ui/button";

export default async function RailDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const inquiry = await getRailInquiry(id);

  if (!inquiry) {
    notFound();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
      <div className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <PageHeader
            title={inquiry.fullName}
            description={`${inquiry.departure} → ${inquiry.destination}`}
          />

          <StatusBadge status={inquiry.status} />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <SectionCard title="Customer Information">
            <InfoRow label="Full Name" value={inquiry.fullName} />
            <InfoRow label="Email" value={inquiry.email} />
            <InfoRow label="Phone" value={inquiry.phone} />
            <InfoRow label="Country" value={inquiry.country} />
          </SectionCard>

          <SectionCard title="Journey Information">
            <InfoRow label="Departure" value={inquiry.departure} />
            <InfoRow label="Destination" value={inquiry.destination} />
            <InfoRow
              label="Travel Date"
              value={new Date(inquiry.travelDate).toLocaleDateString()}
            />
            <InfoRow label="Passengers" value={String(inquiry.passengers)} />
          </SectionCard>
        </div>

        <SectionCard title="Additional Message">
          <p className="leading-7 whitespace-pre-wrap break-words text-muted-foreground">
            {inquiry.message || "No additional message."}
          </p>
        </SectionCard>
      </div>

      <ActionsCard>
        <Button asChild className="w-full">
          <a
            href={`mailto:${inquiry.email}?subject=Regarding your rail booking`}
          >
            Contact Customer
          </a>
        </Button>

        <div className="space-y-2">
          <p className="text-sm font-medium">Status</p>

          <StatusSelect
            id={inquiry.id}
            status={inquiry.status}
            onStatusChange={updateRailInquiryStatusAction}
          />
        </div>

        <DeleteRailButton id={inquiry.id} />
      </ActionsCard>
    </div>
  );
}
