
import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const bannerImageURLs = [
  "https://wallpaperaccess.com/full/1094561.jpg",
  "https://assets.newatlas.com/dims4/default/9b416a8/2147483647/strip/true/crop/3000x2000+0+0/resize/720x480!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F97%2F28%2Fae9dc4bd47fbb4770bf8c09afddc%2Feuclid-lift-off-1.jpg", // Add URLs of additional images
  "https://img.particlenews.com/image.php?type=thumbnail_580x000&url=1yF59U_0nlcCTsG00", // Add URLs of additional images
];

function Banner() {
  const navigate = useNavigate(); // Initialize navigate
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === bannerImageURLs.length - 1 ? 0 : prevIndex + 1
        );
        setTransitioning(false);
      }, 500); // Change image every 5 seconds
    }, 7000); // Start transitioning every 7 seconds (including 2 seconds for the transition effect)

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleClick = () => {
    navigate("/discover"); // Use navigate to navigate to '/discover'
  };

  const currentImageURL = bannerImageURLs[currentImageIndex];

  return (
    <Box
      maxW="100vw" // Set the maximum width to 100% of the viewport width
      h="100vh" // Set the height to 100% of the viewport height
      mx="auto"
      px={{
        base: "0",
        lg: "12",
      }}
      py={{
        base: "0",
        lg: "12",
      }}
      // Use CSS to set the background image and style
      style={{
        backgroundImage: `url(${currentImageURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        animation: transitioning ? "fadeImage 2s ease-in-out" : "none", // Smooth fade-in and fade-out animation
      }}
    >
      <Stack
        direction={{
          base: "column-reverse",
          lg: "row",
        }}
        spacing={{
          base: "0",
          lg: "20",
        }}
        width="100%" // Ensure the content spans the full width
        padding={{ base: "2rem", lg: "4rem" }} // Add padding for content
      >
        <Box
          width={{
            lg: "sm",
          }}
          transform={{
            base: "translateY(-50%)",
            lg: "none",
          }}
          mx={{
            base: "6",
            md: "8",
            lg: "0",
          }}
          px={{
            base: "6",
            md: "8",
            lg: "0",
          }}
          py={{
            base: "6",
            md: "8",
            lg: "12",
          }}
        >
          <Stack
            spacing={{
              base: "8",
              lg: "10",
            }}
          >
            <Stack
              spacing={{
                base: "2",
                lg: "4",
              }}
            >
              <Heading
                size="xl"
                color={useColorModeValue("blue.500", "blue.300")}
                style={{
                  animation: "fadeInDown 1s ease-in-out",
                  animationFillMode: "forwards",
                }}
              >
                SpaceX Explorer
              </Heading>
              <Heading
                size="xl"
                fontWeight="normal"
                style={{
                  animation: "fadeInDown 1s ease-in-out",
                  animationFillMode: "forwards",
                  animationDelay: "0.5s",
                }}
              >
                Journey to the Stars
              </Heading>
            </Stack>
            <HStack spacing="3">
              <div onClick={handleClick} style={{ cursor: "pointer" }}>
                <span
                  color={useColorModeValue("blue.500", "blue.300")}
                  fontWeight="bold"
                  fontSize="lg"
                >
                  Discover Space
                </span>
                <Icon
                  color={useColorModeValue("blue.500", "blue.300")}
                  as={FaRocket}
                />
              </div>
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default Banner;
