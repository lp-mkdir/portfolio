import * as React from "react"
import { RichText } from "prismic-reactjs"
import { Container } from "@chakra-ui/react"

interface IBodyCodeBlockProps {
  slice: any
}

const BodyCodeBlock = ({ slice }: IBodyCodeBlockProps) => (
  <Container
    style={{
      fontSize: `1.25rem`,
      padding: 0,
    }}
  >
    <RichText render={slice.primary.text.raw} />
  </Container>
)

export { BodyCodeBlock }
