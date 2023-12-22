import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Box, Flex, Text, Button } from "@chakra-ui/react"
import { Card, CardTitle } from "../card/index"

interface IPostCardProps {
  title: string
  date: string
  desc: string
  tags: string[]
  location: string
  image: {
    alt: string
    localFile: {
      childImageSharp: {
        gatsbyImageData: any
      }
    }
  }
}

const PostCard = ({ title, desc, date, tags, image, location }: IPostCardProps) => (
  <Link to={location}>
    <Card alignItems="flex-start" h="100%">
      <Flex flexDir="column" h="200px" w="100%" pos="relative" justifyContent="space-between" alignItems="flex-start">
        {tags.map((tag) => (
          <Box p={4} key={tag} zIndex="1">
            <Button size="xs" fontSize="xs" variant="tag">
              {tag}
            </Button>
          </Box>
        ))}
        <GatsbyImage
          image={image.localFile?.childImageSharp.gatsbyImageData}
          alt={image.alt}
          style={{
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
