// "use client";

// import Image from "next/image";
// import Link from "next/link";

// import { motion } from "framer-motion";

// import type { HomeHero } from "@/interface/home";

// interface HeroSlideProps {
//   slide: HomeHero;
// }

// export default function HeroSlide({ slide }: HeroSlideProps) {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0.7,
//       }}
//       animate={{
//         opacity: 1,
//       }}
//       exit={{
//         opacity: 0.7,
//       }}
//       transition={{
//         duration: 1,
//       }}
//       className=" relative

//     h-screen

//     pt-3
//     pb-14
//     w-full
//     overflow-hidden"
//     >
//       {/* Image */}

//       <motion.div
//         initial={{ scale: 1.1 }}
//         animate={{ scale: 1 }}
//         transition={{
//           duration: 8,
//           ease: "easeOut",
//         }}
//         className="absolute inset-0"
//       >
//         <Image
//           src={slide.image}
//           alt={slide.title}
//           fill
//           priority
//           className="object-cover"
//         />
//       </motion.div>

//       {/* Overlay */}

//       <div
//         className="
//           absolute
//           inset-0

//           bg-black/60
//     lg:bg-black/45
//         "
//       />

//       <div
//         className="
//           absolute
//           inset-0

//           bg-linear-to-r
//           from-black/70
//           via-black/30
//           to-transparent
//         "
//       />

//       {/* Content */}

//       <div
//         className="
//           relative
//           z-10

//           mx-auto
//           flex

//           max-w-360

//           min-h-screen
//           items-start

//           px-6
//           pt-30
//           md:pt-32
//           lg:pt-8

//           lg:items-center
//           lg:px-10
//         "
//       >
//         <div className="max-w-4xl">
//           {/* Label */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 20,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.6,
//               delay: 0.2,
//             }}
//             className="
//            inline-flex

//               rounded-full

//               border
//               border-white/20

//               bg-white/10

//               px-5
//               py-2

//               backdrop-blur-md

//             "
//           >
//             <span
//               className="
//                 text-xs
//                 uppercase
//                 tracking-[0.3em]

//                 text-white
//               "
//             >
//               {slide.label}
//             </span>
//           </motion.div>

//           {/* Title */}

//           <motion.h1
//             initial={{
//               opacity: 0,
//               y: 30,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.8,
//               delay: 0.4,
//             }}
//             className="
//               mt-8
//               hidden
//               md:block

//               font-heading
//               font-bold

//               text-white

//               text-[32px]
//               sm:text-5xl
//               lg:text-7xl

//               leading-[0.95]
//             "
//           >
//             {slide.title}
//           </motion.h1>

//           {/* Description */}

//           <motion.p
//             initial={{
//               opacity: 0,
//               y: 30,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.8,
//               delay: 0.6,
//             }}
//             className="
//               mt-8

//               max-w-2xl

//               text-lg
//               leading-relaxed

//               text-white/80
//             "
//           >
//             {slide.description}
//           </motion.p>

//           {/* Buttons */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 30,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.8,
//               delay: 0.8,
//             }}
//             className="
//             mt-10

//             flex
//             flex-col

//             gap-4


//             sm:flex-row
//             w-full
//             sm:w-auto

//             "
//           >
//             <Link
//               href={slide.cta}
//               className="
//                 inline-flex
//                 h-10
//                 sm:h-14
//                 md:h-14
//                 lg:h-14

//                 items-center
//                 justify-center

//                 rounded-full

//                 bg-primary

//                 px-8


//                 font-medium

//                 text-primary-foreground

//               "
//             >
//               Explore Services
//             </Link>

//             <Link
//               href="/who-we-are/contact-us"
//               className="
//                 inline-flex
//                 h-10
//                 sm:h-14
//                 md:h-14
//                 lg:h-14

//                 items-center
//                 justify-center

//                 rounded-full

//                 border
//                 border-white/20

//                 bg-white/10

//                 px-8

//                 text-white

//                 backdrop-blur-md
//               "
//             >
//               Contact Us
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import type { HomeHero } from "@/interface/home";

interface HeroSlideProps {
  slide: HomeHero;
}

export default function HeroSlide({ slide }: HeroSlideProps) {
  return (
    <motion.div
      key={slide.id} // add key here too
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} // exit must be 0 not 0.7 or it stacks
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="absolute inset-0 h-screen w-full overflow-hidden pt-3 pb-14"
    >
      {/* Image */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60 lg:bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-360 min-h-screen items-start px-6 pt-30 md:pt-32 lg:pt-8 lg:items-center lg:px-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-white">
              {slide.label}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 hidden md:block font-heading font-bold text-white text-[32px] sm:text-5xl lg:text-7xl leading-[0.95]"
          >
            {slide.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80"
          >
            {slide.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex-col gap-4 sm:flex-row w-full sm:w-auto"
          >
            <Link href={slide.cta} className="inline-flex h-10 sm:h-14 items-center justify-center rounded-full bg-primary px-8 font-medium text-primary-foreground">
              Explore Services
            </Link>
            <Link href="/who-we-are/contact-us" className="inline-flex h-10 sm:h-14 items-center justify-center rounded-full border-white/20 bg-white/10 px-8 text-white backdrop-blur-md">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
