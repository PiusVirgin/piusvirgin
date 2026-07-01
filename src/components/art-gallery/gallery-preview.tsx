"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import FadeInAlways from "@/components/motion/FadeInAlways";

const gallery = [
  "/images/art-art1.jpg",
  "/images/art-art2.jpg",
  "/images/art-art3.jpg",
  "/images/art-art4.jpg",
  "/images/art-art5.jpg",
];

export default function GalleryPreview() {
  return (
    <section className="py-36">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Gallery Preview
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.1}>
          <h2
            className="
              mt-6

              max-w-4xl

              text-5xl

              font-black

              leading-[0.9]

              tracking-[-0.05em]

              md:text-7xl
            "
          >
            A glimpse into
            <br />
            creativity.
          </h2>
        </FadeInAlways>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {gallery.map((image, index) => (
            <motion.div
              key={image}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.03,
              }}
              className={`
                group

                relative

                overflow-hidden

                rounded-[30px]



                ${index === 2 ? "aspect-[21/9] md:col-span-2" : "aspect-[4/5]"}
                `}
            >
              <Image
                src={image}
                alt="Gallery"
                fill
                className="
                  object-cover

                 
                  duration-700


  grayscale

  transition-all


  group-hover:grayscale-0


                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
