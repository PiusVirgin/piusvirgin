"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

type CoverageCardProps = {
  item: {
    title: string;
    image: string;
    posts: number;
    color: string;
    description: string;
  };

  large?: boolean;
};

export default function CoverageCard({ item, large = false }: CoverageCardProps) {
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
      <Link
        href={`/news/category/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
        className="group relative block overflow-hidden rounded-[32px]"
      >
        {/* Image */}

        <div
          className={`
    relative
    ${large ? "h-[700px]" : "h-[220px] lg:h-[220px]"}
  `}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Overlay */}

          <div
            className={`
              absolute inset-0
              bg-gradient-to-t
              ${item.color}
              via-black/30
              to-transparent
            `}
          />

          {/* Content */}

          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">
              Coverage
            </p>

            <h3 className="mt-3 text-3xl font-black text-white">
              {item.title}
            </h3>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">
              {item.description}
            </p>

            <div className="mt-8 flex items-center justify-between">
              <span className="text-sm font-medium text-white/80">
                {item.posts} Articles
              </span>

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  backdrop-blur-md
                  transition-all
                  group-hover:bg-pius-red
                "
              >
                <ArrowUpRight
                  className="
                    text-white
                    transition-transform
                    duration-300
                    group-hover:rotate-45
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
