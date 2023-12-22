import React from "react"
import { Flex } from "@chakra-ui/react"
import Headroom from "react-headroom"
import Link from "~/components/Link"
import { Navigation } from "~/components/blocks/navigation"
import { FullWidthContainer } from "~/components/blocks/full-width-container"

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
)

export const Header = ({ navBlack }: { navBlack: boolean }) => (
  <FullWidthContainer variant="navigation" height="navigationHeight">
    <Headroom className={navBlack ? `headroom--black` : `headroom`}>
      <Flex as="header" alignItems="center" justifyContent="space-between" py="13px">
        <Logo />
        <Navigation />
      </Flex>
    </Headroom>
  </FullWidthContainer>
)
