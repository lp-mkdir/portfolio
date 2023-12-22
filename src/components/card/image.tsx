import * as React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

interface ICardImageProps {
  image: {
    alt: string;
    gatsbyImageData: IGatsbyImageData;
  }
}

const CardImage: React.FunctionComponent<ICardImageProps> = ({ image }) => (
  <GatsbyImage
    image={image.gatsbyImageData}
    alt={image.alt}
    style={{
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
