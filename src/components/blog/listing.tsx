import * as React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { Box, Flex, Text, Button } from "@chakra-ui/react"
import { Card, CardTitle } from "../card/index"

interface IListingPostProps {
  blogPost: {
    id: string
    uid: string
    tags: string[]
    data: {
      title: string
      postDate: string
      description: string
      tags: string[]
      blogImage: {
        fluid: any
        alt: string
      }
    }[]
  }[]
}

const ListingPost = ({ blogPost }: IListingPostProps) =>
  blogPost.map((post) => (
    <Box key={post.id}>
      <Link to={post.uid}>
        <Card alignItems="flex-start" h="100%">
          <Flex
            flexDir="column"
            h="200px"
            w="100%"
            pos="relative"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            {post.tags.map((tag) => (
              <Box p={4}>
                <Button size="xs" fontSize="xs" variant="tag">
                  {tag}
                </Button>
              </Box>
            ))}
            <Img
              fluid={post.data.blogImage.fluid}
              alt={post.data.blogImage.alt}
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
            <CardTitle>{post.data.title}</CardTitle>
          </Flex>
          <Flex flexDirection="column" py={4} px={6}>
            <Text color="brand.textMuted" fontSize="sm" pb={2}>
              {post.data.postDate}
            </Text>
            <Text variant="prominent">{post.data.description}</Text>
          </Flex>
        </Card>
      </Link>
    </Box>
  ))

export { ListingPost }
