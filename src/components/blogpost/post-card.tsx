import * as React from "react"
import { Box, Image } from "@chakra-ui/react"
import { Card, CardImage } from "../card/index"

interface IPostCardProps {
  title: string
  date: string
  image: string
  tags: string
  path: string
}

const PostCard = ({ title, date, tags, image, path }: IPostCardProps) => (
  <Card path={path}>
    <Image
      src={`${image}?w=400`}
      srcset={`${image}?w=400&dpr=1 1x,
    ${image}?w=400&fit=max&q=40&dpr=2 2x,
    ${image}?w=400&fit=max&q=20&dpr=3 3x`}
      h="100%"
      w="100%"
    />
    {title}
  </Card>
)

export { PostCard }
