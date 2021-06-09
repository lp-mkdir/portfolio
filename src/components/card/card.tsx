import * as React from "react"
import { Grid } from "@chakra-ui/react"
import { Link } from "gatsby"
import { MotionBox } from "../blocks/motion-box"

interface ICardProps {
  height?: any
  path: string
  children: React.ReactNode
}

const Wrapper: React.FC = ({ children }) => (
  <Grid gridTemplateColumns="repeat(auto-fit, minmax(400px, 1fr))" gap="20px" pb="12">
    {children}
  </Grid>
)

const Card = ({ children, path, ...rest }: ICardProps) => (
  <MotionBox
    role="group"
    display="flex"
    justifyContent="flex-start"
    alignItems="flex-end"
    pos="relative"
    w="100%"
    h={[`10rem`, null, `15rem`, `20rem`]}
    boxShadow="lg"
    overflow="hidden"
    {...rest}
  >
    <Link to={path}>{children}</Link>
  </MotionBox>
)
export { Wrapper, Card }
