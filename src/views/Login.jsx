import { Box, Heading } from "@chakra-ui/react";
import { LoginForm } from "../ui/components";

export const Login = () => {
  return (
    <Box h="calc(100vh - 4rem)" bgColor="gray.50">
      <Heading textAlign="center" py={{ base: "1rem", md: "1.5rem" }}>
        Login with your credentials
      </Heading>
      <LoginForm />
    </Box>
  );
};
