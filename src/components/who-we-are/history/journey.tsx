"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2000",
    title: "Founded",
    description:
      "PiusVirgin Communications Limited was founded by Chief Festus Okorie with a vision to provide world-class services built on integrity and excellence.",
  },
  {
    year: "2000",
    title: "Corporate Registration",
    description:
      "Officially registered with the Corporate Affairs Commission in Nigeria, establishing a strong legal and professional foundation.",
  },
  {
    year: "Growth",
    title: "Expanding Expertise",
    description:
      "Built multidisciplinary teams across marketing, media, transport & logistics, publishing, technology, counselling and human development.",
  },
  {
    year: "Innovation",
    title: "Modern Solutions",
    description:
      "Adopted data-driven strategies and modern technologies to deliver innovative solutions for businesses and institutions.",
  },
  {
    year: "Today",
    title: "Looking Ahead",
    description:
      "Continuing to serve clients with excellence while preparing the next generation through innovation, professionalism and lasting partnerships.",
  },
];

export default function Journey() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >
          <span
            className="
              inline-flex
              rounded-full
              bg-pius-red/10
              px-4
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-pius-red
            "
          >
            Our Journey
          </span>

          <h2
            className="
              mt-8
              text-4xl
              font-black
              text-slate-900
              md:text-6xl
            "
          >
            More Than Two Decades
            <br />
            of Continuous Growth
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
            Every milestone reflects our commitment to innovation, professionalism,
            and delivering value to people, businesses and institutions.
          </p>
        </motion.div>

        <div className="relative mt-24">
          {/* Vertical Line */}

          <div
            className="
              absolute
              left-5
              top-0
              h-full
              w-[2px]
              bg-pius-red/20

              md:left-1/2
              md:-translate-x-1/2
            "
          />

          <div className="space-y-20">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .1,
                }}
                className={`
                  relative
                  grid
                  items-center
                  gap-10

                  md:grid-cols-2

                  ${
                    index % 2 === 0
                      ? ""
                      : "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
                  }
                `}
              >
                {/* Content */}

                <div className="rounded-3xl border bg-white p-8 shadow-sm">
                  <span className="text-sm font-semibold uppercase tracking-widest text-pius-red">
                    {item.year}
                  </span>

                  <h3 className="mt-3 text-3xl font-black text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    {item.description}
                  </p>
                </div>

                {/* Dot */}

                <div className="hidden md:flex justify-center">
                  <div className="h-5 w-5 rounded-full border-4 border-white bg-pius-red shadow-lg" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
