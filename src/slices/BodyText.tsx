import React from 'react';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import { Container } from '@chakra-ui/react';
import GatsbyLink from '~/utils/gatsbyLink';
import { BaseSlice } from '~/slices/SliceZone';

export type BodyTextSlice = BaseSlice & {
  primary: {
    text: {
      raw: RichTextBlock[];
    };
  };
};

interface IBodyTextProps {
  slice: BodyTextSlice;
}

export default function BodyText({ slice }: IBodyTextProps) {
  return (
    <Container
      style={{
        fontSize: `1.25rem`,
        padding: 0,
      }}
    >
      <RichText
        render={slice.primary.text.raw}
        serializeHyperlink={GatsbyLink}
      />
    </Container>
  );
}
