import { IGatsbyImageData } from "gatsby-plugin-image"

export interface IGatsbyImage {
  alt: string
  localFile: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}
