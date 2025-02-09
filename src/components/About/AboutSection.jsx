import React from "react";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import WorkshopCarousel from "./WorkshopCarousel";

const AboutSection = () => {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 25, md: 28 }}
        direction={{ base: "column-reverse", xl: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 5 }}>
          <Heading lineHeight={1.1} fontWeight={600}>
            <Text
              as={"h2"}
              align={"center"}
              fontSize={"1.75rem"}
              fontWeight={"600"}
              id="about-us"
              mt={{ base: 12, md: 0 }}
            >
              Tentang kami
            </Text>
          </Heading>
          <Text color={"gray.500"} px={{ base: "0", md: "20%", xl: "40px" }}>
            CV. David Teknik Blower merupakan salah satu usaha yang bergerak
            dalam bidang produksi dan distribusi kipas industri. Dengan
            pengalaman bertahun-tahun dalam desain, fabrikasi, dan instalasi
            sistem kipas industri yang sukses, kami melayani distribusi dalam
            berbagai sektor industri. <br />
            <br /> Kami berkomitmen untuk memberikan solusi terbaik dalam
            pengendalian polusi udara dan sistem ventilasi industri. Dengan tim
            ahli yang berdedikasi dan teknologi terkini, kami memastikan setiap
            proyek yang kami tangani memenuhi standar kualitas tertinggi dan
            kepuasan pelanggan. CV. David Teknik Blower selalu siap untuk
            menghadapi tantangan baru dan memberikan kontribusi positif bagi
            industri di Indonesia. <br />
            <br /> CV. David Teknik Blower berdomisili di kota Tangerang dan
            sudah melayani berbagai client dari banyak perusahaan. Kami siap
            melayani jual beli berbagai macam blower dan pemesanan blower
            custom.
          </Text>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"400px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"600px"}
            overflow={"hidden"}
          >
            <WorkshopCarousel />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default AboutSection;
