import React from "react"
import { graphql } from "gatsby"
import { Container } from "@chakra-ui/react"
import { Hero } from "../components/blocks/hero"
import { Layout } from "../components/Layout"
import { space } from "../constants/space"
import { SliceZone } from "../slices/slice-zone"

interface IPostProps {
  data: any
}

const Post = ({
  data: {
    BlogPost: { nodes: blogPostQuery },
  },
}: IPostProps) => {
  if (!blogPostQuery) return null
  const blogPost = blogPostQuery[0]
  return (
    <Layout>
      <Hero
        headline={blogPost.data.title}
        subheading={`${blogPost.data.postDate} | ${blogPost.tags.map((tag) => tag)}`}
      />
      <Container pt={space.paddingSmall}>
        <SliceZone slices={blogPost.data.body} />
      </Container>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query BlogPostQuery($uid: String) {
    BlogPost: allPrismicBlogPost(filter: { uid: { eq: $uid } }) {
      nodes {
        tags
        data {
          title
          postDate: post_date(formatString: "MMMM DD, YYYY")
          blogImage: blog_image {
            fluid {
              ...GatsbyPrismicImageFluid
            }
          }
          description
          body {
            ... on PrismicBlogPostBodyText {
              id
              slice_type
              primary {
                text {
                  raw
                }
              }
            }
            ... on PrismicBlogPostBodyImage {
              id
              slice_type
              items {
                image {
                  fluid {
                    ...GatsbyPrismicImageFluid
                  }
                }
              }
            }
            ... on PrismicBlogPostBodyCodeblock {
              id
              slice_type
              items {
                code_block {
                  raw
                }
              }
            }
            ... on PrismicBlogPostBodyQuote {
              id
              slice_type
              primary {
                quote_message
                author
              }
            }
          }
        }
      }
    }
  }
`
