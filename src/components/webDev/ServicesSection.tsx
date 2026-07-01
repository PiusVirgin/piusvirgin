"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { webDevServices } from "@/data/wedDev";

export default function ServicesSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Services
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Website Solutions Built For Growth
          </h2>

          <p className="mt-6 text-muted-foreground">
            Whether you're launching a new business, upgrading an existing
            website, or building your online presence from scratch, we create
            websites that are fast, professional, and designed to convert.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {webDevServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  bg-background
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-primary/50
                  hover:shadow-2xl
                "
              >
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

                <h3 className="text-2xl font-semibold">{service.title}</h3>

                <p className="mt-3 text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-1 h-4 w-4 text-primary" />

                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
