"use client";

import { reasons } from "@/lib/home-reasons";
import Image from "next/image";
import { motion } from "framer-motion";

const Reasons = () => {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p
            className="
      text-xs
      uppercase
      tracking-[0.35em]
      text-muted-foreground
    "
          >
            Why Choose Us
          </p>

          <h2
            className="
      mt-6
      text-3xl
      font-black
      leading-[0.95]

      md:text-7xl
    "
          >
            Trusted by organizations that cannot afford delays.
          </h2>

          <p
            className="
      mt-8
      text-lg
      leading-relaxed
      text-muted-foreground
    "
          >
            We combine operational expertise, modern logistics systems and
            people-first service to deliver confidence at every mile.
          </p>
        </div>

        <div className="mt-24 grid gap-20 lg:grid-cols-2">
          {/* Left */}
          <div className="relative">
            <div className="sticky top-32">
              <div
                className="
        relative
        h-125
        overflow-hidden
        rounded-[40px]
      "
              >
                <Image
                  src="/images/allMedia.png"
                  alt="Why Choose PiusVirgin"
                  fill
                  className="object-cover"
                />

                <div
                  className="
          absolute
          inset-0
          bg-linear-to-t
          from-black/70
          via-black/20
          to-transparent
        "
                />

                <div className="absolute bottom-8 left-8">
                  <h3
                    className="
            text-3xl
            font-bold
            text-white
          "
                  >
                    Logistics Built
                    <br />
                    For Growth.
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="space-y-16">
            {reasons.map((item) => (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                className="
      border-b
      border-black/10
      pb-12
    "
              >
                <span
                  className="
        text-sm
        font-bold
        text-pius-red
      "
                >
                  {item.number}
                </span>

                <h3
                  className="
        mt-4
        text-3xl
        font-bold
      "
                >
                  {item.title}
                </h3>

                <p
                  className="
        mt-4
        text-lg
        leading-relaxed
        text-muted-foreground
      "
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reasons;
