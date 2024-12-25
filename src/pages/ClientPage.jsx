import React from "react";
import { Container, Text, VStack } from "@chakra-ui/react";

const ClientPage = () => {
  return (
    <Container maxW={"Container.x1"} py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Clients
        </Text>
      </VStack>
    </Container>
  );
};

export default ClientPage;
