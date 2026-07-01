import Image from "next/image";

interface Props {
  title: string;
  image: string;
}

export default function TransportHero({ title, image }: Props) {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <Image src={image} alt={title} fill priority className="object-cover" />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          className="
            text-center
            text-5xl
            font-bold
            text-white
            md:text-7xl
          "
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
