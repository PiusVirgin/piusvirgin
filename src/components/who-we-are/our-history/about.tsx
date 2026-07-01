"use client";

import { motion } from "framer-motion";
import FadeInAlways from "@/components/motion/FadeInAlways";

export default function About() {
  return (
    <section className="relative py-40">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            About PiusVirgin
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.1}>
          <h2
            className="
              mt-8

              max-w-5xl

              text-5xl

              font-black

              leading-[0.9]

              tracking-[-0.05em]

              md:text-7xl
            "
          >
            A multidisciplinary company
            <br />
            built on people,
            <br />
            innovation and trust.
          </h2>
        </FadeInAlways>

        {/* Divider */}

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
            mt-20

            h-px

            origin-left

            bg-border
          "
        />

        {/* Content */}

        <div className="mt-20 grid gap-16 lg:grid-cols-[320px_1fr]">
          {/* Left */}

          <FadeInAlways>
            <div>
              <p
                className="
                  text-sm

                  uppercase

                  tracking-[0.35em]

                  text-pius-red
                "
              >
                Since 2000
              </p>

              <h3
                className="
                  mt-6

                  text-3xl

                  font-bold

                  leading-tight
                "
              >
                A Quick Bit
                <br />
                About PVCL
              </h3>
            </div>
          </FadeInAlways>

          {/* Right */}

          <FadeInAlways delay={0.15}>
            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
              <p>
                Founded by{" "}
                <strong className="text-foreground">Festus Okorie</strong> in
                2000, PiusVirgin Communications Limited is registered with the
                Corporate Affairs Commission in Nigeria and has grown into a
                multidisciplinary organization serving businesses, institutions
                and communities across diverse industries.
              </p>

              <p>
                Our professionals bring together expertise in marketing and
                media, transport and logistics, web design and development,
                computer programming, printing and publishing, news gathering
                and reporting, mentoring and human development.
              </p>

              <p>
                Every decision we make is informed by data rather than
                assumptions, while remaining firmly rooted in the culture,
                values and professional standards that have shaped our journey
                since inception.
              </p>
            </div>
          </FadeInAlways>
        </div>
      </div>
    </section>
  );
}
