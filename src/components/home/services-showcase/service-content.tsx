"use client";

import Link from "next/link";

interface ServiceContentProps {
  service: {
    number: string;
    title: string;
    description: string;
    href: string;
  };
}

export default function ServiceContent({ service }: ServiceContentProps) {
  return (
    <div
      className="
        max-w-xl
      "
    >
      <div
        className="
          text-[120px]
          lg:text-[160px]

          font-black

          leading-none

          text-primary/10
        "
      >
        {service.number}
      </div>

      <h3
        className="
          -mt-8

          text-4xl
          font-bold

          lg:text-6xl
        "
      >
        {service.title}
      </h3>

      <p
        className="
          mt-8

          text-lg

          leading-relaxed

          text-muted-foreground
        "
      >
        {service.description}
      </p>

      <Link
        href={service.href}
        className="
          mt-10

          inline-flex
          items-center

          rounded-full

          bg-primary

          px-8
          py-4

          font-medium

          text-primary-foreground
        "
      >
        Learn More
      </Link>
    </div>
  );
}
