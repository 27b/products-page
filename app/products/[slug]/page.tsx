import { redirect } from 'next/navigation'

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'

import { getProductBySlug } from '@/components/products/services'

import ProductDetail from '@/components/products/ProductDetail'


export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
    if (!params.slug) redirect("/products")

    const product = await getProductBySlug(params.slug)

    return <ProductDetail product={ product } slug={ params.slug } />
}
