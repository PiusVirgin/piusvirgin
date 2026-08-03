"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CompanyProfile() {
  return (
    <section className="bg-slate-50 py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
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
            Company Profile
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
            Growing Through Consistency, Trust & Innovation.
          </h2>

          <div className="mt-10 h-1 w-24 rounded-full bg-pius-red" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
            mt-16
            space-y-10
            text-lg
            leading-9
            text-slate-600
          "
        >
          <p>
            Founded by Festus Okorie in 2000, PiusVirgin Communications Limited
            has continued to grow and prosper under our organization’s
            uniqueness, streamlined process and tools, focus on client and
            employee happiness, and our desire to help businesses, institutions
            and organizations develop a plan that crushes their marketing, sales
            and corporate goals.
          </p>

          <p>
            Registered with the Corporate Affairs Commission in Nigeria, we are
            about people first. We strive to build long-term, trusting
            relationships with those we work for, with the goal of delivering
            excellent services that constantly drive and improve results.
          </p>

          <p>
            Our team of professionals are driven to educate, collaborate, and
            deliver on the value that we promise. As though our assemblage of
            professionals in marketing and media, news gathering and reporting,
            transport and logistics, web design and development; printing and
            publishing; Counselling and Human Development, it is our
            responsibility to make sure our decisions are informed by data and
            not a guessing game, and that we never lose sight of the culture and
            values that got us here.
          </p>

          <p>
            PiusVirgin surpasses our competitors in meeting the standard of what
            our business consists of in the industry today. We are proud of what
            our clientele have accomplished and ensure that their desires that
            conform with statutory guidelines and those of their organizations
            and institutions are met. We work in alliance with other modal
            services that provide that first impression that will set our
            customers ahead of their competitors.
          </p>

          <p>
            PiusVirgin works with small to mid-sized businesses providing the
            marketing strategy, education, technical expertise, and capabilities
            you need to acquire new customers. Our data-driven methods make
            achieving aggressive marketing goals easy – and we’ll make you look
            like a rock star.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 overflow-hidden rounded-[42px] shadow-2xl"
        >
          <Image
            src="/images/service-news.png"
            alt="PiusVirgin Communications"
            width={1400}
            height={900}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
