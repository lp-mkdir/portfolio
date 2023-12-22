import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  Grid,
  Box,
  Heading,
  Stack,
  HStack,
  Text,
  Button,
} from '@chakra-ui/react';
import { FullWidthContainer } from '~/components/blocks/full-width-container';
import { MainHero } from '~/components/blocks/main-hero';
import { Layout } from '~/components/Layout';
import { space } from '~/constants/space';
import {
  Wrapper,
  ProjectsTopNav,
  Card,
  CardTitle,
  CardImage,
  CardTextOverlay,
} from '~/components/card/index';
import { PostCard } from '~/components/blog/post-card';
import SEO from '~/components/seo';
import { IGatsbyImage } from '~/types/gatsbyImage';

interface IIndexProps {
  data: {
    Homepage: {
      data: {
        headline: string;
        heroBtn: string;
        heroBtn2: string;
        heroImage: IGatsbyImage;
        projectsDesc: string;
        projectsBtn: string;
        techTitle: string;
        techDesc: string;
        techImage: IGatsbyImage;
        categories: {
          listTitle: string;
          techListOp: string;
        }[];
      };
    };
    Projects: {
      nodes: {
        id: string;
        url: string;
        data: {
          projectName: string;
          projectImage: IGatsbyImage;
        };
      }[];
    };
    BlogPost: {
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
            raw: any;
          };
        };
      }[];
    };
  };
}

const Index = ({
  data: {
    Homepage: { data },
    Projects: { nodes: projects },
    BlogPost: { nodes: blogPost },
  },
}: IIndexProps) => {
  if (!data) return null;
  return (
    <Layout>
      <SEO />
      <MainHero
        headline={data.headline}
        primaryBtn={data.heroBtn}
        secondaryBtn={data.heroBtn2}
        heroImg={data.heroImage}
      />
      {/* Projects Listing */}
      <FullWidthContainer
        variant="max"
        pt={space.paddingSmall}
        textAlign="center"
      >
        <ProjectsTopNav badge="PROJECTS" button="ALL PROJECTS" to="/projects" />
        <Wrapper>
          {projects.map(pro => (
            <Link to={pro.url} key={pro.id}>
              <Card h={[`10rem`, null, `15rem`, `20rem`]}>
                <CardImage image={pro.data.projectImage} />
                <CardTitle>{pro.data.projectName}</CardTitle>
                <CardTextOverlay />
              </Card>
            </Link>
          ))}
        </Wrapper>
        <Text
          fontFamily="heading"
          fontWeight="bold"
          fontSize={[`xl`, `3xl`]}
          lineHeight="125%"
          textAlign="center"
          textShadow="textShadows.big"
          pb={[6, null, null, 8]}
          pt={[6, null, null, 8]}
        >
          {data.projectsDesc}
        </Text>
        <Link to="/projects">
          <Button
            variant="xl"
            boxShadow="rgba(37, 99, 235, 0.1) 0px 0px 0px 1px, rgba(37, 99, 235, 0.2) 0px 5px 10px, rgba(37, 99, 235, 0.4) 0px 15px 40px"
            _hover={{
              boxShadow: `rgba(37, 99, 235, 0.1) 0px 0px 0px 1px, rgba(37, 99, 235, 0.2) 0px 5px 10px, rgba(37, 99, 235, 0.4) 0px 20px 35px`,
              transform: `translateY(-8px)`,
            }}
          >
            {data.projectsBtn}
          </Button>
        </Link>
      </FullWidthContainer>
      {/* Tech */}
      <FullWidthContainer
        variant="max"
        bgGradient="linear(to-tl, primary.900, primary.800)"
        marginTop={[`9rem`, null, null, `14rem`]}
      >
        <Stack
          direction={[`column`, null, null, `row`]}
          spacing={[12, null, 16]}
          py={24}
          align="flex-start"
        >
          <Box
            w={[`78%`, null, null, `calc(99.9% * 1 / 2.5)`]}
            boxShadow="dark-lg"
            borderRadius="1rem"
            mt={[`-9rem`, null, null, `-10rem`]}
            mx="auto"
          >
            <GatsbyImage
              image={data.techImage.gatsbyImageData}
              alt="Luis Pacheco"
              imgStyle={{
                borderRadius: `1rem`,
              }}
              style={{
                width: `100%`,
              }}
            />
          </Box>
          <Box w={[`100%`, null, null, `calc(99.9% * 1 / 1.5)`]}>
            <Heading
              variant="h2"
              color="white"
              pos="relative"
              _after={{
                content: `""`,
                width: `3.5rem`,
                height: `1.5rem`,
                position: `absolute`,
                display: `inline-block`,
                left: `0`,
                bottom: [`-0.6rem`, null, null, `-1.25rem`],
                borderBottomWidth: [`0.15rem`, null, null, `0.2rem`],
                borderColor: `secondary.500`,
              }}
            >
              {data.techTitle}
            </Heading>
            <Text
              variant="prominent"
              fontSize={[`lg`, null, null, `xl`]}
              color="#d1dbfa"
              pt={[`0.6rem`, null, null, `1.5rem`]}
            >
              {data.techDesc}
            </Text>
            {data.categories.map(listItem => (
              <div key={listItem.listTitle}>
                <Heading variant="h4" color="white" pt="8" pb="4">
                  {listItem.listTitle}
                </Heading>
                <HStack wrap="wrap">
                  {/* // split string between commas */}
                  {listItem.techListOp.split(/[,]+/).map(listBtn => (
                    // delete spaces
                    <Button variant="tag" key={listBtn}>
                      {listBtn.replace(`/ /g`, ``)}
                    </Button>
                  ))}
                </HStack>
              </div>
            ))}
          </Box>
        </Stack>
      </FullWidthContainer>
      <FullWidthContainer variant="max">
        <Box textAlign="center" pt={8}>
          <Text
            fontFamily="heading"
            fontWeight="bold"
            fontSize={[`xl`, `3xl`]}
            lineHeight="125%"
            textAlign="center"
            textShadow="textShadows.big"
            pb={[6, null, null, 8]}
            pt={[6, null, null, 8]}
          >
            The best way to know how I do code, check out the source of my
            portfolio at GitHub!
          </Text>
          <a
            href="https://github.com/lp-mkdir/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="xl"
              bgGradient="linear(to-tr, secondary.700, secondary.800)"
              boxShadow="rgba(254, 214, 0, 0.1) 0px 0px 0px 1px, rgba(254, 214, 0, 0.2) 0px 5px 10px, rgba(254, 214, 0, 0.4) 0px 15px 40px"
              _hover={{
                bgGradient: `brand.secondaryHover !important`,
                boxShadow: `rgba(254, 214, 0, 0.1) 0px 0px 0px 1px, rgba(254, 214, 0, 0.2) 0px 5px 10px, rgba(254, 214, 0, 0.4) 0px 20px 35px`,
                transform: `translateY(-8px)`,
              }}
              _active={{
                bg: `brand.secondaryHover !important`,
              }}
            >
              Github Source
            </Button>
          </a>
        </Box>
      </FullWidthContainer>
      {/* Blogpost listing */}
      <FullWidthContainer variant="max" pt={space.section}>
        <ProjectsTopNav badge="RECENT POSTS" button="ALL POSTS" to="/blog" />
        <Grid
          templateColumns={[`100%`, `repeat(3, minmax(250px, 1fr))`]}
          gap={8}
        >
          {blogPost.map(post => (
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
  );
};

export default Index;

export const query = graphql`
  query Homepage {
    Homepage: prismicHomepage {
      data {
        headline
        heroImage: hero_image {
          alt
          gatsbyImageData(
            height: 900
            placeholder: BLURRED
            imgixParams: { q: 100 }
          )
        }
        heroBtn: hero_btn
        heroBtn2: hero_btn_2
        projectsDesc: projects_desc
        projectsBtn: projects_btn
        techTitle: tech_title
        techDesc: tech_desc
        techImage: tech_image {
          alt
          gatsbyImageData(
            height: 684
            placeholder: BLURRED
            imgixParams: { q: 90 }
          )
        }
        categories {
          listTitle: list_title
          techListOp: tech_list_op
        }
      }
    }
    Projects: allPrismicProject(limit: 2) {
      nodes {
        id
        url
        data {
          projectName: project_name
          projectImage: project_image {
            alt
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              imgixParams: { q: 90 }
            )
          }
        }
      }
    }
    BlogPost: allPrismicBlogPost(limit: 3) {
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
