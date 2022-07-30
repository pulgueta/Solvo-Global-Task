import { Box, Heading } from "@chakra-ui/react";

import { motion } from "framer-motion";

import { LoginForm } from "../ui/components";

export const Login = () => {
  return (
    <Box h="calc(100vh - 4rem)" bgColor="gray.50" overflowX="hidden">
      <Heading
        as={motion.h2}
        initial={{ x: 95, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
        textAlign="center"
        py={{ base: "1rem", md: "1.5rem" }}
        fontSize={{ base: "1.6rem", md: "2rem" }}
      >
        Login with your credentials
      </Heading>
      <LoginForm />
    </Box>
  );
};
