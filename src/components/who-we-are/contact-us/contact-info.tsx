"use client";

import FadeInAlways from "@/components/motion/FadeInAlways";
import { motion } from "framer-motion";

import { Phone, Mail, MapPin } from "lucide-react";

import { contactCards } from "@/lib/contact";

const icons = [Phone, Mail, MapPin];

export default function ContactInfo() {
  return (
    <section className="pb-32">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
        {contactCards.map((card, index) => {
          const Icon = icons[index];

          return (
            <FadeInAlways key={card.title} delay={index * 0.15}>
              <motion.div
                whileHover={{
                  y: -8,
                }}
                className="
                  rounded-[32px]

                  border

                  border-border

                  p-10
                "
              >
                <Icon className="h-8 w-8 text-pius-red" />

                <h3 className="mt-8 text-3xl font-bold">
                  {card.title}
                </h3>

                <p className="mt-5 font-medium">
                  {card.value}
                </p>

                <p className="mt-4 text-muted-foreground">
                  {card.description}
                </p>
              </motion.div>
            </FadeInAlways>
          );
        })}
      </div>
    </section>
  )
}
