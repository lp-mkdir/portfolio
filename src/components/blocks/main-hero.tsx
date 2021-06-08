import * as React from "react"
import Img from "gatsby-image"
import { Stack, HStack, VStack, Box, Heading, Button, ButtonGroup, Image, Icon } from "@chakra-ui/react"
import { GoChevronRight } from "react-icons/go"
import { Link } from "../link"
import { Wave } from "../../elements/Wave"

interface IMainHero {
  headline: string
  primaryBtn: string
  secondaryBtn: string
  img: any
}

export const MainHero = ({ headline, primaryBtn, secondaryBtn, img }: IMainHero) => (
  <Box
    height="100%"
    w="100%"
    bgGradient="linear(to-tl, primary.900, primary.800)"
    pos="relative"
    pb={[`10rem`, null, null, `6rem`]}
  >
    <Box maxWidth="1440px" m="0 auto" p="0 1rem">
      <Stack direction={[`column-reverse`, null, null, `row`]} spacing="2rem" pt="calc(72px)" alignItems="center">
        <Box w={[`100%`, null, null, `calc(99.9% * 1 / 0.8)`]} position="relative">
          {/* 1 column */}
          <VStack>
            <HStack alignItems="flex-start" alignContent="baseline">
              <Icon as={GoChevronRight} height={[6, 8, 12]} width={[6, 8, 12]} color="secondary.600" mt="2" />
              <VStack alignItems="flex-start">
                <Heading as="h1" variant="h1" color="white" lineHeight="125%" margin="0 !important">
                  {headline}
                </Heading>
                <ButtonGroup pt="6">
                  <Button variant="hero">{primaryBtn}</Button>
                  <Button variant="heroOutline">{secondaryBtn}</Button>
                </ButtonGroup>
              </VStack>
            </HStack>
          </VStack>
        </Box>
        <Box w="calc(99.9% * 1 / 1)" height={[`auto`, null, null, `50rem`]}>
          <Box w={[`30rem`, null, null, `50rem`]} m="0 auto" pos={[`static`, null, null, `absolute`]}>
            <Img fluid={img.fluid} alt="Luis Kunz" />
          </Box>
        </Box>
      </Stack>
    </Box>
    <Wave />
  </Box>
)
