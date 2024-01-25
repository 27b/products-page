import {
    Card,
    CardBody,
    CardFooter,
    Text,
    Image,
    Stack,
    Link,
    Heading, 
    Button
} from '@chakra-ui/react'


export type ProductCardProps = {
    title: string,
    image: string
    slug: string,
    description: string,
    price: number | string,
}

export default function ProductCard({ slug, title, image, description }: ProductCardProps) {
    return (
        <Card
            key={ slug }
            direction={{ base: 'column', sm: 'column', md: 'row' }}
            overflow='hidden'
            variant='outline'
            mb="3"
            p="10">
            <Image
                objectFit="contain"
                width="auto"
                maxWidth="300px"
                className="product-card-image"
                src={ image }
                alt={ title }
                title={ title }
            />
            
            <Stack>
                <CardBody>
                    <Heading size='md'>{ title }</Heading>
                    <Text py='2'>{ description }</Text>
                </CardBody>
        
            <CardFooter>
                <Link
                    href={ '/products/' + slug }
                    p="3"
                    bgColor="steelblue"
                    color="white"
                    textDecoration="none"
                    borderRadius="4"
                    title='See Product'
                    className="product-card-button"
                >
                See Product
                </Link>
            </CardFooter>
            </Stack>
        </Card>
    )
}