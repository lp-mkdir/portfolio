import * as React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { Card, CardTitle } from '../card/index';
import { MotionBox } from '../blocks/motion-box';

interface IPostCardProps {
  title: string;
  date: string;
  desc: string;
  tags: string[];
  location: string;
  image: {
    alt: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const PostCard = ({
  title,
  desc,
  date,
  tags,
  image,
  location,
}: IPostCardProps) => (
  <Link to={location}>
    <MotionBox borderRadius="2xl">
      <Flex flexDir="column" height="100%">
        <Flex
          flexDir="column"
          pos="relative"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <GatsbyImage
            image={image.gatsbyImageData}
            alt={image.alt}
            style={{
              height: `100%`,
              width: `100%`,
              position: `absolute`,
              top: 0,
              bottom: 0,
            }}
          />
          {tags.map(tag => (
            <Box p={4} key={tag} zIndex="1">
              <Button size="xs" fontSize="xs" variant="tag">
                {tag}
              </Button>
            </Box>
          ))}
          <CardTitle>{title}</CardTitle>
        </Flex>
        <Flex flexDirection="column" py={4} px={6}>
          <Text color="brand.textMuted" fontSize="sm" pb={2}>
            {date}
          </Text>
          <Text variant="prominent">{desc}</Text>
        </Flex>
      </Flex>
    </MotionBox>
  </Link>
);

export { PostCard };
