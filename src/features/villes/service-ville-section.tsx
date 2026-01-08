'use client';

import React, { useState, useTransition } from 'react';
import { Check, Send, Phone, Mail, User, MessageSquare, Building2, Briefcase, Users } from 'lucide-react';
import { createPublicDevisAction } from './public-devis.actions';
import type { ServiceVilleSectionProps } from './types';

// Composant de formulaire complet avec connexion BDD
const ContactFormInline = () => {
  const [userType, setUserType] = useState<'particulier' | 'professionnel'>('particulier');
  const [isPending, startTransition] = useTransition();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    // Champs communs
    name: '',
    email: '',
    phone: '',
    description: '',
    
    // Champs particuliers
    projectType: '',
    typeConstruction: '',
    typeBatiment: '',
    natureTravaux: '',
    besoinsRGE: '',
    
    // Champs professionnels
    contactName: '',
    company: '',
    position: '',
    sector: '',
    companySize: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors(prev => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [name]: _, ...rest } = prev;
        return rest;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Validation commune
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.description.trim() || formData.description.length < 10) {
      newErrors.description = 'La description doit contenir au moins 10 caractères';
    }

    // Validation particulier
    if (userType === 'particulier') {
      if (!formData.projectType) {
        newErrors.projectType = 'Le type de projet est requis';
      }
    }

    // Validation professionnel
    if (userType === 'professionnel') {
      if (!formData.company.trim()) {
        newErrors.company = 'Le nom de l\'entreprise est requis';
      }
      if (!formData.sector) {
        newErrors.sector = 'Le secteur d\'activité est requis';
      }
      if (!formData.projectType) {
        newErrors.projectType = 'Le type de projet est requis';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    startTransition(async () => {
      setIsSubmitted(true);
      
      try {
        // Préparer les données selon le schéma DevisFormType
        const dataToSend = {
          clientType: userType,
          nomComplet: formData.name,
          email: formData.email,
          telephone: formData.phone || undefined,
          descriptionProjet: formData.description,
          typeProjet: formData.projectType || undefined,
          
          // Champs construction (particuliers)
          typeConstruction: (formData.typeConstruction || undefined) as "je_fais_construire" | "je_construis_moi_meme" | undefined,
          typeBatiment: (formData.typeBatiment || undefined) as "maison" | "autre" | undefined,
          natureTravaux: (formData.natureTravaux || undefined) as "construction" | "renovation" | undefined,
          besoinsRGE: (formData.besoinsRGE || undefined) as "oui" | "non" | "ne_sait_pas" | undefined,
          
          // Champs professionnels
          nomContact: userType === 'professionnel' ? formData.name : undefined,
          nomEntreprise: userType === 'professionnel' ? formData.company : undefined,
          fonction: userType === 'professionnel' ? (formData.position || undefined) : undefined,
          secteurActivite: userType === 'professionnel' ? formData.sector : undefined,
          tailleEntreprise: userType === 'professionnel' ? (formData.companySize || undefined) : undefined,
        };

        const result = await createPublicDevisAction(dataToSend);
        
        if (result.success) {
          // Succès - afficher message et réinitialiser
          alert(`✅ ${result.message}`);
          
          // Réinitialiser le formulaire
          setFormData({
            name: '',
            email: '',
            phone: '',
            description: '',
            projectType: '',
            typeConstruction: '',
            typeBatiment: '',
            natureTravaux: '',
            besoinsRGE: '',
            contactName: '',
            company: '',
            position: '',
            sector: '',
            companySize: '',
          });
        } else {
          alert(`❌ ${result.message}`);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Erreur lors de l\'envoi:', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
      } finally {
        setIsSubmitted(false);
      }
    });
  };

  // Options de sélection
  const projectTypes = [
    { value: 'fenetre', label: 'Fenêtre' },
    { value: 'porte', label: 'Porte d\'entrée' },
    { value: 'baie-vitree', label: 'Baie vitrée' },
    { value: 'volets', label: 'Volets' },
    { value: 'persiennes', label: 'Persiennes' },
    { value: 'pergolas', label: 'Pergolas' },
    { value: 'veranda', label: 'Véranda' },
    { value: 'menuiserie', label: 'Menuiserie' },
    { value: 'autre', label: 'Autre' },
  ];

  const sectors = [
    { value: 'hotellerie-restauration', label: 'Hôtellerie & Restauration' },
    { value: 'commerce-retail', label: 'Commerce & Retail' },
    { value: 'bureaux-tertiaire', label: 'Bureaux & Tertiaire' },
    { value: 'sante-medical', label: 'Santé & Médical' },
    { value: 'industrie-logistique', label: 'Industrie & Logistique' },
    { value: 'immobilier-syndic', label: 'Immobilier & Syndics' },
    { value: 'education-formation', label: 'Éducation & Formation' },
    { value: 'sport-loisirs', label: 'Sport & Loisirs' },
    { value: 'services-publics', label: 'Services Publics' },
    { value: 'artisanat-local', label: 'Artisanat & Commerce Local' },
    { value: 'banque-assurance', label: 'Banque & Assurance' },
    { value: 'transport-automobile', label: 'Transport & Automobile' },
    { value: 'agriculture-cooperative', label: 'Agriculture & Coopératives' },
    { value: 'technologie-startup', label: 'Technologie & Startups' },
    { value: 'autre', label: 'Autre secteur' },
  ];

  const companySizes = [
    { value: '1-10', label: '1-10 employés' },
    { value: '11-50', label: '11-50 employés' },
    { value: '51-200', label: '51-200 employés' },
    { value: '200+', label: '200+ employés' },
  ];

  return (
    <div className="space-y-4">
      {/* Header with Toggle */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex rounded-lg bg-gray-200 p-1">
          <button
            type="button"
            onClick={() => setUserType('particulier')}
            disabled={isPending}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
              userType === 'particulier'
                ? 'bg-green-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className={`size-2 rounded-full ${userType === 'particulier' ? 'bg-white' : 'bg-green-600'}`}></div>
              👤 Particulier
            </div>
          </button>
          <button
            type="button"
            onClick={() => setUserType('professionnel')}
            disabled={isPending}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
              userType === 'professionnel'
                ? 'bg-green-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className={`size-2 rounded-full ${userType === 'professionnel' ? 'bg-white' : 'bg-green-600'}`}></div>
              🏢 Professionnel
            </div>
          </button>
        </div>
      </div>

      {/* ========== FORMULAIRE PARTICULIER ========== */}
      {userType === 'particulier' && (
        <>
          {/* Nom et Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Nom complet *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 size-4 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Nom Prénom"
                  className={`w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500 bg-white`}
                  disabled={isPending}
                />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>
            </div>
            
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 size-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="contact@email.com"
                  className={`w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500 bg-white`}
                  disabled={isPending}
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>
            </div>
          </div>

          {/* Téléphone et Type de projet */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Téléphone
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 size-4 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="06 12 34 56 78"
                  className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500 bg-white"
                  disabled={isPending}
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Type de projet *
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                className={`w-full rounded-lg border ${errors.projectType ? 'border-red-500' : 'border-gray-300'} bg-white px-3 py-2.5 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500`}
                disabled={isPending}
              >
                <option value="">Sélectionnez un type</option>
                {projectTypes.map((type) => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
              {errors.projectType && <p className="mt-1 text-xs text-red-600">{errors.projectType}</p>}
            </div>
          </div>

          {/* Section Projet de construction (optionnelle pour particuliers) */}
          {formData.projectType && (
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 space-y-3">
              <h4 className="text-sm font-semibold text-green-800 mb-3">
                📋 Informations complémentaires (optionnel)
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs font-medium text-gray-700">
                    Type de construction
                  </label>
                  <select
                    name="typeConstruction"
                    value={formData.typeConstruction}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
                    disabled={isPending}
                  >
                    <option value="">Non spécifié</option>
                    <option value="je_fais_construire">Je fais construire</option>
                    <option value="je_construis_moi_meme">Je construis moi-même</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium text-gray-700">
                    Type de bâtiment
                  </label>
                  <select
                    name="typeBatiment"
                    value={formData.typeBatiment}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
                    disabled={isPending}
                  >
                    <option value="">Non spécifié</option>
                    <option value="maison">Maison</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs font-medium text-gray-700">
                    Nature des travaux
                  </label>
                  <select
                    name="natureTravaux"
                    value={formData.natureTravaux}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
                    disabled={isPending}
                  >
                    <option value="">Non spécifié</option>
                    <option value="construction">Construction</option>
                    <option value="renovation">Rénovation</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium text-gray-700">
                    Besoin de certification RGE ?
                  </label>
                  <select
                    name="besoinsRGE"
                    value={formData.besoinsRGE}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
                    disabled={isPending}
                  >
                    <option value="">Non spécifié</option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                    <option value="ne_sait_pas">Je ne sais pas</option>
                  </select>
                </div>
              </div>

              <div className="bg-green-100 p-3 rounded border border-green-300 mt-3">
                <p className="text-xs text-green-800">
                  ℹ️ <strong>Certification RGE :</strong> Indispensable pour bénéficier des aides à la rénovation énergétique (MaPrimeRénov', CEE, etc.)
                </p>
              </div>
            </div>
          )}
        </>
      )}

      {/* ========== FORMULAIRE PROFESSIONNEL ========== */}
      {userType === 'professionnel' && (
        <>
          {/* Nom du contact et Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Nom du contact *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 size-4 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Nom du responsable"
                  className={`w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500 bg-white`}
                  disabled={isPending}
                />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>
            </div>
            
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 size-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="contact@entreprise.com"
                  className={`w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500 bg-white`}
                  disabled={isPending}
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>
            </div>
          </div>

          {/* Entreprise et Fonction */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Nom de l'entreprise *
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-3 size-4 text-gray-400" />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Nom de votre entreprise"
                  className={`w-full rounded-lg border ${errors.company ? 'border-red-500' : 'border-gray-300'} py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500 bg-white`}
                  disabled={isPending}
                />
                {errors.company && <p className="mt-1 text-xs text-red-600">{errors.company}</p>}
              </div>
            </div>
            
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Votre fonction
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 size-4 text-gray-400" />
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  placeholder="Directeur, Manager..."
                  className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500 bg-white"
                  disabled={isPending}
                />
              </div>
            </div>
          </div>

          {/* Téléphone et Type de projet */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Téléphone
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 size-4 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="06 12 34 56 78"
                  className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500 bg-white"
                  disabled={isPending}
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Type de projet *
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                className={`w-full rounded-lg border ${errors.projectType ? 'border-red-500' : 'border-gray-300'} bg-white px-3 py-2.5 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500`}
                disabled={isPending}
              >
                <option value="">Sélectionnez un type</option>
                {projectTypes.map((type) => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
              {errors.projectType && <p className="mt-1 text-xs text-red-600">{errors.projectType}</p>}
            </div>
          </div>

          {/* Secteur d'activité et Taille entreprise */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Secteur d'activité *
              </label>
              <select
                name="sector"
                value={formData.sector}
                onChange={handleInputChange}
                className={`w-full rounded-lg border ${errors.sector ? 'border-red-500' : 'border-gray-300'} bg-white px-3 py-2.5 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500`}
                disabled={isPending}
              >
                <option value="">Sélectionnez un secteur</option>
                {sectors.map((sector) => (
                  <option key={sector.value} value={sector.value}>{sector.label}</option>
                ))}
              </select>
              {errors.sector && <p className="mt-1 text-xs text-red-600">{errors.sector}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Taille de l'entreprise
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-3 size-4 text-gray-400" />
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-gray-300 bg-white pl-10 pr-3 py-2.5 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
                  disabled={isPending}
                >
                  <option value="">Sélectionnez la taille</option>
                  {companySizes.map((size) => (
                    <option key={size.value} value={size.value}>{size.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Description du projet (commun) */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Description du projet *
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 size-4 text-gray-400" />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Décrivez votre projet en détail : objectifs, budget approximatif, délais souhaités..."
            rows={4}
            className={`w-full resize-none rounded-lg border ${errors.description ? 'border-red-500' : 'border-gray-300'} py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500 bg-white`}
            disabled={isPending}
          />
          {errors.description && <p className="mt-1 text-xs text-red-600">{errors.description}</p>}
        </div>
      </div>

      {/* Garanties incluses */}
      <div className="rounded-lg border border-green-100 bg-green-50 p-4">
        <div className="mb-3 flex items-center gap-2">
          <Check className="size-4 text-green-600" />
          <span className="text-sm font-medium text-green-700">Garanties incluses :</span>
        </div>
        <ul className="space-y-1.5 text-sm text-green-600">
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 size-3 shrink-0 text-green-500" />
            <span>Devis détaillé gratuit sous 24h</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 size-3 shrink-0 text-green-500" />
            <span>Accompagnement et suivi personnalisé</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 size-3 shrink-0 text-green-500" />
            <span>Résultats mesurables et plans adaptés</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 size-3 shrink-0 text-green-500" />
            <span>Garantie de qualité et respect des délais</span>
          </li>
        </ul>
      </div>

      {/* Submit Button */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={isPending || isSubmitted}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed"
      >
        {isPending || isSubmitted ? (
          <>
            <div className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="size-4" />
            ⭐ Envoyer ma demande de devis
          </>
        )}
      </button>

      {/* Footer text */}
      <p className="text-center text-xs leading-relaxed text-gray-500">
        En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe pour votre projet.
      </p>
    </div>
  );
};

export const ServiceVilleSection = ({
  city,
  mainTitle,
  paragraphs,
  services,
  founderName,
  founderTitle,
  founderPhone,
  founderEmail,
  founderImage = 'https://placehold.co/80x80/8B4513/FFFFFF?text=SC',
}: ServiceVilleSectionProps) => {
  return (
    <section className="bg-white py-16" id="contact-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* COLONNE GAUCHE - Contenu + Badges + Services */}
          <div className="space-y-10">
            
            {/* Titre et paragraphes */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {mainTitle}
              </h2>
              {paragraphs.map((p, index) => (
                <p key={index} className="text-gray-700 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Badges 24h et 100% */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-2xl p-6 text-center border border-green-100">
                <p className="text-5xl font-bold text-green-600 mb-2">24h</p>
                <p className="text-sm font-semibold text-gray-900">Réponse garantie</p>
                <p className="text-xs text-gray-600">Devis gratuit et rapide</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 text-center border border-green-100">
                <p className="text-5xl font-bold text-green-600 mb-2">100%</p>
                <p className="text-sm font-semibold text-gray-900">Satisfaction client</p>
                <p className="text-xs text-gray-600">Travaux garantis</p>
              </div>
            </div>

            {/* Box noire avec services */}
            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Nos services à {city}</h3>
              <ul className="space-y-4">
                {services.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="rounded-full bg-green-500/20 p-1 mr-3 flex-shrink-0">
                      <Check className="w-5 h-5 text-green-400" />
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
            <div id="devis" className="bg-gray-50 rounded-2xl p-8 shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Demandez votre devis gratuit
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Remplissez le formulaire ci-dessous, nous vous répondons sous 24h
              </p>

              <ContactFormInline />
            </div>

            {/* Card Contact */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={founderImage}
                  alt={founderName}
                  className="w-16 h-16 rounded-full border-2 border-green-100 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/80x80/8B4513/FFFFFF?text=SC';
                  }}
                />
                <div>
                  <p className="font-bold text-gray-900">{founderName}</p>
                  <p className="text-sm text-gray-600">{founderTitle}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <h4 className="font-bold text-gray-900">Contactez-nous directement</h4>
                <a 
                  href={`tel:${founderPhone.replace(/\s/g, '')}`}
                  className="flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  {founderPhone}
                </a>
                <a 
                  href={`mailto:${founderEmail}`}
                  className="flex items-center text-green-600 hover:text-green-700 font-medium break-all"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  {founderEmail}
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};