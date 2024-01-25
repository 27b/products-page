import { getProducts } from '@/components/products/services'

import ProductList from '@/components/products/ProductList'

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'


export default async function ProductListPage() {
    const products = await getProducts()
    
    return <ProductList products={ products } />
}