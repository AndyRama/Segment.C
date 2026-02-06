import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  
  // outputFileTracingExcludes: {
  //   '*': [
  //     './public/images/**/*',
  //     './public/videos/**/*',
  //   ],
  // },
  
  experimental: {
    authInterrupts: true,
  },
  
  productionBrowserSourceMaps: false,
  
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },

  // ✅ Ajoutez ceci pour gérer les conflits
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