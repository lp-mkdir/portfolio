import * as React from "react"
import { graphql } from "gatsby"
import { Container, Heading } from "@chakra-ui/react"
import { Layout } from "../components/Layout"
import { SliceZone } from "../slices/slice-zone"
import { space } from "../constants/space"

interface IAboutProps {}

const About = ({ data: { prismicAbout } }: IAboutProps) => (
  <Layout navBlack>
    <Container py={space.paddingSmall}>
      <Heading as="h1" variant="h1" pb={4}>
        {prismicAbout.data.title}
      </Heading>
      <SliceZone slices={prismicAbout.data.body} />
    </Container>
  </Layout>
)

export const query = graphql`
  query AboutQuery {
    prismicAbout {
      data {
        title
        body {
          ... on PrismicAboutBodyText {
            id
            slice_type
            primary {
              text {
                raw
              }
            }
          }
        }
      }
    }
  }
`

export default About