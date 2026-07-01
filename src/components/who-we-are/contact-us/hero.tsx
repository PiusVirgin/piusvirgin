"use client";

import FadeInAlways from "@/components/motion/FadeInAlways";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-40">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute

            right-[-200px]
            top-[-150px]

            h-[700px]
            w-[700px]

            rounded-full

            bg-pius-red/8

            blur-[180px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-pius-red">
            Contact Us
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.1}>
          <h1
            className="
              mt-8

              max-w-5xl

              text-3xl

              font-black

              leading-[0.9]

              tracking-[-0.05em]

              md:text-8xl
            "
          >
            Let's build
            <br />
            something
            <br />
            remarkable.
          </h1>
        </FadeInAlways>

        <FadeInAlways delay={0.2}>
          <p
            className="
              mt-10

              max-w-2xl

              text-lg

              leading-relaxed

              text-muted-foreground
            "
          >
            Whether you need transport solutions, media services, printing,
            consulting or strategic partnerships, we'd love to hear from you.
          </p>
        </FadeInAlways>
      </div>
    </section>
  );
}
