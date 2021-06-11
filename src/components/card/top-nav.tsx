import * as React from "react"
import { Flex, Badge, Button } from "@chakra-ui/react"
import { Link } from "../link"

interface ITopNav {
  badge: string
  button: string
  to: string
}

const TopNav: React.FC<ITopNav> = ({ badge, button, to }) => (
  <Flex alignItems="center" justifyContent="space-between" mb="4">
    <Badge fontFamily="heading">{badge}</Badge>
    <Link to={to}>
      <Button variant="ghost" colorScheme="orange" fontSize={[`xs`, `lg`]}>
        {button}
      </Button>
    </Link>
  </Flex>
)

export { TopNav }
