import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
import data from "./product_data";

const displayImages = () => {
  const fans = data[0]?.axial_fan;

  if (!fans) {
    return <p>Data not found</p>;
  }

  return Object.keys(fans).map((key) => {
    const fan = fans[key];
    return (
      <Box key={key} mb={0}>
        <Image
          src={fan.img}
          alt={`Axial Fan ${fan.name}`}
          loading="lazy"
          className="product-image"
          mt={4}
        />
        <Box borderBottom={"1px solid lightgray"} mt={4}></Box>
      </Box>
    );
  });
};

const AxialFanModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button
        onClick={onOpen}
        colorScheme="blue"
        variant="outline"
        rounded={"full"}
      >
        Gambar Axial Fan
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"md"}>
            Berikut gambar Axial Fan kami:
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{displayImages()}</ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AxialFanModal;
