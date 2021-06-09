import * as React from "react"
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
      <Img fluid={item.image.fluid} alt={item.image.alt} />
    ))}
  </>
)

export { BodyImage }
