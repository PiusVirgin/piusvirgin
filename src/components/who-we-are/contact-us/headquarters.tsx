"use client";

import FadeInAlways from "@/components/motion/FadeInAlways";
import { MapPin } from "lucide-react";

export default function Headquarters() {
  return (
    <section className="relative pb-44">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
            overflow-hidden

            rounded-[40px]

            border

            border-border
          "
        >
          {/* Placeholder Map */}

          <div
            className="
              flex

              h-[420px]

              items-center

              justify-center

              bg-gradient-to-br

              from-pius-red/10

              via-background

              to-pius-red/5
            "
          >
            <div className="text-center">
              <MapPin
                className="
                  mx-auto

                  h-16

                  w-16

                  text-pius-red
                "
              />

              <h3
                className="
                  mt-8

                  text-4xl

                  font-black
                "
              >
                PiusVirgin Headquarters
              </h3>

              <p className="mt-6 text-muted-foreground">
                Abuja, Nigeria
              </p>
            </div>
          </div>

          {/* Bottom */}

          <div
            className="
              flex

              flex-col

              items-start

              justify-between

              gap-8

              p-10

              md:flex-row

              md:items-center
            "
          >
            <FadeInAlways>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-pius-red">
                  Visit Us
                </p>

                <h3 className="mt-4 text-4xl font-black">
                  We'd love to meet you.
                </h3>
              </div>
            </FadeInAlways>

            <FadeInAlways delay={0.1}>
              <p className="max-w-lg text-muted-foreground">
                Whether you're planning a project, seeking advice or exploring
                partnership opportunities, our doors are always open.
              </p>
            </FadeInAlways>
          </div>
        </div>
      </div>
    </section>
  );
}
