"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

import Overlay from "../Overlay";
import FadeInAlways from "../motion/FadeInAlways";

import { linkMenu, contactMenu, socialLink } from "@/data/navigation";

interface MobileMenuProps {
  close: () => void;
}

export default function MobileMenu({ close }: MobileMenuProps) {
  return (
    <>
      <Overlay close={close} />

      <motion.div
        initial={{
          opacity: 0,
          x: 120,
          filter: "blur(16px)",
        }}
        animate={{
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
        }}
        exit={{
          opacity: 0,
          x: 120,
          filter: "blur(16px)",
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          right-4
          top-4
          z-[60]
          flex
          h-[calc(100vh-2rem)]
          w-[92%]
          max-w-2xl
          flex-col
          rounded-[2rem]
          border
          border-white/10
          bg-(--background)
          text-(--foreground)
          p-6
          md:p-10
          backdrop-blur-3xl
          shadow-[0_8px_80px_rgba(0,0,0,0.4)]
        "
      >
        {/* TOP */}
        <div className="mb-14 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Navigation
            </p>
          </div>

          <button
            onClick={close}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-(--foreground)/10
              bg-(--foreground)/5
              text-(--foreground)
              transition-all
              duration-300
              hover:bg-(--foreground)/10
              hover:rotate-90
            "
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* LINKS */}
        <nav className="flex flex-1 flex-col overflow-y-auto">
          <div className="space-y-2">
            {linkMenu.map((item, index) => (
              <FadeInAlways
                key={item.title}
                delay={index * 0.06}
                direction="up"
              >
                <Link
                  href={item.path}
                  onClick={close}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-transparent
                    px-4
                    py-5
                    transition-all
                    duration-500
                    hover:border-(--foreground)/10
                    hover:bg-(--foreground)/3
                  "
                >
                  <span
                    className="
                      text-xl
                      font-semibold
                      tracking-tight
                      text-(--foreground)
                      md:text-3xl
                    "
                  >
                    {item.title}
                  </span>

                  <span
                    className="
                      translate-x-4
                      opacity-0
                      text-(--foreground)/40
                      transition-all
                      duration-500
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  >
                    →
                  </span>
                </Link>
              </FadeInAlways>
            ))}
          </div>

          {/* CONTACT */}
          <div className="mt-12 border-t border-(--foreground)/10 pt-8">
            <FadeInAlways delay={0.4} direction="up">
              <Link
                href={contactMenu.path}
                onClick={close}
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-(--foreground)
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-(--background)
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                "
              >
                {contactMenu.title}
              </Link>
            </FadeInAlways>

            {/* SOCIALS */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {socialLink.map((item, index) => {
                const Icon = item.icon;

                return (
                  <FadeInAlways
                    key={index}
                    delay={0.5 + index * 0.08}
                    direction="up"
                  >
                    <Link
                      href={item.path}
                      target="_blank"
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-(--foreground)/10
                        bg-(--foreground)/3
                        text-(--foreground)/70
                        transition-all
                        duration-300
                        hover:border-(--foreground)/20
                        hover:bg-(--foreground)/10
                        hover:text-(--foreground)
                      "
                    >
                      <Icon size={18} />
                    </Link>
                  </FadeInAlways>
                );
              })}
            </div>
          </div>
        </nav>
      </motion.div>
    </>
  );
}
