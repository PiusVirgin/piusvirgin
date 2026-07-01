"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/layout/container";

export default function WebHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/webdev-hero.jpg')] bg-cover bg-center" />

      <div className="absolute inset-0 bg-black/70" />

      <Container className="relative z-10 flex min-h-screen items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="mb-4 text-primary font-medium">
            Web Design & Development
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Modern Websites That Turn Visitors Into Customers
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            We design and build fast, responsive websites for businesses,
            startups, logistics companies, schools, NGOs, and professionals who
            want a stronger online presence.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-primary px-6 py-3 text-primary-foreground"
            >
              Start Your Project
            </Link>

            <Link href="#services" className="rounded-xl border px-6 py-3">
              Explore Services
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
