"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TourService } from "@/types/tours";

import {
  Landmark,
  Building2,
  Trees,
  Mountain,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const icons = {
  culture: Landmark,
  city: Building2,
  nature: Trees,
  adventure: Mountain,
  education: GraduationCap,
  corporate: Briefcase,
} as const;

type IconKey = keyof typeof icons;

interface Props {
  service: TourService;
}

export default function ServiceCard({ service }: Props) {
  const Icon = icons[service.icon as keyof typeof icons];

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group overflow-hidden rounded-3xl border bg-background"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      <div className="space-y-5 p-8">
        <Icon className="size-8" />

        <Link
          href={`/what-we-do/tours-excursion/${service.slug}`}
          className="inline-flex items-center font-medium"
        >
          <h3 className="text-2xl font-semibold">{service.title}</h3>
        </Link>

        <p className="text-muted-foreground">{service.description}</p>

        <Link
          href={`/what-we-do/tours-excursion/${service.slug}`}
          className="inline-flex items-center font-medium"
        >
          Explore →
        </Link>
      </div>
    </motion.div>
  );
}
