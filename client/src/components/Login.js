import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

function Login() {
  const navigate = useNavigate(); // Initialize the navigate function
  const [isOpen, setIsOpen] = useState(false); // State for dialog
  const onClose = () => {
    navigate("/discover");
    setIsOpen(false); // Close the success dialog
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    // Send a POST request to the login endpoint on your backend
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.status === 200) {
        console.log("Login successful!");
        setIsOpen(true); // Open the success dialog
      } else {
        console.error("Login failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
          <Heading fontSize={"4xl"}>Login to your account first</Heading>
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
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" required />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" required />
            </FormControl>
            <Stack spacing={10}>
              <Checkbox>Remember me</Checkbox>
              <Button
                type="submit"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
        {/* Add the sign-up link here */}
        <Text fontSize={"md"} textAlign={"center"}>
          Don't have an account?{" "}
          <a
            href="/signup"
            style={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign up
          </a>
        </Text>
      </Stack>

      {/* Success Dialog */}
      <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
        leastDestructiveRef={undefined}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Login Successful
            </AlertDialogHeader>
            <AlertDialogBody>You have successfully logged in.</AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme="blue" onClick={onClose}>
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Flex>
  );
}

export default Login;
