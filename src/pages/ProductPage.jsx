import React from "react";
import { Container, Text, VStack, Box, Button } from "@chakra-ui/react";
import ProductArticle from "../components/ProductArticle";
import { Link } from "react-router-dom";
import { MdOutlineContacts } from "react-icons/md";

const ProductPage = () => {
  return (
    <Container maxW={"Container.x1"} py={12}>
      <VStack spacing={6}>
        <Text
          fontSize={"3xl"}
          fontWeight={"bold"}
          textAlign={"center"}
          mb={4}
          mt={5}
        >
          Produk Kami
        </Text>

        <ProductArticle
          title="Axial Fan"
          description="Perangkat mekanis yang berfungsi menggerakkan udara sejajar dengan porosnya. Kipas mengalir udara melaluinya dalam arah aksial, sejajar dengan poros tempat baling-baling berputar."
          imgSrc="/foto_produk_david_teknik/axial_fan/A3.jpg"
          modalType={1}
        />
        <ProductArticle
          title="Blower Custom"
          description="Blower yang dirancang khusus sesuai permintaan. Kami menawarkan layanan kustomisasi untuk memenuhi kebutuhan khusus pelanggan. "
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

        <Box
          maxW={{ base: "md", lg: "5xl" }}
          w={"80%"}
          borderTop={"1px solid gray"}
          mt={14}
        ></Box>
        <Text
          fontSize={{ base: "1rem", md: "1.25rem" }}
          fontWeight={"375"}
          mt={14}
          maxW={{ base: "md", lg: "5xl" }}
          w={"70%"}
          textAlign={{ base: "center", lg: "left" }}
        >
          Jika Anda berminat untuk melakukan pemesanan atau memiliki pertanyaan
          lebih lanjut, jangan ragu untuk menghubungi kami.
        </Text>

        <Link to={"/contact"}>
          <Button
            rightIcon={<MdOutlineContacts />}
            colorScheme="green"
            variant="outline"
            rounded={"full"}
          >
            Kontak Kami
          </Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default ProductPage;
