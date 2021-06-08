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
    <Badge>{badge}</Badge>
    <Link to={to}>
      <Button variant="ghost" colorScheme="orange">
        {button}
      </Button>
    </Link>
  </Flex>
)

export { TopNav }
