import React from 'react';
import BodyText, { BodyTextSlice } from '~/slices/BodyText';
import BodyImage, { BodyImageSlice } from '~/slices/BodyImage';
import BodyCodeBlock, { BodyCodeBlockSlice } from '~/slices/BodyCodeBlock';
import BodyQuote, { BodyQuoteSlice } from '~/slices/BodyQuote';

export type BaseSlice = {
  id: string;
  sliceType: string;
};

export type PrismicSliceComponents =
  | BodyTextSlice
  | BodyImageSlice
  | BodyCodeBlockSlice
  | BodyQuoteSlice;

type ISliceZone = {
  slices: PrismicSliceComponents[];
};

export default function SliceZone({ slices }: ISliceZone) {
  const sliceComponents = {
    text: BodyText,
    image: BodyImage,
    codeblock: BodyCodeBlock,
    quote: BodyQuote,
  };

  return (
    <>
      {slices.map(slice => {
        const SliceComponent = sliceComponents[slice.sliceType];
        if (SliceComponent) {
          return <SliceComponent slice={slice} key={slice.id} />;
        }
        return null;
      })}
    </>
  );
}
