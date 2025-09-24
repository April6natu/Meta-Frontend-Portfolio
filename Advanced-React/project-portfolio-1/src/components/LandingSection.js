import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Israel!";
const bio1 = "A Frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={6}>
      <img
        src="/Passport-photo.jpg"
        alt="Passport"
        style={{ width: 140, height: 140, objectFit: "cover" }}
      />
      <Heading size="lg" color="white">{greeting}</Heading>
      <Heading size="md" color="white">{bio1}</Heading>
      <Heading size="md" color="white">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
