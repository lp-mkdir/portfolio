import { IGatsbyImageData } from "gatsby-plugin-image"

export interface IGatsbyImage {
  alt: string;
  gatsbyImageData: IGatsbyImageData;
}
