// Type pour les données About
export type AboutData = {
  title: string;
  description: string;
};

// Type pour les données Hero
export type HeroData = {
  city: string;
  department: string;
  departmentNumber: string;
  description: string;
  phoneNumber: string;
  benefits: string[];
  population: string;
};

// Type pour HeroVilleSectionProps (utilisé par le composant)
export type HeroVilleSectionProps = HeroData;

// Type pour les données Service
export type ServiceData = {
  city: string;
  mainTitle: string;
  paragraphs: string[];
  services: string[];
  founderName: string;
  founderTitle: string;
  founderPhone: string;
  founderEmail: string;
  founderImage: string;
};

// Type pour ServiceVilleSectionProps (utilisé par le composant)
export type ServiceVilleSectionProps = ServiceData;

// Type principal pour les données d'une ville
export type VilleData = {
  hero: HeroData;
  about: AboutData;
  service: ServiceData;
};