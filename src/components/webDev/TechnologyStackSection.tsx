"use client";

import { motion } from "framer-motion";
import { technologies } from "@/data/tech-stack";

export default function TechnologyStackSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Technology
          </span>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Modern Tools. Reliable Results.
          </h2>

          <p className="mt-6 text-muted-foreground">
            Every project is built using proven technologies that prioritize
            performance, security, scalability, and long-term maintainability.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {technologies.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="
                  rounded-3xl
                  border
                  bg-background
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:shadow-lg
                "
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "MongoDB",
            "PostgreSQL",
            "Tailwind CSS",
            "Framer Motion",
            "Vercel",
          ].map((tech) => (
            <span
              key={tech}
              className="
        rounded-full
        border
        px-4
        py-2
        text-sm
        font-medium
      "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
