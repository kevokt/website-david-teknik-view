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
      <VStack spacing={6}>
        <Text fontSize={"30"} fontWeight={"bold"} textAlign={"center"} mb={4}>
          Produk Kami
        </Text>

        <ProductArticle
          title="Axial Fan"
          description="Axial fan adalah perangkat mekanis yang berfungsi menggerakkan udara atau gas sejajar dengan porosnya. Kipas ini juga dikenal sebagai kipas baling-baling, kipas tabung aksial, atau kipas baling-baling aksial."
          imgSrc="/foto_produk_david_teknik/axial_fan/A1.jpg"
          modalType={1}
        />
        <ProductArticle
          title="Blower Custom"
          description="Blower custom adalah blower yang dirancang khusus sesuai permintaan. Kami menawarkan layanan kustomisasi untuk memenuhi kebutuhan khusus pelanggan. "
          imgSrc="/foto_produk_david_teknik/Blower_dustcollector_portable/BC2_cropped.jpg"
          modalType={2}
        />
        <ProductArticle
          title="Centrifugal High & Low Pressure"
          description="Kipas sentrifugal yang menghasilkan aliran udara dengan tekanan tinggi atau rendah, digunakan untuk aplikasi ventilasi, pendinginan, dan pengeringan di berbagai industri."
          imgSrc="/foto_produk_david_teknik/centrifugal_high_low_pressure/C8.jpg"
          modalType={3}
        />
        <ProductArticle
          title="Impeler Centrifugal"
          description="Komponen utama kipas sentrifugal yang mengalirkan udara dengan efisiensi tinggi menggunakan gaya sentrifugal, ideal untuk aplikasi tekanan tinggi dan rendah."
          imgSrc="/foto_produk_david_teknik/impeler_centrifugal/IC11.jpg"
          modalType={4}
        />
      </VStack>
    </Container>
  );
};

export default ProductPage;
