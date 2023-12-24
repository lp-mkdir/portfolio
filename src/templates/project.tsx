import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  Container,
  VStack,
  Box,
  Flex,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';
import { Hero } from '~/components/blocks/Hero';
import { Layout } from '~/components/Layout';
import { space } from '~/constants/space';
import SliceZone from '~/slices/SliceZone';
import SEO from '~/components/seo';
import { IGatsbyImage } from '~/types/gatsbyImage';

type ProjectsProps = {
  data: {
    Project: {
      data: {
        logo: IGatsbyImage;
        projectName: string;
        name: string;
        date: string;
        task: string;
        period: string;
        websiteLink: {
          url: string;
        };
        body: any;
      };
    };
  };
};

const Projects = ({ data: { Project: project } }: ProjectsProps) => {
  if (!project) return null;
  return (
    <Layout>
      <SEO seoData={project} />
      <Hero
        headline={project.data.projectName}
        subheading={`${project.data.date} | ${project.data.name}`}
      />
      <Container pt={space.paddingSmall}>
        <Box boxShadow="lg" p={20} borderRadius="1rem">
          <Flex
            flexDirection={[`column`, null, `row`]}
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <VStack
              w={[`100%`, null, `calc(99.9% * 3 / 12 - 2rem)`]}
              position="relative"
              textAlign="center"
            >
              <GatsbyImage
                image={project.data.logo.gatsbyImageData}
                alt={project.data.logo.alt || `Customer logo`}
                style={{ height: `6rem`, width: `6rem`, marginBottom: `1rem` }}
              />
              <Link
                color="blue.500"
                href={project.data.websiteLink.url}
                target="_blank"
                fontSize="lg"
              >
                {project.data.websiteLink.url}
              </Link>
            </VStack>
            <Box
              w={[`100%`, null, null, `calc(99.9% * 4 / 12 - 2rem)`]}
              textAlign="center"
              py={[4, 0]}
            >
              <Heading variant="h3" mb={4}>
                Period
              </Heading>
              <Text variant="prominent" fontSize="lg">
                {project.data.period}
              </Text>
            </Box>
            <Box
              w={[`100%`, null, null, `calc(99.9% * 4 / 12 - 2rem)`]}
              textAlign="center"
            >
              <Heading variant="h3" mb={4}>
                Task
              </Heading>
              <Text variant="prominent" fontSize="lg">
                {project.data.task}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Container>
      <Container pt={space.paddingSmall}>
        <SliceZone slices={project.data.body} />
      </Container>
    </Layout>
  );
};

export default Projects;

export const query = graphql`
  query ProjectQuery($uid: String) {
    Project: prismicProject(uid: { eq: $uid }) {
      url
      data {
        projectName: project_name
        name
        period
        task
        date(formatString: "MMMM DD, YYYY")
        projectImage: project_image {
          alt
          gatsbyImageData(
            imgixParams: { q: 90 }
            placeholder: BLURRED
            width: 600
          )
        }
        logo {
          alt
          gatsbyImageData(placeholder: BLURRED)
        }
        websiteLink: website_link {
          url
        }
        seoTitle: seo_title
        seoDescription: seo_desc
        body {
          ... on PrismicProjectDataBodyText {
            id
            sliceType: slice_type
            primary {
              text {
                raw
              }
            }
          }
          ... on PrismicProjectDataBodyImage {
            id
            sliceType: slice_type
            items {
              imgDescription: image_description
              image {
                alt
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`;
