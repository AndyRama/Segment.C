import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { ProductCategory, ProductMaterial } from '@/generated/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const categoryParam = searchParams.get('category');
  const materialParam = searchParams.get('material');
  const sellerParam = searchParams.get('seller');
  const limit = parseInt(searchParams.get('limit') ?? '40');
  const offset = parseInt(searchParams.get('offset') ?? '0');
  const search = searchParams.get('search');

  // Only set category if it's not 'all' and is a valid enum value
  const category = categoryParam && categoryParam !== 'all' ? (categoryParam as ProductCategory) : null;
  const material = materialParam && materialParam !== 'all' ? (materialParam as ProductMaterial) : null;
  const seller = sellerParam && sellerParam !== 'all' ? sellerParam : null;

  try {
    const where = {
      isActive: true,
      ...(category ? { category } : {}),
      ...(material ? { material } : {}),
      ...(seller ? { seller } : {}),
      ...(search ? {
        OR: [
          { name: { contains: search, mode: 'insensitive' as const } },
          { description: { contains: search, mode: 'insensitive' as const } },
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