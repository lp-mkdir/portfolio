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

const Post = ({ data: { BlogPost } }: IPostProps) => (
  <Layout>
    <SEO title={BlogPost.data.seoTitle} description={BlogPost.data.seoDescription}>
      <meta name="article:published_time" content={BlogPost.data.seoDate} />
      <meta name="article:modified_time" content={BlogPost.lastUpdated} />
      <script type="application/ld+json">
        {JSON.stringify(
          article({
            isBlog: true,
            post: {
              title: BlogPost.data.title,
              description: BlogPost.data.seoDescription ? BlogPost.data.seoDescription : BlogPost.data.description,
              date: BlogPost.data.seoDate,
              lastUpdated: BlogPost.lastUpdated,
              year: BlogPost.data.yearDate,
              image: BlogPost.data.blogImage.url,
              slug: BlogPost.uid,
            },
            category: {
              name: BlogPost.tags[0],
              slug: `/blog/${BlogPost.tags[0]}/${BlogPost.data.seoTitle || BlogPost.data.title}`,
            },
          })
        )}
      </script>
    </SEO>
    <Hero
      headline={BlogPost.data.title}
      subheading={`${BlogPost.data.postDate} | ${BlogPost.tags.map((tag) => tag)}`}
    />
    <Container pt={space.paddingSmall}>
      <SliceZone slices={BlogPost.data.body} />
    </Container>
  </Layout>
)

export default Post

export const query = graphql`
  query BlogPostQuery($uid: String) {
    BlogPost: prismicBlogPost(uid: { eq: $uid }) {
      ...BodyQuoteInfo
      uid
      url
      tags
      lastUpdated: last_publication_date(formatString: "MMM DD, YYYY")
      data {
        title
        blogImage: blog_image {
          url
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, quality: 80)
            }
          }
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
                localFile {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, quality: 80)
                  }
                }
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
