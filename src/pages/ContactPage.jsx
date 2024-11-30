import React, { useEffect } from "react";
import { Container, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const ContactPage = () => {
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
          Contact
        </Text>
      </VStack>
    </Container>
  );
};

export default ContactPage;
