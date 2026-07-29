// import Container from "@/components/layout/container";

// import TransportHero from "@/components/transport/transport-hero";
// import TransportFeatures from "@/components/transport/transport-features";

// export default function TransportPage() {
//   return (
//     <>
//       <TransportHero
//         title="Logistics & Transportation"
//         image="/assets/transHero.png"
//       />

//       <Container>
//         <TransportFeatures />
//       </Container>
//     </>
//   );
// }

import TransportHero from "@/components/transport/transport-hero";
import TransportWelcome from "@/components/transport/transport-welcome";
import TransportValues from "@/components/transport/transport-values";
import TransportServices from "@/components/transport/transport-services";

export default function TransportPage() {
  return (
    <>
      <TransportHero
        title="Logistics & Transportation"
        image="/assets/transHero.png"
      />

      <TransportWelcome />

      <TransportValues />

      <TransportServices />
    </>
  );
}
