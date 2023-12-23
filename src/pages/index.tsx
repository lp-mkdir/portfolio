import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Box, Heading, Stack, HStack, Text, Button } from '@chakra-ui/react';
import { FullWidthContainer } from '~/components/blocks/full-width-container';
import MainHero from '~/components/blocks/main-hero';
import { Layout } from '~/components/Layout';
import SEO from '~/components/seo';
import { IGatsbyImage } from '~/types/gatsbyImage';
import ProjectsSection from '~/components/homepage/ProjectsSection';
import RecentPostsSection from '~/components/homepage/RecentPostsSection';

interface IIndexProps {
  data: {
    Homepage: {
      data: {
        categories: {
          listTitle: string;
          techListOp: string;
        }[];
        cvLink: {
          url: string;
        };
        headline: string;
        heroBtn2: string;
        heroBtn: string;
        heroImage: IGatsbyImage;
        projectsBtn: string;
        projectsDesc: string;
        techDesc: string;
        techImage: IGatsbyImage;
        techTitle: string;
      };
    };
  };
}

const Index = ({
  data: {
    Homepage: { data },
  },
}: IIndexProps) => {
  if (!data) return null;
  return (
    <Layout>
      <SEO />
      <MainHero />
      {/* Projects Listing */}
      <ProjectsSection />
      {/* Tech Section */}
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
      <RecentPostsSection />
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query Homepage {
    Homepage: prismicHomepage {
      data {
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
  }
`;
