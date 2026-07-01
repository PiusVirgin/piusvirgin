"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/wedDev";

export default function ProcessSection() {
  return (
    <section className="border-y py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Our Process
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            A Clear Path From Idea To Launch
          </h2>

          <p className="mt-6 text-muted-foreground">
            Every project follows a structured workflow that keeps communication
            clear, timelines realistic, and expectations aligned.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="
                  relative
                  rounded-3xl
                  border
                  p-8
                  transition-all
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <span
                  className="
                    absolute
                    right-6
                    top-6
                    text-5xl
                    font-bold
                    text-muted-foreground/20
                  "
                >
                  {step.number}
                </span>

                <div
                  className="
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-primary/10
                    text-primary
                  "
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-semibold">{step.title}</h3>

                <p className="mt-3 text-sm text-muted-foreground">
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
