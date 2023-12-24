import React from 'react';
import { graphql, Link } from 'gatsby';
import { Grid } from '@chakra-ui/react';

import FullWidthContainer from '~/components/blocks/FullWidthContainer';
import { Hero } from '~/components/blocks/Hero';
import { Layout } from '~/components/Layout';
import { space } from '~/constants/space';
import {
  Card,
  CardTitle,
  CardImage,
  CardTextOverlay,
} from '~/components/card/index';
import SEO from '~/components/seo';
import { type IGatsbyImage } from '~/types/gatsbyImage';

type ProjectsProps = {
  data: {
    Projects: {
      nodes: {
        id: string;
        url: string;
        data: {
          name: string;
          projectImage: IGatsbyImage;
        };
      }[];
    };
  };
};

export default function Projects({
  data: {
    Projects: { nodes: projects },
  },
}: ProjectsProps) {
  if (!projects) return null;
  return (
    <Layout>
      <SEO
        seoData={{
          data: {
            seoTitle: `Projects | Luis Pacheco`,
            seoDescription: `Gain an insight into the portfolios of previous people I worked for on this page. No idea remains unrealized, and thus no wish remains unfulfilled.`,
          },
          url: `/projects`,
        }}
      />
      <Hero
        headline="Creations & Contributions"
        subheading="Explore my collaborative projects and corporate roles, highlighting a journey of transforming innovative ideas into tangible realities for clients and companies alike."
      />
      <FullWidthContainer variant="max" pt={space.paddingSmall}>
        <Grid
          templateColumns={[
            '100%',
            null,
            null,
            'repeat(2, minmax(250px, 1fr))',
          ]}
          gap={8}
        >
          {projects.map(pro => (
            <Link to={pro.url} key={pro.id}>
              <Card h={[`10rem`, null, `15rem`, `20rem`]}>
                <CardImage image={pro.data.projectImage} />
                <CardTitle>{pro.data.name}</CardTitle>
                <CardTextOverlay />
              </Card>
            </Link>
          ))}
        </Grid>
      </FullWidthContainer>
    </Layout>
  );
}

export const query = graphql`
  query Projects {
    Projects: allPrismicProject {
      nodes {
        id
        url
        data {
          name
          projectImage: project_image {
            alt
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
