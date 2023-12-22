import React from "react"
import { Flex, Text, VStack, HStack, Icon, Heading, Button } from "@chakra-ui/react"
import { FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa"
import { Wave } from "~/elements/Wave"
import Link from "~/components/Link"
import { FullWidthContainer } from "~/components/blocks/full-width-container"
import { space } from "~/constants/space"

const Footer = () => (
  <FullWidthContainer variant="footer" pos="relative">
    <Flex
      flexDirection={[`column`, `row`]}
      alignItems="flex-start"
      justifyContent="space-between"
      pt={space.paddingSmall}
      pb="5rem"
      gap={8}
    >
      <HStack spacing={4} pb={[`2rem`, 0]}>
        <a href="https://github.com/luiskunz" target="_blank" rel="noopener noreferrer">
          <Icon as={FaGithub} w={8} h={8} color="brand.onPrimaryBg" _hover={{ color: `primary.500` }} />
        </a>
        <a href="https://www.linkedin.com/in/luis-eduardo-kunz/" target="_blank" rel="noopener noreferrer">
          <Icon as={FaLinkedin} w={8} h={8} color="brand.onPrimaryBg" _hover={{ color: `primary.500` }} />
        </a>
      </HStack>
      <VStack alignItems="flex-start">
        <Heading variant="h4" fontWeight="bold" color="white" textShadow="textShadows.small">
          Reach me
        </Heading>
        <Text color="brand.onPrimaryBg" lineHeight="160%">
          Switzerland,
          <br /> Canton Zürich
        </Text>
        <Button
          as="a"
          variant="tag"
          padding="1.25rem 1.25rem"
          color="primary.800"
          leftIcon={<Icon as={FaPaperPlane} color="primary.800" />}
          href="mailto:hello@luiskunz.com"
        >
          EMAIL
        </Button>
      </VStack>
    </Flex>
    <HStack
      flexDir={[`column-reverse`, `row`]}
      textAlign="center"
      alignItems={[`center`, null, null, `flex-start`]}
      justifyContent="flex-start"
      color="brand.onPrimaryBg"
      spacing={[0, null, null, 12]}
      pb={4}
    >
      <div>&copy; {new Date().getFullYear()} by Luis Kunz. All rights reserved.</div>
      <HStack spacing={8} pb={[4, null, 0]}>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/sitemap/sitemap-0.xml">Sitemap</Link>
      </HStack>
    </HStack>
    <Wave flip />
  </FullWidthContainer>
)

export default Footer;
