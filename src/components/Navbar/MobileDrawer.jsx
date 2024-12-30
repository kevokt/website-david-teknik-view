import { useDisclosure, Flex, Button, VStack } from "@chakra-ui/react";
import Drawer from "./Drawer";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import React from "react";

export default function MobileDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      display={{ base: "flex", md: "none" }}
      border={"1px solid black"}
      borderRadius={"6px"}
    >
      <Button ref={btnRef} onClick={onOpen}>
        <IoMdMenu size="26px" />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
        <VStack alignItems="center" spacing="1">
          <Link to={"/"} onClick={onClose}>
            <Button className="nav-button" variant="ghost">
              <span>Beranda</span>
            </Button>
          </Link>

          <Link to={"/product"} onClick={onClose}>
            <Button className="nav-button" variant="ghost">
              <span>Produk</span>
            </Button>
          </Link>

          <Link to={"/clients"} onClick={onClose}>
            <Button className="nav-button" variant="ghost">
              <span>Klien</span>
            </Button>
          </Link>

          <Link to={"/contact"} onClick={onClose}>
            <Button className="nav-button" variant="ghost">
              <span>Kontak</span>
            </Button>
          </Link>
        </VStack>
      </Drawer>
    </Flex>
  );
}
