"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Web Development",
    href: "/what-we-do/web-development",
    description:
      "Whether you're launching a startup, modernizing an existing brand,or creating a new digital product, we help you build an online presence that works.",
  },
  {
    title: "Art Gallery",
    href: "/what-we-do/art-gallery",
    description:
      "Celebrating creativity through carefully curated artworks and cultural experiences.",
  },
  {
    title: "Human Relations & Development",
    href: "/what-we-do/human-relations-development",
    description:
      "Empowering people through mentoring, leadership development and transformational learning.",
  },
  {
    title: "Health Management",
    href: "/what-we-do/health-management",
    description:
      "Professional health, safety and environmental assessment services for organizations.",
  },
];

export default function MoreServices() {
  return (
    <section className="bg-slate-50 py-18">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
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
            More Ways We Serve
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              text-slate-900
              md:text-5xl
            "
          >
            Specialized Services
            <br />
            For Every Need
          </h2>

          <p
            className="
              mt-8
              text-lg
              leading-9
              text-slate-600
            "
          >
            Beyond our flagship divisions, we continue to support businesses,
            institutions and individuals through a range of specialized
            professional services.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
            >
              <Link
                href={service.href}
                className="
                  group
                  block
                  rounded-[36px]
                  border
                  border-slate-200
                  bg-white
                  p-6
                  md:p-10
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-pius-red/30
                  hover:shadow-2xl
                "
              >
                <div
                  className="
                    h-1
                    w-16
                    rounded-full
                    bg-pius-red
                  "
                />

                <h3
                  className="
                    mt-8
                    text-3xl
                    font-black
                    text-slate-900
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-6
                    leading-8
                    text-slate-600
                  "
                >
                  {service.description}
                </p>

                <div
                  className="
                    mt-10
                    inline-flex
                    items-center
                    gap-3
                    font-semibold
                    text-pius-red
                  "
                >
                  Learn More
                  <ArrowRight
                    size={18}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-2
                    "
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
