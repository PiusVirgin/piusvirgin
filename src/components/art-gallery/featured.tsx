"use client";

import Image from "next/image";
import FadeInAlways from "@/components/motion/FadeInAlways";

export default function FeaturedArtwork() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Featured Collection
          </p>
        </FadeInAlways>

        <div className="mt-16 grid items-center gap-20 lg:grid-cols-2">

          <FadeInAlways delay={0.1}>
            <div>
              <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight">
                Art should
                <br />
                make you
                <br />
                feel.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-xl">
                Every masterpiece tells a story.
                Every exhibition preserves culture.
                Every brushstroke captures a moment worth remembering.
              </p>
            </div>
          </FadeInAlways>

          <FadeInAlways delay={0.2}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[40px]">
              <Image
                src="/images/art-hero.jpg"
                alt="Artwork"
                fill
                className="object-cover"
              />
            </div>
          </FadeInAlways>

        </div>
      </div>
    </section>
  );
}
