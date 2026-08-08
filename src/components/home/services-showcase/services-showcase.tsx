"use client";

import ShowStickyAnimationCard from "@/components/sticky-animation-card/show-sticky-animation-card";

export default function ServicesShowcase() {
  return (
    <section className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Section Introduction */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Label */}
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-pius-red" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-pius-red">
              What We Do
            </span>

            <span className="h-px w-10 bg-pius-red" />
          </div>

          {/* Heading */}
          <h2 className="mt-8 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Services built around
            <br />
            <span className="text-pius-red">people, business & progress.</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            From logistics and transportation to publishing, excursions and
            human development, PiusVirgin provides practical services designed
            to support businesses, institutions and communities.
          </p>
        </div>

        {/* Sticky Services Experience */}
        <ShowStickyAnimationCard />
      </div>
    </section>
  );
}
