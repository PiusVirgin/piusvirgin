"use client";

import { motion } from "framer-motion";

import type { HomeHero } from "@/interface/home";

interface HeroNavigationProps {
  slides: HomeHero[];
  activeIndex: number;
  onChange: (index: number) => void;
}

export default function HeroNavigation({
  slides,
  activeIndex,
  onChange,
}: HeroNavigationProps) {
  return (
    <>
      {/* Desktop Navigation */}

      <div
        className="
          absolute
          bottom-3
          left-1/2

          z-20

          hidden
          w-full
          max-w-360

          -translate-x-1/2

          px-6
          lg:block
          lg:px-10
        "
      >
        <div
          className="
            grid
            w-full

            gap-4

            grid-cols-5
          "
        >
          {slides.map((slide, index) => {
            const active = index === activeIndex;

            return (
              <button
                key={slide.id}
                onClick={() => onChange(index)}
                className="text-left"
              >
                <div
                  className="
                    relative

                    h-0.75
                    w-full
                    bg-white/30
                  "
                >
                  {active && (
                    <motion.div
                      layoutId="hero-progress"
                      className="
                        absolute
                        inset-0

                        bg-primary
                      "
                    />
                  )}
                </div>

                <div className="mt-3">
                  <div
                    className={`
                      text-xs
                      uppercase
                      tracking-[0.2em]

                      ${active ? "text-white" : "text-white/50"}
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div
                    className={`
                      mt-1
                      text-sm
                      font-medium

                      ${active ? "text-white" : "text-white/70"}
                    `}
                  >
                    {slide.label}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Navigation */}

      <div
        className="
          absolute
          bottom-8
          left-1/2

          z-20

          flex
          -translate-x-1/2

          gap-3

          lg:hidden
        "
      >
        {slides.map((slide, index) => {
          const active = index === activeIndex;

          return (
            <button
              key={slide.id}
              onClick={() => onChange(index)}
              className={`
                rounded-full
                transition-all

                ${active ? "h-3 w-10 bg-primary" : "h-3 w-3 bg-white/40"}
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>
    </>
  );
}
