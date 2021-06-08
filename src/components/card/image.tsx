import * as React from "react"
import { Image } from "@chakra-ui/react"

interface ICardImageProps {
  image: string
}

const CardImage: React.FunctionComponent<ICardImageProps> = ({ image }) => (
  <>
    <Image src={image} pos="absolute" objectFit="cover" h="100%" w="100%" top="0" bottom="0" left="0" right="0" />
  </>
)

export { CardImage }
