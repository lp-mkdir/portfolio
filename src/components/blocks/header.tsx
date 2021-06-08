import * as React from "react"
import { Flex } from "@chakra-ui/react"
import Headroom from "react-headroom"
import { Link } from "../link"
import { Navigation } from "./navigation"
import { FullWidthContainer } from "./full-width-container"

const Logo = () => (
  <Link
    to="/"
    fontWeight="bold"
    fontSize="24px"
    transform="scale(1)"
    _hover={{ transform: `scale(1.1)` }}
    aria-label="luiskunz.com, Back to homepage"
  >
    LK
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
