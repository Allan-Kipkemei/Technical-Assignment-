import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa"; // Import Google icon from react-icons

function SignUp() {
  const handleGoogleSignIn = async () => {
    // Your Google OAuth code here
  };

  const handleSubmit = async (e) => {
    // Your existing signup code here
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign up for an account</Heading>
      
        </Stack>
        <Box
          as="form"
          onSubmit={handleSubmit}
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input type="text" name="username" required />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" required />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" required />
            </FormControl>
            <Stack spacing={4}>
              <Checkbox>Remember me</Checkbox>
              <Flex align="center"></Flex>
              <Button
                type="submit"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
              <Text className="align-centre" >OR</Text>
              <Button
                onClick={handleGoogleSignIn}
                bg={"red.500"}
                color={"white"}
                _hover={{
                  bg: "red.600",
                }}
                leftIcon={<FaGoogle />} // Add Google icon
              >
                Sign up with Google
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default SignUp;
