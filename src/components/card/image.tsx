import * as React from "react"
// import { Image } from "@chakra-ui/react"
import Img from "gatsby-image"

interface ICardImageProps {
  image: string
}

const CardImage: React.FunctionComponent<ICardImageProps> = ({ image }) => (
  <Img
    fluid={image.fluid}
    alt={image.alt}
    style={{
      zIndex: `-1`,
      position: `absolute`,
      objectFit: `cover`,
      height: `100%`,
      width: `100%`,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }}
  />
)

export { CardImage }
