"use client";

import { motion } from "framer-motion";
import { advantages } from "@/data/wedDev";

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Built Around What Businesses Actually Need
          </h2>

          <p className="mt-6 text-muted-foreground">
            We focus on practical results: websites that look professional, load
            quickly, work on every device, and help your business earn trust
            online.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  bg-background
                  p-8
                  transition-all
                  duration-300
                  hover:border-primary/40
                  hover:shadow-xl
                "
              >
                <div
                  className="
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-primary/10
                    text-primary
                    transition-transform
                    group-hover:scale-110
                  "
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
