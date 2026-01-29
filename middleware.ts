import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Liste des slugs de villes valides
const validVilleSlugs = [
  'saint-jean-d-illac',
  'cap-ferret',
  'merignac',
  'bordeaux',
  'le-bouscat',
  'talence',
  'pessac',
  'cestas',
  'gradignan',
  'arcachon',
  'la-teste-de-buch',
  'andernos-les-bains',
  'biganos',
  'martignas-sur-jalle',
  'saint-medard-en-jalles',
  'eysines',
];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Si c'est une route à la racine (pas de sous-dossier)
  if (pathname.startsWith('/') && !pathname.includes('.') && pathname !== '/') {
    const slug = pathname.slice(1); // Enlève le premier "/"
    
    // Si ce n'est pas une ville valide et pas une route système
    if (!validVilleSlugs.includes(slug) && 
        !slug.startsWith('_next') && 
        !slug.startsWith('api') &&
        !slug.startsWith('villes') &&
        slug !== 'favicon.ico') {
      // Optionnel : rediriger vers 404 ou page d'accueil
      // return NextResponse.redirect(new URL('/', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};