import type { NextRequest} from 'next/server';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

/**
 * API Route: GET /api/products/[id]
 * 
 * Cette route permet de récupérer un produit spécifique par son ID
 * Exemple: GET /api/products/porte-asten-19
 */

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Récupérer le produit par son ID
    const product = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });

    // Si le produit n'existe pas, retourner 404
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    // Retourner le produit
    return NextResponse.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}