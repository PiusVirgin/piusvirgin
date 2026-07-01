"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            What Clients Say
          </h2>

          <p className="mt-6 text-muted-foreground">
            Building websites is about more than design and code. It's about
            creating a smooth experience and delivering results clients can
            trust.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                rounded-3xl
                border
                bg-background
                p-8
                shadow-sm
              "
            >
              <Quote className="h-8 w-8 text-primary" />

              <p className="mt-6 text-muted-foreground leading-relaxed">
                "{item.quote}"
              </p>

              <div className="mt-8">
                <h4 className="font-semibold">{item.name}</h4>

                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
