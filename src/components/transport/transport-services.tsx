import { transportServices } from "@/data/transport-services";

import TransportServiceCard from "./transport-service-card";

export default function TransportServices() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-16 text-center text-4xl font-bold">
          Logistics Services
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {transportServices.map((service) => (
            <TransportServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
