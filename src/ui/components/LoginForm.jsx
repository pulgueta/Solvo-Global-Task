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

export const LoginForm = ({ user, password }) => {
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
            >
                <Box>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                        <InputLeftAddon children={<EmailIcon />} />
                        <Input type="email" bgColor="gray.300" />
                    </InputGroup>
                </Box>
                <Box>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <InputLeftAddon children={<LockIcon />} />
                        <Input type="text" bgColor="gray.300" />
                    </InputGroup>
                </Box>

                <Button w="100%" mt={6} bgColor="gray.300" shadow="base">
                    Sign In
                </Button>
            </FormControl>
        </Box>
    );
};
