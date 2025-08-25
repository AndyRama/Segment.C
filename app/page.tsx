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
import { ProcessSection2 } from "@/features/landing/process-section-v2";
import { ServiceAreaSection } from "@/features/landing/services-area-section";
import { VideoSection } from "@/features/landing/video-section";
import { Footer } from "@/features/layout/footer";

export default function HomePage() {
  return (
    <div className="bg-background text-foreground relative flex h-fit flex-col">
      <div className="mt-0 md:mt-16"></div>

      <LandingHeader />

      <HeroAnimation />

      <SectionDivider />

      <AboutSection
        name="Rui Decarvalho"
        title="Une idée, une envie, Segment C est votre porte ouverte su vos fenêtre"
        description="Votre spécialiste de confiance pour votre pose et rénovation de fenêtres sur mesure. J'accompagne les particuliers comme
                      les professionnels dans tous leurs projets de menuiserie avec un savoir-faire artisanal et des finitions soignées."
        image="/images/portrait-artisan.jpg"
        experience="15 ans d'expérience"
      />

      <CardGrid />

      <SectionDivider />

      <ProcessSection />

      <SectionDivider />

      <VideoSection
        videoUrl="/videos/demo.mp4"
        title="Présentation d'un de nos produits"
        description=""
        className="mt-20 mb-30"
      />

      <SectionDivider />

      <ProcessSection2/>

      <SectionDivider />

      <GallerySection />

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

      <ReviewGrid initialReviewsCount={3}
        reviews={[
          {
            image: "https://i.pravatar.cc/300?u=marie1",
            name: "Marc Dubois",
            review:
              "Rui a remplacé toutes nos fenêtres en PVC. Le travail est impeccable, les finitions parfaites et les délais respectés. Je recommande vivement Segment.c pour leur professionnalisme et leur écoute.",
            role: "Propriétaire - Bordeaux",
          },
          {
            image: "https://i.pravatar.cc/300?u=pierre2",
            name: "karin Martin",
            review:
              "Installation d'une porte d'entrée en aluminium. Rui m'a conseillé sur le choix du modèle et l'équipe a fait un travail remarquable. La pose a été réalisée en une journée sans aucun désagrément.",
            role: "Particulier - Lacanau",
          },
          {
            image: "https://i.pravatar.cc/300?u=sophie3",
            name: "Sophie Leroy",
            review:
              "Très satisfaite du remplacement de mes volets roulants. Rui est un artisan sérieux qui prend le temps d'expliquer et de bien faire. Le devis était détaillé et transparent, aucune surprise.",
            role: "Cliente - Mérignac",
          },
          {
            image: "https://i.pravatar.cc/300?u=julien4",
            name: "Julien Rousseau",
            review:
              "Rénovation complète des menuiseries de ma maison. Segment.c a su s'adapter à mes contraintes et proposer des solutions techniques adaptées. Un vrai professionnel à l'écoute de ses clients.",
            role: "Propriétaire - Arcachon",
          },
          {
            image: "https://i.pravatar.cc/300?u=claire5",
            name: "David Moreau",
            review:
              "Rui m'a aidée à choisir des fenêtres adaptées au style de ma maison traditionnelle. Son expertise et ses conseils ont été précieux. L'isolation thermique est maintenant parfaite.",
            role: "Particulière - Pessac",
          },
          {
            image: "https://i.pravatar.cc/300?u=michel6",
            name: "Michel Fournier",
            review:
              "Installation de baies vitrées coulissantes. Le chantier a été mené avec rigueur, propreté irréprochable et respect des horaires. Je recommande sans hésiter cette entreprise.",
            role: "Client - Talence",
          },
          {
            image: "https://i.pravatar.cc/300?u=anne7",
            name: "Anne Durand",
            review:
              "Segment.c a remplacé ma porte de garage sectionnelle. Rui est un artisan de confiance, ponctuel et méticuleux. Le résultat dépasse mes attentes et l'installation s'est faite sans problème.",
            role: "Propriétaire - Bègles",
          },
          {
            image: "https://i.pravatar.cc/300?u=nathalie9",
            name: "Nathan Bertrand",
            review:
              "Excellent service de A à Z. Du devis gratuit à la pose finale, tout s'est parfaitement déroulé. Rui est un professionnel passionné qui livre un travail de grande qualité.",
            role: "Particulière - Gradignan",
          },
          {
            image: "https://i.pravatar.cc/300?u=stephane10",
            name: "Stéphanie Girard",
            review:
              "Remplacement d'urgence d'une porte suite à un cambriolage. Rui a su réagir rapidement et proposer une solution sécurisée. Son réactivité et son professionnalisme m'ont vraiment aidé.",
            role: "Client - Le Bouscat",
          },
        ]}
      />

      <SectionDivider />

      <CTAImageSection />

      <SectionDivider />

      <ServiceAreaSection/>

      <Footer />
    </div>
  );
}
