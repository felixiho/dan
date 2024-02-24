import Head from "next/head";
import { Box, Flex } from "@chakra-ui/layout";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Exodus Test</title>
        <meta name="description" content="exodus buy btc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Flex w="full" as="section" flexDir={"column"} h="100vh">
        <Box as="main">
          <Flex
            wrap="wrap" 
            as="section"
            justifyContent={"center"}
          >
            <Flex
              wrap="wrap"
              w="full"
              maxW="750px"
              py={{ base: 6, md: 12 }}
              px={{ base: 6, md: 16 }}
            >
              {children}{" "}
            </Flex>{" "}
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Layout;
