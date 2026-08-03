"use client";

import { Send } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <section id="contact-form" className="bg-white py-15 md:py-22">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[420px_1fr]">
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
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
              Let's Talk
            </span>

            <h2
              className="
                mt-8
                text-3xl
                font-black
                leading-tight
                text-slate-900
                md:text-5xl
              "
            >
              We'd Love
              <br />
              To Hear
              <span className="text-pius-red"> From You.</span>
            </h2>

            <p
              className="
                mt-8
                text-lg
                leading-9
                text-slate-600
              "
            >
              Whether you're making an enquiry, requesting a quotation, or
              simply looking for more information, our team is always ready to
              assist you.
            </p>

            <div
              className="
                mt-12
                rounded-[32px]
                bg-slate-50
                p-8
              "
            >
              <h3 className="font-bold text-slate-900">Why Contact Us?</h3>

              <ul
                className="
                  mt-6
                  space-y-4
                  text-slate-600
                "
              >
                <li>✓ Professional guidance</li>

                <li>✓ Fast response time</li>

                <li>✓ Experienced consultants</li>

                <li>✓ Trusted for over 25 years</li>
              </ul>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              rounded-[40px]
              border
              border-slate-200
              bg-white
              p-8
              shadow-xl
              md:p-10
            "
          >
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Input placeholder="Full Name" />

                <Input type="email" placeholder="Email Address" />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Input placeholder="Phone Number" />

                <Input placeholder="Subject" />
              </div>

              <Textarea rows={8} placeholder="Tell us how we can help you..." />

              <Button
                type="submit"
                className="
                  h-14
                  w-full
                  rounded-full
                  bg-pius-red
                  text-base
                  font-semibold
                  hover:bg-pius-red/90
                "
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
