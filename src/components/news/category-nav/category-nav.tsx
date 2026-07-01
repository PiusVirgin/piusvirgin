"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import FadeInAlways from "@/components/motion/FadeInAlways";
import { categories } from "@/lib/news";

export default function CategoryNav() {
  const [active, setActive] = useState("All");

  const items = [
    {
      title: "All",
    },
    ...categories,
  ];

  return (
    <section className="border-y border-border bg-background">
      <div
        className="
    mx-auto
    max-w-7xl

    overflow-x-auto

    px-6

    [scrollbar-width:none]

    [-ms-overflow-style:none]
  "
      >
        <div className="mx-auto max-w-7xl px-6 py-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Browse News
          </p>

          <div className="flex min-w-max gap-3 overflow-x-auto">
            <div className="flex min-w-max items-center gap-4 py-5">
              {items.map((item) => {
                const isActive = active === item.title;

                return (
                  <button
                    key={item.title}
                    onClick={() => setActive(item.title)}
                    className={`
        rounded-full

        border

        px-6

        py-3

        text-sm

        font-semibold

        transition-all

        duration-300

        ${
          isActive
            ? "border-pius-red bg-pius-red text-white shadow-lg"
            : "border-border bg-background text-foreground hover:border-pius-red hover:text-pius-red"
        }
      `}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
