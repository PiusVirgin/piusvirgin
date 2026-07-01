"use client";

import FadeInAlways from "@/components/motion/FadeInAlways";
import CoverageCard from "./CoverageCard";
import { coverage } from "@/lib/news";

export default function Coverage() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInAlways>
          {/* Heading */}

          <div className="mb-16 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-pius-red">
              Explore
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-6xl">
              Explore Our Coverage
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              From transportation and logistics to media, marketing, corporate
              affairs and human development, discover stories across every
              sector shaping tomorrow.
            </p>
          </div>

          {/* Layout */}

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Featured */}

            <div className="lg:col-span-2">
              <CoverageCard item={coverage[0]} large />
            </div>

            {/* Right Column */}

            <div className="space-y-6">
              {coverage.slice(1, 4).map((item) => (
                <CoverageCard key={item.title} item={item} />
              ))}
            </div>
          </div>

          {/* Bottom */}

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coverage.slice(4).map((item) => (
              <CoverageCard key={item.title} item={item} />
            ))}
          </div>
        </FadeInAlways>
      </div>
    </section>
  );
}
