import { CTAImageSection } from "@/features/landing/cta/cta-image-section";
import { FAQSection } from "@/features/landing/faq-section";
import HeroAnimation from "@/features/landing/hero-animation";
import { LandingHeader } from "@/features/landing/landing-header";
import { ReviewGrid } from "@/features/landing/review/review-grid";
import { SectionDivider } from "@/features/landing/section-divider";
import { AboutSection } from "@/features/landing/about-section";
import { CardGrid } from "@/features/landing/card-grid";
import { GallerySection } from "@/features/landing/gallery-section";
import { ProcessSection } from "@/features/landing/process-section";
import { ServiceAreaSection } from "@/features/landing/services-area-section";
import { Partenaire } from "@/features/landing/partenaire";
import { RecentPosts } from "@/features/landing/recent-posts";
import { ServiceVilleSection } from '@/features/villes/service-ville-section';
import { Footer } from "@/features/layout/footer";
import {
  saintJeanDIllacData,
  type VilleData,
} from '@/features/villes/data';

type VillesDataMap = Record<string, VilleData | undefined>;

// Map des données par ville
const villesData: VillesDataMap = {
  'saint-jean-d-illac': saintJeanDIllacData,
};

export default function HomePage() {
  return (
    <div className="bg-background text-foreground relative flex h-fit flex-col">
      <div className="mt-0 md:mt-16"></div>

      <LandingHeader />

      <HeroAnimation />

      <SectionDivider />

      <AboutSection
        name="Rui De Carvalho"
        title="Une idée, une envie, Segment.C est une porte ouverte sur vos fenêtres"
        description="Fenêtres sur mesure : Confiez votre projet à un artisan ! Particuliers et professionnels, bénéficiez d'un accompagnement
                    complet pour votre pose et rénovation. Votre spécialiste de confiance allie expertise technique et finitions soignées pour
                    un résultat durable et esthétique."
        image="/images/portrait-artisan.jpg"
        experience="15 ans d'expérience"
      />

      <SectionDivider />

      <ProcessSection />
      
      <SectionDivider />

      <ServiceVilleSection {...saintJeanDIllacData.service} />

      <SectionDivider />

      <GallerySection />

      <SectionDivider />

      <CardGrid initialVisibleCount={4} />

      <SectionDivider />

      <ReviewGrid
        initialReviewsCount={6}
        reviews={[
          // Avis généraux Segment.C
          {
            image: "https://i.pravatar.cc/300?u=marie1",
            name: "Marc Dubois",
            review:
              "Rui a remplacé toutes nos fenêtres en Bois. Le travail est impeccable, les finitions parfaites et les délais respectés. Je recommande vivement Segment.c pour leur professionnalisme et leur écoute.",
            role: "Propriétaire - Bordeaux",
          },

          // Avis BRUT Restaurant
          {
            image: "https://i.pravatar.cc/300?u=brut1",
            name: "Alexandre - BRUT",
            review:
              "Segment.C a réalisé notre porte d'entrée sur mesure en bois massif avec vitrage sécurisé. Le résultat correspond parfaitement à l'identité brute de notre restaurant. Un travail de qualité qui allie esthétique et sécurité.",
            role: "Chef & Propriétaire - BRUT Cuisine 1000°C",
          },

          // Avis EVA VR
          {
            image: "https://i.pravatar.cc/300?u=eva1",
            name: "Équipe EVA Bordeaux",
            review:
              "Installation impeccable de notre grande baie vitrée coulissante. Rui a su comprendre nos besoins spécifiques pour un lieu high-tech accueillant du public. Travail professionnel et dans les délais.",
            role: "Manager - EVA Esports Virtual Arenas",
          },

          // Avis HESTÏA
          {
            image: "https://i.pravatar.cc/300?u=hestia1",
            name: "David & Théo - HESTÏA",
            review:
              "Remplacement complet de notre porte d'entrée par Segment.C. Le résultat est au-delà de nos attentes : sécurisée, esthétique et parfaitement adaptée à notre street food grecque. Rui a été très pro et à l'écoute.",
            role: "Co-gérants - Restaurant Hestïa",
          },

          // Avis OAKBERRY
          {
            image: "https://i.pravatar.cc/300?u=oakberry1",
            name: "Manager Oakberry",
            review:
              "Construction d'une superbe véranda moderne en aluminium et verre par Segment.C. Parfait pour notre concept healthy et lumineux. Les clients adorent l'espace vitré qui apporte une ambiance zen.",
            role: "Responsable - Oakberry Bordeaux",
          },

          // Avis Boucherie
          {
            image: "https://i.pravatar.cc/300?u=bouch1",
            name: "Francis - Boucher",
            review:
              "Segment.C a réalisé notre devanture avec une magnifique baie vitrée. Elle met parfaitement en valeur nos produits tout en respectant toutes les normes d'hygiène. Un artisan sérieux et compétent.",
            role: "Propriétaire - Boucherie Bordeaux",
          },
        ]}
      />

      <Partenaire />
      
      <SectionDivider />

      <FAQSection
        faq={[
          {
            question: "Quels types de menuiseries proposez-vous ?",
            answer:
              "Segment.c est spécialisé dans la fabrication et l'installation de portes et fenêtres sur mesure. Nous proposons des menuiseries en PVC, aluminium et bois, adaptées à tous les styles architecturaux et budgets.",
          },
          {
            question: "Proposez-vous un devis gratuit ?",
            answer:
              "Oui, nous nous déplaçons gratuitement à votre domicile pour étudier votre projet, prendre les mesures et vous proposer un devis détaillé sans engagement. Cette prestation est entièrement gratuite.",
          },
          {
            question:
              "Quels sont les délais de fabrication et d'installation ?",
            answer:
              "Après validation de votre commande, comptez 2 à 4 semaines pour la fabrication de vos menuiseries. L'installation est ensuite réalisée par nos équipes dans un délai de 1 à 3 jours selon la complexité du projet.",
          },
          {
            question: "Vos menuiseries sont-elles garanties ?",
            answer:
              "Toutes nos menuiseries bénéficient d'une garantie fabricant et nous assurons un service après-vente complet. Nos produits respectent les normes en vigueur et offrent d'excellentes performances thermiques et acoustiques.",
          },
          {
            question: "Dans quelles zones intervenez-vous ?",
            answer:
              "Nous intervenons principalement en Nouvelle-Aquitaine et dans les départements limitrophes. N'hésitez pas à nous contacter pour vérifier si votre zone géographique est couverte par nos services.",
          },
          {
            question:
              "Puis-je bénéficier d'aides financières pour mes travaux ?",
            answer:
              "Oui, selon votre situation, vous pouvez bénéficier de différentes aides : MaPrimeRénov', éco-PTZ, TVA réduite, aides locales. Nous vous accompagnons dans vos démarches et vous conseillons sur les dispositifs disponibles.",
          },
          {
            question:
              "Vos menuiseries sont-elles conformes aux normes thermiques ?",
            answer:
              "Absolument, toutes nos menuiseries respectent la réglementation thermique en vigueur (RT 2012/RE 2020). Nous proposons des produits haute performance énergétique qui contribuent à réduire vos factures de chauffage.",
          },
          {
            question: "Comment se déroule une intervention chez moi ?",
            answer:
              "Notre processus comprend 4 étapes : 1) Devis gratuit à domicile, 2) Mesure technique et validation, 3) Fabrication en atelier, 4) Pose professionnelle avec finitions. Nous nous occupons de tout de A à Z.",
          },
        ]}
      />

      <SectionDivider />
                
      <ServiceAreaSection />

      <SectionDivider />    

      <CTAImageSection />

      <SectionDivider />

      <RecentPosts />
     
      <SectionDivider />

      <Footer />
    </div>
  );
}