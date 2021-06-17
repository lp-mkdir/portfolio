import * as React from "react"
import { graphql } from "gatsby"
import { HStack, Text, Box } from "@chakra-ui/react"

interface IBodyQuoteProps {
  slice: {
    primary: {
      quoteMessage: string
      author: string
    }
  }
}

const BodyQuote = ({ slice }: IBodyQuoteProps) => (
  <HStack py={16}>
    <Box borderLeft="0.5rem solid" borderColor="primary.400" pt={4} pl={8}>
      <Text variant="prominent" color="black">
        {slice.primary.quoteMessage}
      </Text>
      <Text fontSize="lg" textAlign="right" color="brand.textMuted" pt={4} textTransform="uppercase">
        - {slice.primary.author}
      </Text>
    </Box>
  </HStack>
)

export { BodyQuote }

export const query = graphql`
  fragment BodyQuoteInfo on PrismicBlogPost {
    data {
      body {
        ... on PrismicBlogPostDataBodyQuote {
          id
          slice_type
          primary {
            quoteMessage: quote_message
            author
          }
        }
      }
    }
  }
`
