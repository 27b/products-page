import { ProductCardProps } from "./ProductCard"

interface ProductsResponse {
    products: Array<object>
}

interface ProductResponse {
    result: ProductCardProps
}

export const getProducts = (): Promise<ProductsResponse> => {
    return fetch('/api/products').then((res) => res.json(),)
}

export const getProductBySlug = (slug: string): Promise<ProductResponse> => {
    return fetch('/api/products/' + slug).then((res) => res.json(),)
}