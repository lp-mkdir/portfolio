import React from "react"
import { RichText, RichTextBlock } from "prismic-reactjs"
import { Container } from "@chakra-ui/react"
import GatsbyLink from "~/utils/gatsbyLink"

interface IBodyTextProps {
  slice: {
    primary: {
      text: {
        raw: RichTextBlock[];
      }
    }
  }
}

const BodyText = ({ slice }: IBodyTextProps) => (
  <Container
    style={{
      fontSize: `1.25rem`,
      padding: 0,
    }}
  >
    <RichText render={slice.primary.text.raw} serializeHyperlink={GatsbyLink} />
  </Container>
)

export default BodyText;
