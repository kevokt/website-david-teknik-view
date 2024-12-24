import React from "react";
import { Flex, Box, Image, Stack } from "@chakra-ui/react";
import AxialFanModal from "./productModal/AxialFanModal";
import CentrifugalFanModal from "./productModal/CentrifugalFanModal";
import BlowerCustomModal from "./productModal/BlowerCustomModal";
import ImpelerCentrifugalModal from "./productModal/ImpelerCentrifugal";

const ProductArticle = ({ title, description, imgSrc, modalType }) => {
  return (
    <Stack
      bg={"white"}
      direction={{ base: "column", lg: "row" }}
      minW={{ base: "280px", lg: "2xl" }}
      maxW={{ base: "md", lg: "5xl" }}
      w={"80%"}
      h={{ base: "500px", lg: "200px" }}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      p={0}
    >
      <Image
        src={imgSrc}
        roundedStart={{ base: "none", lg: "lg" }}
        roundedTop={{ base: "none", sm: "lg", md: "lg" }}
        roundedTopRight={{ base: "none", lg: "none" }}
        objectFit={"cover"}
        maxH={{ base: "200px", lg: "100%" }}
      />
      <Box p="6">
        <Flex
          flexDirection={"column"}
          justifyContent={"space-between"}
          minH={{ base: "115%", sm: "130%", md: "140%", lg: "100%" }}
        >
          <Flex
            mt="1"
            justifyContent="space-between"
            alignContent="center"
            flexDirection={"column"}
          >
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
              alignItems={"center"}
            >
              {title}
            </Box>
            <Box color={"gray.600"} fontSize="sm">
              {description}
            </Box>
          </Flex>
          {modalType === 1 && <AxialFanModal />}
          {modalType === 2 && <BlowerCustomModal />}
          {modalType === 3 && <CentrifugalFanModal />}
          {modalType === 4 && <ImpelerCentrifugalModal />}
        </Flex>
      </Box>
    </Stack>
  );
};

export default ProductArticle;
