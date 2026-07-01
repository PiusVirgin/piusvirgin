"use client";

import FadeInAlways from "@/components/motion/FadeInAlways";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="pb-40">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
            grid
            gap-16
            rounded-[40px]
            border
            border-border
            bg-card
            p-8

            lg:grid-cols-[420px_1fr]
            lg:p-16
          "
        >
          {/* LEFT */}

          <FadeInAlways>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-pius-red">
                Get In Touch
              </p>

              <h2
                className="
                  mt-8
                  text-5xl
                  font-black
                  leading-[0.9]
                  tracking-[-0.05em]
              "
              >
                Tell us
                <br />
                about your
                <br />
                project.
              </h2>

              <p className="mt-8 leading-relaxed text-muted-foreground">
                Whether you're looking for transport solutions,
                printing, media, consulting or partnerships,
                we'd love to hear your ideas.
              </p>
            </div>
          </FadeInAlways>

          {/* FORM */}

          <FadeInAlways delay={0.15}>
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Input label="Full Name" />

                <Input label="Email Address" />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Input label="Phone Number" />

                <Input label="Company" />
              </div>

              <Input label="Subject" />

              <div className="relative">
                <textarea
                  rows={7}
                  placeholder=" "
                  className="
                    peer

                    w-full

                    rounded-3xl

                    border

                    border-border

                    bg-transparent

                    px-6

                    pt-8

                    pb-4

                    outline-none

                    transition

                    focus:border-pius-red
                  "
                />

                <label
                  className="
                    absolute

                    left-6
                    top-6

                    bg-card

                    px-1

                    text-muted-foreground

                    transition-all

                    peer-focus:-top-3
                    peer-focus:text-xs
                    peer-focus:text-pius-red

                    peer-[:not(:placeholder-shown)]:-top-3
                    peer-[:not(:placeholder-shown)]:text-xs
                  "
                >
                  Message
                </label>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  inline-flex

                  items-center

                  gap-3

                  rounded-full

                  bg-pius-red

                  px-8

                  py-4

                  font-semibold

                  text-white
                "
              >
                Send Message

                <Send size={18} />
              </motion.button>
            </form>
          </FadeInAlways>
        </div>
      </div>
    </section>
  );
}

function Input({ label }: { label: string }) {
  return (
    <div className="relative">
      <input
        placeholder=" "
        className="
          peer

          w-full

          rounded-full

          border

          border-border

          bg-transparent

          px-6

          pt-7

          pb-3

          outline-none

          transition

          focus:border-pius-red
        "
      />

      <label
        className="
          absolute

          left-6
          top-5

          bg-card

          px-1

          text-muted-foreground

          transition-all

          peer-focus:-top-2
          peer-focus:text-xs
          peer-focus:text-pius-red

          peer-[:not(:placeholder-shown)]:-top-2
          peer-[:not(:placeholder-shown)]:text-xs
        "
      >
        {label}
      </label>
    </div>
  );
}
