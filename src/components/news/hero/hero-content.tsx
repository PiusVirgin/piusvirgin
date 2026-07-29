"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroStats from "./hero-stats";

export default function HeroContent() {
  return (
    <div className="max-w-xl">
      <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.4em] text-primary">
        Media
      </span>

      <h1 className="font-heading text-5xl font-black leading-[0.9] md:text-7xl">
        PiusVirgin
        <br />
        News Online
      </h1>

      <p className="mt-8 text-lg leading-8 text-muted-foreground">
        Our team of professionals are driven to educate, inform, entertain,
        collaborate and preserve today's events for tomorrow's history.
      </p>

      <div className="mt-10 flex items-center gap-4">
        <Button asChild size="lg">
          <Link href="#latest-news">
            Explore Stories
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <HeroStats />
    </div>
  );
}
