import {
  useDisclosure,
  Flex,
  Box,
  Button,
  VStack,
  Icon,
  HStack,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import Drawer from "./drawer";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import React from "react";

export default function MobileDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex display={{ base: "flex", md: "none" }}>
      <Button ref={btnRef} onClick={onOpen}>
        <IoMdMenu size="26px" />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
        <VStack alignItems="center" spacing="5">
          <Link to={"/"} onClick={onClose}>
            <Button variant="ghost">Home</Button>
          </Link>

          <Link to={"/product"} onClick={onClose}>
            <Button variant="ghost">Product</Button>
          </Link>

          <Link to={"/clients"} onClick={onClose}>
            <Button variant="ghost">Clients</Button>
          </Link>

          <Link to={"/contact"} onClick={onClose}>
            <Button variant="ghost">Contact</Button>
          </Link>
        </VStack>
      </Drawer>
    </Flex>
  );
}
