"use client";

import FadeInAlways from "@/components/motion/FadeInAlways";
import { heroSlides } from "@/lib/news";
import HeroSlide from "./hero-slide";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-pius-red">
            Latest News
          </p>
        </FadeInAlways>

        <FadeInAlways delay={0.1}>
          <h1
            className="
              mt-6

              max-w-5xl

              text-3xl

              font-black

              leading-[0.9]

              tracking-[-0.05em]

              md:text-7xl
            "
          >
            Stories.
            <br />
            Insights.
            <br />
            Announcements.
          </h1>
        </FadeInAlways>

        <FadeInAlways delay={0.2}>
          <p
            className="
              mt-8

              max-w-2xl

              text-lg

              leading-relaxed

              text-muted-foreground
            "
          >
            Stay informed with the latest company updates,
            transportation insights, media stories,
            events and announcements from
            PiusVirgin Communications.
          </p>
        </FadeInAlways>

        {/* SLIDER */}

        <div className="relative mt-20">
          <Swiper
            modules={[
              Navigation,
              Pagination,
              Autoplay,
            ]}
            slidesPerView={1}
            speed={900}
            loop
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".news-prev",
              nextEl: ".news-next",
            }}
            pagination={{
              clickable: true,
            }}
            className="overflow-hidden rounded-[40px]"
          >
            {heroSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <HeroSlide slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* NAVIGATION */}

          <button
            className="
              news-prev

              absolute

              left-6

              top-1/2

              z-20

              hidden

              -translate-y-1/2

              rounded-full

              border

              border-white/20

              bg-black/30

              p-4

              text-white

              backdrop-blur

              transition

              hover:bg-pius-red

              lg:flex
            "
          >
            <ChevronLeft />
          </button>

          <button
            className="
              news-next

              absolute

              right-6

              top-1/2

              z-20

              hidden

              -translate-y-1/2

              rounded-full

              border

              border-white/20

              bg-black/30

              p-4

              text-white

              backdrop-blur

              transition

              hover:bg-pius-red

              lg:flex
            "
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
