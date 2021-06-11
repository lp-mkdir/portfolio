import React from "react"
import { graphql } from "gatsby"
import { Container } from "@chakra-ui/react"
import { Hero } from "../components/blocks/hero"
import { Layout } from "../components/Layout"
import { space } from "../constants/space"
import { SliceZone } from "../slices/slice-zone"
import { SEO } from "../components/seo"
import { article } from "../constants/json-ld"

// TODO: Warning: Each child in a list should have a unique "key" prop.
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
      <SEO title={blogPost.data.seoTitle} description={blogPost.data.seoDescription}>
        <meta name="article:published_time" content={blogPost.data.seoDate} />
        <meta name="article:modified_time" content={blogPost.lastUpdated} />
        <script type="application/ld+json">
          {JSON.stringify(
            article({
              isBlog: true,
              post: {
                title: blogPost.data.title,
                description: blogPost.data.seoDescription ? blogPost.data.seoDescription : blogPost.data.description,
                date: blogPost.data.seoDate,
                lastUpdated: blogPost.lastUpdated,
                year: blogPost.data.yearDate,
                image: blogPost.data.blogImage,
                slug: blogPost.data.uid,
              },
              category: {
                name: blogPost.tags[0],
                slug: `/blog/${blogPost.tags[0]}/${blogPost.data.seoTitle || blogPost.data.title}`,
              },
            })
          )}
        </script>
      </SEO>
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
        url
        uid
        tags
        lastUpdated: last_publication_date(formatString: "MMM DD, YYYY")
        data {
          title
          blogImage: blog_image {
            url
            fluid {
              ...GatsbyPrismicImageFluid
            }
          }
          description
          seoTitle: seo_title
          seoDescription: seo_description
          postDate: post_date(formatString: "MMM DD, YYYY")
          yearDate: post_date(formatString: "YYYY")
          seoDate: post_date
          body {
            ... on PrismicBlogPostBodyText {
              id
              sliceType: slice_type
              primary {
                text {
                  raw
                }
              }
            }
            ... on PrismicBlogPostBodyImage {
              id
              sliceType: slice_type
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
              sliceType: slice_type
              primary {
                codeBlock: code_block {
                  raw
                  html
                }
              }
            }
            ... on PrismicBlogPostBodyQuote {
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
  }
`
