import * as React from "react"
import { Flex } from "@chakra-ui/react"
import Headroom from "react-headroom"
import { Link } from "../link"
import { Navigation } from "./navigation"
import { FullWidthContainer } from "./full-width-container"

const Logo: React.FC = () => (
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

export const Header: React.FC = () => (
  <FullWidthContainer variant="navigation" height="navigationHeight">
    <Headroom>
      <Flex as="header" alignItems="center" justifyContent="space-between" py="13px">
        <Logo />
        <Navigation />
      </Flex>
    </Headroom>
  </FullWidthContainer>
)
