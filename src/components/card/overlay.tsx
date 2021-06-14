import * as React from "react"
import { Box } from "@chakra-ui/react"

const CardOverlay: React.FC = () => (
  <Box
    pos="absolute"
    top="0"
    bottom="0"
    left="0"
    right="0"
    bgGradient="linear(to-t, primary.500, primary.600)"
    opacity="0.1"
  />
)

const CardTextOverlay: React.FC = () => (
  <Box
    zIndex="-1"
    pos="absolute"
    top="0"
    bottom="0"
    left="0"
    right="0"
    backgroundImage="linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, 
      rgba(0, 0, 0, 0) 30%)"
  />
)

const CardPrimaryOverlay: React.FC = () => (
  <Box
    zIndex="1"
    pos="absolute"
    top="0"
    bottom="0"
    left="0"
    right="0"
    bgGradient="linear(to-tr, primary.500, orange.400)"
    opacity="0"
    transition="0.3s all"
    _groupHover={{
      opacity: `0.7`,
    }}
  />
)

export { CardOverlay, CardTextOverlay, CardPrimaryOverlay }
