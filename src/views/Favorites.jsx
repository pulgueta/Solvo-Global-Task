import { Box, Heading, HStack, Stack, VStack } from "@chakra-ui/react";
import { useEffect } from "react";

export const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites"));

  return (
    <VStack>
      <Heading>Favorites tab</Heading>
      <Heading>{favorites}</Heading>
    </VStack>
  );
};
