import {
  Box,
  Input,
  InputLeftAddon,
  InputGroup,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

import { useNavigate } from "react-router-dom";

export const Topbar = () => {
  const navigate = useNavigate();

  return (
    <Box
      w="100%"
      h="4rem"
      px={{ base: 4, md: 12, lg: 20 }}
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      bgColor="gray.200"
      shadow="xl"
    >
      {2 === 1 && (
        <InputGroup size="md">
          <InputLeftAddon
            bgColor="gray.200"
            border="none"
            children={<SearchIcon />}
          />
          <Input
            variant="filled"
            bgColor="gray.300"
            placeholder="Search by city or ZIP..."
          />
        </InputGroup>
      )}
      <ButtonGroup gap={6}>
        <Button bgColor="gray.300" onClick={() => navigate("/")}>
          Sign In
        </Button>
        {2 === 1 && <Button bgColor="gray.300">Sign Out</Button>}
      </ButtonGroup>
    </Box>
  );
};
