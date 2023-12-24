import React from 'react';
import { Flex } from '@chakra-ui/react';
import Headroom from 'react-headroom';
import Link from '~/components/Link';
import Navigation from '~/components/blocks/Navigation';
import FullWidthContainer from '~/components/blocks/FullWidthContainer';

const Logo = () => (
  <Link
    to="/"
    fontWeight="bold"
    fontSize={[`lg`, `xl`]}
    transform="scale(1)"
    _hover={{ transform: `scale(1.1)` }}
    aria-label="lpmkdir.com, Back to homepage"
  >
    LP
  </Link>
);

export default function Header({ navBlack }: { navBlack: boolean }) {
  return (
    <FullWidthContainer variant="navigation" height="navigationHeight">
      <Headroom className={navBlack ? `headroom--black` : `headroom`}>
        <Flex
          as="header"
          alignItems="center"
          justifyContent="space-between"
          py={3}
        >
          <Logo />
          <Navigation />
        </Flex>
      </Headroom>
    </FullWidthContainer>
  );
}
