import * as React from "react"
import { Container, Box } from "@chakra-ui/react"

interface IBodyCodeBlockProps {
  slice: {
    primary: {
      codeBlock: {
        html: string
      }
    }
  }
}

const BodyCodeBlock = ({ slice }: IBodyCodeBlockProps) => (
  <Container
    style={{
      fontSize: `1.25rem`,
      padding: 0,
    }}
  >
    <Box pos="relative" dangerouslySetInnerHTML={{ __html: slice.primary.codeBlock.html }} />
  </Container>
)

export { BodyCodeBlock }
