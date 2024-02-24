import { Input } from "@chakra-ui/input";
import { Flex, Text, Heading } from "@chakra-ui/layout";
import { useState } from "react";
import { Button } from "@chakra-ui/button";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import Link from "next/link";
import { register } from "./api";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const mutation = useMutation({
    mutationFn: (data) => {
      return register(data);
    },
    onError: (error) => {
      // handleError(error);
    },
    onSuccess(response) {
      const message = response.data.message;
      const loginData = response.data.result;
      toast({
        position: "top",
        isClosable: true,
        duration: 2000,
        message: "Registration successful",
      });
      //set token in cookies / localhost
      router.push("/app/home");
    },
  });

  const validateInput = () => {
    return true;
  };

  const createUser = (event) => {
    event.preventDefault();
    if (validateInput()) {
      mutation.mutate({
        email,
        password,
      });
    }
  };

  return (
    <Flex
      w="full"
      mt={4}
      borderRadius={"10"}
      as="form"
      wrap="wrap"
      onSubmit={(e) => createUser(e)}
      bg="white"
      color="neutral.700"
      p={{ base: 4, md: 8 }}
    >
      <Heading w="full" textAlign={"center"}>
        CREATE ACCOUNT
      </Heading>
      <Input
        mt={8}
        disabled={mutation.isPending}
        height={"70px"}
        _placeholder={{
          color: "#00000080",
        }}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        _focusVisible={{ border: "1px solid #00000080" }}
        placeholder="Full Name"
      />
      <Input
        mt={4}
        disabled={mutation.isPending}
        height={"70px"}
        _placeholder={{
          color: "#00000080",
        }}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        _focusVisible={{ border: "1px solid #00000080" }}
        placeholder="Email Address"
      />
      <Input
        disabled={mutation.isPending}
        my={4}
        height={"70px"}
        _placeholder={{
          color: "#00000080",
        }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type={"password"}
        _focusVisible={{ border: "1px solid #00000080" }}
        placeholder="Enter Password"
      />
      <Button
        height={"80px"}
        mt={3}
        type="submit"
        variant={"primary"}
        isLoading={mutation.isPending}
        disabled={mutation.isPending}
      >
        REGISTER
      </Button>
      <Flex mt={6} justifyContent={"center"} w="full">
        <Text fontSize={16}>Already have an account? </Text>
        <Link href="/">
          <Text px={2} fontWeight={"700"} color={"primary.400"}>
            Login
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Register;
