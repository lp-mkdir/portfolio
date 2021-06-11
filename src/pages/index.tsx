import React from "react"
import { graphql, Link } from "gatsby"
import { Grid, Box, Heading, Stack, HStack, Image as ChakraImage, Text, Button } from "@chakra-ui/react"
import { FullWidthContainer } from "../components/blocks/full-width-container"
import { MainHero } from "../components/blocks/main-hero"
import { Layout } from "../components/Layout"
import { space } from "../constants/space"
import { Wrapper, TopNav, Card, CardTitle, CardImage, CardTextOverlay } from "../components/card/index"
import { PostCard } from "../components/blog/post-card"

type IndexProps = {
  data: any
}

const Index = ({
  data: {
    Homepage: { data },
    Projects: { nodes: projects },
    BlogPost: { nodes: blogPost },
  },
}: IndexProps) => {
  if (!data) return null
  return (
    <Layout>
      <MainHero
        headline={data.headline}
        primaryBtn={data.hero_btn}
        secondaryBtn={data.hero_btn_2}
        img={data.hero_image}
      />
      {/* Projects Listing */}
      <FullWidthContainer variant="max" pt={space.paddingSmall} textAlign="center">
        <TopNav badge="PROJECTS" button="ALL PROJECTS" to="/projects" />
        <Wrapper>
          {projects.map((pro) => (
            <Link to={pro.url}>
              <Card h={[`10rem`, null, `15rem`, `20rem`]}>
                <CardImage image={pro.data.project_image} />
                <CardTitle>{pro.data.name} asd ads asd as</CardTitle>
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
          {data.projects_desc}
        </Text>
        <Button
          variant="xl"
          boxShadow="rgba(37, 99, 235, 0.1) 0px 0px 0px 1px, rgba(37, 99, 235, 0.2) 0px 5px 10px, rgba(37, 99, 235, 0.4) 0px 15px 40px"
          _hover={{
            boxShadow: `rgba(37, 99, 235, 0.1) 0px 0px 0px 1px, rgba(37, 99, 235, 0.2) 0px 5px 10px, rgba(37, 99, 235, 0.4) 0px 20px 35px`,
            transform: `translateY(-8px)`,
          }}
        >
          {data.projects_btn}
        </Button>
      </FullWidthContainer>
      {/* Tech */}
      <FullWidthContainer
        variant="max"
        bgGradient="linear(to-tl, primary.900, primary.800)"
        marginTop={[`9rem`, null, null, `14rem`]}
      >
        <Stack direction={[`column`, null, null, `row`]} spacing={16} py="24" align="flex-start">
          <Box w={[`100%`, null, null, `calc(99.9% * 1 / 2.5)`]}>
            <ChakraImage
              w="100%"
              boxShadow="2xl"
              borderRadius="1rem"
              objectFit="cover"
              height={[`15rem`, `25rem`, null, `40rem`]}
              mt="-10rem"
              src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="Luis Kunz"
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
              {data.tech_title}
            </Heading>
            <Text
              variant="prominent"
              fontSize={[`lg`, null, null, `xl`]}
              color="#d1dbfa"
              pt={[`0.6rem`, null, null, `1.5rem`]}
            >
              {data.tech_desc}
            </Text>
            {data.categories.map((listItem) => (
              <>
                <Heading variant="h4" color="white" pt="8" pb="4">
                  {listItem.list_title}
                </Heading>
                <HStack wrap="wrap">
                  {/* // split string between commas */}
                  {listItem.tech_list_op.split(/[,]+/).map((listBtn) => (
                    // delete spaces
                    <Button variant="tag">{listBtn.replace(`/ /g. ""`)}</Button>
                  ))}
                </HStack>
              </>
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
            The best way to know how I do code, check out the source of my portfolio at GitHub!
          </Text>
          <a href="https://github.com/luiskunz/portfolio" target="_blank" rel="noreferrer">
            <Button
              variant="xl"
              bgGradient="linear(to-tr, secondary.700, secondary.800)"
              boxShadow="rgba(254, 214, 0, 0.1) 0px 0px 0px 1px, rgba(254, 214, 0, 0.2) 0px 5px 10px, rgba(254, 214, 0, 0.4) 0px 15px 40px"
              _hover={{
                boxShadow: `rgba(254, 214, 0, 0.1) 0px 0px 0px 1px, rgba(254, 214, 0, 0.2) 0px 5px 10px, rgba(254, 214, 0, 0.4) 0px 20px 35px`,
                transform: `translateY(-8px)`,
              }}
            >
              Github Source
            </Button>
          </a>
        </Box>
      </FullWidthContainer>
      {/* Blogpost listing */}
      <FullWidthContainer variant="max" pt={space.section}>
        <TopNav badge="RECENT POSTS" button="ALL POSTS" to="/blog" />
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

export default Index

export const query = graphql`
  query Homepage {
    Homepage: prismicHomepage {
      data {
        headline
        hero_image {
          fluid {
            ...GatsbyPrismicImageFluid
          }
        }
        hero_btn
        hero_btn_2
        projects_desc
        projects_btn
        tech_title
        tech_desc
        categories {
          list_title
          tech_list_op
        }
      }
    }
    Projects: allPrismicProject {
      nodes {
        url
        data {
          name
          project_image {
            alt
            url
            fluid {
              ...GatsbyPrismicImageFluid
            }
          }
        }
      }
    }
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
