import { useContext } from "react";

import {
  Box,
  ButtonGroup,
  Button,
  Heading,
  IconButton,
} from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/auth";

export const Topbar = () => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <Box
      w="100%"
      h="4rem"
      px={{ base: 4, md: 12, lg: 20 }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bgColor="gray.200"
      shadow="base"
    >
      <Heading>Weather</Heading>

      <ButtonGroup gap={{base: 0, md: 4, lg: 8}} alignItems="center">
        {(user?.logged || user) && (
          <>
            <Button colorScheme="yellow" onClick={() => navigate("/favorites")}>Favorites</Button>
            <Button colorScheme="red" onClick={handleLogout}>
              Sign Out
            </Button>
          </>
        )}
      </ButtonGroup>
    </Box>
  );
};
