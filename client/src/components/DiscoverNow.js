import React, { useState, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  GridItem,
  Skeleton,
  Center,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import RocketCard from "./RocketCard"; // Import the RocketCard component

function DiscoverNow() {
  const [rockets, setRockets] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state as true

  const fetchRockets = async () => {
    try {
      // Simulate a 3-second delay before fetching data
      setTimeout(async () => {
        const res = await axios.get("https://api.spacexdata.com/v3/rockets");
        setRockets(res.data);
        setLoading(false); // Set loading to false after fetching data
      }, 1000); // 3-second delay
    } catch (error) {
      console.error("Error fetching rockets:", error);
    }
  };

  useEffect(() => {
    fetchRockets();
  }, []);

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <Center mb={6}>
        <Text fontSize="2xl" fontWeight="bold" color="blue.500">
          SpaceX Rockets
        </Text>
      </Center>

      {loading ? (
        // Display skeleton loading while loading data
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
          {[1, 2, 3].map((id) => (
            <GridItem key={id}>
              <Skeleton height="200px" />
            </GridItem>
          ))}
        </SimpleGrid>
      ) : // Display rocket cards once data is fetched
      rockets.length > 0 ? (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
          {rockets.map((rocket) => (
            <GridItem key={rocket.id}>
              {/* Use the RocketCard component to display each rocket */}
              <RocketCard rocket={rocket} />
            </GridItem>
          ))}
        </SimpleGrid>
      ) : (
        // Display a message if no data is available
        <Center>
          <Text fontSize="lg" color="gray.600">
            No rockets available.
          </Text>
        </Center>
      )}
    </Box>
  );
}

export default DiscoverNow;
