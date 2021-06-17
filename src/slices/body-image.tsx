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
  <>
    {slice.items.map((item) => (
      <Box boxShadow="lg" borderRadius="1rem !important" my={16} sx={{ img: { borderRadius: `1rem !important` } }}>
        <GatsbyImage
          image={item.image.localFile.childImageSharp.gatsbyImageData}
          alt={item.image.alt}
          style={{ height: `100%`, width: `auto` }}
        />
      </Box>
    ))}
  </>
)

export { BodyImage }
