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
import ProductArticle from "../components/ProductArticle";

const ProductPage = () => {
  return (
    <Container maxW={"Container.x1"} py={12}>
      <VStack spacing={3}>
        <Text fontSize={"30"} fontWeight={"bold"} textAlign={"center"}>
          Produk Kami
        </Text>

        <ProductArticle
          title="Axial Fan"
          description="Axial fan adalah perangkat mekanis yang berfungsi menggerakkan udara atau gas sejajar dengan porosnya. Kipas ini juga dikenal sebagai kipas baling-baling, kipas tabung aksial, atau kipas baling-baling aksial."
          imgSrc="/foto_produk_david_teknik/axial_fan/A1.jpg"
          modalType={1}
        />
        <ProductArticle
          title="Centrifugal Fan"
          description="Centrifugal fan adalah mesin yang memanfaatkan gaya sentrifugal untuk mengalirkan udara yang dihisap melalui inlet blower, kemudian diputar ke arah sumbu berlawanan dan dikeluarkan melalui outlet blower bertekanan tinggi."
          imgSrc="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          modalType={2}
        />
        <ProductArticle
          title="Blower Custom"
          description="Blower custom adalah blower yang dirancang khusus sesuai permintaan. Kami menawarkan layanan kustomisasi untuk memenuhi kebutuhan khusus pelanggan. "
          imgSrc="https://plus.unsplash.com/premium_photo-1677172408819-a493426f6e10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          modalType={3}
        />
      </VStack>
    </Container>
  );
};

export default ProductPage;
