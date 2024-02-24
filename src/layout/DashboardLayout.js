import Head from "next/head";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import { useLayout } from "@/context/DashboardProvider";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "./api";
import { useEffect } from "react";

const DashboardLayout = ({ pageTitle, children }) => {
  const { setUser } = useLayout();
  const router = useRouter();
  const toast = useToast()

  const { isError, data } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
  });

  useEffect(() => {
    if (isError) {
      toast({
        position: "top",
        isClosable: true,
        duration: 2000,
        title: "error",
        description: "Kindly Login",
      });
      // router.push("/");
    }
    setUser(data?.data.result);
  }, [data, isError]);


  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="exodus buy btc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Flex w="full" as="section" flexDir={"column"} h="100vh">
        <Box as="main">
          <Flex wrap="wrap" as="section" justifyContent={"center"}>
            <Flex
              wrap="wrap"
              w="full"
              maxW="750px"
              py={{ base: 6, md: 12 }}
              px={{ base: 6, md: 16 }}
            >
              <Heading>Dashboard here</Heading>
              {children}{" "}
            </Flex>{" "}
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default DashboardLayout;
