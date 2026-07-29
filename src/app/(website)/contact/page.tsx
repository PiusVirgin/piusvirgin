// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";

// const BackgroundFX = () => (
//   <div className="absolute inset-0 overflow-hidden">
//     <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-[var(--glow)] blur-[140px]" />
//     <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-[var(--border)] blur-[160px]" />
//     <div className="absolute inset-0 dark:bg-black bg-white" />
//   </div>
// );

// const Card = ({ children }: any) => (
//   <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-xl p-6 transition hover:scale-[1.01] hover:border-[var(--accent)]/30">
//     {children}
//   </div>
// );

// export default function ContactPage() {
//   const [loading, setLoading] = useState(false);

//   return (
//     <main className="relative min-h-screen bg-[var(--bg)] text-[var(--fg)] overflow-hidden">
//       <BackgroundFX />

//       {/* HERO */}
//       <section className="relative px-6 md:px-16 pt-32 pb-20">
//         <div className="max-w-6xl mx-auto">
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-5xl md:text-7xl font-black leading-tight"
//           >
//             Let’s build
//             <span className="block text-[var(--accent)]">something real</span>
//           </motion.h1>

//           <p className="mt-6 max-w-2xl text-[var(--muted)]">
//             Adaptive design system — clean in light mode, cinematic in dark
//             mode.
//           </p>
//         </div>
//       </section>

//       {/* GRID */}
//       <section className="px-6 md:px-16 pb-24">
//         <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
//           {/* LEFT */}
//           <div className="space-y-6">
//             {[
//               ["Response Time", "2–6 hours"],
//               ["Availability", "Mon–Sat"],
//               ["Location", "Nigeria • Global"],
//             ].map(([t, v], i) => (
//               <Card key={i}>
//                 <p className="text-sm text-[var(--muted)]">{t}</p>
//                 <p className="text-lg font-medium">{v}</p>
//               </Card>
//             ))}
//           </div>

//           {/* RIGHT FORM */}
//           <Card>
//             <form className="space-y-4">
//               {["Name", "Email", "Subject"].map((p, i) => (
//                 <input
//                   key={i}
//                   placeholder={p}
//                   className="w-full p-4 rounded-xl bg-transparent border border-[var(--border)] outline-none focus:border-[var(--accent)] transition"
//                 />
//               ))}

//               <textarea
//                 placeholder="Message"
//                 rows={5}
//                 className="w-full p-4 rounded-xl bg-transparent border border-[var(--border)] outline-none focus:border-[var(--accent)] transition"
//               />

//               <button
//                 onClick={() => setLoading(true)}
//                 className="w-full py-4 rounded-xl bg-[var(--fg)] text-[var(--bg)] font-medium hover:scale-[1.02] transition"
//               >
//                 {loading ? "Sending..." : "Send Message"}
//               </button>
//             </form>
//           </Card>
//         </div>
//       </section>
//     </main>
//   );
// }


"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_fz8u4lq",
        "template_7ec2pal",
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "N_9mk8Pvh0tH0_BPD"
      );

      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/20 blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[140px]" />
      </div>

      {/* HERO */}
      <section className="relative pt-32 pb-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs tracking-[0.4em] text-white/50 uppercase"
        >
          Contact • PiusVirgin
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-5xl md:text-7xl font-bold"
        >
          Let’s Build Something
          <span className="block text-red-500">Impactful</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-white/60 max-w-xl mx-auto"
        >
          Whether it’s media, logistics, transport or digital systems — we turn
          ideas into execution.
        </motion.p>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-10">

        {/* LEFT INFO PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h3 className="text-lg font-semibold">Head Office</h3>
            <p className="text-white/60 mt-2">
              Lagos, Nigeria — Global Operations Hub
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-white/60 mt-2">hello@piusvirgin.com</p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h3 className="text-lg font-semibold">Response Time</h3>
            <p className="text-white/60 mt-2">
              Within 24–48 hours (business days)
            </p>
          </div>

          {/* MAP PLACEHOLDER */}
          <div className="h-64 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl space-y-5"
        >
          <h2 className="text-2xl font-semibold">Send a Message</h2>

          <Input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />

          <Input
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Tell us about your project..."
            value={form.message}
            onChange={handleChange}
            className="w-full h-32 p-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-red-500 transition"
          />

          <button
            disabled={loading}
            className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-500 transition font-medium"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400 text-sm">
              Message sent successfully.
            </p>
          )}
        </motion.form>
      </section>

      {/* CTA */}
      <section className="text-center pb-32 px-6">
        <h3 className="text-3xl font-bold">
          Prefer direct collaboration?
        </h3>
        <p className="text-white/60 mt-3">
          We also work with long-term partners and enterprise clients.
        </p>

        <button className="mt-6 px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition">
          Schedule a Call
        </button>
      </section>
    </main>
  );
}

/* INPUT COMPONENT */
function Input({
  name,
  placeholder,
  value,
  onChange,
}: {
  name: string;
  placeholder: string;
  value: string;
  onChange: any;
}) {
  return (
    <input
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-red-500 transition"
    />
  );
}
