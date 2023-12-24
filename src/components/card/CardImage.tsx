import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { IGatsbyImage } from '~/types/gatsbyImage';

interface ICardImage {
  image: IGatsbyImage;
}

export default function CardImage({ image }: ICardImage) {
  return (
    <GatsbyImage
      image={image.gatsbyImageData}
      alt={image.alt}
      style={{
        position: `absolute`,
        objectFit: `cover`,
        height: `100%`,
        width: `100%`,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    />
  );
}
