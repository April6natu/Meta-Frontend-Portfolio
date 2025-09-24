import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";


const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      backgroundColor="#1a202c"
      borderRadius="lg"
      boxShadow="lg"
      spacing={4}
      align="start"
      p={4}
      width="100%"
    >
      <Image
        src={imageSrc}
        alt={title}
        borderRadius="md"
        objectFit="cover"
        width="100%"
        height="180px"
      />
      <Heading size="md" color="white">
        {title}
      </Heading>
      <Text color="gray.200">{description}</Text>
      <HStack pt={2}>
        <Text color="teal.300" fontWeight="bold">Learn More</Text>
        <FontAwesomeIcon icon={faArrowRight} color="#38b2ac" />
      </HStack>
    </VStack>
  );
};

export default Card;
