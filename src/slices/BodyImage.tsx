import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { IGatsbyImage } from '~/types/gatsbyImage';
import { BaseSlice } from '~/slices/SliceZone';

export type BodyImageSlice = BaseSlice & {
  id: string;
  sliceType: string;
  items: {
    image: IGatsbyImage;
    imgDescription: string;
  }[];
};

type IBodyImageProps = {
  slice: BodyImageSlice;
};

export default function BodyImage({ slice }: IBodyImageProps) {
  return (
    <Box textAlign="center">
      {slice.items.map(item => (
        <Box my={8}>
          <Box
            display="inline-block"
            boxShadow="lg"
            borderRadius="1rem !important"
            sx={{
              img: {
                borderRadius: `1rem !important`,
              },
            }}
          >
            <GatsbyImage
              image={item.image.gatsbyImageData}
              alt={item.image.alt}
              style={{ height: `100%`, width: `auto` }}
            />
          </Box>
          {item.imgDescription && (
            <Text
              fontSize={[`md`, `lg`]}
              color="gray.500"
              fontWeight="normal"
              pt={4}
            >
              {item.imgDescription}
            </Text>
          )}
        </Box>
      ))}
    </Box>
  );
}
