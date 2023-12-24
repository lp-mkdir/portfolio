import React from 'react';
import { chakra, HStack, Link, Box } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';

const InternalLink = chakra(GatsbyLink);

export default function Navigation() {
  const primaryNavigation = [
    { name: `Projects`, link: `/projects`, externalLink: false },
    { name: `Blog`, link: `/blog`, externalLink: false },
    { name: `About`, link: `/about`, externalLink: false },
    { name: `Contact`, link: `mailto:contact@lpmkdir.com`, externalLink: true },
  ];
  return (
    <nav aria-label="Primary navigation">
      <Box>
        <HStack as="ul" listStyleType="none" spacing={[2, 4]}>
          {primaryNavigation.map(item => (
            <li key={item.link}>
              {!item.externalLink ? (
                <InternalLink
                  to={item.link}
                  fontFamily="heading"
                  fontWeight="bold"
                  fontSize={[`sm`, `lg`]}
                  _hover={{ color: `white` }}
                  p="2"
                >
                  {item.name}
                </InternalLink>
              ) : (
                <Link
                  href={item.link}
                  fontWeight="bold"
                  fontFamily="heading"
                  textDecor="none !important"
                  fontSize={[`sm`, `lg`]}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </HStack>
      </Box>
    </nav>
  );
}
