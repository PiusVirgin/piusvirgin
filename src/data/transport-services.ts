import { TransportService } from "@/types/transport";

export const transportServices: TransportService[] = [
  {
    id: "1",

    slug: "relocation-moving-services",

    title: "Relocation & Moving Services",

    category: "Logistics",

    image: "/assets/transService1.png",

    description:
      "Professional home, office and industrial relocation services across Nigeria.",

    highlights: [
      "Home Moving",
      "Office Relocation",
      "Industrial Relocation",
      "Packing & Unpacking",
    ],

    content: [
      "We provide reliable relocation services for homes, offices and industries.",
      "Our experienced logistics team ensures secure transportation and timely delivery.",
    ],

    cta: "Request a Quote",
  },

  {
    id: "2",

    slug: "ocean-freight",

    title: "Ocean Freight",

    category: "Shipping",

    image: "/assets/transService2.png",

    description:
      "Reliable global shipping solutions for businesses and individuals.",

    highlights: ["FCL Shipping", "LCL Shipping", "Break Bulk", "Project Cargo"],

    content: [
      "Our ocean freight network connects Nigeria with global markets.",
      "We provide cost-effective and secure maritime transportation.",
    ],

    cta: "Get Shipping Quote",
  },

  {
    id: "3",

    slug: "air-freight",

    title: "Air Freight",

    category: "Express Logistics",

    image: "/assets/transService3.png",

    description:
      "Fast international air freight services with global coverage.",

    highlights: [
      "Express Delivery",
      "Cargo Handling",
      "Customs Support",
      "Door-to-Door Delivery",
    ],

    content: [
      "Our air freight solutions ensure speed, reliability and visibility.",
      "Perfect for urgent and time-sensitive shipments.",
    ],

    cta: "Book Air Freight",
  },
];
