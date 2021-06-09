import * as React from "react"
import { RichText } from "prismic-reactjs"
import { Container, Box } from "@chakra-ui/react"
import Prism from "prismjs"
// import "../prism.css"

interface IBodyCodeBlockProps {
  slice: {
    primary: {
      codeBlock: {
        raw: any
      }
    }
  }
}

const BodyCodeBlock = ({ slice }: IBodyCodeBlockProps) => {
  React.useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  }, [])
  return (
    <Container
      style={{
        fontSize: `1.25rem`,
        padding: 0,
      }}
    >
      <Box pos="relative" dangerouslySetInnerHTML={{ __html: slice.primary.codeBlock.html }} />
    </Container>
  )
}

export { BodyCodeBlock }
