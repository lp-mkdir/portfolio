import React, { FC } from "react"
import { Flex, Badge, Button } from "@chakra-ui/react"
import Link from "~/components/Link"

interface IProjectsTopNav {
  badge: string
  button: string
  to: string
}

const ProjectsTopNav: FC<IProjectsTopNav> = ({ badge, button, to }) => (
  <Flex alignItems="center" justifyContent="space-between" mb="4">
    <Badge fontFamily="heading">{badge}</Badge>
    <Link to={to}>
      <Button variant="ghost" colorScheme="orange" fontSize={[`xs`, `lg`]}>
        {button}
      </Button>
    </Link>
  </Flex>
)

export default ProjectsTopNav;
