import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Box, Flex, Heading, Stack, HStack, Image, Text, Button } from "@chakra-ui/react"
import { Hero } from "../components/blocks/hero"
import { Layout } from "../components/Layout"
import { space } from "../constants/space"

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
      <Hero headline={project.project_name} subheading={`${project.date} | ${project.name}`} />
      <Container pt={space.paddingSmall}>
        <Box boxShadow="lg" p={20} borderRadius="1rem">
          <Flex flexDirection={[`column`, null, `row`]} alignItems="flex-start" justifyContent="space-between">
            <Box w={[`100%`, null, `calc(99.9% * 3 / 12 - 2rem)`]}>
              <Img
                fluid={project.logo.fluid}
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
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query ProjectQuery($uid: String) {
    Project: allPrismicProject(filter: { uid: { eq: $uid } }) {
      nodes {
        data {
          project_name
          name
          date(formatString: "MMMM DD, YYYY")
          project_image {
            alt
            fluid {
              ...GatsbyPrismicImageFluid
            }
          }
          logo {
            fluid {
              ...GatsbyPrismicImageFluid
            }
          }
          period
          task
        }
      }
    }
  }
`
