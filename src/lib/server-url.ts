/**
 * This method return the server URL based on the environment.
 */

import { SiteConfig } from "@/site-config";

export const getServerUrl = () => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  if (process.env.PLAYWRIGHT_TEST_BASE_URL) {
    return process.env.PLAYWRIGHT_TEST_BASE_URL;
  }

  // Better Auth URL
  if (process.env.BETTER_AUTH_URL) {
    return process.env.BETTER_AUTH_URL;
  }
  
  // Fallback sur l'URL publique
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }
  
  // Production
  if (process.env.NODE_ENV === "production") {
    return SiteConfig.prodUrl;
  }
  
  // Développement
  return "http://localhost:3000";
};
