import { notFound } from "next/navigation";

import { toursServices } from "@/lib/toursServices";

import BookingCard from "@/components/tours/booking-card";
import CTABanner from "@/components/tours/cta-banner";
import RelatedTours from "@/components/tours/related-tours";
import TourDetailHero from "@/components/tours/tour-detail-hero";
import TourHighlights from "@/components/tours/tour-highlights";
import Container from "@/components/layout/container";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const tour = toursServices.find((item) => item.slug === slug);

  if (!tour) {
    return {};
  }

  return {
    title: `${tour.title} | Pius Virgin`,
    description: tour.description,
  };
}

export default async function TourDetailsPage({ params }: Props) {
  const { slug } = await params;

  const tour = toursServices.find((item) => item.slug === slug);

  if (!tour) {
    notFound();
  }

  return (
    <>
      <TourDetailHero title={tour.title} image={tour.image} />

      {/* <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"> */}
      <Container className="py-20">
        <div className="grid items-start gap-16 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="space-y-12">
            <div>
              <h2 className="mb-6 text-4xl font-bold">Overview</h2>

              <p className="text-lg leading-relaxed text-muted-foreground">
                {tour.description}
              </p>
            </div>

            <div className="space-y-6">
              {tour.content.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <TourHighlights
              highlights={[
                "Expert Guides",
                "Premium Transportation",
                "Cultural Immersion",
                "Safe & Comfortable Experience",
                "Photography Opportunities",
                "Local Community Engagement",
              ]}
            />

            <RelatedTours currentSlug={slug} />

            <CTABanner />
          </div>

          <BookingCard title={tour.title} />
        </div>
      </Container>
    </>
  );
}
