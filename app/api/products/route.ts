import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { ProductCategory, ProductMaterial } from '@/generated/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const category = searchParams.get('category') as ProductCategory | null;
  const material = searchParams.get('material') as ProductMaterial | null;
  const seller = searchParams.get('seller');
  const limit = parseInt(searchParams.get('limit') ?? '40');
  const offset = parseInt(searchParams.get('offset') ?? '0');
  const search = searchParams.get('search');

  try {
    const where = {
      isActive: true,
      ...(category && category !== 'all' ? { category } : {}),
      ...(material && material !== 'all' ? { material } : {}),
      ...(seller && seller !== 'all' ? { seller } : {}),
      ...(search ? {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          { description: { contains: search, mode: 'insensitive' } },
        ],
      } : {}),
    };

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        take: limit,
        skip: offset,
        orderBy: [
          { isPopular: 'desc' },
          { isNew: 'desc' },
          { rating: 'desc' },
          { createdAt: 'desc' },
        ],
      }),
      prisma.product.count({ where }),
    ]);

    return NextResponse.json({ products, total });
  } catch (error) {
    // Error logging in API route for debugging purposes
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}