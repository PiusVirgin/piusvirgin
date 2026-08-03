"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-pius-red/5 blur-3xl" />

        <div className="absolute -right-24 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-24 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >
            <span
              className="
                inline-flex
                rounded-full
                border
                border-pius-red/20
                bg-pius-red/5
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

            <h1
              className="
                mt-8
                text-4xl
                font-black
                leading-tight
                text-slate-900
                md:text-7xl
              "
            >
              Solutions That
              <br />
              Move
              <span className="text-pius-red">
                {" "}
                Businesses Forward.
              </span>
            </h1>

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-9
                text-slate-600
              "
            >
              From publishing and transportation to web development,
              health management, tourism, and human development,
              PiusVirgin Communications Limited provides multidisciplinary
              solutions that empower organizations and communities to grow.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="#services"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-pius-red
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:scale-105
                "
              >
                Explore Services

                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[40px] shadow-2xl">
              <Image
                src="/images/service-hero.jpg"
                alt="PiusVirgin Services"
                width={900}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Floating Card */}

            <div
              className="
                absolute
                -bottom-6
                left-8
                rounded-3xl
                bg-white
                p-6
                shadow-xl
                hidden
                md:block
              "
            >
              <h3 className="text-4xl font-black text-pius-red">
                7+
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Professional
                <br />
                Service Divisions
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
