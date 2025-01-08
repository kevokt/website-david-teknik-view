import React from "react";
import { Flex, Box, Image, Center, Text } from "@chakra-ui/react";

const ClientCard = ({ name, logo, smallerFont, isCV }) => {
  return (
    <Flex
      bg={"white"}
      w={{ base: "80vw", sm: "350px" }}
      h={"275px"}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      flexDirection={"column"}
      justifyContent={"space-between"}
      mx={"auto"}
    >
      <Image
        src={logo}
        roundedTop="lg"
        h={"200px"}
        objectFit={"contain"}
        w={"100%"}
        bg={"#f2f2f2"}
        alt={`Logo ${name}`}
      />

      <Center h={"75px"}>
        <Text
          fontSize={smallerFont ? "md" : "xl"}
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          alignItems={"center"}
        >
          {/* PT. {name} */}
          {isCV ? "CV. " : "PT.  "} {name}
        </Text>
      </Center>
    </Flex>
  );
};

export default ClientCard;
