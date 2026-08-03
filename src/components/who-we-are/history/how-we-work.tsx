"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Users, Rocket } from "lucide-react";

const steps = [
  {
    title: "Understand",
    icon: Search,
    description:
      "Gather information and understand the needs of every client before making decisions.",
  },
  {
    title: "Plan",
    icon: Lightbulb,
    description:
      "Develop practical strategies backed by experience, data and industry knowledge.",
  },
  {
    title: "Collaborate",
    icon: Users,
    description:
      "Our professionals work together across multiple disciplines to provide complete solutions.",
  },
  {
    title: "Deliver",
    icon: Rocket,
    description:
      "Execute every project with excellence, helping clients achieve lasting results.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            The How Of Our Business
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
            How We Work
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-4xl
              text-lg
              leading-9
              text-slate-600
            "
          >
            Assemblage of Our professionals and highly trained staff using
            modern facilities gather information and strive to know the needs of
            next generation of our global community and target what they need to
            do, where they need to go and what it takes and help them to achieve
            their desired result.
          </p>
        </motion.div>

        {/* Steps */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
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
                  delay: index * 0.15,
                }}
                className="
                  group

                  rounded-[32px]

                  border

                  bg-white

                  p-8

                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:border-pius-red
                  hover:shadow-xl
                "
              >
                <div
                  className="
                    inline-flex

                    rounded-2xl

                    bg-pius-red/10

                    p-5
                  "
                >
                  <Icon size={34} className="text-pius-red" />
                </div>

                <h3
                  className="
                    mt-8
                    text-2xl
                    font-black
                    text-slate-900
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-5
                    leading-8
                    text-slate-600
                  "
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
