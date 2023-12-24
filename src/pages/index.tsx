import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { FullWidthContainer } from '~/components/blocks/full-width-container';
import MainHero from '~/components/blocks/main-hero';
import { Layout } from '~/components/Layout';
import SEO from '~/components/seo';
import ProjectsSection from '~/components/homepage/ProjectsSection';
import RecentPostsSection from '~/components/homepage/RecentPostsSection';
import TechSection from '~/components/homepage/TechSection';

export default function Index() {
  return (
    <Layout>
      <SEO />
      <MainHero />
      <ProjectsSection />
      <TechSection />
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
      <RecentPostsSection />
    </Layout>
  );
}
