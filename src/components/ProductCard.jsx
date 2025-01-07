import React from "react";
import { Flex, Box, Image } from "@chakra-ui/react";

function ProductCard({ title, imgSrc, description }) {
  return (
    <Box
      bg={"white"}
      w={{ base: "80vw", sm: "350px", md: "450px", lg: "275px", xl: "325px" }}
      h={"500px"}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
    >
      <Image
        src={imgSrc}
        roundedTop="lg"
        h={"200px"}
        objectFit={"cover"}
        w={"100%"}
      />

      <Box p="6">
        <Flex mt="1" justifyContent="space-between" alignContent="center">
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
        </Flex>

        <Flex justifyContent="space-between" alignContent="center">
          <Box color={"gray.600"} fontSize="sm" fontWeight={"400"}>
            {description}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default ProductCard;
