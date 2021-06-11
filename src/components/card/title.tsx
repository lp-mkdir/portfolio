import * as React from "react"
import { Heading } from "@chakra-ui/react"

const CardTitle: React.FC = ({ children, ...rest }) => (
  <Heading
    textAlign="left"
    lineHeight="md"
    as="h4"
    variant="h4"
    color="white"
    mb="0"
    zIndex="1"
    textShadow="textShadows.big"
    p={[4, 6]}
    {...rest}
  >
    {children}
  </Heading>
)

export { CardTitle }
