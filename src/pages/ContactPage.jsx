import React from "react";
import {
  Container,
  Text,
  VStack,
  Box,
  Center,
  Button,
  Flex,
} from "@chakra-ui/react";
import { IoLogoWhatsapp } from "react-icons/io";
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
              Apabila Anda memiliki pertanyaan atau memerlukan informasi lebih
              lanjut terkait pemesanan, Anda dapat langsung mengunjungi lokasi
              yang tercantum atau menghubungi kontak yang tersedia di bawah ini
              :
            </Text>
          </Center>
        </Box>

        <Flex
          w="80vw"
          maxW={"1000px"}
          justifyContent={"space-evenly"}
          flexDirection={{ base: "column-reverse", lg: "row" }}
          gap={{ base: "10", lg: "6" }}
          mt={5}
        >
          <Center>
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
            <Text fontSize={{ base: "1rem", md: "1.25rem" }} fontWeight={"375"}>
              Nomor Whatsapp:
            </Text>
            <a
              href="https://api.whatsapp.com/send?phone=6282114059549"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send a WhatsApp message"
            >
              <Button
                leftIcon={<IoLogoWhatsapp />}
                background={"#25d366"}
                color={"white"}
                _hover={{ background: "#1da851" }}
                rounded={"3xl"}
              >
                0821-1405-9549
              </Button>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=6285771782036"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send a WhatsApp message"
            >
              <Button
                leftIcon={<IoLogoWhatsapp />}
                background={"#25d366"}
                color={"white"}
                _hover={{ background: "#1da851" }}
                rounded={"3xl"}
              >
                0857-7178-2036
              </Button>
            </a>

            <Text fontSize={{ base: "1rem", md: "1.25rem" }} fontWeight={"375"}>
              Alamat Email:
            </Text>
            <a
              href="mailto:davidteknikblower1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send a E-Mail message"
            >
              <Button leftIcon={<MdEmail />} colorScheme="red" rounded={"3xl"}>
                davidteknikblower1@gmail.com
              </Button>
            </a>
          </VStack>
        </Flex>
      </VStack>
    </Container>
  );
};

export default ContactPage;
