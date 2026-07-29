import { notFound } from "next/navigation";

import { transportServices } from "@/data/transport-services";

import TransportDetailHero from "@/components/transport/transport-detail-hero";
import TransportSidebar from "@/components/transport/transport-sidebar";
import TransportContent from "@/components/transport/transport-content";
import TransportRelatedServices from "@/components/transport/transport-related-services";
import TransportCTA from "@/components/transport/transport-cta";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const service = transportServices.find((item) => item.slug === slug);

  if (!service) return {};

  return {
    title: `${service.title} | Pius Virgin Logistics`,
    description: service.description,
  };
}

export default async function TransportDetailsPage({ params }: Props) {
  const { slug } = await params;

  const service = transportServices.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <TransportDetailHero service={service} />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1fr_350px]">
            <div className="space-y-16">
              <TransportContent service={service} />

              <TransportRelatedServices currentSlug={service.slug} />

              <TransportCTA />
            </div>

            <TransportSidebar service={service} />
          </div>
        </div>
      </section>
    </>
  );
}
