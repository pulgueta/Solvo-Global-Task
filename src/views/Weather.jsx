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

import { animate, motion } from "framer-motion";

import { WeatherCard } from "../ui/components";

export const Weather = () => {
  const [location, setLocation] = useState("");
  const [weatherCard, setWeatherCard] = useState(false);

  return (
    <Box>
      <InputGroup
        as={motion.div}
        initial={{
          y: -25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
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
        <Heading
          textAlign="center"
          as={motion.h2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
        >
          Begin your search!
        </Heading>
      ) : (
        <WeatherCard query={location} />
      )}
    </Box>
  );
};
