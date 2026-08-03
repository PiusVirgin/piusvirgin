"use client";

import ServiceShowcase from "./service-showcase";

const services = [
  {
    title: "Printing & Publishing",
    subtitle: "Division One",
    image: "/images/service-printing2.png",
    href: "/what-we-do/printing-publishing",
    description:
      "Providing professional printing, publishing, books, magazines, brochures, calendars and other communication materials that help organizations present themselves with excellence.",
  },
  {
    title: "Tours & Excursion",
    subtitle: "Division Two",
    image: "/images/service-tour.png",
    href: "/what-we-do/tours-excursion",
    reverse: true,
    description:
      "Educational excursions, railway tourism, holiday experiences and organized trips carefully designed for students, families and business executives.",
  },
  {
    title: "Rail Transportation",
    subtitle: "Division Three",
    image: "/images/service-rail.png",
    href: "/what-we-do/rail",
    description:
      "Safe, reliable and organized railway travel with security, comfort and professionalism at every stage of the journey.",
  },
];

export default function ServicesSection() {
  return (
    <>
      {services.map((service) => (
        <ServiceShowcase key={service.title} {...service} />
      ))}
    </>
  );
}
