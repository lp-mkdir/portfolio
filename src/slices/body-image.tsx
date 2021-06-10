import * as React from "react"
import { Box } from "@chakra-ui/react"
import Img from "gatsby-image"

interface IBodyImageProps {
  slice: {
    items: {
      image: {
        fluid: any
        alt: string
      }
    }[]
  }
}

const BodyImage = ({ slice }: IBodyImageProps) => (
  <>
    {slice.items.map((item) => (
      <Box boxShadow="lg" borderRadius="1rem !important" my={16} sx={{ img: { borderRadius: `1rem !important` } }}>
        <Img fluid={item.image.fluid} alt={item.image.alt} style={{ height: `100%`, width: `auto` }} />
      </Box>
    ))}
  </>
)

export { BodyImage }
