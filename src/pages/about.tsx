import React from 'react';
import { graphql } from 'gatsby';
import { RichTextBlock } from 'prismic-reactjs';
import { Container, Heading } from '@chakra-ui/react';
import { Layout } from '~/components/Layout';
import { SliceZone } from '~/slices/slice-zone';
import SEO from '~/components/seo';

interface IAboutProps {
  data: {
    prismicAbout: {
      data: {
        title: string;
        body: {
          id: string;
          sliceType: string;
          primary: {
            text: {
              raw: RichTextBlock[];
            };
          };
        };
      };
    };
  };
}

const About = ({ data: { prismicAbout } }: IAboutProps) => (
  <Layout navBlack>
    <SEO
      seoData={{
        data: {
          seoTitle: `About Luis Pacheco`,
          seoDescription: `All about Luis Pacheco`,
        },
        url: `/about`,
      }}
    />
    <Container variant="article" pt={[24, null, 40]}>
      <Heading as="h1" variant="h1" pb={4}>
        {prismicAbout.data.title}
      </Heading>
      <SliceZone slices={prismicAbout.data.body} />
    </Container>
  </Layout>
);

export const query = graphql`
  query AboutQuery {
    prismicAbout {
      uid
      type
      data {
        title
        body {
          ... on PrismicAboutDataBodyText {
            id
            sliceType: slice_type
            primary {
              text {
                raw
              }
            }
          }
          ... on PrismicAboutDataBodyImage {
            id
            sliceType: slice_type
            items {
              image {
                alt
                gatsbyImageData(imgixParams: { q: 80 }, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`;

export default About;
