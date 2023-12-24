import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { RichTextBlock } from 'prismic-reactjs';

import { Grid } from '@chakra-ui/react';
import { FullWidthContainer } from '~/components/blocks/full-width-container';
import CardTopNav from '~/components/card/CardTopNav';
import PostCard from '~/components/blog/PostCard';
import { space } from '~/constants/space';
import { IGatsbyImage } from '~/types/gatsbyImage';

interface RecentPostsSectionData {
  RecentBlogPosts: {
    nodes: {
      id: string;
      url: string;
      tags: string[];
      data: {
        title: string;
        postDate: string;
        description: string;
        blogImage: IGatsbyImage;
        imageCaption: {
          raw: RichTextBlock[];
        };
      };
    }[];
  };
}

export default function RecentPostsSection() {
  const data = useStaticQuery<RecentPostsSectionData>(query);

  if (!data) return null;

  const recentBlogPosts = data.RecentBlogPosts.nodes;

  return (
    <FullWidthContainer variant="max" pt={space.section}>
      <CardTopNav badge="RECENT POSTS" button="ALL POSTS" to="/blog" />
      <Grid templateColumns={[`100%`, `repeat(3, minmax(250px, 1fr))`]} gap={8}>
        {recentBlogPosts.map(post => (
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
  );
}

const query = graphql`
  query RecentBlogPosts {
    RecentBlogPosts: allPrismicBlogPost(limit: 3) {
      nodes {
        id
        url
        tags
        data {
          title
          postDate: post_date(formatString: "MMM DD, YYYY")
          description
          blogImage: blog_image {
            alt
            gatsbyImageData(placeholder: BLURRED, imgixParams: { q: 70 })
          }
          imageCaption: image_caption {
            raw
          }
        }
      }
    }
  }
`;
