import * as React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { Box, Flex, Text, Button } from "@chakra-ui/react"
import { Card, CardTitle } from "../card/index"

interface IPostCardProps {
  title: string
  date: string
  desc: string
  tags: string[]
  path: string
  image: {
    fluid: any
    alt: string
  }
}

const PostCard = ({ title, desc, date, tags, image, path }: IPostCardProps) => (
  <Link to={path}>
    <Card alignItems="flex-start" h="100%">
      <Flex flexDir="column" h="200px" w="100%" pos="relative" justifyContent="space-between" alignItems="flex-start">
        {tags.map((tag) => (
          <Box p={4} key={tag}>
            <Button size="xs" fontSize="xs" variant="tag">
              {tag}
            </Button>
          </Box>
        ))}
        <Img
          fluid={image.fluid}
          alt={image.alt}
          style={{
            zIndex: `-1`,
            height: `100%`,
            width: `100%`,
            position: `absolute`,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
        <CardTitle>{title}</CardTitle>
      </Flex>
      <Flex flexDirection="column" py={4} px={6}>
        <Text color="brand.textMuted" fontSize="sm" pb={2}>
          {date}
        </Text>
        <Text variant="prominent">{desc}</Text>
      </Flex>
    </Card>
  </Link>
)

export { PostCard }
