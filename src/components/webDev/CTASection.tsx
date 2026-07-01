"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-28 bg-linear-to-r from-primary/10 via-background to-primary/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold sm:text-5xl">
            Ready to build your website?
          </h2>

          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Let’s create a fast, modern, and professional website that helps
            your business attract customers and build trust online.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="
                px-8 py-4 rounded-2xl
                bg-primary text-white
                font-medium
                shadow-lg
                hover:scale-105
                transition-transform
              "
            >
              Start a Project
            </Link>

            <Link
              href="mailto:your@email.com"
              className="
                px-8 py-4 rounded-2xl
                border
                font-medium
                hover:bg-muted
                transition
              "
            >
              Email Me Directly
            </Link>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Response time: usually within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
