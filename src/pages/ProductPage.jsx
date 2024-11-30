import React, { useEffect } from "react";
import {
  Container,
  Text,
  VStack,
  SimpleGrid,
  Flex,
  Box,
  Square,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  return (
    <Container maxW={"Container.x1"} py={12}>
      <VStack spacing={3}>
        <Text fontSize={"30"} fontWeight={"bold"} textAlign={"center"}>
          Produk Kami
        </Text>

        <Flex flexDirection={"row"} width={"80%"}>
          <Box bg="blue.500" width="300px" height={"150px"}>
            <Text>Box 2</Text>
          </Box>
          <Box flex="1" bg="tomato">
            <Text>Box 3</Text>
            <Text>Isi Text Box 3</Text>
          </Box>
        </Flex>

        <Flex flexDirection={"row"} width={"80%"}>
          <Box bg="blue.500" width="300px" height={"150px"}>
            <Text>Box 2</Text>
          </Box>
          <Box flex="1" bg="tomato">
            <Text>Box 3</Text>
            <Text>Isi Text Box 3</Text>
          </Box>
        </Flex>

        <Flex flexDirection={"row"} width={"80%"}>
          <Box bg="blue.500" width="300px" height={"150px"}>
            <Text>Box 2</Text>
          </Box>
          <Box flex="1" bg="tomato">
            <Text>Box 3</Text>
            <Text>Isi Text Box 3</Text>
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default ProductPage;
