"use client"

import { useQuery } from '@tanstack/react-query'

import { Flex, Text, Box, Image, Button, Grid } from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'

import { getProductBySlug } from './services'


interface Context {
    slug: string
}

export default function ProductDetail({ slug }: Context) {
    const toast = useToast()

    const { data, error } = useQuery({
        queryKey: ['product'],
        queryFn: () => { return getProductBySlug(slug) },
    })

    if (error) return 'An error has occurred: ' + error.message

    if (data) {
        return (
            <Flex
                padding="10"
                className="product-detail-container"
                >
                <Image
                    maxWidth="600px"
                    minWidth="400px"
                    width="auto"
                    me="10"
                    src={ data.result.image }
                    alt={ data.result.title }
                    title={ data.result.title }
                />
                <Box width="500px" minWidth="500px" pt="10">
                    <Text fontSize="3xl" mb="5">{ data.result.title }</Text>
                    <Text>{ data.result.description  }</Text>
                    <Text mt="5">$ { data.result.price }</Text>
                    <Button colorScheme='blue' borderRadius="3" p="5" mt="5" width="100%"
                    onClick={() =>
                        toast({
                          description: "You have purchased this product.",
                          status: 'success',
                          duration: 3000,
                          isClosable: false,
                        })
                      }>Buy</Button>
                    <Button colorScheme='blue' borderRadius="3" p="5" mt="1" width="100%" variant='outline'
                    onClick={() =>
                        toast({
                          description: "You have saved this product.",
                          status: 'success',
                          duration: 3000,
                          isClosable: false,
                        })
                      }>Add to Wish List</Button>
                </Box>
            </Flex>
        )
    }
}