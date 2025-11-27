// Types pour HeroVilleSection
export type HeroVilleSectionProps = {
  city: string;
  department: string;
  departmentNumber: string;
  description: string;
  phoneNumber: string;
  benefits: string[];
  population: string;
};

// Types pour ServiceVilleSection
export type ServiceVilleSectionProps = {
  city: string;
  mainTitle: string;
  paragraphs: string[];
  services: string[];
  founderName: string;
  founderTitle: string;
  founderPhone: string;
  founderEmail: string;
  founderImage?: string;
};

// Type pour les données complètes d'une ville
export type VilleData = {
  hero: HeroVilleSectionProps;
  service: ServiceVilleSectionProps;
};