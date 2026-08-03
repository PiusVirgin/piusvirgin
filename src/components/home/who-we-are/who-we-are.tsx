"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "Marketing & Media",
  "Transport & Logistics",
  "Technology Solutions",
  "Printing & Publishing",
  "Mentorship & Human Development",
];

export default function WhoWeAre() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-pius-red/10

              px-4
              py-2

              text-sm
              font-semibold

              uppercase

              tracking-[0.2em]

              text-pius-red
            "
          >
            <span className="h-2 w-2 rounded-full bg-pius-red" />
            Who We Are
          </span>

          <h2
            className="
              mt-8

              text-4xl
              font-black

              leading-tight

              text-slate-900

              md:text-6xl
            "
          >
            Delivering Excellence
            <br />
            Since 2000
          </h2>

          <p
            className="
              mt-8

              text-lg

              leading-8

              text-slate-600
            "
          >
            PiusVirgin Communications Limited is a multidisciplinary
            organization providing innovative solutions across logistics,
            marketing, media, technology, publishing, and human development. Our
            commitment is to deliver reliable services backed by experience,
            professionalism, and lasting partnerships.
          </p>
        </div>

        {/* Content */}

        <div
          className="
            mt-20

            grid

            gap-16

            lg:grid-cols-2
            lg:items-center
          "
        >
          {/* Left */}

          <div>
            <h3 className="text-3xl font-black text-slate-900">
              Built on Integrity.
              <br />
              Driven by Innovation.
            </h3>

            <p className="mt-6 leading-8 text-slate-600">
              Founded by Chief Festus Okorie in 2000, PiusVirgin has grown into
              a trusted organization serving businesses and individuals across
              Nigeria, West Africa, and beyond.
            </p>

            <div className="mt-10 grid gap-5">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle2 className="h-6 w-6 text-pius-red shrink-0" />

                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/who-we-are/our-history"
              className="
                mt-10

                inline-flex
                items-center
                gap-3

                rounded-full

                bg-pius-red

                px-7
                py-4

                font-semibold

                text-white

                transition-all
                duration-300

                hover:translate-x-1
              "
            >
              Discover Our Story
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right */}

          <div className="relative">
            {/* Background shape */}

            <div
              className="
                absolute
                -left-6
                -top-6

                h-full
                w-full

                rounded-[40px]

                bg-pius-red/10
              "
            />

            {/* Main Image */}

            <div
              className="
                relative

                overflow-hidden

                rounded-[40px]

                bg-white

                shadow-2xl
              "
            >
              <Image
                src="/images/who-we-are.png"
                alt="PiusVirgin Communications"
                width={800}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Card */}

            <div
              className="
                absolute

                -bottom-8
                left-8

                rounded-3xl

                bg-white

                px-8
                py-6

                shadow-xl
                hidden
                md:block
              "
            >
              <h3 className="text-4xl font-black text-pius-red">25+</h3>

              <p className="mt-2 text-sm text-slate-600">Years of Excellence</p>
            </div>

            {/* Floating Card */}

            <div
              className="
                absolute

                right-8
                top-8

                rounded-3xl

                bg-white

                px-8
                py-6

                shadow-xl
                hidden
                md:block
              "
            >
              <h3 className="text-4xl font-black text-pius-red">1000+</h3>

              <p className="mt-2 text-sm text-slate-600">Successful Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
