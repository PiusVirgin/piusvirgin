"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock3, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Clock3,
    title: "Office Hours",
    value: "Monday — Friday",
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
    title: "Professional Support",
    value: "Always Ready To Help",
    description:
      "Our team is available to guide you through every stage of your request.",
  },
];

export default function OfficeInfo() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-pius-red
            "
          >
            We're Here For You
          </span>

          <h2
            className="
              mt-4
              text-4xl
              font-black
              text-slate-900
              md:text-5xl
            "
          >
            Reliable Support,
            <br />
            Every Step Of The Way
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-600
            "
          >
            We value every enquiry and strive to provide timely, professional
            assistance whenever you reach out.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                className="
                  group
                  rounded-[32px]
                  border
                  border-slate-200
                  bg-slate-50
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-pius-red/30
                  hover:bg-white
                  hover:shadow-2xl
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-pius-red/10
                    text-pius-red
                    transition-transform
                    duration-300
                    group-hover:rotate-6
                  "
                >
                  <Icon size={30} />
                </div>

                <h3
                  className="
                    mt-8
                    text-2xl
                    font-bold
                    text-slate-900
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-5
                    text-xl
                    font-semibold
                    text-pius-red
                  "
                >
                  {item.value}
                </p>

                <p
                  className="
                    mt-4
                    leading-8
                    text-slate-600
                  "
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
