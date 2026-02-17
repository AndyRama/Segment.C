import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',

  experimental: {
    authInterrupts: true,
  },

  // ✅ Fix: résout l'erreur "Unexpected missing options.baseUrl"
  // Ces packages utilisent import.meta.url et doivent rester en Node.js natif
  // au lieu d'être bundlés par Turbopack lors du prerendering statique
  serverExternalPackages: [
    'next-mdx-remote-client',
    'shiki',
    '@shikijs/rehype',
    'unified',
    'remark-gfm',
    'rehype-slug',
    'rehype-autolink-headings',
    'rehype-prism-plus',
  ],

  productionBrowserSourceMaps: false,

  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },

  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/portes/:path*.jpg',
          destination: '/images/portes/:path*.jpg',
        },
        {
          source: '/portes/:path*.png',
          destination: '/images/portes/:path*.png',
        },
        {
          source: '/portes/:path*.webp',
          destination: '/images/portes/:path*.webp',
        },
      ],
    };
  },
};

export default nextConfig;