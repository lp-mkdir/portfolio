import * as React from "react"
import { Heading } from "@chakra-ui/react"

const CardTitle: React.FC = ({ children, ...rest }) => (
  <Heading as="h4" variant="h4" color="white" mb="0" zIndex="2" textShadow="textShadows.big" {...rest}>
    {children}
  </Heading>
)

export { CardTitle }
