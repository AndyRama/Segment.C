"use client";

import { useState } from "react";
import { Typography } from "@/components/nowts/typography";
import { SectionLayout } from "./../landing/section-layout";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Devis gratuit et sans engagement",
    description: "Je vous accompagne dans votre projet et vous conseille sur les aspects techniques. Crée votre compte et faite une demande de devis",
    image: "./images/fenetre1.jpg"
  },
  {
    id: 2,
    title: "Visite technique et préparation chantier",
    description: "Je valide votre projet avec mes conseilles et prise de mesure que je planifie à partir de notre visite contact avec vous.",
    image: "./images/fenetre2.jpg"
  },
  {
    id: 3,
    title: "Visite technique chez vous",
    description: "Une fois le diagnostic établi, Je vous conseille de prendre rendez-vous pour valider la faisabilité du projet.",
    image: "./images/fenetre3.jpg"
  },
  {
    id: 4,
    title: "Réalisation de votre projet sur mesure",
    description: "Je réalise votre projet selon les exigences de construction pour la pose et installation des fenêtres et portes.",
    image: "./images/fenetre4.jpg"
  }
];

export const ProcessSection2 = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <SectionLayout
      id="Presentation"
      variant="default"
      size="lg"
      className="flex flex-col items-center justify-center gap-4"
    >
      <div className="flex w-full flex-col items-center gap-3 lg:gap-4 xl:gap-6">
        <Typography variant="p" className="text-green-600">
          Notre Process
        </Typography>
        <Typography variant="h1">Comment ça marche ?</Typography>

        {/* Section avec image interactive */}
        <div className="mt-8 w-full max-w-6xl">
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
            <div className="flex flex-col lg:flex-row">
              {/* Image gauche desktop / haut mobile */}
              <div className="w-full lg:w-1/2">
                <motion.img
                  key={activeService.id}
                  src={activeService.image}
                  alt={activeService.title}
                  className="size-full object-cover"
                  style={{ height: '460px' }}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Contenu droite desktop / bas mobile */}
              <div className="w-full p-6 lg:w-1/2 lg:p-8">
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { delay: index * 0.1, duration: 0.5 },
                      }}
                      viewport={{ once: true }}
                      className="group flex cursor-pointer items-start"
                      onClick={() => setActiveService(service)}
                      onMouseEnter={() => setActiveService(service)}
                    >
                      <div className={`mr-4 flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white transition-all duration-300 ${
                        activeService.id === service.id 
                          ? 'scale-110 bg-green-600' 
                          : 'bg-green-500 group-hover:bg-green-600'
                      }`}>
                        {service.id}
                      </div>
                      <div className="flex-1">
                        <h3 className={`mb-2 text-lg font-bold transition-colors duration-300 ${
                          activeService.id === service.id 
                            ? 'text-green-600' 
                            : 'text-gray-800 group-hover:text-green-600'
                        }`}>
                          {service.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-600">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section avec image statique */}
        <div className="mt-12 flex w-full  max-w-6xl flex-col items-center gap-8 md:flex-row">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="images/fenetre1.jpg"
                alt="Artisan installant une fenêtre"
                className="h-80 w-full object-cover"
              />
              <div className="absolute inset-0"></div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="large"
              className="leading-relaxed text-gray-700"
            >
              Chez Segment.C, nous mettons notre expertise au service de vos
              projets de rénovation. Notre équipe d'artisans qualifiés vous
              accompagne à chaque étape, depuis la première visite conseil
              jusqu'à la finalisation de vos travaux.
            </Typography>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 rounded-lg bg-green-500 px-6 py-3 font-medium text-white 
                         shadow-lg transition-all duration-300 hover:bg-green-600"
            >
              Demander un devis gratuit
            </motion.button>
          </motion.div>
        </div>
      </div>
    </SectionLayout>
  );
};