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

// const data = {
//   A1: {
//     name: "A1",
//     img: "/foto_produk_david_teknik/axial_fan/A1.jpg",
//   },
//   A2: {
//     name: "A2",
//     img: "/foto_produk_david_teknik/axial_fan/A2.jpg",
//   },
//   A3: {
//     name: "A3",
//     img: "/foto_produk_david_teknik/axial_fan/A3.jpg",
//   },
//   A4: {
//     name: "A4",
//     img: "/foto_produk_david_teknik/axial_fan/A4.jpg",
//   },
//   A5: {
//     name: "A5",
//     img: "/foto_produk_david_teknik/axial_fan/A5.jpg",
//   },
//   A6: {
//     name: "A6",
//     img: "/foto_produk_david_teknik/axial_fan/A6.jpg",
//   },
//   A7: {
//     name: "A7",
//     img: "/foto_produk_david_teknik/axial_fan/A7.jpg",
//   },
//   A8: {
//     name: "A8",
//     img: "/foto_produk_david_teknik/axial_fan/A8.jpg",
//   },
// };

const displayImages = () => {
  // Access the first element in the array and then the "axial_fan" object
  const axialFanData = data[0]?.axial_fan;

  if (!axialFanData) {
    return <p>Data not found</p>;
  }

  return Object.keys(axialFanData).map((key) => {
    const fan = axialFanData[key];
    return (
      <Box key={key} mb={4}>
        <h8>{fan.name}</h8>
        <Image
          src={fan.img}
          alt={`Axial Fan ${fan.name}`}
          loading="lazy"
          className="product-image"
        />
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
