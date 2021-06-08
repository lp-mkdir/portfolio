import * as React from "react"
import { chakra, HStack } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"

const Link = chakra(GatsbyLink)
/**
 * Navigation component containing the primary links
 */
export const Navigation = () => {
  const primaryNavigation = [
    { name: `Home`, link: `/` },
    { name: `Projects`, link: `/projects` },
    { name: `About`, link: `/about` },
    { name: `Contact`, link: `/contact` },
  ]
  return (
    <HStack spacing={[`2`, `4`]}>
      <nav aria-label="Primary navigation">
        <HStack as="ul" listStyleType="none" spacing={[`2`, `4`]}>
          {primaryNavigation.map((item) => (
            <li key={item.link}>
              <Link
                to={item.link}
                fontFamily="heading"
                fontWeight="bold"
                fontSize={[null, null, null, `md`]}
                _hover={{ color: `white` }}
                p="2"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </HStack>
      </nav>
    </HStack>
  )
}
