import FenetresSection  from "@/features/window/fenetre-component";
import FenetresHero  from "@/features/window/hero";
import { SectionDivider } from "@/features/landing/section-divider";

export default function Portes() {
  return (
    <>
      <FenetresHero />
      <SectionDivider />
      <FenetresSection />
    </>
  );
}