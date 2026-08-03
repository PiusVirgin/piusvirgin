"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceShowcaseProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  href: string;
  reverse?: boolean;
  accent?: string;
}

export default function ServiceShowcase({
  title,
  subtitle,
  description,
  image,
  href,
  reverse = false,
  accent = "bg-pius-red",
}: ServiceShowcaseProps) {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          className={cn(
            "grid items-center gap-16 lg:grid-cols-2",
            reverse &&
              "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
          )}
        >
          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden rounded-[40px] shadow-2xl">
              <Image
                src={image}
                alt={title}
                width={900}
                height={700}
                className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-700
                  hover:scale-105
                "
              />
            </div>
          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            {subtitle && (
              <span
                className={cn(
                  "inline-flex rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white",
                  accent,
                )}
              >
                {subtitle}
              </span>
            )}

            <h2
              className="
                mt-8
                text-3xl
                font-black
                leading-tight
                text-slate-900
                md:text-6xl
              "
            >
              {title}
            </h2>

            <p
              className="
                mt-8
                text-lg
                leading-9
                text-slate-600
              "
            >
              {description}
            </p>

            <Link
              href={href}
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-pius-red
                px-7
                py-4
                font-semibold
                text-white
                transition
                hover:scale-105
              "
            >
              Explore Division
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
