'use client';

import { servicesShowcase } from "@/lib/services-showcase";

import { useState } from "react";
import ShowStickyAnimationCard from "@/components/sticky-animation-card/show-sticky-animation-card";

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = servicesShowcase[activeIndex];
  return (
    <section
      className="
        relative

        py-32
        lg:py-48


      "
    >
      <div
        className="
          mx-auto
          max-w-360

          px-6
          lg:px-10
        "
      >
        <div className="max-w-3xl">
          <span
            className="
              text-xs
              uppercase

              tracking-[0.25em]

              text-primary
            "
          >
            What We Do
          </span>

          <h2
            className="
              mt-6

              font-heading
              text-4xl
              font-bold

              md:text-5xl
              lg:text-6xl
            "
          >
            Engineering Solutions For Nigeria's Energy Future
          </h2>

          <p
            className="
              mt-6

              text-lg

              leading-relaxed

              text-muted-foreground
            "
          >
            Delivering expertise across offshore energy, exploration,
            infrastructure development and operational support.
          </p>
        </div>

        <ShowStickyAnimationCard />
      </div>
    </section>
  );
}
