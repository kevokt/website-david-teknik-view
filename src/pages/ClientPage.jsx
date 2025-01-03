import React from "react";
import {
  Box,
  Center,
  Container,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import ClientCard from "../components/ClientCard";
import data from "./client_data";

const displayClients = () => {
  const clients = data[0];

  if (!clients) {
    return <p>Data not found</p>;
  }

  return Object.keys(clients).map((key) => {
    const client = clients[key];
    return (
      <Box key={key} mx={"auto"}>
        <ClientCard
          name={client.name}
          logo={client.logo}
          smallerFont={client.smallerFont}
        />
      </Box>
    );
  });
};

const ClientPage = () => {
  return (
    <Container maxW={"Container.x1"} py={12}>
      <VStack spacing={9}>
        <Box w="80vw" maxH={"800px"}>
          <Text
            fontSize={"3xl"}
            fontWeight={"bold"}
            textAlign={"center"}
            mb={0}
            mt={5}
          >
            Klien Kami
          </Text>
          <Center>
            <Text fontSize={{ base: "1rem", md: "1.25rem" }} fontWeight={"375"}>
              Berikut adalah klien-klien yang telah bekerja sama dengan kami :
            </Text>
          </Center>
        </Box>
        <SimpleGrid
          columns={{
            base: 1,
            lg: 2,
            xl: 3,
          }}
          spacing={5}
          w={"85vw"}
          maxW={"1200px"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {displayClients()}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default ClientPage;
