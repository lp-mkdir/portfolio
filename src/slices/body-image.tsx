import * as React from "react"
import { Box, Text } from "@chakra-ui/react"
import { GatsbyImage } from "gatsby-plugin-image"

interface IBodyImageProps {
  slice: {
    items: {
      imgDescription: string
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
    {slice.items.map((item) => (
      <Box my={8}>
        <Box
          display="inline-block"
          boxShadow="lg"
          borderRadius="1rem !important"
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
        <Text fontSize={[`md`, `lg`]} color="gray.500" fontWeight="normal" pt={4}>
          {item.imgDescription}
        </Text>
      </Box>
    ))}
  </Box>
)

export { BodyImage }
