import WebHero from "@/components/webDev/WebHero";
import StatsSection from "@/components/webDev/StatsSection";
import AboutSection from "@/components/webDev/AboutSection";
import ServicesSection from "@/components/webDev/ServicesSection";
import ProcessSection from "@/components/webDev/ProcessSection";
import WhyChooseUs from "@/components/webDev/WhyChooseUs";
import PortfolioSection from "@/components/webDev/PortfolioSection";
import TechnologyStackSection from "@/components/webDev/TechnologyStackSection";
import TestimonialsSection from "@/components/webDev/TestimonialsSection";
import FAQSection from "@/components/webDev/Faqs";
import CTASection from "@/components/webDev/CTASection";
import StickyCTA from "@/components/webDev/StickyCTA";

export default function WebDevelopmentPage() {
  return (
    <main>
      <WebHero />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUs />
      <PortfolioSection />
      <TechnologyStackSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <StickyCTA/>
    </main>
  );
}
