import Link from "next/link";
import Image from "next/image";

import { toursServices } from "@/lib/toursServices";

interface Props {
  currentSlug: string;
}

export default function RelatedTours({ currentSlug }: Props) {
  const tours = toursServices
    .filter((tour) => tour.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="mt-20">
      <h2 className="mb-8 text-3xl font-bold">Related Tours</h2>

      <div className="grid gap-8 md:grid-cols-3">
        {tours.map((tour) => (
          <Link key={tour.slug} href={`/tours/${tour.slug}`} className="group">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src={tour.image}
                alt={tour.title}
                width={500}
                height={400}
                className="
                  h-64
                  w-full
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-105
                "
              />
            </div>

            <h3 className="mt-4 text-xl font-semibold">{tour.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
