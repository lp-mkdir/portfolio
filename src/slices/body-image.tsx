import * as React from "react"
import { Box } from "@chakra-ui/react"
import { GatsbyImage } from "gatsby-plugin-image"

interface IBodyImageProps {
  slice: {
    items: {
      image: {
        alt: string
        localFile: {
          childImageSharp: {
            gatsbyImageData: any
          }
        }
      }
    }[]
  }
}

const BodyImage = ({ slice }: IBodyImageProps) => (
  <Box textAlign="center">
    <Box
      display="inline-block"
      boxShadow="lg"
      borderRadius="1rem !important"
      my={12}
      sx={{
        img: {
          borderRadius: `1rem !important`,
        },
      }}
    >
      {slice.items.map((item) => (
        <GatsbyImage
          image={item.image.localFile.childImageSharp.gatsbyImageData}
          alt={item.image.alt}
          style={{ height: `100%`, width: `auto` }}
        />
      ))}
    </Box>
  </Box>
)

export { BodyImage }
