import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // CRITIQUE: Mode standalone pour réduire la taille des fonctions
  output: 'standalone',
  
  experimental: {
    authInterrupts: true,
    
    // CRITIQUE: Exclure les fichiers publics des fonctions serverless
    outputFileTracingExcludes: {
      '*': [
        './public/**/*',
        './public/images/**/*',
        './public/videos/**/*',
        'node_modules/@swc/core-linux-x64-gnu',
        'node_modules/@swc/core-linux-x64-musl',
        'node_modules/@esbuild/linux-x64',
      ],
    },
  },
  
  // Utiliser SWC pour la minification (plus léger que Terser)
  swcMinify: true,
  
  // Désactiver les source maps en production pour économiser de la mémoire
  productionBrowserSourceMaps: false,
  
  // Optimisation des images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Optimisation webpack pour réduire la taille des bundles
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Externaliser les gros packages si nécessaire
      config.externals = [...(config.externals ?? [])];
    }
    
    return config;
  },
};

export default nextConfig; 