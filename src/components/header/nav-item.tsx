"use client";

import Link from "next/link";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { ChevronDown } from "lucide-react";

import type { NavGroup } from "@/interface/navigation";

interface NavItemProps {
  item: NavGroup;
}

export default function NavItem({ item }: NavItemProps) {
  const [open, setOpen] = useState(false);

  const hasSubmenu = item.submenu && item.submenu.length > 0;

  if (!hasSubmenu) {
    return (
      <Link
        href={item.href ?? "/"}
        className="
          rounded-full
          px-4
          py-2

          text-sm
          font-medium

          text-foreground

          transition-colors

          hover:text-primary
        "
      >
        {item.title}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="
          flex
          items-center
          gap-2

          rounded-full

          px-4
          py-2

          text-sm
          font-medium

          text-foreground

          transition-all

          hover:text-primary
        "
      >
        {item.title}

        <ChevronDown
          className={`
            h-4
            w-4
            transition-transform

            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      {open && (
        <motion.div
          layoutId="nav-indicator"
          className="
      absolute
      left-1/2
      top-full

      h-3
      w-3

      -translate-x-1/2
      translate-y-2

      rotate-45

      border-l
      border-t

      border-border

      bg-white

      z-50
    "
        />
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 12,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              absolute
              left-1/2
              top-full

              mt-4
              -translate-x-1/2
              rounded-3xl
              border
              border-border

              bg-[linear-gradient(180deg,#ffffff,#f5f6ef)]
              backdrop-blur-xl

              before:absolute
before:inset-0
before:-z-10

before:bg-[radial-gradient(circle_at_top_right,rgba(243,156,18,.10),transparent_50%)]

              p-6

              shadow-[0_20px_60px_rgba(122,166,55,0.12)]
              z-50
              overflow-hidden
            "
            style={{
              width: item.dropdownWidth,
            }}
          >
            <div
              className="
              grid
              grid-cols-[280px_1fr]
              gap-6
            "
            >
              <div
                className="
    relative

    overflow-hidden

    rounded-3xl

    border
    border-border

    bg-secondary

    p-6
  "
              >
                <div
                  className="
      absolute
      inset-0

      bg-[radial-gradient(circle_at_top_right,rgba(55, 59, 166, 0.18),transparent_60%)]
    "
                />

                <div className="relative z-10">
                  <span
                    className="
        text-xs
        uppercase
        tracking-[0.2em]

        text-primary
      "
                  >
                    Overview
                  </span>

                  <h3
                    className="
        mt-3

        text-xl
        font-semibold
      "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
        mt-3

        text-sm

        leading-relaxed

        text-muted-foreground
      "
                  >
                    {item.description}
                  </p>

                  {item.href && (
                    <Link
                      href={item.href}
                      className="
          mt-6

          inline-flex
          items-center
          gap-2

          text-primary
          font-medium
        "
                    >
                      Learn more →
                    </Link>
                  )}
                </div>
              </div>

              <div
                className="
      grid
      grid-cols-2
      gap-3
      content-start
    "
              >
                {item.submenu?.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    className="
                 group

                 rounded-2xl

                 border
                 border-transparent

                 p-4

                 transition-all

                 hover:border-border
                 hover:bg-secondary
               "
                  >
                    <h4
                      className="
    mb-1

    flex
    items-center
    justify-between

    font-medium

    text-foreground
  "
                    >
                      <>
                        <span>{subItem.title}</span>

                        <span
                          className="
      opacity-0

      transition-all

      group-hover:opacity-100
      group-hover:translate-x-1
    "
                        >
                          →
                        </span>
                      </>
                    </h4>

                    <p
                      className="
                      text-sm
                      text-muted-foreground
                    "
                    >
                      {subItem.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
