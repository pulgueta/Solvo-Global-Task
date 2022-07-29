import { useEffect, useState } from "react";

import axios from "axios";

import {
  Box,
  Text,
  Heading,
  Button,
  Image,
  HStack,
  Grid,
  GridItem,
  useToast,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export const WeatherCard = ({ query }) => {
  const [info, setInfo] = useState({});
  const [trigger, setTrigger] = useState(false);
  const [unit, setUnit] = useState("imperial");

  const toast = useToast();

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${unit}&appid=${
    import.meta.env.VITE_OPEN_WEATHER_API_KEY
  }`;

  const handleUnit = () => {
    setTrigger(!trigger);

    if (trigger === false) {
      setUnit("metric");
    } else {
      setUnit("imperial");
    }
  };

  const getData = async () => {
    await axios.get(URL).then((res) => {
      console.log(res.data);
      setInfo(res.data);
    });
  };

  const popToast = (name) => {
    toast({
      title: "Added to favorites",
      description: `${name} was added to favorites`,
      status: "success",
      duration: 3000,
      position: "top-right",
      isClosable: true,
    });
  };

  useEffect(() => {
    getData();
  }, [trigger]);

  return (
    <Box
      bgColor="gray.200"
      w={{ base: "20rem", md: "27.5rem", lg: "30rem" }}
      mx="auto"
      rounded="lg"
      p={{ base: 4, md: 8 }}
    >
      {info.cod === 200 ? (
        <>
          <Heading textAlign="center">
            {info.name}, {info.sys?.country}
          </Heading>
          <HStack justifyContent="center">
            <Text textAlign="center" fontWeight="500">
              {info.weather[0].main}
            </Text>
            <Image
              src={`http://openweathermap.org/img/wn/${info.weather[0].icon}.png`}
              boxSize="50px"
              alt={info.weather[0].description}
              align="center"
            />
          </HStack>
          <Text textAlign="center" fontSize="xl">
            Is currently at:
          </Text>
          <Button w="100%" fontSize="3xl" py={7} onClick={handleUnit}>
            {Math.round(info.main?.temp)}
            {trigger ? `°C` : `°F`}
          </Button>
          <Grid
            my={4}
            fontWeight="500"
            gap={{ base: 2, md: 3, lg: 4 }}
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          >
            <GridItem w="100%">Humidity: {info.main?.humidity}%</GridItem>
            <GridItem w="100%">Pressure: {info.main?.pressure} mbar</GridItem>
            <GridItem w="100%">
              Feels like: {Math.round(info.main?.feels_like)}
              {trigger ? `°C` : `°F`}
            </GridItem>
            <GridItem w="100%">
              Max. Temperature: {Math.round(info.main?.temp_max)}
              {trigger ? `°C` : `°F`}
            </GridItem>
            <GridItem w="100%">
              Min. Temperature: {Math.round(info.main?.temp_min)}
              {trigger ? `°C` : `°F`}
            </GridItem>
            <GridItem w="100%">
              Wind speed: {info.wind?.speed}
              {trigger ? `m/s` : `mph`}
            </GridItem>
          </Grid>
          <Button
            leftIcon={<StarIcon />}
            variant="solid"
            colorScheme="teal"
            onClick={() =>
              toast({
                title: "Added to favorites",
                description: `${info.name} was added to favorites`,
                status: "success",
                duration: 3000,
                position: "top-right",
                isClosable: true,
              })
            }
          >
            Set to favorites
          </Button>
        </>
      ) : (
        <Text
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          textAlign="center"
          fontWeight="700"
        >
          No city or ZIP found...
        </Text>
      )}
    </Box>
  );
};
