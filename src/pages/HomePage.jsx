import React from "react";
import {
  Container,
  Text,
  VStack,
  Box,
  Flex,
  Button,
  Center,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import AboutSection from "../components/About/AboutSection";
import { GiComputerFan } from "react-icons/gi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdContacts } from "react-icons/io";
import ScrollAnimation from "react-animate-on-scroll";
import { MdOutlineContacts } from "react-icons/md";

const HomePage = () => {
  return (
    <Container maxW={"Container.x1"} py={0} mt={0}>
      <VStack spacing={3}>
        <Box
          bgSize="cover"
          bgImage="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url('foto_workshop/W6.jpg');"
          bgPosition={"center center"}
          bgRepeat={"no-repeat"}
          w="100vw"
          h={"90vh"}
          maxH={"1000px"}
        >
          <Flex
            flexDirection={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
            height={"100%"}
            padding={"80px"}
          >
            <Text
              fontSize={{ base: "1.5rem", md: "2.25rem" }}
              fontWeight={"370"}
              color={"white"}
              textAlign={"center"}
              marginTop={"10px"}
            >
              Selamat Datang di <br /> CV. David Teknik Blower
            </Text>

            <Flex flexDirection={"column"} spacing="2">
              <a href="#anchor">
                <Button
                  rightIcon={<FaMagnifyingGlass />}
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                  colorScheme="white"
                  bg={"whiteAlpha.400"}
                  _hover={{ bg: "whiteAlpha.600" }}
                >
                  Pelajari Lebih Lanjut
                </Button>
              </a>
            </Flex>
          </Flex>
        </Box>

        <a id="anchor"></a>
        <AboutSection />

        <Box w={{ base: "80%", lg: "1000px" }} my={"50px"}>
          <Text
            as={"h2"}
            align={"center"}
            fontSize={"1.75rem"}
            fontWeight={"600"}
          >
            Produk Kami
          </Text>

          <Flex
            p={50}
            w="full"
            alignItems="center"
            justifyContent="center"
            gap={4}
            flexDirection={{ base: "column", lg: "row" }}
            mt={0}
            py={4}
          >
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <ProductCard
                title="Axial Fan"
                imgSrc="/foto_produk_david_teknik/axial_fan/A5.jpg"
                description="Dirancang untuk memaksimalkan aliran udara dalam berbagai aplikasi, seperti sistem ventilasi gedung, pabrik, dan fasilitas industri."
              />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" animateOnce="true" delay={50}>
              <ProductCard
                title="Centrifugal Fan"
                imgSrc="/foto_produk_david_teknik/centrifugal_high_low_pressure/C5.jpg"
                description="Solusi ideal untuk sistem yang memerlukan tekanan tinggi dan aliran udara besar. Cocok untuk digunakan dalam sistem HVAC, pabrik kimia, dan proses industri lainnya."
              />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" animateOnce="true" delay={100}>
              <ProductCard
                title="Blower Custom"
                imgSrc="/foto_produk_david_teknik/Blower_dustcollector_portable/BC2_cropped.jpg"
                description="Kami juga menyediakan layanan kustomisasi untuk memenuhi kebutuhan spesifik pelanggan. Dengan tim ahli yang berpengalaman, kami siap merancang dan memproduksi blower sesuai permintaan"
              />
            </ScrollAnimation>
          </Flex>
          <Flex justifyContent="center">
            <Link to={"/product"}>
              <ScrollAnimation
                animateIn="fadeIn"
                animateOnce="true"
                delay={150}
              >
                <Button
                  rightIcon={<GiComputerFan />}
                  colorScheme="blue"
                  variant="outline"
                  rounded={"full"}
                >
                  Lihat Produk Kami Lebih Lanjut
                </Button>
              </ScrollAnimation>
            </Link>
          </Flex>
        </Box>

        <Box w={{ base: "80%", lg: "1000px" }} my={"70px"}>
          <Center>
            <Text
              as={"h2"}
              fontSize={"1.75rem"}
              fontWeight={"600"}
              align={"center"}
            >
              Klien Kami
            </Text>
          </Center>
          <Center>
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              justifyContent={"space-between"}
              alignItems={"center"}
              w={"700px"}
              my={"4"}
              height={{ base: "430px", md: "auto" }}
            >
              <ScrollAnimation animateIn="fadeIn" animateOnce="true" delay={0}>
                <Box
                  bg={"#f2f2f2"}
                  rounded={"full"}
                  w={"200px"}
                  h={"200px"}
                  bgImage={"/logo_perusahaan/ADR_Group.png"}
                  bgSize={"200px"}
                  bgRepeat={"no-repeat"}
                  bgPosition={"center"}
                  boxShadow={"lg"}
                ></Box>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" animateOnce="true" delay={50}>
                <Box
                  bg={"#f2f2f2"}
                  rounded={"full"}
                  w={"200px"}
                  h={"200px"}
                  bgImage={"/logo_perusahaan/Bumi_Tangerang.png"}
                  bgSize={"200px"}
                  bgRepeat={"no-repeat"}
                  bgPosition={"center"}
                  boxShadow={"lg"}
                ></Box>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeIn"
                animateOnce="true"
                delay={100}
              >
                <Box
                  bg={"#f2f2f2"}
                  rounded={"full"}
                  w={"200px"}
                  h={"200px"}
                  bgImage={"/logo_perusahaan/Perkasa_Multindo.png"}
                  bgSize={"200px"}
                  bgRepeat={"no-repeat"}
                  bgPosition={"center"}
                  boxShadow={"lg"}
                  display={{ base: "none", md: "block" }}
                ></Box>
              </ScrollAnimation>
            </Flex>
          </Center>
          <Center>
            <Link to={"/clients"}>
              <ScrollAnimation
                animateIn="fadeIn"
                animateOnce="true"
                delay={150}
              >
                <Button
                  rightIcon={<IoMdContacts />}
                  colorScheme="yellow"
                  variant="outline"
                  rounded={"full"}
                >
                  Lihat Klien Kami Lebih Lanjut
                </Button>
              </ScrollAnimation>
            </Link>
          </Center>
        </Box>

        <Box w={{ base: "80%", lg: "1000px" }} my={"70px"}>
          <Center>
            <Text
              as={"h2"}
              fontSize={"1.75rem"}
              fontWeight={"600"}
              align={"center"}
            >
              Temukan Kami
            </Text>
          </Center>

          <ScrollAnimation animateIn="fadeIn" animateOnce="true">
            <Center my={4}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3966.2349181979266!2d106.579673!3d-6.2327319999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTMnNTcuOCJTIDEwNsKwMzQnNDYuOCJF!5e0!3m2!1sen!2sid!4v1732952787226!5m2!1sen!2sid"
                width="550"
                height="350"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="gmaps"
              ></iframe>
            </Center>
          </ScrollAnimation>
          <Center>
            <Link to={"/contact"}>
              <ScrollAnimation animateIn="fadeIn" animateOnce="true" delay={50}>
                <Button
                  rightIcon={<MdOutlineContacts />}
                  colorScheme="green"
                  variant="outline"
                  rounded={"full"}
                >
                  Kontak Kami
                </Button>
              </ScrollAnimation>
            </Link>
          </Center>
        </Box>
      </VStack>
    </Container>
  );
};

export default HomePage;
