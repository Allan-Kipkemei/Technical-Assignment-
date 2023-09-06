import React from "react";
import {
  Box,
  Text,
  Badge,
  Flex,
  Spacer,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { GiRocket } from "react-icons/gi";

function RocketCard({ rocket }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      boxShadow="lg"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.02)" }}
    >
      <Flex alignItems="center">
        <Icon as={GiRocket} boxSize={8} color="blue.500" />
        <Text fontWeight="bold" fontSize="xl" ml={2}>
          {rocket.rocket_name}
        </Text>
      </Flex>
      <Badge fontSize="sm" colorScheme={rocket.active ? "green" : "red"} mt={2}>
        {rocket.active ? "Active" : "Inactive"}
      </Badge>
      <Text fontSize="md" mt={2}>
        {rocket.description}
      </Text>
      <VStack align="start" mt={2} spacing={1}>
        <HStack>
          <Text fontWeight="bold">Country:</Text>
          <Text fontSize="md">{rocket.country}</Text>
        </HStack>
        <HStack>
          <Text fontWeight="bold">Cost per Launch:</Text>
          <Text fontSize="md">${rocket.cost_per_launch}</Text>
        </HStack>
        <HStack>
          <Text fontWeight="bold">Diameter (meters):</Text>
          <Text fontSize="md">{rocket.diameter.meters}</Text>
        </HStack>
        <HStack>
          <Text fontWeight="bold">Engines:</Text>
          <Text fontSize="md">{rocket.engines.number}</Text>
        </HStack>
        <HStack>
          <Text fontWeight="bold">First Flight:</Text>
          <Text fontSize="md">{rocket.first_flight}</Text>
        </HStack>
        <HStack>
          <Text fontWeight="bold">Height (meters):</Text>
          <Text fontSize="md">{rocket.height.meters}</Text>
        </HStack>
      </VStack>
      <Spacer />
      {/* Add more information as needed */}
    </Box>
  );
}

export default RocketCard;
