import { ProductCardProps } from "./ProductCard"

interface ProductsResponse {
    products: Array<object>
}

interface ProductResponse {
    result: ProductCardProps
}

export const getProducts = (): Promise<ProductsResponse> => {
    return fetch('http://localhost:3000/api/products').then((res) => res.json(),)
}

export const getProductBySlug = (slug: string): Promise<ProductResponse> => {
    return fetch('http://localhost:3000/api/products/' + slug).then((res) => res.json(),)
}