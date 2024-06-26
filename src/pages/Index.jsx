import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to Travel Booking</Heading>
        <Text fontSize="xl" textAlign="center">Discover and book your next adventure with ease.</Text>
        <Box boxSize="sm" mt={6}>
          <Image src="/images/travel-hero.jpg" alt="Travel" objectFit="cover" borderRadius="md" />
        </Box>
        <Button as={Link} to="/book" colorScheme="teal" size="lg" mt={6}>
          Start Booking
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;