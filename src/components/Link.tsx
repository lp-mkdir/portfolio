import React from "react"
import { GatsbyLinkProps, Link as GatsbyLink } from "gatsby"
import { chakra, SystemProps } from "@chakra-ui/react"

type GatsbyChakraLinkProps = Omit<GatsbyLinkProps<Record<string, unknown>>, 'ref'> & SystemProps

const ChakraLink = chakra<typeof GatsbyLink, GatsbyLinkProps<unknown>>(GatsbyLink, {
  baseStyle: {
    transition: `all .3s ease-in-out`,
    cursor: `pointer`,
    textDecoration: `none`,
    outline: `none`,
    _hover: {
      textDecoration: `underline`,
    },
    _focus: {
      boxShadow: `outline`,
    },
  },
})

/**
 * ChakraLink with gatsby-link (no external links)
 */
const Link = (props: GatsbyChakraLinkProps) => <ChakraLink {...props} />

export default Link
