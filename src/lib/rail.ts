import { ShieldCheck, Shield, Users, Radio } from "lucide-react";

export const railFeatures = [
  {
    id: "01",
    title: "Maximum Security",
    description:
      "Every rail journey is supported by trained personnel and coordinated security agencies, ensuring passengers travel with confidence from departure to arrival.",
    image: "/images/train2.png",
  },

  {
    id: "02",
    title: "Affordable Transportation",
    description:
      "Rail offers one of the most cost-effective means of transporting individuals, families and organizations across Nigeria.",
    image: "/images/train3.png",
  },

  {
    id: "03",
    title: "Comfort & Reliability",
    description:
      "Spacious seating, smooth journeys and dependable schedules provide an enjoyable travel experience for every passenger.",
    image: "/images/rail-comfort.jpg",
  },

  {
    id: "04",
    title: "Nationwide Coverage",
    description:
      "Connecting major cities and destinations while supporting tourism, education and business across Nigeria.",
    image: "/images/train4.png",
  },

  {
    id: "05",
    title: "Excursions & Group Travel",
    description:
      "Specially organized rail experiences for schools, institutions, families and corporate organizations.",
    image: "/images/train6.jpg",
  },
];

export const railJourney = [
  {
    step: "01",
    title: "Book Your Journey",
    description:
      "Reserve your preferred seat quickly through our booking channels.",
  },
  {
    step: "02",
    title: "Arrive at the Station",
    description:
      "Our stations are organized for fast check-in and passenger convenience.",
  },
  {
    step: "03",
    title: "Security Screening",
    description:
      "Every passenger undergoes professional safety checks before departure.",
  },
  {
    step: "04",
    title: "Enjoy the Ride",
    description:
      "Travel comfortably with scenic views, spacious seating and reliable schedules.",
  },
  {
    step: "05",
    title: "Reach Your Destination",
    description:
      "Arrive safely and on time with our trusted railway operations.",
  },
];

export const safetyFeatures = [
  {
    icon: ShieldCheck,
    title: "Nigerian Police Support",
    description:
      "Every journey is supported by trained security personnel in partnership with the Nigerian Police Force.",
  },
  {
    icon: Shield,
    title: "24/7 Protection",
    description:
      "Continuous monitoring before departure, during transit and upon arrival ensures every passenger feels secure.",
  },
  {
    icon: Radio,
    title: "Real-Time Communication",
    description:
      "Our operations teams maintain constant communication with train crews and stations throughout each trip.",
  },
  {
    icon: Users,
    title: "Passenger Assistance",
    description:
      "Friendly professionals are available to guide passengers, respond to emergencies and provide assistance whenever needed.",
  },
];

export const destinations = [
  {
    city: "Lagos → Ibadan",
    time: "2hrs 30mins",
    image: "/images/routes-lagos.jpg",
    description:
      "Nigeria's busiest passenger corridor connecting commerce with culture.",
  },

  {
    city: "Abuja → Kaduna",
    time: "2hrs",
    image: "/images/routes-abuja.jpg",
    description:
      "Fast, secure and reliable transportation between the nation's capital and northern hub.",
  },

  {
    city: "Warri → Itakpe",
    time: "3hrs",
    image: "/images/routes-warri.jpg",
    description:
      "A scenic railway experience through Nigeria's industrial heartland.",
  },

  {
    city: "Port Harcourt",
    time: "Coming Soon",
    image: "/images/routes-port.jpg",
    description: "Expanding our railway network to connect more cities.",
  },

  {
    city: "Kano",
    time: "Coming Soon",
    image: "/images/routes-kano.jpg",
    description: "Future routes designed for faster nationwide mobility.",
  },
];
