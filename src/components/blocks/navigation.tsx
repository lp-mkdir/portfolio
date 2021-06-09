import * as React from "react"
import { chakra, HStack, Link } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"

const InternalLink = chakra(GatsbyLink)
/**
 * Navigation component containing the primary links
 */
export const Navigation = () => {
  const primaryNavigation = [
    { name: `Home`, link: `/`, externalLink: false },
    { name: `Projects`, link: `/projects`, externalLink: false },
    { name: `About`, link: `/about`, externalLink: true },
  ]
  return (
    <HStack spacing={[`2`, `4`]}>
      <nav aria-label="Primary navigation">
        <HStack as="ul" listStyleType="none" spacing={[`2`, `4`]}>
          {primaryNavigation.map((item) => (
            <li key={item.link}>
              {!item.externalLink ? (
                <InternalLink
                  to={item.link}
                  fontFamily="heading"
                  fontWeight="bold"
                  fontSize={[null, null, null, `md`]}
                  _hover={{ color: `white` }}
                  p="2"
                >
                  {item.name}
                </InternalLink>
              ) : (
                <Link
                  href="mailto:hello@luiskunz.com"
                  fontWeight="bold"
                  fontFamily="heading"
                  textDecor="none !important"
                >
                  Contact
                </Link>
              )}
            </li>
          ))}
        </HStack>
      </nav>
    </HStack>
  )
}
