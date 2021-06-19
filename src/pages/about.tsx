import * as React from "react"
import { graphql } from "gatsby"
import { Container, Heading } from "@chakra-ui/react"
import { Layout } from "../components/Layout"
import { SliceZone } from "../slices/slice-zone"

interface IAboutProps {
  data: {
    prismicAbout: {
      data: {
        title: string
        body: {
          id: string
          sliceType: string
          primary: {
            text: {
              raw: any
            }
          }
        }
      }
    }
  }
}

const About = ({ data: { prismicAbout } }: IAboutProps) => (
  <Layout navBlack>
    <Container variant="article" pt={[`12rem`, null, 40]}>
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
        }
      }
    }
  }
`

export default About
