import React from "react";
import {
  Box,
  Grid,
  Text,
  AspectRatio,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import ScrollAnimation from "react-animate-on-scroll";

const WelcomeSection = () => {
  return (
    <Box
      position="relative"
      w="100vw"
      h="92vh"
      maxH={"900px"}
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Grid Container */}
      <Box className="container">
        <Image
          src="/foto_produk_david_teknik/axial_fan/A3.jpg"
          className="child"
        />
        <Image
          src="/foto_produk_david_teknik/Blower_dustcollector_portable/BC4.jpg"
          className="child"
        />
        <Image
          src="/foto_produk_david_teknik/centrifugal_high_low_pressure/C4.jpg"
          className="child"
        />
        <Image
          src="/foto_produk_david_teknik/impeler_centrifugal/IC6.jpg"
          className="child"
        />
      </Box>

      {/* Overlay Text */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        zIndex="2"
        bgImage="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6))"
        height={"100%"}
        width={"100%"}
      >
        <Flex
          flexDirection={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
          height={"100%"}
          padding={"80px"}
        >
          <Text
            fontSize={{ base: "2rem", md: "2.5rem" }}
            fontWeight={"400"}
            color={"white"}
            textAlign={"center"}
            marginTop={"10px"}
            textShadow="3px 3px 8px rgba(0, 0, 0, 0.7)"
          >
            Selamat Datang di <br /> CV. David Teknik Blower
          </Text>

          <Flex flexDirection={"column"} spacing="2">
            <a href="#tentang-kami">
              <Button
                rightIcon={<FaMagnifyingGlass />}
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme="white"
                bg={"whiteAlpha.700"}
                _hover={{ bg: "whiteAlpha.900" }}
                boxShadow={"lg"}
                color={"black"}
              >
                Pelajari Lebih Lanjut
              </Button>
            </a>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default WelcomeSection;
