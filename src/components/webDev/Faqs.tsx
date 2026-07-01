"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { webDevFaqData } from "@/data/webDevFaqs";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-muted-foreground">
            Everything you need to know before starting a project.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          { webDevFaqData.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-background"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-medium">{item.question}</span>

                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden px-6 pb-6 text-muted-foreground"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
