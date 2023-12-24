import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import { RichTextBlock } from 'prismic-reactjs';
import { BaseSlice } from '~/slices/SliceZone';

export type BodyCodeBlockSlice = BaseSlice & {
  id: string;
  sliceType: string;
  primary: {
    codeBlock: {
      raw: RichTextBlock[];
      html: string;
    };
  };
};

interface IBodyCodeBlock {
  slice: BodyCodeBlockSlice;
}

export default function BodyCodeBlock({ slice }: IBodyCodeBlock) {
  return (
    <Container
      style={{
        fontSize: `1.25rem`,
        padding: 0,
      }}
    >
      <Box
        pos="relative"
        dangerouslySetInnerHTML={{ __html: slice.primary.codeBlock.html }}
      />
    </Container>
  );
}
