"use client"

import { Flex } from '@chakra-ui/react'

import { useQuery } from '@tanstack/react-query'

import { getProducts } from '@/components/products/services'

import ProductCard, { ProductCardProps } from "@/components/products/ProductCard"

export default async function ProductList() {
    const { data, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => { return await getProducts() },
    })

    if (error) return 'An error has occurred: ' + error.message

    if (data) {
        return (
            <Flex direction="column" p="5">
                {
                    data.products.map((product: any) => {
                        return <ProductCard
                            title={ product.title }
                            description={ product.description }
                            slug={ product.slug }
                            image={ product.image }
                            price={ product.price }
                            />
                        })
                }
            </Flex>
        )
    }
}