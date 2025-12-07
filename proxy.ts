// proxy.ts
import { SiteConfig } from "@/site-config";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// ✅ CHANGÉ: middleware → proxy
export function proxy(request: NextRequest) {
  // Redirection simple sans getSessionCookie
  if (request.nextUrl.pathname === "/") {
    // ✅ CHANGÉ: backticks (`) → parenthèses ()
    const sessionCookie = request.cookies.get(`${SiteConfig.appId}.session_token`);
    
    if (sessionCookie) {
      return NextResponse.redirect(new URL("/account", request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};