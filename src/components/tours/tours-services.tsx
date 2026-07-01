import { toursServices } from "@/lib/toursServices";
import ServiceCard from "./service-card";

export default function ToursServices() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-32">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold">Signature Experiences</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {toursServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
