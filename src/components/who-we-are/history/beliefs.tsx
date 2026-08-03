"use client";

import { motion } from "framer-motion";

const beliefs = [
  {
    title: "Our Vision",
    content:
      "Our Vision is to provide world class services to the next generation of our global community with added values that exceed their expectation.",
  },
  {
    title: "Our Mission",
    content:
      "Our Mission is to Capture Today’s Events For Tomorrow’s History paying attention to details.",
  },
  {
    title: "Our Purpose",
    content:
      "To help people and their organizations succeed. Applying what we do best to help companies reach their goals is what drives us. When we can help someone make their organization successful, we're successful.",
  },
  {
    title: "Our Philosophy",
    content:
      "Our business philosophy is carefully built around what we love our tradition woven to responsibly mobilize and utilize human and modern technological resources to identify the truth in any given business task and provide solution to our customers’ needs.",
  },
];

export default function Beliefs() {
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
            What We Believe
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
            The Principles
            <br />
            That Guide Us
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-9
              text-slate-600
            "
          >
            Every decision we make is rooted in values that have shaped
            PiusVirgin Communications Limited since its foundation.
          </p>
        </motion.div>

        <div className="mt-24 space-y-16">
          {beliefs.map((belief, index) => (
            <motion.div
              key={belief.title}
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
                rounded-[36px]
                border

                ${
                  index % 2 === 0
                    ? "bg-white"
                    : "bg-slate-50"
                }

                p-8
                md:p-14
              `}
            >
              <span
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-pius-red
                "
              >
                {belief.title}
              </span>

              <p
                className="
                  mt-8
                  max-w-4xl
                  text-xl
                  leading-10
                  text-slate-700
                  md:text-2xl
                "
              >
                {belief.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
