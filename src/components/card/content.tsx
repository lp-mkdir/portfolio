import * as React from "react"
import { VStack, Text } from "@chakra-ui/react"

const CardContent: React.FunctionComponent = ({ children }) => (
  <VStack
    justifyContent="flex-end"
    transition="0.4s ease-out"
    zIndex="2"
    _groupHover={{
      justifyContent: `flex-end`,
      paddingBottom: `1rem`,
      color: `white`,
      p: {
        display: `inline-block`,
      },
    }}
  >
    <Text textAlign="center" zIndex="1" display="none" variant="prominent" textShadow="textShadows.big">
      {children}
    </Text>
  </VStack>
)

export { CardContent }
