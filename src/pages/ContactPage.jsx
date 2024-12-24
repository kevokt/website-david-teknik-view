import React, { useEffect } from "react";
import {
  Container,
  Text,
  VStack,
  SimpleGrid,
  Box,
  Center,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
import { IoMdContacts } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const ContactPage = () => {
  return (
    <Container maxW={"Container.x1"} py={12}>
      <VStack spacing={6}>
        <Box w="80vw" maxH={"800px"}>
          <Text
            fontSize={"3xl"}
            fontWeight={"bold"}
            textAlign={"center"}
            mb={0}
            mt={5}
          >
            Kontak Kami
          </Text>
          <Center>
            <Text fontSize={{ base: "1rem", md: "1.25rem" }} fontWeight={"375"}>
              Jika ada pertanyaan atau informasi pemesanan lebih lanjut, dapat
              langsung mengunjungi lokasi yang tertera atau dapat hubungi kontak
              dibawah ini :
            </Text>
          </Center>
        </Box>

        <Flex
          w="80vw"
          maxW={"1000px"}
          justifyContent={"space-evenly"}
          flexDirection={{ base: "column-reverse", lg: "row" }}
          gap={6}
        >
          <Center my={4}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3966.2349181979266!2d106.579673!3d-6.2327319999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTMnNTcuOCJTIDEwNsKwMzQnNDYuOCJF!5e0!3m2!1sen!2sid!4v1732952787226!5m2!1sen!2sid"
              width="450"
              height="270"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="gmaps"
            ></iframe>
          </Center>
          <VStack my={"auto"}>
            <Text>Nomor Whatsapp:</Text>
            <Button
              leftIcon={<IoMdContacts />}
              colorScheme="green"
              rounded={"3xl"}
            >
              0821-1405-9549
            </Button>
            <Button
              leftIcon={<IoMdContacts />}
              colorScheme="green"
              rounded={"3xl"}
            >
              0857-7178-2036
            </Button>

            <Text>Alamat Email:</Text>
            <Button leftIcon={<MdEmail />} colorScheme="red" rounded={"3xl"}>
              davidteknikblower1@gmail.com
            </Button>
          </VStack>
        </Flex>
      </VStack>
    </Container>
  );
};

export default ContactPage;
