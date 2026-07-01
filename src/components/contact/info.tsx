// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// export default function ContactPage() {
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await emailjs.send(
//         "service_fz8u4lq",
//         "template_7ec2pal",
//         {
//           name: form.name,
//           email: form.email,
//           subject: form.subject,
//           message: form.message,
//         },
//         "N_9mk8Pvh0tH0_BPD",
//       );

//       setSuccess(true);
//       setForm({ name: "", email: "", subject: "", message: "" });
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-black text-white overflow-hidden">
//       {/* BACKGROUND GLOW */}
//       <div className="absolute inset-0">
//         <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/20 blur-[160px]" />
//         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[140px]" />
//       </div>

//       {/* HERO */}
//       <section className="relative pt-32 pb-20 text-center">
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-xs tracking-[0.4em] text-white/50 uppercase"
//         >
//           Contact • PiusVirgin
//         </motion.p>

//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mt-6 text-5xl md:text-7xl font-bold"
//         >
//           Let’s Build Something
//           <span className="block text-red-500">Impactful</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mt-6 text-white/60 max-w-xl mx-auto"
//         >
//           Whether it’s media, logistics, transport or digital systems — we turn
//           ideas into execution.
//         </motion.p>
//       </section>

//       {/* CONTENT */}
//       <section className="max-w-6xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-10">
//         {/* LEFT INFO PANEL */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           className="space-y-6"
//         >
//           <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
//             <h3 className="text-lg font-semibold">Head Office</h3>
//             <p className="text-white/60 mt-2">
//               Lagos, Nigeria — Global Operations Hub
//             </p>
//           </div>

//           <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
//             <h3 className="text-lg font-semibold">Email</h3>
//             <p className="text-white/60 mt-2">hello@piusvirgin.com</p>
//           </div>

//           <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
//             <h3 className="text-lg font-semibold">Response Time</h3>
//             <p className="text-white/60 mt-2">
//               Within 24–48 hours (business days)
//             </p>
//           </div>

//           {/* MAP PLACEHOLDER */}
//           <div className="h-64 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
//             <iframe
//               className="w-full h-full"
//               src="https://www.google.com/maps/embed?pb=!1m18..."
//               loading="lazy"
//             />
//           </div>
//         </motion.div>

//         {/* RIGHT FORM */}
//         <motion.form
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl space-y-5"
//         >
//           <h2 className="text-2xl font-semibold">Send a Message</h2>

//           <Input
//             name="name"
//             placeholder="Your Name"
//             value={form.name}
//             onChange={handleChange}
//           />

//           <Input
//             name="email"
//             placeholder="Email Address"
//             value={form.email}
//             onChange={handleChange}
//           />

//           <Input
//             name="subject"
//             placeholder="Subject"
//             value={form.subject}
//             onChange={handleChange}
//           />

//           <textarea
//             name="message"
//             placeholder="Tell us about your project..."
//             value={form.message}
//             onChange={handleChange}
//             className="w-full h-32 p-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-red-500 transition"
//           />

//           <button
//             disabled={loading}
//             className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-500 transition font-medium"
//           >
//             {loading ? "Sending..." : "Send Message"}
//           </button>

//           {success && (
//             <p className="text-green-400 text-sm">Message sent successfully.</p>
//           )}
//         </motion.form>
//       </section>

//       {/* CTA */}
//       <section className="text-center pb-32 px-6">
//         <h3 className="text-3xl font-bold">Prefer direct collaboration?</h3>
//         <p className="text-white/60 mt-3">
//           We also work with long-term partners and enterprise clients.
//         </p>

//         <button className="mt-6 px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition">
//           Schedule a Call
//         </button>
//       </section>
//     </main>
//   );
// }

// /* INPUT COMPONENT */
// function Input({
//   name,
//   placeholder,
//   value,
//   onChange,
// }: {
//   name: string;
//   placeholder: string;
//   value: string;
//   onChange: any;
// }) {
//   return (
//     <input
//       name={name}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       className="w-full p-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-red-500 transition"
//     />
//   );
// }


// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function ContactPage() {
//   const [loading, setLoading] = useState(false);

//   return (
//     <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
//       {/* Ambient background glow */}
//       <div className="absolute inset-0">
//         <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-red-500/10 blur-[120px]" />
//         <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-white/5 blur-[120px]" />
//       </div>

//       {/* HERO */}
//       <section className="relative pt-32 pb-20 px-6 md:px-16">
//         <div className="max-w-6xl mx-auto">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="uppercase tracking-[0.3em] text-xs text-white/50"
//           >
//             Contact / Collaboration
//           </motion.p>

//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mt-6 text-5xl md:text-7xl font-black leading-[1.05]"
//           >
//             Let’s build something
//             <span className="block text-[var(--color-red)]">remarkable</span>
//           </motion.h1>

//           <p className="mt-6 text-lg text-white/60 max-w-2xl">
//             Whether it’s media, logistics, or digital systems — we respond
//             within 24 hours and treat every message as a priority.
//           </p>
//         </div>
//       </section>

//       {/* MAIN GRID */}
//       <section className="px-6 md:px-16 pb-32">
//         <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">

//           {/* LEFT: CONTACT INTENT */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="space-y-6"
//           >
//             <h2 className="text-2xl font-semibold">
//               Multiple ways to reach us
//             </h2>

//             {[
//               {
//                 title: "Email Response",
//                 value: "24 hours max",
//               },
//               {
//                 title: "Location",
//                 value: "Nigeria • Global operations",
//               },
//               {
//                 title: "Support",
//                 value: "Mon – Sat",
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
//               >
//                 <p className="text-white/60 text-sm">{item.title}</p>
//                 <p className="text-lg font-medium mt-1">{item.value}</p>
//               </div>
//             ))}

//             {/* floating CTA */}
//             <div className="pt-6">
//               <div className="p-6 rounded-2xl bg-gradient-to-r from-red-500/10 to-white/5 border border-white/10">
//                 <p className="text-sm text-white/60">
//                   Prefer direct conversation?
//                 </p>
//                 <p className="text-lg font-semibold mt-1">
//                   We respond faster on email
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* RIGHT: FORM CARD */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="relative"
//           >
//             <div className="p-8 md:p-10 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">

//               <h3 className="text-xl font-semibold mb-6">
//                 Start a conversation
//               </h3>

//               <form className="space-y-5">
//                 <input
//                   type="text"
//                   placeholder="Your name"
//                   className="w-full p-4 rounded-xl bg-transparent border border-white/10 focus:border-red-500 outline-none transition"
//                 />

//                 <input
//                   type="email"
//                   placeholder="Email address"
//                   className="w-full p-4 rounded-xl bg-transparent border border-white/10 focus:border-red-500 outline-none transition"
//                 />

//                 <input
//                   type="text"
//                   placeholder="Subject"
//                   className="w-full p-4 rounded-xl bg-transparent border border-white/10 focus:border-red-500 outline-none transition"
//                 />

//                 <textarea
//                   placeholder="Tell us about your project..."
//                   rows={5}
//                   className="w-full p-4 rounded-xl bg-transparent border border-white/10 focus:border-red-500 outline-none transition resize-none"
//                 />

//                 <button
//                   onClick={() => setLoading(true)}
//                   type="submit"
//                   className="w-full py-4 rounded-xl bg-white text-black font-medium hover:scale-[1.02] transition active:scale-95"
//                 >
//                   {loading ? "Sending..." : "Send Message"}
//                 </button>
//               </form>

//               <p className="text-xs text-white/40 mt-4 text-center">
//                 We usually respond within a few hours.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* FOOTER STRIP */}
//       <section className="px-6 md:px-16 pb-20">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

//           {[
//             { title: "Email", value: "hello@piusvirgin.com" },
//             { title: "Phone", value: "+234 XXX XXX XXXX" },
//             { title: "Social", value: "Instagram • LinkedIn • X" },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
//             >
//               <p className="text-sm text-white/50">{item.title}</p>
//               <p className="text-lg font-medium mt-1">{item.value}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }




"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">

      {/* 🌌 CINEMATIC BACKGROUND FIELD */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] bg-red-500/10 blur-[140px] top-[-200px] left-[-200px] animate-pulse" />
        <div className="absolute w-[700px] h-[700px] bg-white/5 blur-[160px] bottom-[-250px] right-[-200px]" />

        {/* moving light sweep */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)] animate-pulse" />
      </div>

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center px-6 md:px-16">
        <div className="max-w-6xl mx-auto w-full">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.4em] text-white/40"
          >
            Transmission Channel
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-6xl md:text-8xl font-black leading-[0.95]"
          >
            Let’s build
            <span className="block text-[var(--color-red)]">something alive</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-white/60 text-lg"
          >
            Every message enters our system, gets routed, and receives human attention.
            We respond within hours — not days.
          </motion.p>

          {/* floating status chips */}
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Avg response: 2–6 hours",
              "Available: Mon–Sat",
              "Global operations",
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 backdrop-blur-xl"
              >
                {t}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOATING CONTACT GRID */}
      <section className="px-6 md:px-16 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          {[
            { title: "Email", value: "hello@piusvirgin.com" },
            { title: "Phone", value: "+234 XXX XXX XXXX" },
            { title: "Location", value: "Lagos • Nigeria" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10"
            >
              <p className="text-sm text-white/40">{item.title}</p>
              <p className="text-lg font-medium mt-1">{item.value}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* MAIN EXPERIENCE */}
      <section className="px-6 md:px-16 pb-32">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* LEFT STORY */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold">
              Why people contact us
            </h2>

            {[
              "We turn ideas into operational systems",
              "We build across media, logistics & digital platforms",
              "We respond like a product team, not a mailbox",
            ].map((t, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <p className="text-white/70">{t}</p>
              </div>
            ))}

            {/* cinematic accent */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-red-500/10 to-transparent border border-white/10">
              <p className="text-sm text-white/50">
                We don’t just reply — we build relationships.
              </p>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative p-10 rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden">

              {/* subtle animated glow inside card */}
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,rgba(255,0,0,0.15),transparent_60%)]" />

              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-6">
                  Initiate transmission
                </h3>

                <form className="space-y-5">
                  {["Name", "Email", "Subject"].map((p, i) => (
                    <input
                      key={i}
                      placeholder={p}
                      className="w-full p-4 rounded-xl bg-transparent border border-white/10 focus:border-red-500 outline-none transition"
                    />
                  ))}

                  <textarea
                    placeholder="Message"
                    rows={5}
                    className="w-full p-4 rounded-xl bg-transparent border border-white/10 focus:border-red-500 outline-none resize-none"
                  />

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setLoading(true)}
                    className="w-full py-4 rounded-xl bg-white text-black font-medium"
                  >
                    {loading ? "Sending..." : "Send Transmission"}
                  </motion.button>

                  <p className="text-xs text-white/40 text-center">
                    Secure channel • End-to-end processing
                  </p>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FINAL CTA STRIP */}
      <section className="px-6 md:px-16 pb-20">
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="max-w-6xl mx-auto p-10 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Every great system starts with a message
          </h2>

          <p className="mt-4 text-white/60">
            We’re ready when you are.
          </p>
        </motion.div>
      </section>

    </main>
  );
}
