import InnerContainerStyles from "./container"

const FullWidthContainer = {
  parts: [`outer`, `inner`],
  baseStyle: {
    outer: {
      w: `100%`,
    },
    inner: {
      ...InnerContainerStyles.baseStyle,
    },
  },
  variants: {
    default: (props) => ({
      outer: {
        bg: props.theme.colors.brand.bg,
      },
    }),
    hero: () => ({
      outer: {
        bgGradient: `linear(to-tl, primary.900, primary.800)`,
      },
    }),
    navigation: (props) => ({
      outer: {
        // bg: props.theme.colors.brand.bgAlpha,
        // backdropFilter: `blur(8px)`,
        w: `100%`,
        position: `fixed`,
        display: `flex`,
        zIndex: `sticky`,
      },
      inner: {
        maxWidth: `1440px`,
        px: 0,
        header: {
          color: props.theme.colors.white,
          maxWidth: `1440px`,
          margin: `0 auto`,
          px: `1rem`,
        },
      },
    }),
    footer: (props) => ({
      outer: {
        mt: [24, null, null, 36],
        w: `100%`,
        bgGradient: `linear(to-tl, primary.900, primary.800)`,
      },
      inner: {
        w: `100%`,
        maxW: `1280px`,
        mx: `auto`,
        pt: `calc(96px + 2rem)`,
      },
    }),
    max: () => ({
      outer: {
        w: `100%`,
      },
      inner: {
        maxWidth: `1440px`,
        m: `0 auto`,
        px: [`1rem`, `1.5rem`],
      },
    }),
  },
}

export default FullWidthContainer
