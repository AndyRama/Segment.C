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
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
};

export default nextConfig;