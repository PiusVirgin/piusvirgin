"use client";

import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

const text = `

        Pius Virgin surpasses our competitors in meeting the standard of what
        our business consists of in the industry today. We are proud of what our
        clientele have accomplished and ensure that their desires conform with
        statutory guidelines and institutional standards.

        Our strength lies in collaboration — creatives working alongside
        technologists, strategists alongside storytellers, and mentors alongside
        innovators.

        From Lagos to West Africa, and from Africa to the world, we build with
        clarity, integrity, and vision.

        We are a multidisciplinary collective of professionals operating across
        marketing, media, logistics, digital technology, publishing, journalism,
        mentoring, and human development.

        Rooted in African realities and guided by global best practices, we
        deliver solutions that are innovative, reliable, and impactful
     `

export default function StoryStatement() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.15"],
  });

  const words = text.split(" ");

  return (
    <div
      className="
    mx-auto
    max-w-6xl
    px-6

    min-h-[180vh]

    flex
    items-center

    md:py-40
  "
    >
      <div className="sticky top-0 flex h-screen items-center">
        <p
          ref={containerRef}
          className="
          flex
          flex-wrap
          justify-center

          gap-x-3
          gap-y-4

          text-center

          text-3xl
          font-bold

          leading-tight

          md:text-5xl
          lg:text-7xl
        "
        >
          {words.map((word, i) => {
            const start = (i / words.length) * 0.85;
            const end = Math.min(start + 0.08, 1);

            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
}

function Word({ children, progress, range }: any) {
  const opacity = useTransform(progress, range, [0.05, 1]);

  const color = useTransform(progress, range, [
    "rgba(60,60,60,0.25)",
    "rgb(122,166,55)",
  ]);

  const y = useTransform(progress, range, [30, 0]);

  return (
    <motion.span
      style={{
        opacity,
        color,
        y,
      }}
    >
      {children}
    </motion.span>
  );
}
