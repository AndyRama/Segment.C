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
            className="rounded-[5px] border border-gray-600 px-4 text-green hover:border-green-500 xl:px-8"
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
        title: 'Guide complet pour choisir et installer une pergola bioclimatique en 2025',
        description: "Découvrez tout ce qu'il faut savoir sur les pergolas bioclimatiques - fonctionnement, avantages, prix, installation et entretien. Guide expert pour faire le bon choix.",
        date: '2024-12-01',
        coverUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2970&auto=format&fit=crop',
      },
      slug: '2025-01-22_Comment-entretenir-votre-pergola-guide-complet-bois-aluminium',
    },
    {
      attributes: {
        title: 'Quel est le meilleur choix pour vos fenêtres ? Comparatif complet',
        description: 'PVC, aluminium ou bois : quel matériau choisir pour vos fenêtres ? Notre guide détaillé compare les avantages, inconvénients, prix et performances énergétiques de chaque option pour vous aider à faire le bon choix selon votre projet.',
        date: '2024-11-28',
        coverUrl: '/images/fenetre1.jpg',
      },
      slug: '2024-11-28_Meilleur-choix-fenetres-comparatif-pvc-aluminium-bois',
    },
    {
      attributes: {
        title: 'Comment améliorer la luminosité d\'une pièce avec des baies vitrées',
        description: 'Transformez vos espaces sombres en pièces lumineuses grâce aux baies vitrées. Découvrez nos conseils d\'aménagement, les différents types d\'ouvertures, les aspects techniques et réglementaires pour maximiser la lumière naturelle chez vous.',
        date: '2024-11-25',
        coverUrl: '/images/fenetre2.jpg',
      },
      slug: '2024-11-25_Ameliorer-luminosite-piece-baies-vitrees-conseils',
    },
    {
      attributes: {
        title: 'Qu\'est-ce qu\'une pergola bioclimatique ? Tout savoir sur cette innovation',
        description: 'Découvrez la pergola bioclimatique, l\'innovation qui révolutionne les espaces extérieurs. Fonctionnement des lames orientables, avantages, prix, installation et conseils pour choisir le modèle adapté à vos besoins et votre région.',
        date: '2024-11-22',
        coverUrl: '/images/veranda.jpg',
      },
      slug: '2024-11-22_Pergola-bioclimatique-definition-avantages-fonctionnement',
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