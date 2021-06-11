import React from "react"
import { graphql } from "gatsby"
import { Grid } from "@chakra-ui/react"
import { FullWidthContainer } from "../components/blocks/full-width-container"
import { Hero } from "../components/blocks/hero"
import { Layout } from "../components/Layout"
import { space } from "../constants/space"
import { PostCard } from "../components/blog/post-card"

interface IBlog {
  data: any
}

const Blog = ({
  data: {
    BlogPost: { nodes: blogPost },
  },
}: IBlog) => {
  if (!blogPost) return null
  return (
    <Layout>
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
}

export default Blog

export const query = graphql`
  query BlogQuery {
    BlogPost: allPrismicBlogPost {
      nodes {
        id
        url
        tags
        data {
          title
          postDate: post_date(formatString: "MMM DD, YYYY")
          description
          blogImage: blog_image {
            fluid {
              ...GatsbyPrismicImageFluid
            }
          }
          image_caption {
            raw
          }
        }
      }
    }
  }
`
