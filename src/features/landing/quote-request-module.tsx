'use client';

import React, { useState, useTransition } from 'react';
import { X, User, Mail, Phone, MessageSquare, Building2, Briefcase, Users } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { createPublicDevisAction } from '@/features/villes/public-devis.actions';

type QuoteRequestModuleProps = {
  className?: string;
};

export default function QuoteRequestModule({ className }: QuoteRequestModuleProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const projectTypes = [
    { value: 'fenetres', label: 'Fenêtres PVC / Aluminium' },
    { value: 'portes', label: 'Portes d\'entrée sécurisées' },
    { value: 'volets', label: 'Volets roulants / Battants' },
    { value: 'veranda', label: 'Extensions / Vérandas' },
    { value: 'clotures', label: 'Clôtures / Portails' },
    { value: 'pergola', label: 'Pergolas / Stores' },
    { value: 'amenagement', label: 'Agencement intérieur' },
    { value: 'renovation', label: 'Rénovation complète' },
    { value: 'autre', label: 'Autre projet' },
  ];

  const secteurs = [
    { value: 'construction_batiment', label: 'Construction / Bâtiment' },
    { value: 'promotion_immobiliere', label: 'Promotion immobilière' },
    { value: 'architecture', label: 'Architecture / Bureau d\'études' },
    { value: 'amenagement_interieur', label: 'Aménagement intérieur' },
    { value: 'gestion_patrimoine', label: 'Gestion de patrimoine' },
    { value: 'hotellerie_restauration', label: 'Hôtellerie / Restauration' },
    { value: 'commerce_retail', label: 'Commerce / Retail' },
    { value: 'bureaux_coworking', label: 'Bureaux / Coworking' },
    { value: 'sante_medical', label: 'Santé / Médical' },
    { value: 'education', label: 'Éducation / Formation' },
    { value: 'industrie', label: 'Industrie / Logistique' },
    { value: 'collectivites', label: 'Collectivités / Administration' },
    { value: 'association', label: 'Association / ONG' },
    { value: 'syndic_copropriete', label: 'Syndic / Copropriété' },
    { value: 'autre_secteur', label: 'Autre secteur' },
  ];

  const openModal = () => {
    setIsModalOpen(true);
    setIsSubmitted(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
    setErrors({});
    setIsSubmitted(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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

    if (userType === 'particulier') {
      if (!formData.projectType) {
        newErrors.projectType = 'Le type de projet est requis';
      }
    }

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
        const dataToSend = {
          clientType: userType,
          nomComplet: formData.name,
          email: formData.email,
          telephone: formData.phone || undefined,
          descriptionProjet: formData.description,
          typeProjet: formData.projectType || undefined,
          
          typeConstruction: (formData.typeConstruction || undefined) as "je_fais_construire" | "je_construis_moi_meme" | undefined,
          typeBatiment: (formData.typeBatiment || undefined) as "maison" | "autre" | undefined,
          natureTravaux: (formData.natureTravaux || undefined) as "construction" | "renovation" | undefined,
          besoinsRGE: (formData.besoinsRGE || undefined) as "oui" | "non" | "ne_sait_pas" | undefined,
          
          nomContact: userType === 'professionnel' ? formData.name : undefined,
          nomEntreprise: userType === 'professionnel' ? formData.company : undefined,
          fonction: userType === 'professionnel' ? (formData.position || undefined) : undefined,
          secteurActivite: userType === 'professionnel' ? formData.sector : undefined,
          tailleEntreprise: userType === 'professionnel' ? (formData.companySize || undefined) : undefined,
        };

        const result = await createPublicDevisAction(dataToSend);
        
        if (result.success) {
          alert(`✅ ${result.message}`);
          setTimeout(() => {
            closeModal();
          }, 1500);
        } else {
          alert(`❌ ${result.message}`);
          setIsSubmitted(false);
        }
        
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Erreur:', error);
        alert('❌ Une erreur est survenue');
        setIsSubmitted(false);
      }
    });
  };

  return (
    <>
      <button
        onClick={openModal}
        className={className ?? buttonVariants({ size: "default" })}
        aria-label="Ouvrir le formulaire de demande de devis"
      >
        Demande de devis
      </button>

      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/70 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeModal} 
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative w-full mx-auto max-w-2xl bg-white rounded-xl shadow-2xl transform transition-all duration-300 overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 z-10 p-2 transition-colors"
              aria-label="Fermer le formulaire"
            >
              <X className="size-6" />
            </button>

            <div className="p-6 overflow-y-auto">
              <h1 className="text-2xl font-extrabold text-gray-800 mb-2 text-center">
                Demandez votre devis gratuit
              </h1>
              <p className="text-gray-500 mb-6 text-center text-sm">
                Remplissez le formulaire ci-dessous, nous vous répondons sous 24h
              </p>

              {/* Toggle Particulier/Professionnel */}
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
                       Particulier
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
                       Professionnel
                    </div>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {/* FORMULAIRE PARTICULIER */}
                {userType === 'particulier' && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">Nom complet *</label>
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
                        <label className="mb-1 block text-sm font-medium text-gray-700">Email *</label>
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">Téléphone</label>
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
                        <label className="mb-1 block text-sm font-medium text-gray-700">Type de projet *</label>
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

                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">Description du projet *</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 size-4 text-gray-400" />
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          rows={4}
                          placeholder="Décrivez votre projet en quelques lignes..."
                          className={`w-full rounded-lg border ${errors.description ? 'border-red-500' : 'border-gray-300'} py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500 bg-white resize-none`}
                          disabled={isPending}
                        />
                        {errors.description && <p className="mt-1 text-xs text-red-600">{errors.description}</p>}
                      </div>
                    </div>
                  </>
                )}

                {/* FORMULAIRE PROFESSIONNEL */}
                {userType === 'professionnel' && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">Nom du contact *</label>
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
                        <label className="mb-1 block text-sm font-medium text-gray-700">Email *</label>
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">Nom de l'entreprise *</label>
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
                        <label className="mb-1 block text-sm font-medium text-gray-700">Votre fonction</label>
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">Téléphone</label>
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
                        <label className="mb-1 block text-sm font-medium text-gray-700">Type de projet *</label>
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">Secteur d'activité *</label>
                        <select
                          name="sector"
                          value={formData.sector}
                          onChange={handleInputChange}
                          className={`w-full rounded-lg border ${errors.sector ? 'border-red-500' : 'border-gray-300'} bg-white px-3 py-2.5 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500`}
                          disabled={isPending}
                        >
                          <option value="">Sélectionnez un secteur</option>
                          {secteurs.map((secteur) => (
                            <option key={secteur.value} value={secteur.value}>{secteur.label}</option>
                          ))}
                        </select>
                        {errors.sector && <p className="mt-1 text-xs text-red-600">{errors.sector}</p>}
                      </div>

                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">Taille de l'entreprise</label>
                        <div className="relative">
                          <Users className="absolute left-3 top-3 size-4 text-gray-400" />
                          <select
                            name="companySize"
                            value={formData.companySize}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500"
                            disabled={isPending}
                          >
                            <option value="">Sélectionnez</option>
                            <option value="1-10">1-10 employés</option>
                            <option value="11-50">11-50 employés</option>
                            <option value="51-200">51-200 employés</option>
                            <option value="201-500">201-500 employés</option>
                            <option value="500+">500+ employés</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-medium text-gray-700">Description du projet *</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 size-4 text-gray-400" />
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          rows={4}
                          placeholder="Décrivez votre projet en quelques lignes..."
                          className={`w-full rounded-lg border ${errors.description ? 'border-red-500' : 'border-gray-300'} py-2.5 pl-10 pr-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-green-500 bg-white resize-none`}
                          disabled={isPending}
                        />
                        {errors.description && <p className="mt-1 text-xs text-red-600">{errors.description}</p>}
                      </div>
                    </div>
                  </>
                )}

                {/* Bouton Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={isPending || isSubmitted}
                  className="w-full rounded-lg bg-green-600 px-4 py-3 font-semibold text-white transition-all duration-300 hover:bg-green-700 disabled:bg-gray-400 flex items-center justify-center gap-2"
                >
                  {isPending ? (
                    <>
                      <div className="size-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      ✨ Envoyer ma demande de devis
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-500">
                  En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe pour votre projet.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}