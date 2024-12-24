import React from "react";

import {
  Box,
  Center,
  chakra,
  Container,
  Flex,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiComputerFan } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Logo = (props) => {
  return (
    <Flex flexDirection={"row"} alignItems={"center"} gap={2}>
      <GiComputerFan size={30} />
      <Text
        fontSize={{ base: "10", sm: "15", md: "17", lg: "21" }}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        textAlign={"center"}
      >
        CV. David Teknik Blower
      </Text>
    </Flex>
  );
};

const SocialButton = ({ children, label, href, colorBg, colorHover }) => {
  return (
    <chakra.button
      bg={colorBg}
      rounded={"full"}
      w={10}
      h={10}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: colorHover,
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (
    <Box bg={"gray.50"} color={"gray.700"} mt={20} boxShadow={"lg"} id="footer">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
        {/* <Stack direction={"row"} spacing={6}>
          <Link to={"/"}>
            <Box as="a">Home</Box>
          </Link>
          <Link to={"/product"}>
            <Box as="a">Product</Box>
          </Link>
          <Link to={"/clients"}>
            <Box as="a">Clients</Box>
          </Link>
          <Link to={"/contact"}>
            <Box as="a">Contact</Box>
          </Link>
        </Stack> */}
      </Container>

      <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"gray.200"}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text fontSize={{ base: "0.75rem", md: "1rem" }}>
            Jl. Kampung Peusar No. 145, RT 45/RW 01, Kel. Binong, Kec. Curug,
            Kab. Tangerang, Banten
          </Text>
          <Stack direction={"row"} spacing={6}>
            <a
              href="https://api.whatsapp.com/send?phone=6282114059549"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send a WhatsApp message"
            >
              <SocialButton
                label="Whatsapp"
                colorBg="#dcf8c6"
                colorHover={"#c6dfb2"}
              >
                <IoLogoWhatsapp size={"23px"} color="#25d366" />
              </SocialButton>
            </a>

            <a
              href="mailto:davidteknikblower1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send a E-Mail message"
            >
              <SocialButton
                label={"E-mail"}
                colorBg="#f9e7e7"
                colorHover="#eeb9b7"
              >
                <MdEmail size={"23px"} color="	#c71610" />
              </SocialButton>
            </a>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
