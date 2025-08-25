'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import logo1 from './../../../public/images/sybaie.png';
import logo2 from './../../../public/images/orial.png';
import logo3 from './../../../public/images/c2r.png';
import logo4 from './../../../public/images/swao.png';
import logo5 from './../../../public/images/logo4.jpg';

type LogoItem = {
  id: number
  logo: StaticImageData
}

type PartenaireProps = {
  className?: string
}

const PartenaireContent = {
  intro: {
    subTitle: 'Les entreprises',
    title: "Partenaire",
    description: '',
  },
  logos: [
    { logo: logo1, id: 1 },
    { logo: logo2, id: 2 },
    { logo: logo3, id: 3 },
    { logo: logo4, id: 4 },
    { logo: logo5, id: 5 },
  ] as LogoItem[],
};

export const Partenaire: React.FC<PartenaireProps> = ({ className = '' }) => {
  return (
    <section className={`${className} overflow-hidden`}>
      <div className="container mx-auto px-4 lg:px-16">
        <div className="justify-center lg:flex">
          <div className="mb-10 w-full items-center gap-4 px-4 pt-10 lg:flex">
            <div className="lg:w-8/12">
              {PartenaireContent.intro.subTitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.05, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="inline-block text-sm uppercase tracking-[3px]"
                >
                  {PartenaireContent.intro.subTitle}
                </motion.span>
              )}
              {PartenaireContent.intro.title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.1, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="mb-4 text-2xl text-green-500 lg:text-4xl"
                >
                  {PartenaireContent.intro.title}
                </motion.h2>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:ml-30 my-10 ml-0 md:ml-20">
        <div className="grid grid-cols-2 gap-y-6 md:grid-cols-3 xl:grid-cols-5">
          {PartenaireContent.logos.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: index * 0.2,
                  duration: 0.2,
                },
              }}
              whileHover={{ y: -10, transition: { duration: 0.1 } }}
              viewport={{ once: true }}
              className="relative z-[2] mx-auto bg-cover bg-center"
            >
              <Image
                src={item.logo}
                width={90}
                height={90}
                alt={`logo${item.id}`}
                className="rounded-md"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};