"use client";

import { motion } from "framer-motion";
import { Building2, MapPin } from "lucide-react";

const locations = [
  {
    icon: MapPin,
    title: "Lagos Headquarters",
    address: [
      "68 Akintola Road",
      "Railway Compound",
      "Ebute Metta",
      "Lagos, Nigeria",
    ],
    badge: "Head Office",
  },
  {
    icon: Building2,
    title: "Orlu Branch",
    address: ["1 Nwonu Road", "Owerre-Ebeiri", "Orlu", "Imo State"],
    badge: "Branch Office",
  },
];

export default function Locations() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-pius-red">
            Our Locations
          </span>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Visit Us
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            With offices in Lagos and Imo State, we're always within reach and
            ready to serve clients across Nigeria and beyond.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {locations.map((location, index) => {
            const Icon = location.icon;

            return (
              <motion.div
                key={location.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                }}
                className="
                  rounded-[36px]
                  border
                  border-slate-200
                  bg-white
                  p-4
                  md:p-10
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                <div className="flex items-center justify-between">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      md:h-16
                      md:w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-pius-red/10
                      text-pius-red
                    "
                  >
                    <Icon size={30} />
                  </div>

                  <span
                    className="
                      rounded-full
                      bg-pius-red/10
                      px-4
                      py-2
                      text-xs
                      font-semibold
                      uppercase
                      tracking-widest
                      text-pius-red
                    "
                  >
                    {location.badge}
                  </span>
                </div>

                <h3 className="mt-8 text-3xl font-bold text-slate-900">
                  {location.title}
                </h3>

                <div className="mt-8 space-y-3">
                  {location.address.map((line) => (
                    <p key={line} className="text-lg leading-8 text-slate-600">
                      {line}
                    </p>
                  ))}
                </div>

                {/* <button
                  disabled
                  className="
                    mt-10
                    rounded-full
                    border
                    border-slate-300
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-slate-400
                    cursor-not-allowed
                  "
                >
                  Google Maps Coming Soon
                </button> */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
