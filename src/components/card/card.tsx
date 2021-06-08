import * as React from "react"
import { Grid } from "@chakra-ui/react"
import { Link } from "gatsby"
import { MotionBox } from "../blocks/motion-box"

interface ICardProps {
  height?: any
  [propName: string]: {} // avoid ts complaining rest props
}

const Wrapper: React.FC = ({ children }) => (
  <Grid gridTemplateColumns="repeat(auto-fit, minmax(400px, 1fr))" gap="20px" pb="12">
    {children}
  </Grid>
)

const Card: React.FC<ICardProps> = ({ children, height, ...otherProps }) => (
  <MotionBox
    role="group"
    display="flex"
    justifyContent="flex-start"
    alignItems="flex-end"
    pos="relative"
    w="100%"
    h={height || [`10rem`, null, `15rem`, `20rem`]}
    boxShadow="lg"
    p="1rem"
    overflow="hidden"
    {...otherProps}
  >
    <Link to="/">{children}</Link>
  </MotionBox>
)
export { Wrapper, Card }
