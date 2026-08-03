"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  HandHelping,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    title: "Passion",
    icon: HeartHandshake,
    color: "text-pius-red",
    bg: "bg-pius-red/5",
    border: "border-pius-red/20",
    text:
      "Love what you do and show it. Passion is the energy that keeps us going. Everyone at PiusVirgin puts his/her heart into work and is passionate about becoming the best marketer they can be.",
  },
  {
    title: "Helpfulness",
    icon: HandHelping,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    text:
      "Lend a hand where you can. Everyone here has different strengths, but we’re all working towards the same goal. Everyone is ready and willing to help each other improve in any way we can.",
  },
  {
    title: "Dependability",
    icon: ShieldCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    text:
      "Know what you need to do and own it. We’re self-motivated, reliable, and do what it takes to get every project done right.",
  },
];

export default function Values() {
  return (
    <section className="bg-slate-50 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span
            className="
              inline-flex
              rounded-full
              bg-pius-red/10
              px-4
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-pius-red
            "
          >
            Our Values Shape Our Culture
          </span>

          <h2
            className="
              mt-8
              text-4xl
              font-black
              text-slate-900
              md:text-6xl
            "
          >
            The Values
            <br />
            That Define Us
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-9
              text-slate-600
            "
          >
            Every member of PiusVirgin shares these principles.
            They influence how we work, how we collaborate,
            and how we serve every client.
          </p>
        </motion.div>

        <div className="mt-24 space-y-8">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                className={`
                  ${value.bg}
                  ${value.border}

                  rounded-[36px]
                  border

                  p-8
                  md:p-12

                  transition

                  hover:shadow-xl
                `}
              >
                <div className="flex flex-col gap-8 md:flex-row md:items-start">
                  <div
                    className="
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center

                      rounded-3xl

                      bg-white
                      shadow-md
                    "
                  >
                    <Icon
                      className={value.color}
                      size={38}
                    />
                  </div>

                  <div className="flex-1">
                    <h3
                      className="
                        text-3xl
                        font-black
                        text-slate-900
                      "
                    >
                      {value.title}
                    </h3>

                    <p
                      className="
                        mt-6
                        max-w-4xl
                        text-lg
                        leading-9
                        text-slate-700
                      "
                    >
                      {value.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
