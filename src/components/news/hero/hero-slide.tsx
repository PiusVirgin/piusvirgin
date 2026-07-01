"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type HeroSlideProps = {
  slide: {
    bgImg: string;
    title: string;
    brief: string;
  };
};

export default function HeroSlide({ slide }: HeroSlideProps) {
  return (
    <Link
      href="#"
      className="
        group

        relative

        block

        h-[520px]


        overflow-hidden

        rounded-[40px]

        md:h-[560px]

        lg:h-[650px]
      "
    >
      {/* Background Image */}

      <motion.div
        whileHover={{
          scale: 1.06,
        }}
        transition={{
          duration: 1.2,
        }}
        className="absolute inset-0"
      >
        <Image
          src={`/${slide.bgImg}`}
          alt={slide.title}
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}

      <div
        className="
          absolute

          inset-0

          bg-gradient-to-t

          from-black

          via-black/45

          to-black/10
        "
      />

      {/* Small red glow */}

      <div
        className="
          absolute

          -left-20

          bottom-0

          h-72

          w-72

          rounded-full

          bg-pius-red/20

          blur-[120px]
        "
      />

      {/* Content */}

      <div
        className="
          absolute

          inset-x-0

          bottom-0

          z-10

          p-8

          md:p-12

          lg:p-16
        "
      >
        {/* Badge */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
          }}
          className="
            inline-flex

            items-center

            rounded-full

            border

            border-white/20

            bg-white/10

            px-4

            py-2

            text-xs

            uppercase

            tracking-[0.35em]

            text-white

            backdrop-blur-md
          "
        >
          Featured Story
        </motion.div>

        {/* Title */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.25,
          }}
          className="
            mt-8

            max-w-4xl




            tracking-[-0.04em]

            text-white



            lg:text-6xl

            line-clamp-3

            text-2xl
            font-black

            leading-tight

            md:line-clamp-none
            md:text-6xl
          "
        >
          {slide.title}
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.35,
          }}
          className="
  mt-6

  hidden

  max-w-2xl

  text-base

  leading-relaxed

  text-white/80

  sm:block

  lg:text-lg
"
        >
          {slide.brief}
        </motion.p>

        {/* CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.45,
          }}
          className="mt-20 mb-10 md:mt-10"
        >
          <span
            className="
              inline-flex

              items-center

              gap-1

              md:gap-3

              rounded-full

              bg-pius-red

              px-7

              py-2

              md:py-3

              font-semibold

              text-white

              transition-all

              duration-500

              group-hover:gap-5
            "
          >
            Read Story
            <ArrowUpRight
              className="
                transition-transform

                duration-500

                group-hover:rotate-45
              "
            />
          </span>
        </motion.div>
      </div>
    </Link>
  );
}
