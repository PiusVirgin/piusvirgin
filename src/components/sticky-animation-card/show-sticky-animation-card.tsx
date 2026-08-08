"use client";

import { servicesShowcase } from "@/lib/services-showcase";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import StickyAnimationCard from "./sticky-animation-card";
import Link from "next/link";

export default function ShowStickyAnimationCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const activeService = servicesShowcase[activeIndex];

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      triggerRefs.current.forEach((element, index) => {
        if (!element) return;

        const rect = element.getBoundingClientRect();

        const elementCenter = rect.top + rect.height / 2;

        const distance = Math.abs(elementCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex((current) =>
        current === closestIndex ? current : closestIndex,
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop */}
      <div className="mt-20 hidden lg:block">
        <div className="sticky top-24 z-10">
          <div className="grid h-[650px] grid-cols-[0.72fr_1.28fr] gap-8">
            {/* Service Information */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.number}
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: 30,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  flex
                  h-full
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-slate-200
                  bg-white
                  p-10
                  shadow-[0_25px_70px_rgba(0,0,0,0.06)]
                  xl:p-12
                "
              >
                {/* Background Number */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-6
                    -top-12
                    select-none
                    text-[180px]
                    font-black
                    leading-none
                    tracking-[-0.08em]
                    text-slate-100
                  "
                >
                  {activeService.number}
                </div>

                {/* Top */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-pius-red">
                      Service
                    </span>

                    <span className="h-px w-8 bg-pius-red/40" />

                    <span className="text-xs font-medium tracking-widest text-slate-400">
                      {activeService.number} /{" "}
                      {String(servicesShowcase.length).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-12 max-w-md font-heading text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 xl:text-5xl">
                    {activeService.title}
                  </h3>

                  <p className="mt-7 max-w-md text-base leading-7 text-slate-600 xl:text-lg xl:leading-8">
                    {activeService.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="relative z-10">
                  <Link
                    href={activeService.href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-3
                      text-sm
                      font-semibold
                      text-slate-900
                    "
                  >
                    <span>Explore service</span>

                    <span
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        bg-pius-red
                        text-white
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.image}
                initial={{
                  opacity: 0,
                  scale: 1.04,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  h-full
                  overflow-hidden
                  rounded-[32px]
                  bg-slate-100
                "
              >
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Image caption */}
                <div className="absolute bottom-8 left-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                    PiusVirgin Communications Limited
                  </p>

                  <p className="mt-2 text-lg font-semibold text-white">
                    {activeService.title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Scroll Triggers */}
        <div className="relative z-10 hidden lg:block">
          {servicesShowcase.map((service, index) => (
            <div
              key={service.number}
              ref={(element) => {
                triggerRefs.current[index] = element;
              }}
            >
              <StickyAnimationCard
                index={index}
                setActiveIndex={setActiveIndex}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="mt-16 space-y-8 lg:hidden">
        {servicesShowcase.map((service, index) => (
          <motion.article
            key={service.number}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.05,
            }}
            className="
              overflow-hidden
              rounded-[28px]
              border
              border-slate-200
              bg-white
              shadow-[0_20px_50px_rgba(0,0,0,0.05)]
            "
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <span className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                {service.number} /{" "}
                {String(servicesShowcase.length).padStart(2, "0")}
              </span>
            </div>

            <div className="p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pius-red">
                Service
              </p>

              <h3 className="mt-4 font-heading text-2xl font-bold leading-tight text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-slate-900"
              >
                Explore service
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pius-red text-white">
                  →
                </span>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
}
