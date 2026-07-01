import Link from "next/link";
import Image from "next/image";

import { TransportService } from "@/types/transport";

interface Props {
  service: TransportService;
}

export default function TransportServiceCard({ service }: Props) {
  return (
    <Link href={`/logistics-transportation/${service.slug}`}>
      <article
        className="
          group
          overflow-hidden
          rounded-3xl
          border
          transition-all
          duration-500
          hover:-translate-y-3
          hover:shadow-2xl
        "
      >
        <div className="relative h-72 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold">{service.title}</h3>

          <p className="mt-3 text-muted-foreground">{service.description}</p>

          <span className="mt-5 inline-flex font-medium">Learn More →</span>
        </div>
      </article>
    </Link>
  );
}
