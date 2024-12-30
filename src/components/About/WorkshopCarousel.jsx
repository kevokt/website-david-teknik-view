import React from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const WorkshopCarousel = () => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "40%", md: "40%" });
  const side = useBreakpointValue({ base: "4%", md: "4%" });

  // These are the images used in the slide
  const cards = [
    "foto_workshop/W1.jpg",
    "foto_workshop/W2.jpg",
    "foto_workshop/W3.jpg",
    "foto_workshop/W4.jpg",
    "foto_workshop/W5.jpg",
    "foto_workshop/W7.jpg",
  ];

  return (
    <Box
      position={"relative"}
      height={"500px"}
      width={"full"}
      maxW={"700px"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        border="3px solid white"
        _hover={{ bg: "whiteAlpha.500" }}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size={"lg"} />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        border="3px solid white"
        _hover={{ bg: "whiteAlpha.500" }}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size={"lg"} />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={"400px"}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize={"contain"}
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default WorkshopCarousel;
