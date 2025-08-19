import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { buttonVariants } from "@/components/ui/button";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

type AboutSectionProps = {
  name?: string;
  title?: string;
  description?: string;
  image?: string;
  experience?: string;
  className?: string;
}

export const AboutSection = ({
  name = "Votre nom",
  title = "Votre Expert en Menuiserie",
  description = "Je suis votre spécialiste de confiance pour la fabrication, pose et rénovation de menuiseries sur mesure. J'accompagne particuliers et professionnels dans tous leurs projets avec un savoir-faire artisanal et des finitions soignées.",
  image = "/images/portrait-artisan.jpg",
  experience = "15 ans d'expérience",
  className
}: AboutSectionProps) => {
  return (
    <section className={cn("relative w-full max-w-7xl mx-auto px-4 lg:px-0 py-20", className)}>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <AboutContent 
          name={name}
          title={title}
          description={description}
          experience={experience}
        />
        <AboutImage image={image} name={name} />
      </div>
    </section>
  );
};

const AboutContent = ({ 
  name, 
  title, 
  description, 
  experience 
}: { 
  name: string; 
  title: string; 
  description: string; 
  experience: string;
}) => (
  <div className="space-y-6">
    <div className="space-y-4">
      <Typography variant="h2" className="text-3xl md:text-4xl xl:text-5xl">
        <span className="inline-block">
          {title}
          {/* <span className="relative ml-2 inline-block">
            <span className="text-primary">👨‍🔧</span>
          </span> */}
        </span>
      </Typography>
      
      <Typography variant="h3" className="text-xl font-medium text-primary md:text-2xl">
        Je suis {name}
      </Typography>
      
      <Typography variant="large" className="leading-relaxed text-muted-foreground">
        {description}
      </Typography>
    </div>
    
    <AboutStats experience={experience} />
    <AboutActions />
  </div>
);

const AboutStats = ({ experience }: { experience: string }) => (
  <div className="grid grid-cols-2 gap-4">
    <div className="flex items-center gap-3">
      <Clock className="size-6 text-primary" />
      <div>
        <div className="font-semibold">{experience}</div>
        <div className="text-sm text-muted-foreground">d'expertise</div>
      </div>
    </div>
    
    <div className="flex items-center gap-3">
      <Users className="size-6 text-primary" />
      <div>
        <div className="font-semibold">500+ clients</div>
        <div className="text-sm text-muted-foreground">satisfaits</div>
      </div>
    </div>
    
    <div className="flex items-center gap-3">
      <Award className="size-6 text-primary" />
      <div>
        <div className="font-semibold">Artisan certifié</div>
        <div className="text-sm text-muted-foreground">Qualité garantie</div>
      </div>
    </div>
    
    <div className="flex items-center gap-3">
      <CheckCircle className="size-6 text-primary" />
      <div>
        <div className="font-semibold">Sur mesure</div>
        <div className="text-sm text-muted-foreground">100% personnalisé</div>
      </div>
    </div>
  </div>
);

const AboutActions = () => (
  <div className="flex flex-col gap-4 sm:flex-row">
    <Link
      href="/contact"
      className={cn(
        buttonVariants({ size: "lg", variant: "default" }),
        "text-white border hover:border-green-500 hover:text-green-500"
      )}
    >
      Demander un devis
    </Link>
    
    <Link
      href="/realisations"
      className={cn(
        buttonVariants({ size: "lg", variant: "outline" }),
        "border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
      )}
    >
      Voir mes réalisations
    </Link>
  </div>
);

const AboutImage = ({ image, name }: { image: string; name: string }) => (
  <div className="relative">
    <div className="relative overflow-hidden rounded-lg">
      <Image
        src={image}
        alt={`Portrait de ${name}, artisan menuisier`}
        width={600}
        height={600}
        className="h-[500px] w-full rounded-lg object-cover object-center"
      />
      
      {/* Overlay décoratif */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent"></div>
      
      {/* Badge d'expérience */}
      <div className="absolute bottom-6 left-6 rounded-lg bg-white/90 p-4 shadow-lg backdrop-blur-sm">
        <div className="text-2xl font-bold text-primary">15+</div>
        <div className="text-sm text-muted-foreground">années d'expérience</div>
      </div>
    </div>
  </div>
);