"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const experiences = [
  {
    src: "/assets/tours/journey4.jpg",
    alt: "Passengers traveling inside a PiusVirgin excursion train",
    label: "The Journey",
    title: "Travel in comfort.",
  },
  {
    src: "/assets/tours/journey2.jpg",
    alt: "Participants enjoying a PiusVirgin excursion",
    label: "The Experience",
    title: "Moments worth remembering.",
  },
  {
    src: "/assets/tours/mentor.jpg",
    alt: "Students participating in an educational excursion",
    label: "Learning Beyond The Classroom",
    title: "Education meets experience.",
  },
  {
    src: "/assets/tours/journey5.jpg",
    alt: "Participants enjoying a PiusVirgin excursion",
    label: "Connecting People",
    title: "Experiences shared together.",
  },
];

export default function ExperienceGallery() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-10 bg-pius-red" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-pius-red">
              The Experience
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="
              mt-8
              text-4xl
              font-black
              leading-[1.05]
              tracking-tight
              text-slate-900
              sm:text-5xl
              lg:text-6xl
            "
          >
            More than a destination.
            <br />
            <span className="text-pius-red">It is the journey.</span>
          </motion.h2>
        </div>

        {/* Gallery */}
        <div className="mt-20 space-y-8">
          {/* First large image */}
          <GalleryImage item={experiences[0]} large />

          {/* Middle two images */}
          <div className="grid gap-8 md:grid-cols-2">
            <GalleryImage item={experiences[1]} />

            <GalleryImage item={experiences[2]} />
          </div>

          {/* Final large image */}
          <GalleryImage item={experiences[3]} large />
        </div>
      </div>
    </section>
  );
}

interface GalleryImageProps {
  item: (typeof experiences)[number];
  large?: boolean;
}

function GalleryImage({ item, large = false }: GalleryImageProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8 }}
      className="group"
    >
      <div
        className={`
          relative
          overflow-hidden
          rounded-2xl
          bg-slate-100
          sm:rounded-3xl
          ${large ? "aspect-[16/8]" : "aspect-[4/3]"}
        `}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes={
            large
              ? "(max-width: 768px) 100vw, 1200px"
              : "(max-width: 768px) 100vw, 600px"
          }
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.04]
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/10
            to-transparent
          "
        />

        {/* Content */}
        <figcaption className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">
            {item.label}
          </p>

          <p
            className={`
              mt-2
              font-bold
              text-white
              ${large ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}
              hidden md:block
            `}
          >
            {item.title}
          </p>
        </figcaption>
      </div>
    </motion.figure>
  );
}
