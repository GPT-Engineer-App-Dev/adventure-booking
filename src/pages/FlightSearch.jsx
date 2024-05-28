import { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Button, HStack } from "@chakra-ui/react";

const FlightSearch = () => {
  const [departureCity, setDepartureCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const handleSearch = () => {
    // Implement search logic here
    console.log({
      departureCity,
      destinationCity,
      departureDate,
      returnDate,
      passengers,
    });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={6}>Search Flights</Heading>
        <FormControl id="departure-city" isRequired>
          <FormLabel>Departure City</FormLabel>
          <Input
            type="text"
            value={departureCity}
            onChange={(e) => setDepartureCity(e.target.value)}
          />
        </FormControl>
        <FormControl id="destination-city" isRequired>
          <FormLabel>Destination City</FormLabel>
          <Input
            type="text"
            value={destinationCity}
            onChange={(e) => setDestinationCity(e.target.value)}
          />
        </FormControl>
        <HStack spacing={4} width="100%">
          <FormControl id="departure-date" isRequired>
            <FormLabel>Departure Date</FormLabel>
            <Input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </FormControl>
          <FormControl id="return-date">
            <FormLabel>Return Date</FormLabel>
            <Input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </FormControl>
        </HStack>
        <FormControl id="passengers" isRequired>
          <FormLabel>Number of Passengers</FormLabel>
          <Input
            type="number"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            min={1}
          />
        </FormControl>
        <Button colorScheme="teal" size="lg" mt={6} onClick={handleSearch}>
          Search Flights
        </Button>
      </VStack>
    </Container>
  );
};

export default FlightSearch;