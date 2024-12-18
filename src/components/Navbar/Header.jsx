import {
  Image,
  Flex,
  Button,
  HStack,
  chakra,
  Text,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import MobileDrawer from "./MobileDrawer";
import logo from "/david_teknik_logo.png";
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
      <Flex w="100%" px="6" py="4" alignItems="center" justify="space-between">
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
        <HStack as="nav" spacing="2" display={{ base: "none", md: "flex" }}>
          <Link to={"/"}>
            <Button variant="ghost" fontSize={"1.25rem"}>
              Home
            </Button>
          </Link>

          <Link to={"/product"}>
            <Button variant="ghost" fontSize={"1.25rem"}>
              Product
            </Button>
          </Link>

          <Link to={"/clients"}>
            <Button variant="ghost" fontSize={"1.25rem"}>
              Clients
            </Button>
          </Link>

          <Link to={"/contact"}>
            <Button variant="ghost" fontSize={"1.25rem"}>
              Contact
            </Button>
          </Link>
        </HStack>

        <MobileDrawer />
      </Flex>
    </chakra.header>
  );
}
