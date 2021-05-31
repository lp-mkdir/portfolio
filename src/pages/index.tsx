import React from "react"
import { Heading, Text, Stack, Link as ChakraLink } from "@chakra-ui/react"
import { FullWidthContainer } from "../components/blocks/full-width-container"
import { Layout } from "../components/Layout"
import { space } from "../constants/space"

const Index: React.FC = () => (
  <Layout>
    <FullWidthContainer variant="hero">
      <Stack align="center" spacing="5" py={space.paddingLarge}>
        <Heading as="h2">Gatsby Chakra Starter</Heading>
        <Text variant="prominent" maxWidth="45ch" textAlign="center">
          This starter include all the essentials for you new project. <br />
          I’m passionate about working on open source products & building thriving communities around them.
        </Text>
        <Text variant="prominent" maxWidth="40ch" textAlign="center">
          Check out my{` `}
          <ChakraLink textColor="blue.500" href="https://www.luiskunz.com">
            Portfolio
          </ChakraLink>
        </Text>
        <Text variant="prominent" maxWidth="40ch" textAlign="center">
          Inspired by{` `}
          <ChakraLink textColor="blue.500" href="https://www.lekoarts.de">
            LekoArts
          </ChakraLink>
        </Text>
      </Stack>
    </FullWidthContainer>
  </Layout>
)

export default Index
