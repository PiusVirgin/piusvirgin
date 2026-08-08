

import ToursHero from "@/components/tours/excursion-hero";
import ExperienceGallery from "@/components/tours/experience-gallery";
import InquiryForm from "@/components/tours/inquiry-form";
import JourneyExperience from "@/components/tours/journey-experience";
import ToursIntro from "@/components/tours/tours-intro";


export default function ToursPage() {
  return (
    <main>
      <ToursHero />
      <ToursIntro />
      <JourneyExperience />
      <ExperienceGallery/>
      <InquiryForm tourTitle="Excursion for today"/>
    </main>
  );
}
