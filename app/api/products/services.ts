import { STORAGE } from "./storage";

export default class ProductsServices {
    static getAll(): Array<object> {
        return STORAGE.products
    }

    static getBySlug(slug: string): object {
        let result = null
        STORAGE.products.forEach(product => {
            if (product.slug == slug) {
                result = { ...product, status: true }
            }
        })
        return result ? result : { status: false }
    }
}