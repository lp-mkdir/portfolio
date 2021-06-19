import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, Box, Flex, Heading, Text } from "@chakra-ui/react"
import { Hero } from "../components/blocks/hero"
import { Layout } from "../components/Layout"
import { space } from "../constants/space"
import { SliceZone } from "../slices/slice-zone"
import { SEO } from "../components/seo"

type ProjectsProps = {
  data: any
}

const Projects = ({
  data: {
    Project: { nodes: projectPage },
  },
}: ProjectsProps) => {
  if (!projectPage) return null
  const project = projectPage[0].data
  return (
    <Layout>
      <SEO
        title={project.seoTitle}
        description={project.seoDescription}
        breadcrumbListItems={[
          { name: `Project`, url: project.uid },
          { name: project.title, url: project.uid },
        ]}
      />
      <Hero headline={project.projectName} subheading={`${project.date} | ${project.name}`} />
      <Container pt={space.paddingSmall}>
        <Box boxShadow="lg" p={20} borderRadius="1rem">
          <Flex flexDirection={[`column`, null, `row`]} alignItems="flex-start" justifyContent="space-between">
            <Box w={[`100%`, null, `calc(99.9% * 3 / 12 - 2rem)`]} position="relative">
              <GatsbyImage
                image={project.logo.localFile.childImageSharp.gatsbyImageData}
                alt={project.logo.alt || `Customer logo`}
                style={{ height: `6rem`, width: `6rem`, margin: `0 auto` }}
              />
            </Box>
            <Box w={[`100%`, null, null, `calc(99.9% * 4 / 12 - 2rem)`]} textAlign="center" py={[4, 0]}>
              <Heading variant="h4" mb={4}>
                Period
              </Heading>
              <Text variant="prominent">{project.period}</Text>
            </Box>
            <Box w={[`100%`, null, null, `calc(99.9% * 4 / 12 - 2rem)`]} textAlign="center">
              <Heading variant="h4" mb={4}>
                Task
              </Heading>
              <Text variant="prominent">{project.task}</Text>
            </Box>
          </Flex>
        </Box>
      </Container>
      <Container pt={space.paddingSmall}>
        <SliceZone slices={project.body} />
      </Container>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query ProjectQuery($uid: String) {
    Project: allPrismicProject(filter: { uid: { eq: $uid } }) {
      nodes {
        data {
          projectName: project_name
          name
          period
          task
          date(formatString: "MMMM DD, YYYY")
          projectImage: project_image {
            alt
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          logo {
            alt
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
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
                image {
                  alt
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
