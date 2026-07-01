"use client";

import FadeInAlways from "@/components/motion/FadeInAlways";
import { Clock3, CalendarDays, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Clock3,
    title: "Office Hours",
    value: "Mon - Fri",
    description: "8:00 AM — 5:00 PM",
  },
  {
    icon: CalendarDays,
    title: "Response Time",
    value: "Within 24 Hours",
    description: "We respond promptly to every enquiry.",
  },
  {
    icon: ShieldCheck,
    title: "Support",
    value: "Professional Assistance",
    description:
      "Our team is available to guide you through every stage of your request.",
  },
];

export default function BusinessHours() {
  return (
    <section className="pb-40">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInAlways>
          <p className="text-xs uppercase tracking-[0.35em] text-pius-red">
            Availability
          </p>

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
            We're here
            <br />
            when you need us.
          </h2>
        </FadeInAlways>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-[32px]

                  border

                  border-border

                  p-10

                  transition-all

                  duration-500

                  hover:-translate-y-2

                  hover:border-pius-red/40
                "
              >
                <Icon className="h-10 w-10 text-pius-red" />

                <h3 className="mt-8 text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-6 text-xl font-semibold">
                  {item.value}
                </p>

                <p className="mt-4 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
