"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { ArrowUpRight, Truck, Warehouse, Route, Package } from "lucide-react";

import FadeInAlways from "@/components/motion/FadeInAlways";
import { homeTransportServices } from "@/lib/homeTransportData";


export default function HomeTransport() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/skillsBg.png"
          alt=""
          fill
          className="object-cover opacity-[0.04]"
        />

        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/5" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <FadeInAlways direction="up">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Logistics & Transportation
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.1} direction="up">
          <h2
            className="
              mt-6
              max-w-5xl
              text-5xl
              font-black
              leading-[0.95]
              tracking-tight

              md:text-7xl
              xl:text-8xl
            "
          >
            Moving Africa's
            <br />
            next generation
            <br />
            of commerce.
          </h2>
        </FadeInAlways>

        <FadeInAlways delay={0.2} direction="up">
          <p
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-relaxed
              text-muted-foreground
            "
          >
            Freight forwarding, fleet operations, warehousing and enterprise
            logistics designed for modern organizations.
          </p>
        </FadeInAlways>

        {/* Main Layout */}
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {/* Featured Card */}
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
            className="
              group
              relative
              overflow-hidden
              rounded-[40px]
              lg:col-span-2
              h-137.5
              md:h-162.5
            "
          >
            <Image
              src={homeTransportServices[0].image}
              alt={homeTransportServices[0].title}
              fill
              className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white/10
                  px-4
                  py-2
                  text-white
                  backdrop-blur-xl
                "
              >
                <Truck size={16} />
                Featured Service
              </div>

              <h3
                className="
                  mt-6
                  text-4xl
                  font-bold
                  text-white
                  md:text-6xl
                "
              >
                {homeTransportServices[0].title}
              </h3>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-white/70
                  leading-relaxed
                "
              >
                {homeTransportServices[0].subtitle}
              </p>

              <Link
                href="/logistics-transportation"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  text-black
                  transition-all
                  hover:gap-4
                "
              >
                Explore Service
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* Right Cards */}
          <div className="grid gap-6">
            {homeTransportServices.slice(1).map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="
                  group
                  rounded-[32px]
                  border
                  border-black/10
                  dark:border-white/10
                  bg-white/70

                  backdrop-blur-2xl
                  p-6
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-pius-red
                    text-white
                  "
                >
                  {item.title.includes("Fleet") && <Route />}
                  {item.title.includes("Warehousing") && <Warehouse />}
                  {item.title.includes("Supply") && <Package />}
                </div>

                <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-relaxed
                    text-muted-foreground
                  "
                >
                  {item.subtitle}
                </p>

                <ArrowUpRight
                  className="
                    mt-6
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div
          className="
            mt-24
            grid
            gap-10
            border-t
            border-black/10
            pt-12

            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {[
            {
              value: "40+",
              label: "Transport Routes",
            },
            {
              value: "24/7",
              label: "Operational Support",
            },
            {
              value: "100%",
              label: "Commitment",
            },
            {
              value: "Since 2000",
              label: "Industry Experience",
            },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              initial={{
                opacity: 0,
                y: 30,
              }}
              viewport={{ once: true }}
            >
              <h3
                className="
                  text-4xl
                  font-black
                  md:text-5xl
                "
              >
                {stat.value}
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  text-muted-foreground
                "
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="
            mt-24
            rounded-[40px]
            border
            border-black/10
            dark:border-white/10

            bg-white/70


            backdrop-blur-2xl
            p-8
            md:p-12
          "
        >
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Logistics Excellence
            </p>

            <h3
              className="
                mt-4
                text-4xl
                font-bold
                md:text-6xl
              "
            >
              Delivering confidence at every mile.
            </h3>

            <p
              className="
                mt-6
                text-lg
                leading-relaxed
                text-muted-foreground
              "
            >
              From freight forwarding to fleet operations, we help organizations
              move faster, smarter and more efficiently.
            </p>

            <Link
              href="/logistics-transportation"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-full

                bg-pius-red
                px-6
                py-3

                text-white

                transition-all
                hover:gap-4
              "
            >
              Discover Our Solutions
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
