import Image from "next/image";

interface Props {
  service: {
    title: string;
    image: string;
    description: string;
  };
}

export default function TransportDetailHero({ service }: Props) {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl text-center text-white">
          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            {service.title}
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-white/80">
            {service.description}
          </p>
        </div>
      </div>
    </section>
  );
}
