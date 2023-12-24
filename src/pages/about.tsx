import React from 'react';
import { graphql } from 'gatsby';
import { RichTextBlock } from 'prismic-reactjs';
import { Container, Heading } from '@chakra-ui/react';
import { Layout } from '~/components/Layout';
import { SliceZone } from '~/slices/slice-zone';
import SEO from '~/components/seo';

interface AboutPageData {
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

export default function About({
  data: {
    prismicAbout: { data },
  },
}: AboutPageData) {
  if (!data) return null;

  const { title, body } = data;

  return (
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
          {title}
        </Heading>
        <SliceZone slices={body} />
      </Container>
    </Layout>
  );
}

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
