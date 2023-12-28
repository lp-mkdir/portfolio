import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { CardTitle } from '~/components/card/index';
import MotionBox from '~/components/blocks/MotionBox';
import { IGatsbyImage } from '~/types/gatsbyImage';

interface IPostCardProps {
  title: string;
  date: string;
  desc: string;
  tags: string[];
  location: string;
  image: IGatsbyImage;
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
            imgStyle={{
              borderRadius: '1rem 1rem 0 0',
            }}
            style={{
              height: `100%`,
              width: `100%`,
              position: `absolute`,
              top: 0,
              bottom: 0,
            }}
          />
          <Flex p={4}>
            {tags.map(tag => (
              <Box key={tag} zIndex="1">
                <Button size="xs" fontSize="xs" variant="tag">
                  {tag}
                </Button>
              </Box>
            ))}
          </Flex>
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

export default PostCard;
