'use client';

import React from 'react';
import { Layout } from '@/features/page/layout';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Typography } from '@/components/nowts/typography';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { formatDate } from '@/lib/format/date';

type Post = {
  attributes: {
    title: string;
    description: string;
    date: string;
    coverUrl: string;
  };
  slug: string;
};

export const RecentPostCard = ({ post }: { post: Post }) => {
  const date = new Date(post.attributes.date);
  const author = 'Segment-C';

  return (
    <Card className="transition-all hover:shadow-xl overflow-hidden rounded-md py-0 flex flex-col h-full">
      <CardHeader className="h-fit p-0 m-0">
        <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-t-md">
          <img
            src={post.attributes.coverUrl}
            alt={post.attributes.title}
            className="size-full object-cover"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="space-y-2 flex flex-col flex-grow">
        <Typography variant="p" className="!leading-tight">
          <span className="inline-block text-sm text-gray-500">
            <span className="relative inline-block">
              <span className="text-sm text-gray-500">
                {formatDate(date, 'dd MMMM yy')}
              </span>
              <span className="mx-3">•</span>
              <span className="text-sm text-green-500">{author}</span>
            </span>
          </span>
        </Typography>
        <CardTitle>{post.attributes.title}</CardTitle>
        <CardDescription className="pb-4 flex-grow">{post.attributes.description}</CardDescription>
        <div className="flex w-[250px] items-center justify-between pt-2">
          <Link
            href={`/posts/${post.slug}`}
            className="rounded-[5px] border border-gray-600 px-4 text-green hover:border-green-500 xl:px-8 mb-4"
          >
            Lire l&apos;article
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export const RecentPosts = () => {
  const posts: Post[] = [
    {
      attributes: {
        title: 'Baie Vitrée Coulissante vs a Galandage laquelle installer chez vous en Gironde ?',
        description: "Baie vitree coulissante ou a galandage ? Deux systemes, deux philosophies. Segment.C compare pour vous prix, encombrement, isolation, pose et usage au quotidien pour vous aider a faire le bon choix en Gironde.",
        date: '2026-01-17',
        coverUrl: '/images/baie/syal_7.jpg',
      },
      slug: 'baie-vitree-coulissante-vs-a-galandage-laquelle-installer-chez-vous-en-gironde',
    },
    {
      attributes: {
        title: 'Fenêtres resistantes aux embruns votre guide pour votre maison sur le Bassin d Arcachon',
        description: "Embruns, humidite saline, vents atlantiques... le Bassin d'Arcachon est l'un des environnements les plus agressifs pour vos menuiseries. Segment.C vous guide pour choisir des fenetres vraiment adaptees au bord de mer - materiaux, traitements, classements et conseils d'entretien.",
        date: '2026-02-14',
        coverUrl: '/images/fenetre/sydeal_9.jpg',
      },
      slug: 'fenetres-resistantes-aux-embruns-votre-guide-pour-votre-maison-sur-le-bassin-d-arcachon',
    },
    {
      attributes: {
        title: 'Quel materiau choisir pour vos fenêtres à Bordeaux ?',
        description: "PVC, bois ou aluminium ? Découvrez le comparatif complet des matériaux de fenêtres adapté au contexte bordelais, le prix, isolation, la durée de vie et  aides disponibles. Guide rédigé par Segment.C, artisan menuisier à St-Jean-d'Illac.",
        date: '2026-01-05',
        coverUrl: '/images/fenetre6.jpg',
      },
      slug: 'quel-materiau-choisir-pour-vos-fenêtres-à-bordeaux',
    },
    {
      attributes: {
        title: 'Tout comprendre sur l isolation thermique de vos menuiseries sw et uw',
        description: 'Uw, Sw, Ug, psi... les indices de performance thermique des fenetres sont souvent incompris. Segment.C vous explique tout sur la signification, valeurs cibles, impact sur vos aides et comment lire votre devis comme un expert.',
        date: '2026-01-13',
        coverUrl: '/images/fenetre/simple-dormant-invisible-ob1.jpg',
      },
      slug: 'tout-comprendre-sur-l-isolation-thermique-de-vos-menuiseries-sw-et-uw',
    },
  ];

  return (
    <Layout>
      <div className="mx-auto -mt-32 mb-2 justify-center rounded-r-md md:flex md:px-4">
        {/* Titre de la section */}
        <div className="mx-auto w-full">
          <div className="mb-8 mt-10 text-center">
            <Typography variant="h2" className="text-3xl font-bold text-green-500 md:text-4xl">
              Articles récents
            </Typography>
            <Typography variant="p" className="mt-4 text-gray-300">
              Découvrez nos derniers conseils et guides sur les pergolas, vérandas et menuiseries
            </Typography>
          </div>
          
          {/* Grille des articles */}
          <div className="grid w-full grid-cols-1 gap-6 text-gray-500 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {posts.map((post, index) => (
              <RecentPostCard key={index} post={post} />
            ))}
          </div>
          
          {/* Bouton voir tous les articles */}
          <div className="mt-12 flex justify-end">
            <Link
              href="/posts"
              className="inline-flex items-center rounded-lg bg-green-500 px-6 py-3 text-white transition-all hover:bg-green-500/90 hover:shadow-lg"
            >
              Voir tous les articles
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RecentPosts;