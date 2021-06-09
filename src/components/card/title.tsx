import * as React from "react"
import { Heading } from "@chakra-ui/react"

const CardTitle: React.FC = ({ children, ...rest }) => (
  <Heading as="h4" variant="h4" color="white" mb="0" zIndex="4" textShadow="textShadows.big" p={4} {...rest}>
    {children}
  </Heading>
)

export { CardTitle }
