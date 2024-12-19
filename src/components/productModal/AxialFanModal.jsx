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
  const axialFanData = data[0]?.axial_fan;

  if (!axialFanData) {
    return <p>Data not found</p>;
  }

  return Object.keys(axialFanData).map((key) => {
    const fan = axialFanData[key];
    return (
      <Box key={key} mb={4}>
        <Text align={"center"}>{fan.name}</Text>
        <Image
          src={fan.img}
          alt={`Axial Fan ${fan.name}`}
          loading="lazy"
          className="product-image"
          mt={2}
        />
        <Box borderBottom={"1px solid lightgray"} mt={8}></Box>
      </Box>
    );
  });
};

const AxialFanModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button onClick={onOpen}>Gambar Axial Fan</Button>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Berikut gambar Axial Fan kami:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{displayImages()}</ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AxialFanModal;
