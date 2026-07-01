"use client";

import { motion } from "framer-motion";
import FadeInAlways from "@/components/motion/FadeInAlways";

const principles = [
  {
    label: "Vision",
    number: "01",
    title: "Our Vision",
    description:
      "To provide world class services to the next generation of our global community with added values that exceed their expectation.",
  },
  {
    label: "Mission",
    number: "02",
    title: "Our Mission",
    description:
      "To Capture Today's Events For Tomorrow's History paying attention to details.",
  },
  {
    label: "Purpose",
    number: "03",
    title: "Our Purpose",
    description:
      "To help people and their organizations succeed. Applying what we do best to help companies reach their goals is what drives us. When we can help someone make their organization successful, we're successful.",
  },
];

export default function Principles() {
  return (
    <section className="relative py-40">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Why We Exist
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.1}>
          <h2
            className="
              mt-6

              max-w-5xl

              text-5xl

              font-black

              leading-[0.9]

              tracking-[-0.05em]

              md:text-7xl
            "
          >
            The principles
            <br />
            that guide
            <br />
            everything we do.
          </h2>
        </FadeInAlways>

        <div className="mt-24 space-y-8">
          {principles.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="
                rounded-[40px]

                border
                border-border

                p-8

                md:p-14

                transition-all

                hover:border-pius-red/30
                hover:bg-muted/30
              "
            >
              <div className="grid gap-10 lg:grid-cols-[120px_240px_1fr] lg:items-start">
                {/* Number */}

                <p
                  className="
                    text-sm

                    font-bold

                    tracking-[0.35em]

                    text-pius-red
                  "
                >
                  {item.number}
                </p>

                {/* Title */}

                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
                    {item.label}
                  </p>

                  <h3 className="mt-4 text-4xl font-black">{item.title}</h3>
                </div>

                {/* Description */}

                <p
                  className="
                    max-w-2xl

                    text-lg

                    leading-relaxed

                    text-muted-foreground
                  "
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
