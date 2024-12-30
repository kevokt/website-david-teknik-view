import { Flex, Button, HStack, chakra, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import MobileDrawer from "./MobileDrawer";
import { GiComputerFan } from "react-icons/gi";

export default function Header() {
  return (
    <chakra.header
      id="header"
      mb={0}
      h={"75px"}
      bg={"gray.100"}
      boxShadow={"lg"}
    >
      <Flex w="100%" px="10" py="4" alignItems="center" justify="space-between">
        <HStack spacing="2">
          <GiComputerFan size={30} />
          <Text
            fontSize={{ base: "10", sm: "15", md: "17", lg: "21" }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
          >
            <Link to={"/"}>CV. David Teknik Blower</Link>
          </Text>
        </HStack>
        <HStack as="nav" spacing="0" display={{ base: "none", md: "flex" }}>
          <Link to={"/"}>
            <Button
              className="nav-button"
              rounded={"full"}
              variant="ghost"
              fontSize={"1.15rem"}
            >
              <span>Beranda</span>
            </Button>
          </Link>

          <Link to={"/product"}>
            <Button
              className="nav-button"
              rounded={"full"}
              variant="ghost"
              fontSize={"1.15rem"}
            >
              <span>Produk</span>
            </Button>
          </Link>

          <Link to={"/clients"}>
            <Button
              className="nav-button"
              rounded={"full"}
              variant="ghost"
              fontSize={"1.15rem"}
            >
              <span>Klien</span>
            </Button>
          </Link>

          <Link to={"/contact"}>
            <Button
              className="nav-button"
              rounded={"full"}
              variant="ghost"
              fontSize={"1.15rem"}
            >
              <span>Kontak</span>
            </Button>
          </Link>
        </HStack>

        <MobileDrawer />
      </Flex>
    </chakra.header>
  );
}
