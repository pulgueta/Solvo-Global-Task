import { useContext } from "react";

import {
  Box,
  Input,
  InputLeftAddon,
  InputGroup,
  ButtonGroup,
  Button,
  Heading,
  IconButton,
} from "@chakra-ui/react";

import { CloseIcon, SearchIcon } from "@chakra-ui/icons";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context";

export const Topbar = () => {
  const { user } = useContext(AuthContext);

  console.log({ user });

  const navigate = useNavigate();

  const handleLogout = () => {
    


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
      shadow="sm"
    >
      <Heading>Weather</Heading>
      {2 === 1 && (
        <InputGroup size="md" w="17.5rem">
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
          />
        </InputGroup>
      )}
      <ButtonGroup gap={6} alignItems="center">
        <Button bgColor="gray.300" onClick={() => navigate("/login")}>
          Sign In
        </Button>
        {user?.logged === true && (
          <IconButton
            aria-label="Sign out"
            colorScheme="red"
            icon={<CloseIcon />}
          />
        )}
      </ButtonGroup>
    </Box>
  );
};
