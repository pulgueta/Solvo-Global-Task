import { useState, useId, useContext } from "react";

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputLeftAddon,
  InputGroup,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";

import { EmailIcon, LockIcon } from "@chakra-ui/icons";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context";

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const id = useId();

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    if (
      formData.email === import.meta.env.VITE_EMAIL &&
      formData.password === import.meta.env.VITE_PASSWORD
    ) {
      login(formData.email);
      navigate("/", {
        replace: true,
      });
      setFormData({ email: "", password: "" });
    } else {
      setFormData({ email: "", password: "" });
      console.log("error");
    }
  };

  return (
    <Box
      w={{ base: "20rem", md: "22.5rem", lg: "25rem" }}
      h={{ base: "20rem" }}
      mx="auto"
      bgColor="gray.200"
      py={{ base: 4 }}
      px={{ base: 6 }}
      rounded="lg"
      shadow="sm"
    >
      <FormControl
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        h="100%"
        isRequired
      >
        <Box>
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <InputLeftAddon children={<EmailIcon />} />
            <Input
              type="email"
              placeholder="user@domain.com"
              bgColor="gray.300"
              id={id}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </InputGroup>
        </Box>
        <Box>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <InputLeftAddon children={<LockIcon />} />
            <Input
              type="password"
              placeholder="*********"
              bgColor="gray.300"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </InputGroup>
        </Box>
        <Button
          onClick={handleLogin}
          w="100%"
          mt={6}
          bgColor="gray.300"
          shadow="base"
        >
          Sign In
        </Button>
      </FormControl>
    </Box>
  );
};
