import React from 'react';
import { Text, VStack, Heading } from '@chakra-ui/react';

import { Wave } from '~/elements/Wave';
import FullWidthContainer from '~/components/blocks/FullWidthContainer';
import { space } from '~/constants/space';

interface IHero {
  headline: string;
  subheading: string;
}

export const Hero = ({ headline, subheading }: IHero) => (
  <FullWidthContainer variant="hero" pos="relative" py={space.paddingLarge}>
    <VStack alignItems="center" pt={4} pb={14}>
      <Heading
        as="h1"
        variant="h1"
        color="white"
        lineHeight="125%"
        textShadow="textShadows.big"
      >
        {headline}
      </Heading>
      <Text
        fontSize={[`lg`, null, null, `xl`]}
        color="brand.onPrimaryBg"
        textAlign="center"
      >
        {subheading}
      </Text>
    </VStack>
    <Wave />
  </FullWidthContainer>
);
