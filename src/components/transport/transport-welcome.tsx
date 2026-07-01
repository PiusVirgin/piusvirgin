import Image from "next/image";

export default function TransportWelcome() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2">
        <div>
          <span className="text-sm uppercase tracking-[0.3em] text-primary">
            About Us
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Welcome to PiusVirgin Logistics
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            PiusVirgin Logistics provides freight forwarding, transportation,
            warehousing and logistics solutions designed for businesses and
            individuals across Africa.
          </p>

          <p className="mt-4 text-muted-foreground">
            We combine technology, expertise and a customer-first approach to
            deliver exceptional logistics experiences.
          </p>
        </div>

        <div className="relative h-125 overflow-hidden rounded-3xl">
          <Image
            src="/assets/transService7.png"
            alt="Transport"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
