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
  <Box textAlign="center" py={4}>
    {slice.items.map((item) => (
      <Box
        display="inline-block"
        boxShadow="lg"
        borderRadius="1rem !important"
        my={6}
        sx={{
          img: {
            borderRadius: `1rem !important`,
          },
        }}
      >
        <GatsbyImage
          // Hey Luis, find out other way to have a Key prop
          key={item.image.alt}
          image={item.image.localFile.childImageSharp.gatsbyImageData}
          alt={item.image.alt}
          style={{ height: `100%`, width: `auto` }}
        />
      </Box>
    ))}
  </Box>
)

export { BodyImage }
