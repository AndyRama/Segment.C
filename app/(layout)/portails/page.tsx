import PortesSection  from "@/features/portes/portes-component";
import PortesHero  from "@/features/portes/hero";
// import { SectionDivider } from "@/features/landing/section-divider";

export default function Portes() {
  return (
    <>
      <PortesHero />
      {/* <SectionDivider /> */}
      <PortesSection />
    </>
  );
}