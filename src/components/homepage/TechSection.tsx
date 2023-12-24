import { Box, Button, Heading, HStack, Text, Stack } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { IGatsbyImage } from '~/types/gatsbyImage';
import FullWidthContainer from '~/components/blocks/FullWidthContainer';

interface TechSectionData {
  homepage: {
    data: {
      techTitle: string;
      techDesc: string;
      categories: {
        listTitle: string;
        techListOp: string;
      }[];
      techImage: IGatsbyImage;
    };
  };
}

export default function TechSection() {
  const techData = useStaticQuery<TechSectionData>(query);

  if (!techData) return null;

  const { techTitle, techDesc, categories, techImage } = techData.homepage.data;

  return (
    <FullWidthContainer
      variant="max"
      bgGradient="linear(to-tl, primary.900, primary.800)"
      marginTop={[`9rem`, null, null, `14rem`]}
    >
      <Stack
        direction={[`column`, null, null, `row`]}
        spacing={[12, null, 16]}
        py={[12, null, null, 16]}
        align="flex-start"
      >
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
            {techTitle}
          </Heading>
          <Text
            variant="prominent"
            fontSize={[`lg`, null, null, `xl`]}
            color="primary.200"
            pt={[`0.6rem`, null, null, `1.5rem`]}
          >
            {techDesc}
          </Text>
          {categories.map(listItem => (
            <div key={listItem.listTitle}>
              <Heading variant="h4" color="white" py="4">
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
        <Box
          w={[`78%`, null, null, `calc(99.9% * 1 / 2.5)`]}
          boxShadow="dark-lg"
          borderRadius="1rem"
          mx="auto"
          display={[`none`, null, null, `block`]}
        >
          <GatsbyImage
            image={techImage.gatsbyImageData}
            alt={techImage.alt}
            imgStyle={{
              borderRadius: `1rem`,
            }}
            style={{
              width: `100%`,
            }}
          />
        </Box>
      </Stack>
    </FullWidthContainer>
  );
}

const query = graphql`
  query TechSectionQuery {
    homepage: prismicHomepage {
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
