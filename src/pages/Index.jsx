import { Box, Button, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" p={4}>
        <Flex maxW="container.lg" mx="auto" justify="space-between" align="center">
          <Heading size="md">ElectroShop</Heading>
          <HStack spacing={8}>
            <Link href="#home">Home</Link>
            <Link href="#products">Products</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box id="home" bg="gray.100" py={20} textAlign="center">
        <Container maxW="container.md">
          <Heading mb={4}>Welcome to ElectroShop</Heading>
          <Text fontSize="lg" mb={6}>Your one-stop shop for the latest electronics</Text>
          <Button colorScheme="blue" size="lg">Shop Now</Button>
        </Container>
      </Box>

      {/* Featured Products */}
      <Box id="products" py={20}>
        <Container maxW="container.lg">
          <Heading mb={8} textAlign="center">Featured Products</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 1" />
              <Box p={6}>
                <Heading size="md" mb={2}>Product 1</Heading>
                <Text mb={4}>Description of product 1.</Text>
                <Button colorScheme="blue">View Details</Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 2" />
              <Box p={6}>
                <Heading size="md" mb={2}>Product 2</Heading>
                <Text mb={4}>Description of product 2.</Text>
                <Button colorScheme="blue">View Details</Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 3" />
              <Box p={6}>
                <Heading size="md" mb={2}>Product 3</Heading>
                <Text mb={4}>Description of product 3.</Text>
                <Button colorScheme="blue">View Details</Button>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="brand.800" color="white" py={10}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center" mb={4}>
            <Heading size="md">ElectroShop</Heading>
            <HStack spacing={4}>
              <Link href="https://facebook.com" isExternal><FaFacebook size="24px" /></Link>
              <Link href="https://twitter.com" isExternal><FaTwitter size="24px" /></Link>
              <Link href="https://instagram.com" isExternal><FaInstagram size="24px" /></Link>
            </HStack>
          </Flex>
          <Text textAlign="center">&copy; {new Date().getFullYear()} ElectroShop. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;