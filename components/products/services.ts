interface ProductResponse {
    products: Array<object>
}

export const getProducts = (): Promise<ProductResponse> => {
    return fetch('http://localhost:3000/api/products').then((res) => res.json(),)
}

export const getProductBySlug = (slug: string): Promise<ProductResponse> => {
    return fetch('http://localhost:3000/api/products/' + slug).then((res) => res.json(),)
}