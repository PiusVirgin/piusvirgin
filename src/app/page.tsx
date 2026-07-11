"use client";

import dynamic from "next/dynamic";

import HomeCTA from "@/components/home/home-cta";
import ImpactMetrics from "@/components/home/impact-metrics/impact-metrics";
import HomeIndustries from "@/components/home/industries";
import Reasons from "@/components/home/reasons";
import ServicesShowcase from "@/components/home/services-showcase/services-showcase";
import HomeTransport from "@/components/home/transport";
import WhoWeAre from "@/components/home/who-we-are/who-we-are";

const HeroSection = dynamic(
  () => import("@/components/home/hero/hero-section"),
  {
    ssr: false,
  },
);

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <ServicesShowcase />
      <HomeTransport />
      <Reasons />
      <HomeIndustries />
      <HomeCTA />
    </>
  );
};

export default HomePage;
