import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import {
  Flex,
  Box,
  Heading,
  Button,
  ButtonGroup,
  Icon,
} from '@chakra-ui/react';
import { GoChevronRight } from 'react-icons/go';
import { Wave } from '../../elements/Wave';

interface IMainHero {
  headline: string;
  primaryBtn: string;
  secondaryBtn: string;
  heroImg: any;
}

export const MainHero = ({
  headline,
  primaryBtn,
  secondaryBtn,
  heroImg,
}: IMainHero) => (
  <Flex
    height={['100%', null, null, '80vh']}
    w="100%"
    bgGradient="linear(to-tl, primary.900, primary.800)"
    pos="relative"
    pt={[`2.5rem`, null, null, `6rem`]}
    pb={[`10rem`, null, null, `6rem`]}
    alignItems="center"
  >
    <Box maxWidth="1440px" m="0 auto" p="0 0.25rem" pos="relative">
      <Flex
        direction={[`column`, null, null, `row`]}
        pt="calc(72px)"
        alignItems="center"
      >
        <Box w="100%" position="relative">
          <Flex alignItems="flex-start" alignContent="baseline">
            <Icon
              as={GoChevronRight}
              height={[6, 8, 12]}
              width={[6, 8, 12]}
              color="secondary.600"
              mt="2"
            />
            <Flex
              flexDirection="column"
              display="flex"
              alignItems="flex-start"
              flex="1 1 0"
              minWidth="0"
            >
              <Heading
                as="h1"
                variant="h1"
                color="white"
                lineHeight="125%"
                margin="0 !important"
              >
                {headline}
              </Heading>
              <ButtonGroup gap={2} pt="6" flexWrap="wrap">
                <Link to="/projects" style={{ margin: 0 }}>
                  <Button variant="hero" mb={[2, 0]}>
                    {primaryBtn}
                  </Button>
                </Link>
                <a
                  href="lp-cv-2024.pdf"
                  style={{ margin: 0 }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="heroOutline"
                    ml={[`0 !important`, `1rem !important`]}
                  >
                    {secondaryBtn}
                  </Button>
                </a>
              </ButtonGroup>
            </Flex>
          </Flex>
        </Box>
        {/* Hero Image */}
        <Box
          w="100%"
          height={['100%', null, null, '70vh']}
          display={['none', null, null, 'inline-block']}
        >
          <Box pos={[`static`, null, null, `absolute`]} bottom={0} right={0}>
            <GatsbyImage image={heroImg.gatsbyImageData} alt={heroImg.alt} />
          </Box>
        </Box>
      </Flex>
    </Box>
    <Wave />
  </Flex>
);
