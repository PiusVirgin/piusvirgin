"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const storyBlocks = [
  {
    title: "Foundation",
    text: `Founded by Festus Okorie in 2000, PiusVirgin Communications Limited is registered with the Corporate Affairs Commission in Nigeria...`,
  },
  {
    title: "Growth & Expansion",
    text: `The company has continued to grow and prosper under our organization’s uniqueness, streamlined process and tools...`,
  },
  {
    title: "People First Philosophy",
    text: `Registered with the Corporate Affairs Commission in Nigeria, we are about people first...`,
  },
  {
    title: "Multi-disciplinary Strength",
    text: `Our team spans marketing, media, logistics, transport, publishing, and digital development...`,
  },
  {
    title: "Impact & Integrity",
    text: `Our tradition is to responsibly mobilize and utilize human, financial and modern technological resources...`,
  },
];

const fullStory = `
Founded by Festus Okorie in 2000,{" "} <span className="pius">Pius <span className="virgin">Virgin</span></span> Communications Limited is registered with the Corporate Affairs Commission in Nigeria; as though with assemblage of professionals in marketing and media, transport and logistics, web design and development, computer programming, printing and publishing, news gathering and reporting, Mentoring and human development, it is our responsibility to make sure our decisions are informed by data and not a guessing game, and that we never lose sight of the culture and values that got us here.
 Founded by <strong>Festus Okorie</strong> in 2000,{" "} <span className="pius">Pius <span className="virgin">Virgin</span></span> Communications Limited has continued to grow and prosper under our organization’s uniqueness, streamlined process and tools, focus on client and employee happiness, and our desire to help businesses, institutions and organizations develop a plan that crushes their marketing, sales and corporate goals.
 Registered with the Corporate Affairs Commission in Nigeria, we are about people first. We strive to build long-term, trusting relationships with those we work for, with the goal of delivering excellent services that constantly drive and improve results.
 Our team of professionals are driven to educate, collaborate, and deliver on the value that we promise. As though our assemblage of professionals in marketing and media, news gathering and reporting, transport and logistics, web design and development; printing and publishing; Counselling and Human Development, it is our responsibility to make sure our decisions are informed by data and not a guessing game, and that we never lose sight of the culture and values that got us here.

<span className="pius">Pius <span className="virgin">Virgin</span></span> surpasses our competitors in meeting the standard of what our business consists of in the industry today. We are proud of what our clientele have accomplished and ensure that their desires that conform with statutory guidelines and those of their organizations and institutions are met. We work in alliance with other modal services that provide that first impression that will set our customers ahead of their competitors.

<span className="pius">Pius <span className="virgin">Virgin</span></span> works with small to mid-sized businesses providing the marketing strategy, education, technical expertise, and capabilities you need to acquire new customers. Our data-driven methods make achieving aggressive marketing goals easy – and we’ll make you look like a rock star.
 Our tradition is to responsibly mobilize and utilize human, financial and modern technological resources to identify the truth and provide solutions to prevailing human, media, transportation and logistical problems confronting public and private institutions and their customers without under mining comfort and aspirations. In our tradition of honesty we provide services that add value to your money.
`;

const fullStorySections = [
  {
    title: "The Beginning",
    content: (
      <>
        Founded by Festus Okorie in 2000,{" "}
        <span className="pius">
          Pius <span className="virgin">Virgin</span>
        </span>{" "}
        Communications Limited is registered with the Corporate Affairs
        Commission in Nigeria; as though with assemblage of professionals in
        marketing and media, transport and logistics, web design and
        development, computer programming, printing and publishing, news
        gathering and reporting, Mentoring and human development, it is our
        responsibility to make sure our decisions are informed by data and not a
        guessing game, and that we never lose sight of the culture and values
        that got us here.
      </>
    ),
  },
  {
    title: "Building the Foundation",
    content: (
      <>
        Founded by <strong>Festus Okorie</strong> in 2000,{" "}
        <span className="pius">
          Pius <span className="virgin">Virgin</span>
        </span>{" "}
        Communications Limited has continued to grow and prosper under our
        organization’s uniqueness, streamlined process and tools, focus on
        client and employee happiness, and our desire to help businesses,
        institutions and organizations develop a plan that crushes their
        marketing, sales and corporate goals.
      </>
    ),
  },
  {
    title: "Our Culture",
    content: (
      <>
        Registered with the Corporate Affairs Commission in Nigeria, we are
        about people first. We strive to build long-term, trusting relationships
        with those we work for, with the goal of delivering excellent services
        that constantly drive and improve results. Our team of professionals are
        driven to educate, collaborate, and deliver on the value that we
        promise. As though our assemblage of professionals in marketing and
        media, news gathering and reporting, transport and logistics, web design
        and development; printing and publishing; Counselling and Human
        Development, it is our responsibility to make sure our decisions are
        informed by data and not a guessing game, and that we never lose sight
        of the culture and values that got us here.
      </>
    ),
  },
  {
    title: "Expansion & Modern Era",
    content: (
      <>
        <span className="pius">
          Pius <span className="virgin">Virgin</span>
        </span>{" "}
        surpasses our competitors in meeting the standard of what our business
        consists of in the industry today. We are proud of what our clientele
        have accomplished and ensure that their desires that conform with
        statutory guidelines and those of their organizations and institutions
        are met. We work in alliance with other modal services that provide that
        first impression that will set our customers ahead of their competitors.
        <br /> <br />
        <span className="pius">
          Pius <span className="virgin">Virgin</span>
        </span>{" "}
        works with small to mid-sized businesses providing the marketing
        strategy, education, technical expertise, and capabilities you need to
        acquire new customers. Our data-driven methods make achieving aggressive
        marketing goals easy – and we’ll make you look like a rock star.
        <br />
        Our
        tradition is to responsibly mobilize and utilize human, financial and
        modern technological resources to identify the truth and provide
        solutions to prevailing human, media, transportation and logistical
        problems confronting public and private institutions and their customers
        without undermining comfort and aspirations. In our tradition of
        honesty we provide services that add value to your money.
      </>
    ),
  },
];

export default function AboutPage() {
  const [showFullStory, setShowFullStory] = useState(false);
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/assets/newsLogo1.jpg"
          alt="About Hero"
          fill
          className="object-cover scale-110"
          priority
        />

        {/* cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />

        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-5xl"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">
              Est. 2000 • Nigeria • Global Reach
            </p>

            <h1 className="mt-6 text-6xl md:text-8xl font-black leading-none text-white">
              We Are
              <span className="block text-[var(--color-red)]">PiusVirgin</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              A multidisciplinary powerhouse shaping media, logistics,
              communication, and digital experiences across Africa and beyond.
            </p>

            <div className="mt-10 flex justify-center gap-4">
              <button className="px-8 py-4 rounded-full bg-white text-black hover:scale-105 transition">
                Explore Our Story
              </button>

              <button className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* STORY SECTION */}
      <section className="px-6 md:px-16 py-28">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]"
          >
            Our Foundation
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-4xl md:text-6xl font-bold leading-tight"
          >
            Built on vision, discipline, and purpose since 2000
          </motion.h2>

          {/* SCROLL STORY */}
          {/* <div className="mt-16 space-y-16">
            {storyBlocks.map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="max-w-3xl"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[var(--foreground)]">
                  {block.title}
                </h3>

                <p className="text-lg leading-relaxed text-[var(--muted)]">
                  {block.text}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setShowFullStory(!showFullStory)}
              className="
      px-8 py-4 rounded-full
      border border-white/20
      text-[var(--foreground)]
      hover:bg-white/10
      transition
    "
            >
              {showFullStory ? "Hide Full Story" : "Read Full Company History"}
            </button>
          </div> */}
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-16 space-y-12 max-w-4xl mx-auto"
            >
              {fullStorySections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-white">
                    {section.title}
                  </h3>

                  <p className="text-[var(--muted)] text-lg leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      {/* CORE IDENTITY */}
      <section className="px-6 md:px-16 py-28">
        <div className="max-w-7xl mx-auto">
          {/* header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
              What Drives Us
            </p>

            <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
              Built on principles that never fade
            </h2>
          </motion.div>

          {/* cards grid */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Vision",
                text: "To deliver world-class services that exceed expectations and shape the next generation of global communication.",
              },
              {
                title: "Mission",
                text: "To capture today’s events for tomorrow’s history with precision, creativity, and integrity.",
              },
              {
                title: "Purpose",
                text: "To help organizations succeed by transforming ideas into measurable impact and long-term growth.",
              },
              {
                title: "Philosophy",
                text: "We believe in truth-driven storytelling powered by people, systems, and technology working in harmony.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="
            group
            rounded-[28px]
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            hover:bg-white/10
            transition
          "
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {item.title}
                </h3>

                <p className="text-[var(--muted)] leading-relaxed">
                  {item.text}
                </p>

                <div className="mt-6 h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-[var(--color-red)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* HISTORY TIMELINE */}
      <section className="px-6 md:px-16 py-28 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
              Our Journey
            </p>

            <h2 className="mt-6 text-4xl md:text-6xl font-bold">
              From vision to legacy
            </h2>
          </motion.div>

          <div className="mt-16 space-y-12">
            {[
              {
                year: "2000",
                title: "Foundation",
                text: "PiusVirgin Communications Limited was founded by Festus Okorie with a vision to redefine communication services in Nigeria.",
              },
              {
                year: "2008",
                title: "Expansion",
                text: "We expanded into media, logistics, transport coordination, and digital publishing services.",
              },
              {
                year: "2015",
                title: "Digital Transformation",
                text: "Adopted modern web technologies and began offering full-scale digital communication solutions.",
              },
              {
                year: "Today",
                title: "Multi-sector Agency",
                text: "Operating across multiple industries, delivering integrated solutions across Africa and beyond.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-[120px_1fr] gap-6 items-start"
              >
                <div className="text-[var(--color-red)] text-xl font-bold">
                  {item.year}
                </div>

                <div className="border-l border-white/10 pl-6">
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-[var(--muted)] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* VALUES */}
      <section className="px-6 md:px-16 py-28">
        <div className="max-w-7xl mx-auto">
          {/* header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
              Our Culture
            </p>

            <h2 className="mt-6 text-4xl md:text-6xl font-bold">
              The values that define how we work
            </h2>
          </motion.div>

          {/* grid */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Passion",
                text: "We bring energy and commitment into every project, treating every task as an opportunity to create excellence.",
              },
              {
                title: "Helpfulness",
                text: "We succeed by lifting others—collaboration is at the core of how we build impactful solutions.",
              },
              {
                title: "Dependability",
                text: "We take ownership of outcomes and deliver consistently, no matter the complexity of the task.",
              },
              {
                title: "Integrity",
                text: "We operate with honesty, transparency, and respect in every decision we make.",
              },
              {
                title: "Innovation",
                text: "We embrace modern tools, systems, and creativity to stay ahead in a fast-changing world.",
              },
              {
                title: "Excellence",
                text: "We never settle—we refine, improve, and elevate everything we produce.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="
            group
            rounded-[28px]
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            hover:bg-white/10
            transition
          "
              >
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>

                <p className="text-[var(--muted)] leading-relaxed">
                  {item.text}
                </p>

                <div className="mt-5 h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-[var(--color-red)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="px-6 md:px-16 py-28 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
      max-w-6xl
      mx-auto
      rounded-[40px]
      border border-white/10
      bg-white/5
      backdrop-blur-2xl
      p-10 md:p-16
      text-center
    "
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
            Let’s Work Together
          </p>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold">
            Ready to build something impactful?
          </h2>

          <p className="mt-6 text-[var(--muted)] max-w-2xl mx-auto">
            Whether it’s media, logistics, transport, or digital solutions — we
            help organizations turn ideas into measurable results.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-white text-black hover:scale-105 transition">
              Start a Project
            </button>

            <button className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition">
              Contact Us
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
