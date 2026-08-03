import HomeCTA from "@/components/home/home-cta";
import Reasons from "@/components/home/reasons";
import ServicesShowcase from "@/components/home/services-showcase/services-showcase";
import WhoWeAre from "@/components/home/who-we-are/who-we-are";
import CEOHero from "@/components/home/ceo/ceo-hero";


const HomePage = () => {
  return (
    <>
      <CEOHero/>
      <WhoWeAre />
      <ServicesShowcase />
      <Reasons />
      <HomeCTA />
    </>
  );
};

export default HomePage;
