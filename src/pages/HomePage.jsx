import React from "react";
import {
  Container,
  Text,
  VStack,
  Box,
  Flex,
  Button,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { GiComputerFan } from "react-icons/gi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdContacts } from "react-icons/io";

const HomePage = () => {
  const paragraphFontSize = { base: "1rem", md: "1.25rem" };
  return (
    <Container maxW={"Container.x1"} py={0} mt={0}>
      <VStack spacing={3}>
        <Box
          bgSize="cover"
          bgImage="url(https://images.unsplash.com/photo-1579618215542-2ed5e10b65ed?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
          w="100vw"
          h={"90vh"}
          maxH={"800px"}
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
              fontWeight={"650"}
              color={"white"}
              textAlign={"center"}
              marginTop={"10px"}
            >
              Selamat Datang di <br /> CV. David Teknik Blower
            </Text>

            <Flex flexDirection={"column"} spacing="2">
              <a href="#about-us">
                <Button
                  rightIcon={<FaMagnifyingGlass />}
                  width={"200px"}
                  mb={10}
                >
                  Pelajari Lebih Lanjut
                </Button>
              </a>
            </Flex>
          </Flex>
        </Box>

        <Box w={{ base: "80%", lg: "860px" }} my={"50px"}>
          <Text
            as={"h2"}
            align={"center"}
            fontSize={"1.75rem"}
            fontWeight={"600"}
            mb={3}
            id="about-us"
          >
            Tentang kami
          </Text>

          <Text fontSize={paragraphFontSize} fontWeight={"375"}>
            CV. David Teknik Blower merupakan salah satu usaha yang bergerak
            dalam bidang produksi dan distribusi kipas industri. Dengan
            pengalaman bertahun-tahun dalam desain, fabrikasi, dan instalasi
            sistem kipas industri yang sukses, kami melayani distribusi dalam
            berbagai sektor industri.
          </Text>

          <Text fontSize={paragraphFontSize} fontWeight={"375"} mt={"30px"}>
            Kami berkomitmen untuk memberikan solusi terbaik dalam pengendalian
            polusi udara dan sistem ventilasi industri. Dengan tim ahli yang
            berdedikasi dan teknologi terkini, kami memastikan setiap proyek
            yang kami tangani memenuhi standar kualitas tertinggi dan kepuasan
            pelanggan. CV. David Teknik Blower selalu siap untuk menghadapi
            tantangan baru dan memberikan kontribusi positif bagi industri di
            Indonesia.
          </Text>
        </Box>

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
            <ProductCard
              title="Axial Fan"
              description="Dirancang untuk memaksimalkan aliran udara dalam berbagai aplikasi, seperti sistem ventilasi gedung, pabrik, dan fasilitas industri."
              imgSrc="/foto_produk_david_teknik/axial_fan/A1.jpg"
            />

            <ProductCard
              title="Centrifugal Fan"
              imgSrc="/foto_produk_david_teknik/centrifugal_high_low_pressure/C5.jpg"
              description="Solusi ideal untuk sistem yang memerlukan tekanan tinggi dan aliran udara besar. Cocok untuk digunakan dalam sistem HVAC, pabrik kimia, dan proses industri lainnya."
            />

            <ProductCard
              title="Blower Custom"
              imgSrc="/foto_produk_david_teknik/Blower_dustcollector_portable/BC2_cropped.jpg"
              description="Kami juga menyediakan layanan kustomisasi untuk memenuhi kebutuhan spesifik pelanggan. Dengan tim ahli yang berpengalaman, kami siap merancang dan memproduksi blower sesuai permintaan"
            />
          </Flex>
          <Flex justifyContent="center">
            <Link to={"/product"}>
              <Button
                rightIcon={<GiComputerFan />}
                colorScheme="blue"
                variant="outline"
              >
                Lihat Produk Kami Lebih Lanjut
              </Button>
            </Link>
          </Flex>
        </Box>

        <Box w={{ base: "80%", lg: "1000px" }} my={"50px"}>
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
          <Center>
            <Link to={"/contact"}>
              <Button
                rightIcon={<IoMdContacts />}
                colorScheme="green"
                variant="outline"
              >
                Kontak Kami
              </Button>
            </Link>
          </Center>
        </Box>
      </VStack>
    </Container>
  );
};

export default HomePage;
