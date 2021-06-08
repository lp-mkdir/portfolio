import * as React from "react"
import Img from "gatsby-image"
import { Flex, Box, Text, Heading, Grid, Badge, Button } from "@chakra-ui/react"
import { Link } from "gatsby"
import { MotionBox } from "./blocks/motion-box"

interface ICardProps {
  title: string
  image: any
  location?: string
}

interface ITopNav {
  badge: string
  button: string
}

interface IWrapperProps {
  children: React.ReactNode
  // [x: string]: any
}

const Wrapper = ({ children, ...props }: IWrapperProps) => (
  <Grid gridTemplateColumns="repeat(auto-fit, minmax(400px, 1fr))" gap="20px" pb="12" {...props}>
    {children}
  </Grid>
)

const TopNav = ({ badge, button }: ITopNav) => (
  <Flex alignItems="center" justifyContent="space-between" mb="4">
    <Badge>{badge}</Badge>
    <Button variant="ghost" colorScheme="orange">
      {button}
    </Button>
  </Flex>
)

const Overlay = () => (
  <Box
    pos="absolute"
    top="0"
    bottom="0"
    left="0"
    right="0"
    bgGradient="linear(to-t, primaryAlpha, primaryDarkAlpha)"
    zIndex="2"
  >
    <Text>Description</Text>
  </Box>
)

const Card = ({ title, image, location = `#` }: ICardProps) => (
  <Link to={location}>
    <MotionBox
      display="flex"
      borderRadius="1rem"
      w="100%"
      h={[`15rem`, null, null, `20rem`]}
      pos="relative"
      boxShadow="lg"
      p="1rem"
      alignItems="flex-end"
      overflow="hidden"
      _after={{
        content: `""`,
        position: `absolute`,
        display: `block`,
        width: `100%`,
        height: `100%`,
        top: `0`,
        left: `0`,
        right: `0`,
        bottom: `0`,
        background: `linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0) 30%
    )`,
      }}
    >
      <Box borderRadius="1rem" pos="absolute" w="100%" h="100%" top="0" bottom="0" left="0" right="0">
        <Img fluid={image.fluid} alt={image.alt || `Customer image`} imgStyle={{ objectFit: `cover` }} />
      </Box>
      <Heading as="h4" variant="h4" color="white" mb="0" zIndex="1">
        {title}
      </Heading>
    </MotionBox>
  </Link>
)

export { Wrapper, TopNav, Card, Overlay }
