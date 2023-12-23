import React from 'react';
import { graphql, Link } from 'gatsby';
import { FullWidthContainer } from '~/components/blocks/full-width-container';
import { Hero } from '~/components/blocks/hero';
import { Layout } from '~/components/Layout';
import { space } from '~/constants/space';
import {
  Wrapper,
  Card,
  CardTitle,
  CardImage,
  CardTextOverlay,
} from '~/components/card/index';
import SEO from '~/components/seo';
import { IGatsbyImage } from '~/types/gatsbyImage';

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

const Projects = ({
  data: {
    Projects: { nodes: projects },
  },
}: ProjectsProps) => {
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
        headline="Projects"
        subheading="Gain an insight into the portfolios of previous people I worked for on this page. No idea remains unrealized, and thus no wish remains unfulfilled."
      />
      <FullWidthContainer variant="max" pt={space.paddingSmall}>
        <Wrapper>
          {projects.map(pro => (
            <Link to={pro.url} key={pro.id}>
              <Card h={[`10rem`, null, `15rem`, `20rem`]}>
                <CardImage image={pro.data.projectImage} />
                <CardTitle>{pro.data.name}</CardTitle>
                <CardTextOverlay />
              </Card>
            </Link>
          ))}
        </Wrapper>
      </FullWidthContainer>
    </Layout>
  );
};

export default Projects;

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
