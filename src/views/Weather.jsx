import { useState } from "react";

import {
  Button,
  ButtonGroup,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

import { SearchIcon, ArrowForwardIcon } from "@chakra-ui/icons";

import { motion } from "framer-motion";

import { WeatherCard } from "../ui/components";

export const Weather = () => {
  const [location, setLocation] = useState("");
  const [weatherCard, setWeatherCard] = useState(false);
  const [query, setQuery] = useState(true);

  return (
    <>
      <ButtonGroup pt={8} display="flex" justifyContent="center">
        <Button onClick={() => setQuery(true)}>Search by city name</Button>
        <Button
          onClick={() => {
            setQuery(false);
            setLocation("");
          }}
        >
          Search by ZIP code
        </Button>
      </ButtonGroup>
      <InputGroup
        as={motion.div}
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
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
          placeholder={query ? "Search by city..." : "Search by ZIP code..."}
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            setWeatherCard(false);
          }}
        />
        <IconButton
          onClick={() => {
            location && setWeatherCard(true);
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
        <WeatherCard query={location} type={query} />
      )}
    </>
  );
};
