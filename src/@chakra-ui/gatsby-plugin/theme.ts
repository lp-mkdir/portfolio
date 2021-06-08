import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

// Global style overrides
import styles from "./styles"

// Foundational style overrides
import colors from "./foundations/colors"
import { fontWeights, fonts, fontSizes, lineHeights, textStyles } from "./foundations/typography"
import sizes from "./foundations/sizes"
import shadows from "./foundations/shadows"

// Components overrides & custom
import Container from "./components/container"
import FullWidthContainer from "./components/full-width-container"
import Heading from "./components/heading"
import Text from "./components/text"
import Button from "./components/button"
import Badge from "./components/badge"

// Custom breakpoints
const breakpoints = createBreakpoints({
  sm: `640px`,
  md: `768px`,
  lg: `1024px`,
  xl: `1280px`,
  "2xl": `1536px`,
})

const theme = extendTheme({
  styles,
  colors,
  shadows,
  sizes,
  space: sizes,
  fontWeights,
  fonts,
  fontSizes,
  lineHeights,
  textStyles,
  components: {
    Container,
    FullWidthContainer,
    Heading,
    Text,
    Button,
    Badge,
  },
  breakpoints,
})

export default theme
