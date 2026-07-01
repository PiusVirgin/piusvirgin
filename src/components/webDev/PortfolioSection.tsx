"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioProjects } from "@/data/portfolio";

export default function PortfolioSection() {
  return (
    <section className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Portfolio
          </span>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Selected Projects
          </h2>

          <p className="mt-6 text-muted-foreground">
            Examples of websites designed to help businesses build trust,
            communicate clearly, and convert visitors into customers.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                overflow-hidden
                rounded-3xl
                border
                bg-background
                shadow-sm
                transition-all
                duration-300
                hover:shadow-xl
              "
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />
              </div>

              <div className="p-8">
                <span className="text-sm text-primary font-medium">
                  {project.category}
                </span>

                <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>

                <p className="mt-4 text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
