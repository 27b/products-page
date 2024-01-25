import { ProductCardProps } from "./ProductCard"

const PRODUCTION = true

const ENVIROMENT =  PRODUCTION ? 'https://products-page-roan.vercel.app' : 'http://localhost:3000'

interface ProductsResponse {
    products: Array<object>
}

interface ProductResponse {
    result: ProductCardProps
}

export const getProducts = (): Promise<ProductsResponse> => {
    return fetch(ENVIROMENT + '/api/products').then((res) => res.json(),)
}

export const getProductBySlug = (slug: string): Promise<ProductResponse> => {
    return fetch(ENVIROMENT + '/api/products/' + slug).then((res) => res.json(),)
}