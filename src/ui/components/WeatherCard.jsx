import { useEffect, useState } from "react";

import axios from "axios";

import {
  Box,
  Text,
  Heading,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export const WeatherCard = ({ query }) => {
  const [info, setInfo] = useState({});
  const [trigger, setTrigger] = useState(false);
  const [unit, setUnit] = useState("imperial");

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

  useEffect(() => {
    getData();
  }, [trigger]);

  return (
    <Box
      bgColor="gray.200"
      w={{ base: "20rem", md: "25rem", lg: "30rem" }}
      mx="auto"
      rounded="lg"
      p={{ base: 4, md: 8 }}
    >
      <Heading textAlign="center">
        {info.name}, {info.sys?.country}
      </Heading>
      <Text textAlign="center" fontSize="xl">
        Is currently at:
      </Text>
      <Button w="100%" fontSize="3xl" py={7} onClick={handleUnit}>
        {Math.round(info.main?.temp)} {trigger ? `°C` : `°F`}
      </Button>
      <UnorderedList my={4} fontWeight="500">
        <ListItem>Humidity: {info.main?.humidity}%</ListItem>
        <ListItem>Pressure: {info.main?.pressure} mbar</ListItem>
        <ListItem>
          Max. Temperature: {Math.round(info.main?.temp_max)}{" "}
          {trigger ? `°C` : `°F`}
        </ListItem>
      </UnorderedList>
      <Button leftIcon={<StarIcon />} variant="solid" colorScheme="teal">
        Set to favorites
      </Button>
    </Box>
  );
};
