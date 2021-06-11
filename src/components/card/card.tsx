import * as React from "react"
import { Grid } from "@chakra-ui/react"
import { MotionBox } from "../blocks/motion-box"

interface ICardProps {
  h?: any
  alignItems?: string | string[]
  children: React.ReactNode
}

const Wrapper = ({ children, ...rest }) => (
  <Grid gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="20px" pb="12" {...rest}>
    {children}
  </Grid>
)

const Card = ({ children, ...rest }: ICardProps) => (
  <MotionBox
    pos="relative"
    flex="1 1 0"
    minWidth="0"
    role="group"
    display="flex"
    flexDirection="column"
    justifyContent="flex-end"
    alignItems="flex-start"
    w="100%"
    h={[`10rem`, null, `15rem`, `20rem`]}
    overflow="hidden"
    {...rest}
  >
    {children}
  </MotionBox>
)
export { Wrapper, Card }
