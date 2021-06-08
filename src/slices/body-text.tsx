import * as React from "react"
import { RichText } from "prismic-reactjs"
import { Container } from "@chakra-ui/react"

interface IBodyTextProps {
  slice: any
}

const BodyText = ({ slice }: IBodyTextProps) => (
  <Container
    style={{
      fontSize: `1.25rem`,
      padding: 0,
    }}
  >
    <RichText render={slice.primary.text.raw} />
  </Container>
)

export { BodyText }
