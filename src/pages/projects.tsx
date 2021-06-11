import React from "react"
import { graphql, Link } from "gatsby"
import { FullWidthContainer } from "../components/blocks/full-width-container"
import { Hero } from "../components/blocks/hero"
import { Layout } from "../components/Layout"
import { space } from "../constants/space"
import { Wrapper, Card, CardTitle, CardImage, CardTextOverlay } from "../components/card/index"

type ProjectsProps = {
  data: any
}

const Projects = ({
  data: {
    Projects: { nodes: projects },
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
        <Wrapper>
          {projects.map((pro) => (
            <Link to={pro.url} key={pro.id}>
              <Card h={[`10rem`, null, `15rem`, `20rem`]}>
                <CardImage image={pro.data.project_image} />
                <CardTitle>{pro.data.name} asd ads asd as</CardTitle>
                <CardTextOverlay />
              </Card>
            </Link>
            // <Card title={pro.node.data.name} image={pro.node.data.project_image} location={pro.node.url} />
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
      nodes {
        id
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
`
