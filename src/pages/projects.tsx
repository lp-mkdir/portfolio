import React from "react"
import { graphql } from "gatsby"
import { Container, Box, Heading, Stack, HStack, Image, Text, Button } from "@chakra-ui/react"
import { FullWidthContainer } from "../components/blocks/full-width-container"
import { Hero } from "../components/blocks/hero"
import { Layout } from "../components/Layout"
import { space } from "../constants/space"
import { Wrapper, TopNav, Card } from "../components/card"

type ProjectsProps = {
  data: any
}

const Projects = ({
  data: {
    Projects: { edges: projects },
  },
}: ProjectsProps) => {
  if (!projects) return null
  return (
    <Layout>
      <Hero
        headline="Projects"
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac elementum scelerisque dui mattis nulla."
      />
      <FullWidthContainer variant="max" pt={space.paddingSmall}>
        <Wrapper gap="48px">
          {projects.map((pro) => (
            <Card title={pro.node.data.name} image={pro.node.data.project_image} location={pro.node.url} />
          ))}
        </Wrapper>
      </FullWidthContainer>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query Projects {
    Projects: allPrismicProject {
      edges {
        node {
          url
          data {
            name
            project_image {
              alt
              fluid {
                ...GatsbyPrismicImageFluid
              }
            }
          }
        }
      }
    }
  }
`
