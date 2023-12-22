import React from "react"
import { graphql } from "gatsby"
import { Container } from "@chakra-ui/react"
import { Hero } from "../components/blocks/hero"
import { Layout } from "../components/Layout"
import { space } from "../constants/space"
import { SliceZone } from "../slices/slice-zone"
import SEO from "../components/seo"
import { IGatsbyImage } from "~/types/gatsbyImage"

// TODO: Warning: Each child in a list should have a unique "key" prop.
interface IPostProps {
  data: {
    BlogPost: {
      id: string
      uid: string
      url: string
      tags: string[]
      lastUpdated: string
      data: {
        title: string
        description: string
        blogImage: IGatsbyImage
        image_caption: {
          raw: any
        }
        seoTitle: string
        seoDescription: string
        postDate: string
        yearDate: string
        seoDate: string
        body: {
          id: string
          sliceType: string
          primary: {
            text: {
              raw: any
            }
            codeBlock: {
              raw: any
              html: any
            }
            quote_message: string
          }
        }
      }
    }
  }
}

const Post = ({ data: { BlogPost } }: IPostProps) => (
  <Layout>
    <SEO seoData={BlogPost} isBlogPost />
    <Hero
      headline={BlogPost.data.title}
      subheading={`${BlogPost.data.postDate} | ${BlogPost.tags.map((tag) => tag)}`}
    />
    <Container variant="article" pt={space.paddingSmall}>
      <SliceZone slices={BlogPost.data.body} />
    </Container>
  </Layout>
)

export default Post

export const query = graphql`
  query BlogPostQuery($uid: String) {
    BlogPost: prismicBlogPost(uid: { eq: $uid }) {
      ...BodyQuoteInfo
      id
      uid
      url
      tags
      lastUpdated: last_publication_date(formatString: "MMM DD, YYYY")
      data {
        title
        blogImage: blog_image {
          url
          gatsbyImageData(
            layout: FULL_WIDTH
            imgixParams: {q: 80}
            placeholder: BLURRED
          )
        }
        description
        seoTitle: seo_title
        seoDescription: seo_description
        postDate: post_date(formatString: "MMM DD, YYYY")
        yearDate: post_date(formatString: "YYYY")
        seoDate: post_date
        body {
          ... on PrismicBlogPostDataBodyText {
            id
            sliceType: slice_type
            primary {
              text {
                raw
              }
            }
          }
          ... on PrismicBlogPostDataBodyImage {
            id
            sliceType: slice_type
            items {
              image {
                alt
                gatsbyImageData(
                  imgixParams: {q: 80}
                  placeholder: BLURRED
                )
              }
            }
          }
          ... on PrismicBlogPostDataBodyCodeblock {
            id
            sliceType: slice_type
            primary {
              codeBlock: code_block {
                raw
                html
              }
            }
          }
          ... on PrismicBlogPostDataBodyQuote {
            id
            sliceType: slice_type
            primary {
              quote_message
              author
            }
          }
        }
      }
    }
  }
`
