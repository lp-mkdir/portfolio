import React from "react"
import { graphql } from "gatsby"
import { Grid } from "@chakra-ui/react"
import { FullWidthContainer } from "../components/blocks/full-width-container"
import { Hero } from "../components/blocks/hero"
import { Layout } from "../components/Layout"
import { space } from "../constants/space"
import { PostCard } from "../components/blog/post-card"
import { SEO } from "../components/seo"

interface IBlog {
  data: any
}

const Blog = ({
  data: {
    BlogPost: { nodes: blogPost },
  },
}: IBlog) => (
  <Layout>
    {/* TODO: Seo content */}
    <SEO title="Luis Kunz | Blog" description="TODO" />
    <Hero
      headline="Blog"
      subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac elementum scelerisque dui mattis nulla."
    />
    <FullWidthContainer variant="max" pt={space.section}>
      <Grid templateColumns={[`100%`, `repeat(3, minmax(250px, 1fr))`]}>
        {blogPost.map((post) => (
          <PostCard
            key={post.id}
            title={post.data.title}
            tags={post.tags}
            image={post.data.blogImage}
            date={post.data.postDate}
            desc={post.data.description}
            location={post.url}
          />
        ))}
      </Grid>
    </FullWidthContainer>
  </Layout>
)

export default Blog

export const query = graphql`
  query BlogQuery {
    BlogPost: allPrismicBlogPost {
      nodes {
        id
        url
        tags
        lastUpdated: last_publication_date(formatString: "MMM DD, YYYY")
        data {
          title
          description
          blogImage: blog_image {
            url
            alt
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          image_caption {
            raw
          }
          seoTitle: seo_title
          seoDescription: seo_description
          postDate: post_date(formatString: "MMM DD, YYYY")
        }
      }
    }
  }
`
