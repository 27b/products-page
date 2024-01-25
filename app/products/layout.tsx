import { Flex, Box, Link } from "@chakra-ui/react"


export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <Box w='100%' mb="5" p="5" border='1px' borderColor='gray.200'>
            <Flex as="nav" align="center" justify="space-between">
                <Link href="/products">
                    <h1 className="title">Products Page</h1>
                </Link>
                <Box>
                    <Link href="https://github.com/27b/products-page" isExternal>GitHub Repository</Link>
                </Box>
            </Flex>
        </Box>
        <Box className="main-container" w='100%'>
            { children }
        </Box>
      </>
  );
}
