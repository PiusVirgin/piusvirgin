"use client";

import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Megaphone } from "lucide-react";

import { breakingNews } from "@/lib/news";

export default function BreakingNews() {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-4">
        {/* Left */}

        <div
          className="
    flex

    shrink-0

    items-center

    gap-3
  "
        >
          <div
            className="
      rounded-md

      bg-pius-red

      px-4

      py-2

      shadow-lg
    "
          >
            <span
              className="
        text-xs

        font-black

        uppercase

        tracking-[0.25em]

        text-white
      "
            >
              BREAKING
            </span>
          </div>

          <Megaphone size={18} className="text-pius-red" />
        </div>

        {/* Right */}

        <Marquee
          speed={38}
          pauseOnHover
          pauseOnClick
          gradient
          gradientColor="var(--background)"
          gradientWidth={80}
        >
          {breakingNews.map((news, index) => (
            <Link
              key={index}
              href="#"
              className="
             mx-10

             flex

             items-center

             gap-5

             whitespace-nowrap

             text-sm

             font-medium

             transition-colors

             duration-300

             hover:text-pius-red
           "
            >
              {news}

              <span
                className="
               text-pius-red

               opacity-60

               text-xl
             "
              >
                •
              </span>
            </Link>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
