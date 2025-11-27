import React from 'react';
import { MapPin, Check, ArrowRight, Phone, Mail, Send } from 'lucide-react';

// --- Data structure for the component ---
const serviceData = {
  // Hero section data
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '#' },
      { label: 'Nos Villes', href: '#' },
      { label: 'Cap Ferret', href: '#' },
    ],
    locationBadge: 'Gironde (33)',
    mainTitle: 'Menuisier à',
    cityName: 'Cap Ferret',
    description: 'Cap Ferret, presqu\'île emblématique de la Gironde, mérite des menuiseries à la hauteur de son charme. Segment C Menuiserie intervient rapidement chez les particuliers et professionnels pour des travaux de menuiserie sur mesure et de qualité.',
    cta: {
      quoteText: 'Demander un devis gratuit',
      phoneNumber: '05 56 12 34 56',
    },
    featureCard: {
      title: 'Pourquoi choisir Segment C Menuiserie à Cap Ferret ?',
      benefits: [
        'Intervention rapide dans tout Cap Ferret',
        'Service adapté aux résidences secondaires',
        'Devis gratuit sous 24h',
        'Menuiseries bois, PVC et aluminium',
      ],
      populationLabel: 'Population',
      populationValue: '8 000 habitants',
    },
  },
  // Main content section data
  content: {
    mainTitle: 'Service de menuiserie professionnelle à Cap Ferret',
    paragraphs: [
      "Segment C Menuiserie est votre partenaire de confiance pour tous vos travaux de menuiserie à Cap Ferret. Que vous soyez un particulier souhaitant rénover votre villa en bord de mer ou un professionnel recherchant un artisan qualifié pour votre projet, nous avons la solution adaptée.",
      "Notre expertise nous permet d'intervenir sur tous types de menuiseries : portes d'entrée, fenêtres bois et PVC, volets, vérandas, agencements intérieurs sur mesure et terrasses en bois. Nous utilisons uniquement des matériaux de première qualité et respectons les normes environnementales pour garantir durabilité et esthétisme.",
      "Basé en Gironde, notre équipe Segment C Menuiserie s'engage à vous fournir un service irréprochable avec une attention particulière portée aux finitions. Chaque intervention est réalisée avec soin et professionnalisme, en respectant le cachet architectural de la région.",
    ],
    guarantees: [
      { time: '24h', text: 'Réponse garantie', subtext: 'Devis gratuit et rapide' },
      { time: '100%', text: 'Satisfaction client', subtext: 'Travaux garantis' },
    ],
    servicesList: {
      title: 'Nos services à Cap Ferret',
      items: [
        'Pose de portes et fenêtres bois/PVC/alu',
        'Installation de volets battants et roulants',
        'Agencement intérieur sur mesure',
        'Création de terrasses et pergolas',
        'Rénovation de menuiseries anciennes',
      ],
    },
    founder: {
      name: 'Mathieu Dupont',
      title: 'Fondateur Segment C Menuiserie',
      contactPhone: '05 56 12 34 56',
      contactEmail: 'contact@segmentc-menuiserie.fr',
      imageUrl: 'https://placehold.co/80x80/8B4513/FFFFFF?text=MD',
    },
  },
};

// --- The Main Component ---
const MenuiserieCapFerret = () => {
  const { hero, content } = serviceData;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Votre demande a été envoyée !');
  };

  return (
    <div className="bg-white font-sans">

      {/* ================================================== */}
      {/* HERO SECTION - 2 COLONNES */}
      {/* ================================================== */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <div className="flex flex-wrap items-center gap-2">
              {hero.breadcrumb.map((item, index) => (
                <React.Fragment key={item.label}>
                  <a href={item.href} className="hover:text-blue-600 transition">
                    {item.label}
                  </a>
                  {index < hero.breadcrumb.length - 1 && <span>/</span>}
                </React.Fragment>
              ))}
            </div>
          </nav>

          {/* Badge Location */}
          <div className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            {hero.locationBadge}
          </div>

          {/* 2 COLONNES : Contenu gauche + Card droite */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* COLONNE GAUCHE - Contenu Hero */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                {hero.mainTitle} <span className="text-blue-600">{hero.cityName}</span>
              </h1>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="flex items-center justify-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition">
                  {hero.cta.quoteText}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="flex items-center justify-center bg-white border-2 border-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:border-blue-500 transition">
                  <Phone className="w-4 h-4 mr-2 text-blue-600" />
                  {hero.cta.phoneNumber}
                </button>
              </div>
            </div>

            {/* COLONNE DROITE - Card Pourquoi choisir */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  {hero.featureCard.title}
                </h2>
                <ul className="space-y-4 mb-6">
                  {hero.featureCard.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="rounded-full bg-blue-100 p-1 mr-3 mt-0.5 flex-shrink-0">
                        <Check className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-sm text-gray-600">{hero.featureCard.populationLabel}</span>
                  <span className="text-lg font-bold text-gray-900">{hero.featureCard.populationValue}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION SERVICE - 2 COLONNES */}
      {/* ================================================== */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* COLONNE GAUCHE - Contenu + Badges + Services */}
            <div className="space-y-10">
              
              {/* Titre et paragraphes */}
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  {content.mainTitle}
                </h2>
                {content.paragraphs.map((p, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Badges 24h et 100% */}
              <div className="grid grid-cols-2 gap-6">
                {content.guarantees.map((guarantee, index) => (
                  <div key={index} className="bg-blue-50 rounded-2xl p-6 text-center border border-blue-100">
                    <p className="text-5xl font-bold text-blue-600 mb-2">{guarantee.time}</p>
                    <p className="text-sm font-semibold text-gray-900">{guarantee.text}</p>
                    <p className="text-xs text-gray-600">{guarantee.subtext}</p>
                  </div>
                ))}
              </div>

              {/* Box noire avec services */}
              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">{content.servicesList.title}</h3>
                <ul className="space-y-4">
                  {content.servicesList.items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="rounded-full bg-blue-500/20 p-1 mr-3 flex-shrink-0">
                        <Check className="w-5 h-5 text-blue-400" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* COLONNE DROITE - Formulaire + Contact */}
            <div className="space-y-8">
              
              {/* Formulaire */}
              <div className="bg-gray-50 rounded-2xl p-8 shadow-md border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Demandez votre devis gratuit
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Remplissez le formulaire ci-dessous, nous vous répondons sous 24h
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nom complet <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Votre nom"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="votre@email.fr"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Téléphone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="06 12 34 56 78"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Type de client <span className="text-red-500">*</span>
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                        <option>Particulier</option>
                        <option>Professionnel</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Décrivez votre besoin en menuiserie..."
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer ma demande
                  </button>
                </form>
              </div>                
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MenuiserieCapFerret;