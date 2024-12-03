import React from "react";
import { Flex, Box, Image, HStack, Stack } from "@chakra-ui/react";

const ProductArticle = ({ title, description, imgSrc }) => {
  return (
    <Stack
      bg={"white"}
      direction={{ base: "column", md: "row" }}
      minW={{ base: "280px", md: "2xl" }}
      maxW={{ base: "md", md: "7xl" }}
      w={"80%"}
      h={{ base: "500px", md: "200px" }}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      p={0}
    >
      <Image
        src={imgSrc}
        roundedStart="lg"
        objectFit={"cover"}
        maxH={{ base: "200px", md: "100%" }}
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
          <Box color={"gray.600"} fontSize="sm">
            {description}
          </Box>
        </Flex>
      </Box>
    </Stack>
  );
};

export default ProductArticle;
