import { getProducts } from '@/components/products/services'

import ProductList from '@/components/products/ProductList'

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'


export default async function ProductListPage() {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
      queryKey: ["products"],
      queryFn: getProducts
    })

    return (
      <>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ProductList />
        </HydrationBoundary>
      </>
    )
}