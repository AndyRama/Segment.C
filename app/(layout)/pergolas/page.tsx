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
import { Footer } from "@/features/layout/footer";

export default function PergolasPage() {
  return (
    <div className="bg-background text-foreground relative flex h-fit flex-col">
      <div className="mt-0 md:mt-16"></div>

      <LandingHeader />

      {/* Hero spécifique pergolas */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/pergola-hero.jpg"
            alt="Pergola moderne"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Pergolas sur Mesure en Nouvelle-Aquitaine
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Créez votre espace extérieur idéal avec nos pergolas bioclimatiques, 
            aluminium et bois de haute qualité
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
            Demander un devis gratuit
          </button>
        </div>
      </section>

      <SectionDivider />

      {/* Section À propos - Pergolas */}
      <AboutSection
        name="Rui De Carvalho"
        title="Expert en Pergolas Sur Mesure depuis 15 ans"
        description="Spécialiste de la conception et installation de pergolas en Nouvelle-Aquitaine, je mets mon expertise 
                    au service de votre projet. Pergolas bioclimatiques, aluminium, bois ou mixtes : chaque réalisation 
                    est pensée pour sublimer votre extérieur tout en offrant confort et durabilité. Un accompagnement 
                    personnalisé du design à la pose finale."
        image="/images/portrait-artisan.jpg"
        experience="Plus de 200 pergolas installées"
      />

      <SectionDivider />

      {/* Types de pergolas */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nos Types de Pergolas
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/pergola-bioclimatique.jpg"
              alt="Pergola bioclimatique"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Pergola Bioclimatique</h3>
              <p className="text-muted-foreground mb-4">
                Lames orientables motorisées pour un contrôle optimal de la luminosité 
                et de la ventilation. Le summum du confort extérieur.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Lames aluminium orientables à 135°</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Motorisation et domotique</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Étanchéité parfaite</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Options: LED, capteurs pluie/vent</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/pergola-aluminium.jpg"
              alt="Pergola aluminium"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Pergola Aluminium</h3>
              <p className="text-muted-foreground mb-4">
                Structure moderne et épurée, résistante aux intempéries. 
                Idéale pour un style contemporain avec un entretien minimal.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Toiture fixe ou rétractable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Sans entretien</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Large choix de coloris RAL</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Options: stores, éclairage, chauffage</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/pergola-bois.jpg"
              alt="Pergola bois"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Pergola Bois</h3>
              <p className="text-muted-foreground mb-4">
                Charme authentique et naturel. Essence de bois noble pour une 
                intégration harmonieuse dans votre jardin.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Bois traité classe 4</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Pin, chêne, douglas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Design traditionnel ou moderne</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Options: toile, canisse, polycarbonate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Processus de réalisation */}
      <ProcessSection />

      <SectionDivider />

      {/* Galerie de réalisations pergolas */}
      <GallerySection />

      <SectionDivider />

      {/* Avantages des pergolas */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Pourquoi Choisir une Pergola Segment.C ?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏗️</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Sur Mesure</h3>
            <p className="text-sm text-muted-foreground">
              Chaque pergola est conçue selon vos dimensions et vos envies
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Installation Rapide</h3>
            <p className="text-sm text-muted-foreground">
              Pose professionnelle en 2 à 5 jours selon la complexité
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💪</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Robustesse</h3>
            <p className="text-sm text-muted-foreground">
              Matériaux premium résistants aux UV, pluie et vent
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🛡️</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Garantie 10 ans</h3>
            <p className="text-sm text-muted-foreground">
              Tranquillité assurée avec notre garantie décennale
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Avis clients pergolas */}
      <ReviewGrid
        initialReviewsCount={6}
        reviews={[
          {
            image: "https://i.pravatar.cc/300?u=pergola1",
            name: "Sophie Martin",
            review:
              "Pergola bioclimatique installée l'été dernier. Un vrai bonheur ! Les lames motorisées sont parfaites, on profite de la terrasse par tous les temps. Rui a été très professionnel du début à la fin.",
            role: "Particulier - Bordeaux",
          },
          {
            image: "https://i.pravatar.cc/300?u=pergola2",
            name: "Jean-Pierre Dubois",
            review:
              "Magnifique pergola en aluminium installée dans notre jardin. La qualité est au rendez-vous et l'esthétique est top. Je recommande Segment.C sans hésitation !",
            role: "Particulier - Mérignac",
          },
          {
            image: "https://i.pravatar.cc/300?u=pergola3",
            name: "Restaurant Le Jardin",
            review:
              "Nous avons fait installer une grande pergola bioclimatique pour notre terrasse. Nos clients adorent ! Elle nous permet d'accueillir plus de convives et d'étendre la saison. Excellent investissement.",
            role: "Restaurateur - Arcachon",
          },
          {
            image: "https://i.pravatar.cc/300?u=pergola4",
            name: "Marie & Thomas",
            review:
              "Pergola en bois magnifique qui s'intègre parfaitement dans notre jardin. Le travail est soigné, les finitions impeccables. On profite enfin de notre extérieur toute l'année !",
            role: "Particuliers - Saint-Jean-d'Illac",
          },
          {
            image: "https://i.pravatar.cc/300?u=pergola5",
            name: "Hôtel Les Pins",
            review:
              "Installation de 3 pergolas pour notre espace piscine. Travail sérieux, dans les délais et conforme au devis. Nos clients apprécient beaucoup ce nouvel espace ombragé.",
            role: "Hôtelier - Lacanau",
          },
          {
            image: "https://i.pravatar.cc/300?u=pergola6",
            name: "Famille Rousseau",
            review:
              "Notre pergola aluminium avec stores latéraux est parfaite. Protection solaire optimale et design moderne. Rui a su nous conseiller pour faire les bons choix.",
            role: "Particuliers - Pessac",
          },
        ]}
      />

      <SectionDivider />

      {/* Services complémentaires */}
      <CardGrid initialVisibleCount={4} />

      <SectionDivider />

      {/* FAQ Pergolas */}
      <FAQSection
        faq={[
          {
            question: "Quelle est la différence entre une pergola bioclimatique et une pergola classique ?",
            answer:
              "La pergola bioclimatique possède des lames orientables motorisées qui permettent de contrôler la luminosité, l'aération et l'étanchéité. Une pergola classique a une toiture fixe (aluminium, bois, polycarbonate). La bioclimatique offre plus de confort et de modularité.",
          },
          {
            question: "Faut-il un permis de construire pour installer une pergola ?",
            answer:
              "Cela dépend de la surface. Moins de 5m² : pas de démarche. Entre 5 et 20m² : déclaration préalable de travaux. Plus de 20m² : permis de construire. Nous vous accompagnons dans vos démarches administratives.",
          },
          {
            question: "Quel est le prix d'une pergola sur mesure ?",
            answer:
              "Le prix varie selon le type (bois, aluminium, bioclimatique), les dimensions et les options. Comptez de 3000€ pour une pergola bois basique à 15000€+ pour une grande pergola bioclimatique haut de gamme. Nous établissons un devis gratuit personnalisé.",
          },
          {
            question: "Quel entretien pour ma pergola ?",
            answer:
              "Pergola aluminium : nettoyage à l'eau savonneuse 1-2 fois/an. Pergola bois : lasure tous les 2-3 ans. Pergola bioclimatique : vérification mécanique annuelle recommandée. Toutes nos pergolas sont conçues pour un entretien minimal.",
          },
          {
            question: "Quels sont les délais de fabrication et installation ?",
            answer:
              "Après validation du devis et des plans : 3 à 6 semaines de fabrication selon le modèle. Installation en 2 à 5 jours selon la complexité. Nous planifions ensemble les dates qui vous conviennent.",
          },
          {
            question: "Peut-on fermer une pergola avec des vitrages ?",
            answer:
              "Oui ! Nous proposons des options de fermeture : vitrages coulissants, stores verticaux, parois amovibles. Cela permet de transformer votre pergola en véritable pièce à vivre supplémentaire, utilisable toute l'année.",
          },
          {
            question: "La pergola résiste-t-elle au vent et à la pluie ?",
            answer:
              "Absolument. Nos pergolas sont dimensionnées pour résister aux vents forts (jusqu'à 150 km/h selon les modèles) et sont parfaitement étanches. Les pergolas bioclimatiques évacuent l'eau de pluie par les montants.",
          },
          {
            question: "Proposez-vous des options de motorisation et domotique ?",
            answer:
              "Oui, pour les pergolas bioclimatiques : motorisation des lames, éclairage LED intégré, capteurs de pluie et vent, chauffage infrarouge, stores latéraux motorisés. Contrôle via télécommande ou smartphone.",
          },
        ]}
      />

      <SectionDivider />

      {/* Zone d'intervention */}
      <ServiceAreaSection />

      <SectionDivider />

      {/* Partenaires */}
      <Partenaire />

      <SectionDivider />

      {/* CTA Final */}
      <CTAImageSection />

      <SectionDivider />

      {/* Articles récents */}
      <RecentPosts />

      <SectionDivider />

      <Footer />
    </div>
  );
}