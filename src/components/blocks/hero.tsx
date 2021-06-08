import * as React from "react"
import Img from "gatsby-image"
import { Text, VStack, Box, Heading, Icon } from "@chakra-ui/react"
import { GoChevronRight } from "react-icons/go"
import { Link } from "../link"
import { Wave } from "../../elements/Wave"
import { FullWidthContainer } from "./full-width-container"
import { space } from "../../constants/space"

interface IHero {
  headline: string
  subheading: string
}

export const Hero = ({ headline, subheading }: IHero) => (
  <FullWidthContainer variant="hero" pos="relative" py={space.paddingLarge}>
    <VStack alignItems="center" pb="96px">
      <Heading as="h1" variant="h1" color="white" lineHeight="125%" textShadow="textShadows.big">
        {headline}
      </Heading>
      <Text fontSize={[`lg`, null, null, `xl`]} color="brand.onPrimaryBg">
        {subheading}
      </Text>
    </VStack>
    <Wave />
  </FullWidthContainer>
)
