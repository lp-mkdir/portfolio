import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

interface ICardImageProps {
  image: {
    alt: string
    localFile: {
      childImageSharp: {
        gatsbyImageData: any
      }
    }
  }
}

const CardImage: React.FunctionComponent<ICardImageProps> = ({ image }) => (
  <GatsbyImage
    image={image.localFile.childImageSharp.gatsbyImageData}
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
