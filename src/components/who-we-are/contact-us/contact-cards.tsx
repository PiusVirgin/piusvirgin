"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+2349050577818\n+2348123677838",
    description: "Speak directly with our team.",
    href: "tel:+2349050577818",
  },
  {
    icon: MessageCircle,
    title: "Whatsapp",
    value: "+2348093140427",
    description: "Start a quick conversation with us.",
    href: "https://wa.me/2348093140427",
  },
  {
    icon: Mail,
    title: "Email",
    value: "piusvirgin@gmail.com",
    description: "We'll reply within one business day.",
    href: "mailto:piusvirgin@gmail.com",
  },
  {
    icon: MapPin,
    title: "Visit Our Headquarters",
    value:
      "68 Akintola Road,\nRailway Compound,\nEbute Metta,\nLagos, Nigeria.",
    description: "Our headquarters welcomes visitors.",
    href: "#",
  },
  {
    icon: Building2,
    title: "Visit Our Branch",
    value: "1 Nwonu Road,\nOwerre-Ebeiri,\nOrlu,\nImo State.",
    description: "Our branch welcomes visitors.",
    href: "#",
  },
];

export default function ContactCards() {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-pius-red">
            Reach Us
          </span>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Multiple Ways To Connect
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you prefer calling, sending an email, visiting our offices,
            or chatting via WhatsApp, we're always happy to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
              >
                <Link
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  className="
                    group
                    relative
                    flex
                    h-full
                    flex-col
                    rounded-[32px]
                    border
                    border-slate-200
                    bg-white
                    p-4
                    md:p-8
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-pius-red/30
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

                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    {card.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      whitespace-pre-line
                      text-lg
                      font-medium
                      leading-8
                      text-slate-700
                    "
                  >
                    {card.value}
                  </p>

                  <p className="mt-5 text-slate-500">{card.description}</p>

                  <div
                    className="
                      mt-auto
                      flex
                      items-center
                      gap-2
                      pt-8
                      font-semibold
                      text-pius-red
                    "
                  >
                    Contact
                    <ArrowUpRight
                      size={18}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
