import Link from "next/link";
import Image from "next/image";

import { transportServices } from "@/data/transport-services";

interface Props {
  currentSlug: string;
}

export default function TransportRelatedServices({ currentSlug }: Props) {
  const related = transportServices
    .filter((item) => item.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="mt-20">
      <h2 className="mb-8 text-3xl font-bold">Related Tours</h2>

      <div className="grid gap-8 md:grid-cols-3">
        {related.map((item) => (
          <Link
            key={item.slug}
            href={`/transport/${item.slug}`}
            className="group"
          >
            <div className="overflow-hidden rounded-3xl">
              <Image
                src={item.image}
                alt={item.title}
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

            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
