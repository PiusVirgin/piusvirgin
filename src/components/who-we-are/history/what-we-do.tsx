"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bus,
  Megaphone,
  Newspaper,
  GraduationCap,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Transportation & Logistics",
    icon: Bus,
  },
  {
    title: "Marketing & Media",
    icon: Megaphone,
  },
  {
    title: "Advertising & Public Relations",
    icon: Newspaper,
  },
  {
    title: "Research & Training",
    icon: GraduationCap,
  },
  {
    title: "Management Services",
    icon: BriefcaseBusiness,
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="bg-slate-950 py-32 text-white">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2 lg:px-8">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span
            className="
              inline-flex
              rounded-full
              bg-pius-red/20
              px-4
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-pius-red
            "
          >
            What We Do
          </span>

          <h2
            className="
              mt-8
              text-4xl
              font-black
              leading-tight
              md:text-6xl
            "
          >
            Creating Value
            <br />
            Across
            <span className="text-pius-red"> Industries.</span>
          </h2>

          <p
            className="
              mt-10
              text-lg
              leading-9
              text-slate-300
            "
          >
            We consult in Transportation /Movement and Logistics, Marketing and
            Media, Advertising and Public Relations, Research and Training, and
            Management services that are capable of sustaining our clientele and
            partners and launching them to next level of their business.
          </p>

          <Link
            href="/what-we-do"
            className="
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-pius-red
              px-8
              py-4
              font-semibold
              transition
              hover:scale-105
            "
          >
            Explore Our Services
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  flex
                  items-center
                  gap-5

                  rounded-3xl

                  border
                  border-white/10

                  bg-white/5

                  p-6

                  transition

                  hover:border-pius-red
                  hover:bg-white/10
                "
              >
                <div
                  className="
                    rounded-2xl
                    bg-pius-red/10
                    p-4
                  "
                >
                  <Icon className="text-pius-red" size={28} />
                </div>

                <h3
                  className="
                    text-lg
                    font-semibold
                  "
                >
                  {service.title}
                </h3>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
