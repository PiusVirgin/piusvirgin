import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import CEOSignature from "./ceo-signature";

export default function CEOContent() {
  return (
    <div className="max-w-2xl">
      <span
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-pius-red/20
          bg-pius-red/5
          px-4
          py-2
          text-sm
          font-medium
          text-pius-red
        "
      >
        Since 2000 • Trusted Across Industries
      </span>

      <h1
        className="
          mt-8
          text-3xl

          font-black
          leading-tight
          tracking-tight
          text-slate-900
          md:text-6xl
        "
      >
        Building Trust Through
        <span className="block text-pius-red">
          Communication,
        </span>
        Logistics & Innovation.
      </h1>

      <p
        className="
          mt-8
          text-lg
          leading-9
          text-slate-600
        "
      >
        Founded in 2000 by <strong>Chief Festus Okorie</strong>,
        PiusVirgin Communications Limited has grown into a multidisciplinary
        organization providing transport & logistics, marketing, media,
        publishing, web technologies and business solutions that help
        organizations move faster, communicate better and grow confidently.
      </p>

      <CEOSignature />

      <div className="mt-12 flex flex-wrap gap-4">
        <Button
          asChild
          size="lg"
          className="rounded-full px-8"
        >
          <Link href="/what-we-do">
            Explore Services

            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="rounded-full px-8"
        >
          <Link href="/who-we-are/contact-us">
            Contact Us
          </Link>
        </Button>
      </div>
    </div>
  );
}
