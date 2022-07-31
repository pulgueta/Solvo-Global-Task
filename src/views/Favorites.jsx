import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";

export const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites"));

  return (
    <VStack>
      <Heading>Favorites tab</Heading>
      <Box
        bgColor="gray.200"
        w={{ base: "20rem", md: "27.5rem", lg: "30rem" }}
        mx="auto"
        rounded="xl"
        p={{ base: 4, md: 8 }}
      >
        <HStack justifyContent="space-around" alignItems="center">
          <Heading>{favorites.name}</Heading>
          <Text fontSize="xl">{favorites.weather[0].main}</Text>
        </HStack>
      </Box>
    </VStack>
  );
};
