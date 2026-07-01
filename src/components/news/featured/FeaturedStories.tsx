"use client";

import FadeInAlways from "@/components/motion/FadeInAlways";
import { featuredStories } from "@/lib/news";

import FeaturedHero from "./FeaturedHero";
import StoryCard from "./StoryCard";

export default function FeaturedStories() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <FadeInAlways>
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-6">
              <div className="h-px w-16 bg-border" />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.35em]
                  text-pius-red
                "
              >
                Featured Stories
              </span>

              <div className="h-px w-16 bg-border" />
            </div>

            <h2
              className="
                mt-8
                text-4xl
                font-black
                md:text-6xl
              "
            >
              Stories shaping conversations.
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                text-muted-foreground
              "
            >
              Discover the stories making the biggest impact across
              transportation, media, marketing and corporate development.
            </p>
          </div>
        </FadeInAlways>

        {/* Hero */}

        <FeaturedHero story={featuredStories[0]} />

        {/* Cards */}

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuredStories.slice(1).map((story) => (
            <StoryCard key={story.title} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}
