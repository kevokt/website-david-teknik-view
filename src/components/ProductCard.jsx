import React, { useState } from "react";
import { Flex, Box, Image, useColorModeValue } from "@chakra-ui/react";

function ProductCard({ title, imgSrc, description }) {
  return (
    <Box
      bg={"white"}
      maxW="sm"
      w={{ base: "280px", md: "350px" }}
      minH={"450px"}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
    >
      <Image src={imgSrc} roundedTop="lg" />

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
          <Box color={"gray.600"} fontSize="sm">
            {description}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default ProductCard;
