import RevealText from "@/components/reveal-text";
import ImpactMetrics from "../impact-metrics/impact-metrics";

const WhoWeAre = () => {
  return (
    <section
      className="
    relative
    py-20
    pb-0

    bg-[#141eab]
  "
    >
      <h4 className="text-white text-center py-3">Who We Are</h4>
      <div className=" max-w-300 mx-auto  px-3.5 py-7  ">
        <RevealText
          as="h2"
          delay={0.2}
          stagger={0.08}
          start="top 80%"
          className="
          text-3xl
          md:text-6xl
          font-bold
          text-center
          pb-3
          "
        >
          Delivering Energy With Integrity
        </RevealText>
        <RevealText
          as="p"
          delay={0.2}
          stagger={0.08}
          className="
          text-2xl
          md:text-3xl
          font-bold
          my-4
          pb-6
          "
        >
          Pius Virgin surpasses our competitors in meeting the standard of what
          our business consists of in the industry today. We are proud of what
          our clientele have accomplished and ensure that their desires conform
          with statutory guidelines and institutional standards.
        </RevealText>
        <RevealText
          as="p"
          delay={0.3}
          stagger={0.08}
          className="
           text-2xl
           md:text-3xl
           font-bold
           my-4
           pb-6
           "
        >
          Our strength lies in collaboration — creatives working alongside
          technologists, strategists alongside storytellers, and mentors
          alongside innovators.
        </RevealText>
        <RevealText
          as="p"
          delay={0.4}
          stagger={0.08}
          className="
          text-2xl
          md:text-3xl
          font-bold
          my-4
          pb-6
          "
        >
          From Lagos to West Africa, and from Africa to the world, we build with
          clarity, integrity, and vision.
        </RevealText>
        <RevealText
          as="p"
          delay={0.5}
          stagger={0.08}
          className="
          text-2xl
          md:text-3xl
          font-bold
          my-4
          pb-6
          "
        >
          We are a multidisciplinary collective of professionals operating
          across marketing, media, logistics, digital technology, publishing,
          journalism, mentoring, and human development.
        </RevealText>
        <RevealText
          as="p"
          delay={0.6}
          stagger={0.08}
          className="
          text-2xl
          md:text-3xl
          font-bold
          my-4
          pb-6
          mb-6
          "
        >
          Rooted in African realities and guided by global best practices, we
          deliver solutions that are innovative, reliable, and impactful
        </RevealText>
      </div>
      <ImpactMetrics/>
    </section>
  );
};

export default WhoWeAre;
