import { useState } from "react";

import {
  Box,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

import { SearchIcon, ArrowForwardIcon } from "@chakra-ui/icons";

import { WeatherCard } from "../ui/components";

export const Weather = () => {
  const [location, setLocation] = useState("");
  const [weatherCard, setWeatherCard] = useState(false);

  return (
    <Box>
      <InputGroup
        size="md"
        w={{ base: "21rem", md: "25rem", lg: "30rem" }}
        mx="auto"
        my={{ base: "2rem" }}
      >
        <InputLeftAddon
          bgColor="gray.200"
          border="none"
          shadow="xs"
          children={<SearchIcon />}
        />
        <Input
          variant="filled"
          shadow="xs"
          bgColor="gray.300"
          placeholder="Search by city or ZIP code..."
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            setWeatherCard(false);
          }}
        />

        <IconButton
          onClick={() => {
            if (location) setWeatherCard(true);
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </InputGroup>
      {!weatherCard ? (
        <Heading textAlign="center">Begin your search!</Heading>
      ) : (
        <WeatherCard query={location} />
      )}
    </Box>
  );
};
