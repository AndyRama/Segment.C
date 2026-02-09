import type { VilleData } from "./types";

// Re-export du type VilleData pour faciliter les imports
export type { VilleData } from "./types";

// Type pour les données About
export type AboutData = {
  title: string;
  description: string;
};

// ========================================
// SAINT-JEAN-D'ILLAC
// ========================================
export const saintJeanDIllacData: VilleData = {
  hero: {
    city: "St-Jean-d'Illac",
    department: "Gironde",
    departmentNumber: "33",
    description:
      "St-Jean-d'Illac, commune dynamique de Bordeaux Métropole, allie charme rural et proximité urbaine. Segment C Menuiserie intervient rapidement pour tous vos travaux de menuiserie, des pavillons résidentiels aux projets commerciaux.",
    phoneNumber: "06 71 78 72 53",
    benefits: [
      "Intervention rapide à Saint-Jean-d'Illac",
      "Expertise en menuiserie résidentielle",
      "Devis gratuit sous 24h",
      "Artisan local de confiance",
    ],
    population: "8 500 habitants",
  },
  heroAnimation: {
    title: "Menuiserie sur Mesure",
    titleHighlight: "Saint-Jean-d'Illac",
    subtitle: "Fenêtres, Portes & Volets",
    description:
      "Votre artisan menuisier local pour tous vos projets à St-Jean-d'Illac. J'accompagne les particuliers comme les professionnels avec un savoir-faire artisanal de 15 ans et des finitions soignées. Devis gratuit sous 24h.",
  },
  about: {
    title: "15 ans d'excellence en menuiserie : artisan passionné et certifié",
    description:
      "Installé au cœur de la métropole bordelaise, je mets mon expertise au service des habitants de St-Jean-d'Illac depuis plus de 15 ans. Chaque projet est unique : que vous rénoviez votre pavillon familial ou aménageiez votre local commercial, je vous accompagne avec un conseil personnalisé et des solutions sur mesure. Mon engagement ? Des fenêtres et portes qui allient performance énergétique et esthétique, posées avec le soin du travail bien fait.",
  },
  service: {
    city: "St-Jean-d'Illac",
    mainTitle: "Service de menuiserie professionnelle à St-Jean-d'Illac",
    paragraphs: [
      "Segment C Menuiserie est votre partenaire privilégié à St-Jean-d'Illac. Notre connaissance du tissu local et des spécificités architecturales nous permet de vous proposer des solutions parfaitement adaptées à votre projet.",
      "Spécialisés dans les menuiseries pour maisons individuelles et locaux commerciaux, nous intervenons sur tous types de projets : rénovation énergétique, création d'extensions, aménagements sur mesure.",
      "Notre atelier local garantit des délais rapides et une disponibilité optimale pour le suivi de votre chantier.",
    ],
    services: [
      "Fenêtres PVC et aluminium haute performance",
      "Portes d'entrée sécurisées",
      "Baie vitrée personnalisé",
      "Volets roulants et battants",
      "Extensions et vérandas",
      "Agencement exterieur pergolas",
      "Fenêtres oscillo-battantes",
      "Portes-fenêtres à galandage",
      "Volets persiennés aluminium",
    ],
    founderName: "Rui De Carvalho",
    founderTitle: "Fondateur de Segment.C",
    founderPhone: "06 71 78 72 53",
    founderEmail: "info-segment.c@gmail.com",
    founderImage: "https://placehold.co/80x80/8B4513/FFFFFF?text=SC",
  },
};

// ========================================
// CAP FERRET
// ========================================
export const capFerretData: VilleData = {
  hero: {
    city: "Cap Ferret",
    department: "Gironde",
    departmentNumber: "33",
    description:
      "Cap Ferret, presqu'île emblématique du bassin d'Arcachon, mérite des menuiseries à la hauteur de son charme unique. Segment C Menuiserie intervient pour préserver et sublimer l'architecture typique des villas du Cap.",
    phoneNumber: "06 71 78 72 53",
    benefits: [
      "Intervention sur tout le Cap Ferret",
      "Menuiseries adaptées au climat marin",
      "Respect de l'architecture locale",
      "Service pour résidences secondaires",
    ],
    population: "8 000 habitants",
  },

  heroAnimation: {
    title: "Menuiserie Marine",
    titleHighlight: "Cap Ferret",
    subtitle: "Résistance aux Embruns Garantie",
    description:
      "Spécialiste des menuiseries pour villas du Cap Ferret. Matériaux sélectionnés pour résister au climat marin : bois exotiques, aluminium thermolaqué. 15 ans d'expérience sur le bassin d'Arcachon.",
  },
  about: {
    title:
      "Spécialiste menuiseries marines : résistance et durabilité garanties",
    description:
      "Le Cap Ferret demande un savoir-faire particulier. Entre embruns salés et variations climatiques, vos menuiseries subissent des conditions extrêmes. Fort de 15 ans d'expérience sur le bassin, je sélectionne pour vous les meilleurs matériaux : bois exotiques traités, aluminium thermolaqué marine. Chaque intervention respecte l'âme architecturale du Cap tout en garantissant une durabilité exceptionnelle. Votre villa mérite ce qu'il y a de mieux.",
  },
  service: {
    city: "Cap Ferret",
    mainTitle: "Service de menuiserie professionnelle au Cap Ferret",
    paragraphs: [
      "Au Cap Ferret, Segment C Menuiserie propose des menuiseries conçues pour résister au climat marin tout en respectant le cachet architectural de la presqu'île. Bois traité, aluminium thermolaqué ou PVC renforcé, nos matériaux sont sélectionnés pour leur durabilité.",
      "Nous comprenons les contraintes spécifiques des résidences du Cap : exposition au sel, aux embruns et aux vents. Nos solutions garantissent longévité et performance tout en préservant l'esthétique des lieux.",
      "De la cabane ostréicole rénovée à la villa d'architecte, nous accompagnons tous vos projets avec le même soin du détail.",
    ],
    services: [
      "Menuiseries marines résistantes",
      "Grandes baies vitrées vue bassin",
      "Portes-fenêtres coulissantes",
      "Volets bois et aluminium",
      "Aménagements extérieurs (terrasses, pergolas)",
      "Fenêtres à soufflet bois exotique",
      "Portes d'entrée pivotantes",
      "Baies vitrées angle droit",
      "Vérandas bois et verre",
    ],
    founderName: "Rui De Carvalho",
    founderTitle: "Fondateur de Segment.C",
    founderPhone: "06 71 78 72 53",
    founderEmail: "info-segment.c@gmail.com",
    founderImage: "https://placehold.co/80x80/8B4513/FFFFFF?text=SC",
  },
};

// ========================================
// MÉRIGNAC
// ========================================
export const merignacData: VilleData = {
  hero: {
    city: "Mérignac",
    department: "Gironde",
    departmentNumber: "33",
    description:
      "Mérignac, deuxième ville de la métropole bordelaise, offre un cadre de vie dynamique entre quartiers résidentiels et zones d'activités. Segment C Menuiserie accompagne particuliers et professionnels dans tous leurs projets de menuiserie.",
    phoneNumber: "06 71 78 72 53",
    benefits: [
      "Intervention rapide sur Mérignac",
      "Service résidentiel et commercial",
      "Devis gratuit sous 24h",
      "Certifications RGE",
    ],
    population: "70 000 habitants",
  },
  heroAnimation: {
    title: "Menuiserie Certifiée RGE",
    titleHighlight: "Mérignac",
    subtitle: "Résidentiel & Commercial",
    description:
      "Artisan RGE à Mérignac pour particuliers et professionnels. Rénovation énergétique avec aides financières. Intervention rapide sur tous les quartiers de Mérignac. Devis gratuit sous 24h.",
  },
  about: {
    title: "Certification RGE : votre expert en rénovation énergétique",
    description:
      "À Mérignac, je suis votre interlocuteur unique pour tous vos projets de menuiserie. Propriétaires désireux de réduire leur facture énergétique, commerçants cherchant une vitrine moderne, bailleurs souhaitant valoriser leur patrimoine : ma certification RGE vous ouvre les portes des aides financières. Je maîtrise les spécificités de chaque quartier mérignacais et vous garantis une intervention rapide, des conseils avisés et un suivi personnalisé jusqu'à la pose finale.",
  },
  service: {
    city: "Mérignac",
    mainTitle: "Service de menuiserie professionnelle à Mérignac",
    paragraphs: [
      "À Mérignac, Segment C Menuiserie intervient tant pour les particuliers que pour les professionnels. Nos équipes connaissent parfaitement les différents quartiers de la ville et s'adaptent à chaque contexte architectural.",
      "Du centre-ville historique aux nouveaux quartiers résidentiels, en passant par les zones commerciales, nous proposons des solutions de menuiserie adaptées à chaque environnement.",
      "Certifiés RGE, nous vous accompagnons dans l'obtention des aides financières pour vos travaux de rénovation énergétique.",
    ],
    services: [
      "Menuiseries PVC, bois et aluminium",
      "Rénovation énergétique",
      "Vitrines commerciales",
      "Fermetures automatisées",
      "Agencement de bureaux",
      "Fenêtres triple vitrage",
      "Portes blindées certifiées",
      "Baies vitrées à translation",
      "Volets solaires photovoltaïques",
    ],
    founderName: "Rui De Carvalho",
    founderTitle: "Fondateur de Segment.C",
    founderPhone: "06 71 78 72 53",
    founderEmail: "info-segment.c@gmail.com",
    founderImage: "https://placehold.co/80x80/8B4513/FFFFFF?text=SC",
  },
};

// ========================================
// BORDEAUX
// ========================================
export const bordeauxData: VilleData = {
  hero: {
    city: "Bordeaux",
    department: "Gironde",
    departmentNumber: "33",
    description:
      "Bordeaux, capitale mondiale du vin et ville au patrimoine UNESCO, exige des menuiseries à la hauteur de son architecture exceptionnelle. Segment C Menuiserie allie tradition et modernité pour sublimer votre patrimoine.",
    phoneNumber: "06 71 78 72 53",
    benefits: [
      "Expert du patrimoine bordelais",
      "Menuiseries sur mesure",
      "Respect des normes ABF",
      "Artisan RGE certifié",
    ],
    population: "260 000 habitants",
  },
  heroAnimation: {
    title: "Expert Patrimoine",
    titleHighlight: "Bordeaux",
    subtitle: "Conformité ABF Garantie",
    description:
      "Menuiserie d'art pour le patrimoine bordelais. Expert des contraintes ABF pour immeubles en pierre et échoppes. Tradition et performance énergétique réunies. 15 ans d'expérience à Bordeaux.",
  },
  about: {
    title: "Expert patrimoine et normes ABF : tradition et performance réunies",
    description:
      "Rénover dans Bordeaux, c'est naviguer entre contraintes ABF et exigences modernes. Je connais intimement ce défi : depuis 15 ans, j'interviens sur immeubles en pierre, échoppes centenaires et lofts contemporains. Mon expertise ? Vous proposer des menuiseries qui respectent scrupuleusement l'harmonie architecturale tout en divisant votre facture de chauffage. Fini les courants d'air, place au confort thermique et acoustique, sans dénaturer le charme de votre bien.",
  },
  service: {
    city: "Bordeaux",
    mainTitle: "Service de menuiserie professionnelle à Bordeaux",
    paragraphs: [
      "À Bordeaux, Segment C Menuiserie intervient avec une expertise particulière du patrimoine architectural. Notre connaissance des contraintes ABF (Architectes des Bâtiments de France) nous permet de proposer des solutions conformes tout en optimisant les performances énergétiques.",
      "Immeubles en pierre de taille, échoppes bordelaises, lofts contemporains : chaque projet bénéficie d'une approche personnalisée. Nous travaillons en étroite collaboration avec les copropriétés et les architectes.",
      "Du triangle d'or aux Chartrons, de Caudéran à la Bastide, notre expertise couvre tous les quartiers de Bordeaux.",
    ],
    services: [
      "Rénovation fenêtres anciennes",
      "Menuiseries conformes ABF",
      "Fenêtres double/triple vitrage",
      "Portes d'entrée d'immeuble",
      "Agencement d'échoppes",
      "Fenêtres à petits carreaux",
      "Portes vitrées style haussmannien",
      "Volets battants traditionnels bois",
      "Verrières intérieures atelier",
    ],
    founderName: "Rui De Carvalho",
    founderTitle: "Fondateur de Segment.C",
    founderPhone: "06 71 78 72 53",
    founderEmail: "info-segment.c@gmail.com",
    founderImage: "https://placehold.co/80x80/8B4513/FFFFFF?text=SC",
  },
};

// ========================================
// LE BOUSCAT
// ========================================
export const bouscatData: VilleData = {
  hero: {
    city: "Le Bouscat",
    department: "Gironde",
    departmentNumber: "33",
    description:
      "Le Bouscat, ville résidentielle recherchée de la métropole bordelaise, séduit par son cadre de vie privilégié. Segment C Menuiserie répond aux attentes élevées des propriétaires avec des menuiseries haut de gamme.",
    phoneNumber: "06 71 78 72 53",
    benefits: [
      "Service premium au Bouscat",
      "Menuiseries haut de gamme",
      "Intervention discrète et soignée",
      "Devis personnalisé gratuit",
    ],
    population: "24 000 habitants",
  },
  heroAnimation: {
    title: "Menuiserie Haut de Gamme",
    titleHighlight: "Le Bouscat",
    subtitle: "Excellence & Finitions Parfaites",
    description:
      "Service premium pour les belles demeures du Bouscat. Matériaux nobles, finitions soignées, isolation acoustique renforcée. Intervention discrète et respectueuse de votre quotidien.",
  },
  about: {
    title: "Menuiserie haut de gamme : matériaux nobles et finitions parfaites",
    description:
      "Les belles demeures du Bouscat méritent une attention particulière. Je le sais : chaque détail compte. Matériaux nobles sélectionnés avec soin, finitions parfaites, isolation acoustique optimale pour préserver votre tranquillité. Mon intervention est toujours discrète, respectueuse de votre quotidien. Villas d'architecte ou maisons de maître, je mets mon exigence au service de votre projet pour créer des menuiseries qui subliment votre patrimoine et traversent le temps.",
  },
  service: {
    city: "Le Bouscat",
    mainTitle: "Service de menuiserie professionnelle au Bouscat",
    paragraphs: [
      "Au Bouscat, Segment C Menuiserie propose un service haut de gamme adapté aux belles demeures de la ville. Villas d'architecte, maisons de maître ou résidences contemporaines bénéficient de notre expertise technique et esthétique.",
      "Nous accordons une attention particulière à l'isolation acoustique et thermique, enjeux majeurs dans cette ville résidentielle proche de Bordeaux. Nos menuiseries contribuent significativement au confort de votre habitat.",
      "Du parc bordelais au centre-ville, nous intervenons dans le respect de votre quotidien avec des équipes formées et discrètes.",
    ],
    services: [
      "Fenêtres bois haut de gamme",
      "Portes d'entrée design",
      "Baies vitrées sur mesure",
      "Vérandas contemporaines",
      "Isolation acoustique renforcée",
      "Fenêtres mixtes bois-aluminium",
      "Portes d'entrée monobloc",
      "Baies vitrées minimalistes",
      "Pergolas aluminium design",
    ],
    founderName: "Rui De Carvalho",
    founderTitle: "Fondateur de Segment.C",
    founderPhone: "06 71 78 72 53",
    founderEmail: "info-segment.c@gmail.com",
    founderImage: "https://placehold.co/80x80/8B4513/FFFFFF?text=SC",
  },
};

// ========================================
// TALENCE
// ========================================
export const talenceData: VilleData = {
  hero: {
    city: "Talence",
    department: "Gironde",
    departmentNumber: "33",
    description:
      "Talence, ville universitaire et résidentielle au sud de Bordeaux, bénéficie d'un patrimoine architectural varié. Segment C Menuiserie intervient pour tous vos projets, de la rénovation à la construction neuve.",
    phoneNumber: "06 71 78 72 53",
    benefits: [
      "Intervention sur Talence et campus",
      "Menuiseries adaptées au bâti ancien",
      "Solutions pour logements étudiants",
      "Devis gratuit sous 24h",
    ],
    population: "43 000 habitants",
  },
  heroAnimation: {
    title: "Qualité Accessible",
    titleHighlight: "Talence",
    subtitle: "Solutions pour Tous Budgets",
    description:
      "Menuiseries performantes et accessibles à Talence. Propriétaires, bailleurs, étudiants : des solutions adaptées à chaque budget sans compromis sur la qualité. Performance énergétique garantie.",
  },
  about: {
    title: "Qualité accessible : menuiseries performantes pour tous budgets",
    description:
      "Talence est diverse, mes solutions le sont aussi. Vous êtes propriétaire et cherchez à améliorer votre confort ? Bailleur souhaitant valoriser votre patrimoine locatif ? Parent d'étudiant voulant sécuriser son logement ? J'ai la réponse. Pas de superflu, que l'essentiel : des menuiseries performantes, durables et esthétiques, à des tarifs honnêtes. Mon crédo : la qualité accessible, sans compromis sur les finitions ni sur les matériaux.",
  },
  service: {
    city: "Talence",
    mainTitle: "Service de menuiserie professionnelle à Talence",
    paragraphs: [
      "À Talence, Segment C Menuiserie accompagne propriétaires et bailleurs dans leurs projets de menuiserie. Notre expertise s'étend des maisons individuelles aux immeubles collectifs, en passant par les résidences étudiantes.",
      "Nous proposons des solutions adaptées à chaque budget sans compromis sur la qualité. Nos menuiseries répondent aux exigences de performance énergétique tout en s'intégrant harmonieusement au bâti existant.",
      "Du centre-ville historique à Thouars, du Forum aux nouveaux quartiers, nous couvrons l'ensemble de la commune.",
    ],
    services: [
      "Fenêtres et portes-fenêtres",
      "Rénovation logements étudiants",
      "Portes d'entrée blindées",
      "Volets roulants électriques",
      "Isolation thermique et acoustique",
      "Fenêtres PVC double vitrage",
      "Portes semi-vitrées",
      "Baies coulissantes 2 vantaux",
      "Volets battants PVC",
    ],
    founderName: "Rui De Carvalho",
    founderTitle: "Fondateur de Segment.C",
    founderPhone: "06 71 78 72 53",
    founderEmail: "info-segment.c@gmail.com",
    founderImage: "https://placehold.co/80x80/8B4513/FFFFFF?text=SC",
  },
};

// ========================================
// PESSAC
// ========================================
export const pessacData: VilleData = {
  hero: {
    city: "Pessac",
    department: "Gironde",
    departmentNumber: "33",
    description:
      "Pessac, troisième ville de la métropole bordelaise, conjugue modernité et tradition viticole. Segment C Menuiserie accompagne l'essor de cette ville dynamique avec des menuiseries innovantes et performantes.",
    phoneNumber: "06 71 78 72 53",
    benefits: [
      "Expert menuiserie à Pessac",
      "Solutions pour cités Le Corbusier",
      "Menuiseries éco-responsables",
      "Service résidentiel et tertiaire",
    ],
    population: "65 000 habitants",
  },
  heroAnimation: {
    title: "Menuiserie Éco-Innovante",
    titleHighlight: "Pessac",
    subtitle: "Matériaux Durables & Technologies",
    description:
      "Solutions écologiques et performantes à Pessac. Matériaux biosourcés, triple vitrage nouvelle génération. De la Cité Frugès aux écoquartiers modernes. Réduisez votre empreinte carbone.",
  },
  about: {
    title:
      "Menuiserie éco-innovante : matériaux durables et technologies avancées",
    description:
      "Pessac bouge, ma menuiserie aussi. Matériaux biosourcés, triple vitrage nouvelle génération, systèmes d'ouverture intelligents : j'intègre les innovations qui ont du sens. De la Cité Frugès classée aux écoquartiers modernes, je maîtrise tous les défis techniques. Votre projet mérite des solutions à la fois écologiques et performantes. Mon objectif : créer des menuiseries qui réduisent votre empreinte carbone tout en améliorant votre confort au quotidien.",
  },
  service: {
    city: "Pessac",
    mainTitle: "Service de menuiserie professionnelle à Pessac",
    paragraphs: [
      "À Pessac, Segment C Menuiserie intervient sur tous types de bâtiments, du patrimoine classé de la cité Frugès aux constructions contemporaines. Notre expertise technique nous permet de relever tous les défis architecturaux.",
      "Nous sommes particulièrement sensibles aux enjeux environnementaux et proposons des menuiseries éco-responsables, en adéquation avec les objectifs de développement durable de la ville.",
      "Campus universitaire, zones d'activités, quartiers résidentiels : nous couvrons l'ensemble du territoire pessacais.",
    ],
    services: [
      "Menuiseries éco-responsables",
      "Restauration patrimoine classé",
      "Baies vitrées grand format",
      "Menuiseries tertiaires",
      "Solutions triple vitrage",
      "Fenêtres bois biosourcé",
      "Portes d'entrée aluminium recyclé",
      "Vérandas bioclimatiques",
      "Pergolas à lames orientables connectées",
    ],
    founderName: "Rui De Carvalho",
    founderTitle: "Fondateur de Segment.C",
    founderPhone: "06 71 78 72 53",
    founderEmail: "info-segment.c@gmail.com",
    founderImage: "https://placehold.co/80x80/8B4513/FFFFFF?text=SC",
  },
};

// ========================================
// CESTAS
// ========================================
export const cestasData: VilleData = {
  hero: {
    city: "Cestas",
    department: "Gironde",
    departmentNumber: "33",
    description:
      "Cestas, plus grande commune de la métropole bordelaise, offre un cadre de vie privilégié en lisière de forêt. Segment C Menuiserie intervient pour sublimer vos projets résidentiels dans cet environnement naturel exceptionnel.",
    phoneNumber: "06 71 78 72 53",
    benefits: [
      "Intervention sur tout Cestas",
      "Menuiseries adaptées à l'environnement forestier",
      "Expertise maisons individuelles",
      "Respect de l'architecture locale",
    ],
    population: "18 000 habitants",
  },
  heroAnimation: {
    title: "Spécialiste Bois",
    titleHighlight: "Cestas",
    subtitle: "Grandes Baies & Nature",
    description:
      "Menuiseries en harmonie avec la forêt de Cestas. Grandes baies vitrées, essences durables, traitements adaptés. Créez le lien entre votre intérieur et la nature environnante.",
  },
  about: {
    title: "Spécialiste bois et grandes baies : harmonie avec la nature",
    description:
      "À Cestas, la forêt est partout. Vos menuiseries doivent créer ce lien unique entre intérieur et extérieur. J'adore ces projets où les grandes baies vitrées ouvrent sur les pins, où le bois noble prolonge la nature à l'intérieur. Mais attention : qui dit proximité de forêt dit aussi humidité, insectes, variations thermiques. Je sélectionne des essences durables et des traitements adaptés. Résultat : des menuiseries belles, saines et pérennes qui magnifient votre cadre de vie forestier.",
  },
  service: {
    city: "Cestas",
    mainTitle: "Service de menuiserie professionnelle à Cestas",
    paragraphs: [
      "À Cestas, Segment C Menuiserie accompagne les propriétaires dans leurs projets de menuiserie, en harmonie avec l'environnement forestier unique de la commune. Nos menuiseries en bois s'intègrent naturellement au paysage.",
      "Spécialistes des maisons individuelles, nous proposons des solutions sur mesure pour optimiser votre confort : grandes ouvertures vers la nature, isolation renforcée, protections solaires adaptées.",
      "De Gazinet à Pont de l'Eyquem, du bourg aux hameaux forestiers, nous intervenons sur l'ensemble de la commune.",
    ],
    services: [
      "Menuiseries bois naturel",
      "Grandes baies vitrées",
      "Vérandas vue forêt",
      "Portails et clôtures",
      "Aménagements extérieurs",
      "Fenêtres bois pin douglas",
      "Portes-fenêtres 3 vantaux",
      "Baies vitrées panoramiques",
      "Pergolas bois adossées",
    ],
    founderName: "Rui De Carvalho",
    founderTitle: "Fondateur de Segment.C",
    founderPhone: "06 71 78 72 53",
    founderEmail: "info-segment.c@gmail.com",
    founderImage: "https://placehold.co/80x80/8B4513/FFFFFF?text=SC",
  },
};

// ========================================
// GRADIGNAN
// ========================================
export const gradignanData: VilleData = {
  hero: {
    city: "Gradignan",
    department: "Gironde",
    departmentNumber: "33",
    description:
      "Gradignan, ville verte au sud de Bordeaux, séduit par son cadre de vie préservé. Segment C Menuiserie propose des menuiseries haut de gamme en harmonie avec le caractère résidentiel de la commune.",
    phoneNumber: "06 71 78 72 53",
    benefits: [
      "Service premium à Gradignan",
      "Menuiseries design et écologiques",
      "Accompagnement personnalisé",
      "Garantie décennale",
    ],
    population: "25 000 habitants",
  },
  heroAnimation: {
    title: "Design Contemporain",
    titleHighlight: "Gradignan",
    subtitle: "Éco-Responsable & Esthétique",
    description:
      "Menuiseries design et durables pour Gradignan. Bois certifiés PEFC, aluminium recyclable. Lignes épurées et grandes surfaces vitrées. Le luxe moderne qui respecte la planète.",
  },
  about: {
    title:
      "Design contemporain et matériaux responsables : l'excellence durable",
    description:
      "Gradignan la verte mérite des menuiseries à son image. Je crois qu'esthétisme et responsabilité ne sont pas incompatibles. Bois certifiés PEFC, aluminium 100% recyclable, finitions minérales sans COV : mes choix sont réfléchis. Mais pas question de sacrifier le design ! Lignes épurées, grandes surfaces vitrées, jeux de lumière : vos menuiseries seront aussi belles qu'écologiques. C'est ma vision du luxe moderne, celui qui respecte notre planète.",
  },
  service: {
    city: "Gradignan",
    mainTitle: "Service de menuiserie professionnelle à Gradignan",
    paragraphs: [
      "À Gradignan, Segment C Menuiserie répond aux attentes des propriétaires en quête de qualité et d'esthétisme. Notre offre haut de gamme privilégie les matériaux nobles et les finitions soignées.",
      "Nous accordons une importance particulière à l'intégration paysagère de nos menuiseries, en cohérence avec le caractère verdoyant de Gradignan. Bois certifiés, aluminium recyclable : nos choix sont durables.",
      "Du centre historique à Ornon, du Moulineau aux nouveaux quartiers, nous cultivons la proximité avec nos clients.",
    ],
    services: [
      "Menuiseries bois et mixte",
      "Portes d'entrée sur mesure",
      "Fenêtres design",
      "Vérandas bioclimatiques",
      "Claustra et brise-soleil",
      "Fenêtres coulissantes aluminium",
      "Portes pivotantes grand format",
      "Baies vitrées à translation 4 vantaux",
      "Pergolas autoportées design",
    ],
    founderName: "Rui De Carvalho",
    founderTitle: "Fondateur de Segment.C",
    founderPhone: "06 71 78 72 53",
    founderEmail: "info-segment.c@gmail.com",
    founderImage: "https://placehold.co/80x80/8B4513/FFFFFF?text=SC",
  },
};

// ========================================
// ARCACHON
// ========================================
export const arcachonData: VilleData = {
  hero: {
    city: "Arcachon",
    department: "Gironde",
    departmentNumber: "33",
    description:
      "Arcachon, perle du bassin éponyme, célèbre pour ses villas et sa dune du Pilat, mérite des menuiseries exceptionnelles. Segment C Menuiserie préserve et magnifie l'architecture balnéaire arcachonnaise.",
    phoneNumber: "06 71 78 72 53",
    benefits: [
      "Expert des villas arcachonnaises",
      "Menuiseries résistantes aux embruns",
      "Respect du patrimoine balnéaire",
      "Service pour résidences de prestige",
    ],
    population: "11 000 habitants",
  },
  heroAnimation: {
    title: "Restauration Patrimoine",
    titleHighlight: "Arcachon",
    subtitle: "Bow-windows & Villas d'Exception",
    description:
      "Préservation des villas arcachonnaises avec expertise ABF. Menuiseries marines haute performance et restauration du patrimoine balnéaire. Ville d'Hiver, Ville d'Été, Moulleau.",
  },
  about: {
    title:
      "Restauration patrimoine balnéaire : savoir-faire traditionnel et normes ABF",
    description:
      "Les villas arcachonnaises sont des joyaux. Bow-windows, oriels, balcons ouvragés : chaque détail architectural raconte une histoire. Ma mission ? La préserver tout en vous apportant le confort moderne. Je travaille régulièrement avec les ABF pour restaurer ces merveilles en respectant scrupuleusement leur cachet. Mais j'intègre aussi les technologies actuelles : double vitrage phonique, menuiseries anti-effraction, résistance marine optimale. Votre villa traversera les décennies avec grâce.",
  },
  service: {
    city: "Arcachon",
    mainTitle: "Service de menuiserie professionnelle à Arcachon",
    paragraphs: [
      "À Arcachon, Segment C Menuiserie intervient avec une connaissance approfondie du patrimoine balnéaire. Ville d'Hiver, ville d'Été, Moulleau : chaque quartier a ses spécificités que nous maîtrisons parfaitement.",
      "Nos menuiseries sont spécialement conçues pour résister au climat marin : bois traités autoclave, aluminium thermolaqué, joints renforcés. La durabilité est notre priorité sans compromis sur l'esthétique.",
      "Nous travaillons régulièrement avec les copropriétés et les architectes pour préserver l'harmonie architecturale de cette ville d'exception.",
    ],
    services: [
      "Restauration de villas anciennes",
      "Menuiseries marines haute performance",
      "Bow-windows et oriels",
      "Vérandas vue bassin",
      "Volets persiennés traditionnels",
      "Fenêtres cintrées sur mesure",
      "Portes vitrées à petits bois",
      "Baies vitrées panoramiques mer",
      "Pergolas bois style balnéaire",
    ],
    founderName: "Rui De Carvalho",
    founderTitle: "Fondateur de Segment.C",
    founderPhone: "06 71 78 72 53",
    founderEmail: "info-segment.c@gmail.com",
    founderImage: "https://placehold.co/80x80/8B4513/FFFFFF?text=SC",
  },
};

// ========================================
// LA TESTE-DE-BUCH
// ========================================
export const laTesteData: VilleData = {
  hero: {
    city: "La Teste-de-Buch",
    department: "Gironde",
    departmentNumber: "33",
    description:
      "La Teste-de-Buch, plus grande commune de Gironde, s'étend du bassin d'Arcachon à la forêt landaise. Segment C Menuiserie accompagne le développement de cette ville dynamique avec des solutions adaptées à chaque quartier.",
    phoneNumber: "06 71 78 72 53",
    benefits: [
      "Intervention sur toute La Teste",
      "Menuiseries adaptées au climat local",
      "Service résidentiel et commercial",
      "Devis gratuit et rapide",
    ],
    population: "28 000 habitants",
  },
  heroAnimation: {
    title: "Expertise Polyvalente",
    titleHighlight: "La Teste-de-Buch",
    subtitle: "Résidentiel & Professionnel",
    description:
      "Du port à la dune, tous vos projets à La Teste. Cabanes ostréicoles, villas, commerces : une expertise complète. Contraintes marines et habitat permanent maîtrisés.",
  },
  about: {
    title:
      "Expertise polyvalente : du résidentiel au professionnel, tous projets",
    description:
      "La Teste, c'est tout un territoire ! Des cabanes ostréicoles du port aux villas face à la dune, des pavillons de Cazaux aux commerces touristiques : chaque secteur a ses besoins spécifiques. Cette diversité fait ma richesse professionnelle. Je connais les contraintes marines, les défis de l'habitat permanent, les exigences du tertiaire. Quel que soit votre projet, j'ai l'expérience et les solutions techniques pour le mener à bien avec efficacité.",
  },
  service: {
    city: "La Teste-de-Buch",
    mainTitle: "Service de menuiserie professionnelle à La Teste-de-Buch",
    paragraphs: [
      "À La Teste-de-Buch, Segment C Menuiserie intervient sur l'ensemble du territoire communal : du port ostréicole du Rocher aux quartiers résidentiels de Cazaux, en passant par le centre-ville et Pyla-sur-Mer.",
      "Notre expertise s'étend des menuiseries marines pour les cabanes ostréicoles aux menuiseries haut de gamme pour les villas avec vue sur la dune. Chaque projet bénéficie d'une solution sur mesure.",
      "Nous proposons également des menuiseries spécifiques pour les commerces et les établissements du secteur touristique.",
    ],
    services: [
      "Menuiseries tous quartiers",
      "Cabanes ostréicoles",
      "Villas contemporaines",
      "Commerces et restaurants",
      "Menuiseries mixtes bois/alu",
      "Fenêtres anti-corrosion marine",
      "Portes coupe-vent renforcées",
      "Baies vitrées vue dune",
      "Vérandas résistantes aux tempêtes",
    ],
    founderName: "Rui De Carvalho",
    founderTitle: "Fondateur de Segment.C",
    founderPhone: "06 71 78 72 53",
    founderEmail: "info-segment.c@gmail.com",
    founderImage: "https://placehold.co/80x80/8B4513/FFFFFF?text=SC",
  },
};

// ========================================
// ANDERNOS-LES-BAINS
// ========================================
export const andernosData: VilleData = {
  hero: {
    city: "Andernos-les-Bains",
    department: "Gironde",
    departmentNumber: "33",
    description:
      "Andernos-les-Bains, station balnéaire familiale sur la rive nord du bassin, charme par son authenticité. Segment C Menuiserie propose des menuiseries adaptées au caractère balnéaire et forestier de la commune.",
    phoneNumber: "06 71 78 72 53",
    benefits: [
      "Expert menuiserie bassin d'Arcachon",
      "Solutions pour maisons de vacances",
      "Menuiseries résistantes",
      "Accompagnement personnalisé",
    ],
    population: "12 000 habitants",
  },
  heroAnimation: {
    title: "Menuiseries Marines",
    titleHighlight: "Andernos-les-Bains",
    subtitle: "Résidence Principale & Secondaire",
    description:
      "Solutions adaptées au climat du bassin à Andernos. Sécurisation pour résidences secondaires, isolation optimale pour habitat permanent. Bois exotiques et aluminium garantie marine.",
  },
  about: {
    title: "Menuiseries adaptées au climat marin : sécurité et longévité",
    description:
      "Andernos attire pour sa douceur de vivre, son authenticité préservée. Que vous y viviez à l'année ou veniez y passer l'été, vos menuiseries doivent tenir face aux embruns et aux variations saisonnières. Je vous conseille en fonction de votre usage : sécurisation renforcée pour les résidences secondaires, isolation optimale pour le confort permanent. Bois exotiques imputrescibles, aluminium laqué garantie marine : vos fenêtres et portes garderont leur beauté saison après saison.",
  },
  service: {
    city: "Andernos-les-Bains",
    mainTitle: "Service de menuiserie professionnelle à Andernos-les-Bains",
    paragraphs: [
      "À Andernos-les-Bains, Segment C Menuiserie intervient pour les résidences principales comme pour les maisons de vacances. Notre expertise du climat du bassin nous permet de vous conseiller les meilleures solutions.",
      "Nous proposons des menuiseries alliant résistance aux conditions marines et esthétique soignée. Bois exotiques, aluminium laqué, PVC renforcé : nos matériaux sont sélectionnés pour leur longévité.",
      "Du centre-ville historique aux quartiers résidentiels en lisière de forêt, nous adaptons nos prestations à chaque environnement.",
    ],
    services: [
      "Menuiseries balnéaires",
      "Portes-fenêtres coulissantes",
      "Volets et persiennes",
      "Vérandas et pergolas",
      "Aménagements de terrasses",
      "Fenêtres à frappe bois exotique",
      "Portes d'entrée anti-effraction",
      "Baies vitrées levantes coulissantes",
      "Volets roulants solaires",
    ],
    founderName: "Rui De Carvalho",
    founderTitle: "Fondateur de Segment.C",
    founderPhone: "06 71 78 72 53",
    founderEmail: "info-segment.c@gmail.com",
    founderImage: "https://placehold.co/80x80/8B4513/FFFFFF?text=SC",
  },
};

// ========================================
// BIGANOS
// ========================================
export const biganosData: VilleData = {
  hero: {
    city: "Biganos",
    department: "Gironde",
    departmentNumber: "33",
    description:
      "Biganos, porte d'entrée du bassin d'Arcachon, conjugue tradition ostréicole et développement résidentiel. Segment C Menuiserie accompagne l'essor de cette commune avec des menuiseries performantes et durables.",
    phoneNumber: "06 71 78 72 53",
    benefits: [
      "Intervention rapide à Biganos",
      "Menuiseries résidentielles",
      "Solutions pour professionnels",
      "Rapport qualité-prix optimal",
    ],
    population: "10 000 habitants",
  },
  heroAnimation: {
    title: "Artisan de Proximité",
    titleHighlight: "Biganos",
    subtitle: "Réactivité & Prix Justes",
    description:
      "Votre menuisier local à Biganos. Disponibilité, transparence, devis clairs. Construction neuve ou rénovation, je m'adapte à votre projet et votre budget avec rigueur.",
  },
  about: {
    title: "Artisan de proximité : réactivité, transparence et prix justes",
    description:
      "À Biganos, je suis l'artisan du coin, celui qu'on recommande à ses voisins. Pourquoi ? Parce que je suis disponible, réactif, et que je dis les choses clairement. Pas de jargon technique inutile, pas de mauvaises surprises sur le devis. Je vous explique ce qui est nécessaire, ce qui est conseillé, ce qui peut attendre. Construction neuve ou rénovation, particulier ou professionnel : je m'adapte à votre projet et à votre budget avec la même rigueur.",
  },
  service: {
    city: "Biganos",
    mainTitle: "Service de menuiserie professionnelle à Biganos",
    paragraphs: [
      "À Biganos, Segment C Menuiserie propose des solutions de menuiserie adaptées tant aux particuliers qu'aux professionnels. Notre proximité géographique garantit réactivité et disponibilité pour le suivi de vos chantiers.",
      "Nous intervenons sur tous types de projets : construction neuve, rénovation, extension. Nos menuiseries répondent aux dernières normes thermiques et acoustiques tout en respectant votre budget.",
      "Du centre-bourg aux quartiers périphériques, de Facture au port, nous couvrons l'ensemble de la commune.",
    ],
    services: [
      "Menuiseries PVC et aluminium",
      "Rénovation complète",
      "Portes et fenêtres sur mesure",
      "Volets roulants motorisés",
      "Agencement commercial",
      "Fenêtres à soufflet PVC",
      "Portes-fenêtres 1 vantail",
      "Baies vitrées économiques",
      "Pergolas adossées aluminium",
    ],
    founderName: "Rui De Carvalho",
    founderTitle: "Fondateur de Segment.C",
    founderPhone: "06 71 78 72 53",
    founderEmail: "info-segment.c@gmail.com",
    founderImage: "https://placehold.co/80x80/8B4513/FFFFFF?text=SC",
  },
};

// ========================================
// MARTIGNAS-SUR-JALLE
// ========================================
export const martignasData: VilleData = {
  hero: {
    city: "Martignas-sur-Jalle",
    department: "Gironde",
    departmentNumber: "33",
    description:
      "Martignas-sur-Jalle, commune résidentielle de la métropole bordelaise, offre un cadre de vie agréable. Segment C Menuiserie intervient pour tous vos projets de menuiserie avec expertise et professionnalisme.",
    phoneNumber: "06 71 78 72 53",
    benefits: [
      "Service local à Martignas",
      "Menuiseries haute performance",
      "Accompagnement de A à Z",
      "Devis détaillé gratuit",
    ],
    population: "7 500 habitants",
  },
  heroAnimation: {
    title: "Expert Isolation Thermique",
    titleHighlight: "Martignas-sur-Jalle",
    subtitle: "Économies jusqu'à 30%",
    description:
      "Rénovation énergétique à Martignas. Double ou triple vitrage, rupture de pont thermique. Résultat : -30% sur votre facture de chauffage et un confort inégalé.",
  },
  about: {
    title: "Expert isolation thermique : économies d'énergie jusqu'à 30%",
    description:
      "Vous en avez assez de chauffer l'extérieur ? Je vous comprends. À Martignas, beaucoup de maisons des années 70-80 sont de vraies passoires thermiques. La bonne nouvelle : avec des menuiseries modernes, les économies sont spectaculaires. Double ou triple vitrage selon l'orientation, rupture de pont thermique, poses en tunnel : je connais toutes les techniques pour maximiser vos gains. Résultat : moins 30% sur votre facture de chauffage, et un confort que vous ne soupçonniez pas.",
  },
  service: {
    city: "Martignas-sur-Jalle",
    mainTitle: "Service de menuiserie professionnelle à Martignas-sur-Jalle",
    paragraphs: [
      "À Martignas-sur-Jalle, Segment C Menuiserie accompagne les propriétaires dans leurs projets de rénovation énergétique et d'amélioration de l'habitat. Notre expertise technique garantit des installations durables et performantes.",
      "Nous proposons des menuiseries adaptées au parc immobilier de Martignas, essentiellement composé de maisons individuelles. Nos solutions optimisent votre confort tout en réduisant vos factures énergétiques.",
      "Proximité, réactivité et qualité sont les maîtres-mots de notre intervention à Martignas-sur-Jalle.",
    ],
    services: [
      "Fenêtres haute performance",
      "Portes d'entrée isolantes",
      "Volets et fermetures",
      "Extension et véranda",
      "Agencement intérieur",
      "Fenêtres à rupture pont thermique",
      "Portes palières isolées",
      "Baies vitrées à seuil plat",
      "Volets isolants intégrés",
    ],
    founderName: "Rui De Carvalho",
    founderTitle: "Fondateur de Segment.C",
    founderPhone: "06 71 78 72 53",
    founderEmail: "info-segment.c@gmail.com",
    founderImage: "https://placehold.co/80x80/8B4513/FFFFFF?text=SC",
  },
};

// ========================================
// SAINT-MÉDARD-EN-JALLES
// ========================================
export const saintMedardData: VilleData = {
  hero: {
    city: "Saint-Médard-en-Jalles",
    department: "Gironde",
    departmentNumber: "33",
    description:
      "Saint-Médard-en-Jalles, ville dynamique au nord-ouest de Bordeaux, conjugue zones résidentielles et pôles d'activités. Segment C Menuiserie accompagne son développement avec des solutions innovantes et durables.",
    phoneNumber: "06 71 78 72 53",
    benefits: [
      "Intervention sur Saint-Médard",
      "Solutions résidentielles et tertiaires",
      "Menuiseries certifiées",
      "Proximité et réactivité",
    ],
    population: "30 000 habitants",
  },
  heroAnimation: {
    title: "Menuiserie Tous Secteurs",
    titleHighlight: "Saint-Médard-en-Jalles",
    subtitle: "Habitat, Commerce & Bureaux",
    description:
      "Particuliers et professionnels à Saint-Médard. Menuiseries coupe-feu, vitrages acoustiques, ouvertures automatiques. Toutes les normes maîtrisées pour chaque usage.",
  },
  about: {
    title:
      "Menuiserie tous secteurs : habitat, commerce et locaux professionnels",
    description:
      "Saint-Médard grandit vite. Nouveaux quartiers, zones d'activités, réhabilitations : la ville bouge. Et moi avec elle ! Que vous soyez particulier en quête de confort ou professionnel cherchant une vitrine attractive, j'ai les compétences. Menuiseries certifiées coupe-feu pour les ERP, vitrages acoustiques pour les logements en zone bruyante, systèmes d'ouverture automatiques pour l'accessibilité : je maîtrise les normes et les solutions techniques pour chaque usage.",
  },
  service: {
    city: "Saint-Médard-en-Jalles",
    mainTitle: "Service de menuiserie professionnelle à Saint-Médard-en-Jalles",
    paragraphs: [
      "À Saint-Médard-en-Jalles, Segment C Menuiserie intervient pour les particuliers et les professionnels. Notre expertise s'étend des quartiers résidentiels historiques aux nouvelles zones d'activités économiques.",
      "Nous proposons des menuiseries adaptées à chaque type de bâtiment : maisons individuelles, immeubles collectifs, locaux commerciaux et professionnels. Nos solutions répondent aux enjeux de performance énergétique actuels.",
      "Du Burck au centre-ville, de Corbiac au Jallais, nous couvrons l'ensemble du territoire communal.",
    ],
    services: [
      "Menuiseries résidentielles",
      "Façades commerciales",
      "Menuiseries tertiaires",
      "Rénovation énergétique",
      "Portes coupe-feu",
      "Fenêtres acoustiques renforcées",
      "Portes automatiques coulissantes",
      "Baies vitrées anti-effraction",
      "Pergolas pour terrasses commerciales",
    ],
    founderName: "Rui De Carvalho",
    founderTitle: "Fondateur de Segment.C",
    founderPhone: "06 71 78 72 53",
    founderEmail: "info-segment.c@gmail.com",
    founderImage: "https://placehold.co/80x80/8B4513/FFFFFF?text=SC",
  },
};

// ========================================
// EYSINES
// ========================================
export const eysinesData: VilleData = {
  hero: {
    city: "Eysines",
    department: "Gironde",
    departmentNumber: "33",
    description:
      "Eysines, commune en plein essor au nord-ouest de Bordeaux, offre un cadre de vie privilégié. Segment C Menuiserie accompagne les habitants d'Eysines dans tous leurs projets de menuiserie avec professionnalisme.",
    phoneNumber: "06 71 78 72 53",
    benefits: [
      "Expert menuiserie à Eysines",
      "Solutions contemporaines",
      "Accompagnement personnalisé",
      "Qualité et réactivité",
    ],
    population: "23 000 habitants",
  },
  heroAnimation: {
    title: "Accompagnement Complet",
    titleHighlight: "Eysines",
    subtitle: "Neuf & Rénovation",
    description:
      "De la conception à la pose à Eysines. Travail en amont avec votre architecte ou analyse de votre bâti existant. Approche sur mesure du Vigean aux nouveaux lotissements.",
  },
  about: {
    title:
      "Accompagnement projet neuf et rénovation : de la conception à la pose",
    description:
      "Eysines se développe avec de beaux projets immobiliers. Vous construisez votre maison ? Je travaille en amont avec votre architecte pour intégrer les menuiseries dans la conception. Vous rénovez un pavillon existant ? J'analyse votre bâti pour proposer les solutions les plus pertinentes. Mon avantage : je connais les spécificités des différents quartiers eysinais, du Vigean historique aux nouveaux lotissements du Pin Franc. Une approche sur mesure pour un résultat optimal.",
  },
  service: {
    city: "Eysines",
    mainTitle: "Service de menuiserie professionnelle à Eysines",
    paragraphs: [
      "À Eysines, Segment C Menuiserie intervient sur tous types de projets : construction neuve, rénovation, extension. Notre connaissance des différents quartiers nous permet de proposer des solutions parfaitement adaptées.",
      "Nous travaillons régulièrement avec les nouvelles constructions du secteur et les rénovations des quartiers historiques. Notre expertise technique garantit des installations conformes aux dernières normes.",
      "Du Vigean au Pin Franc, du centre-ville aux nouveaux lotissements, nous assurons une couverture complète de la commune.",
    ],
    services: [
      "Menuiseries neuves et rénovation",
      "Portes d'entrée contemporaines",
      "Baies coulissantes grand format",
      "Volets et protections solaires",
      "Menuiseries mixtes",
      "Fenêtres à frappe aluminium",
      "Portes blindées design",
      "Baies vitrées à seuil encastré",
      "Vérandas modernes toit plat",
    ],
    founderName: "Rui De Carvalho",
    founderTitle: "Fondateur de Segment.C",
    founderPhone: "06 71 78 72 53",
    founderEmail: "info-segment.c@gmail.com",
    founderImage: "https://placehold.co/80x80/8B4513/FFFFFF?text=SC",
  },
};