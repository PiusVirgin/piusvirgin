import Hero from "@/components/who-we-are/hero";
import Story from "@/components/who-we-are/story";
import Vision from "@/components/who-we-are/vision";
import Mission from "@/components/who-we-are/mission";
import Purpose from "@/components/who-we-are/purpose";
import Philosophy from "@/components/who-we-are/philosophy";
import CallToAction from "@/components/who-we-are/call-to-action";

export default function WhoWeArePage() {
  return (
    <>
      <Hero />
      <Story/>
      <Vision/>
      <Mission />
      <Purpose />
      <Philosophy />
      <CallToAction/>
    </>
  );
}
