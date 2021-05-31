import colors from "../foundations/colors"
import InnerContainerStyles from "./container"

const FullWidthContainer = {
  parts: [`outer`, `inner`],
  baseStyle: {
    outer: {
      w: `100%`,
      margin: 0,
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
    hero: () => {
      const topColor = colors.brand.bg
      const bottomColor = colors.brand.bg

      return {
        outer: {
          bg: `linear-gradient(0deg, ${bottomColor} 0%, ${topColor} 100%)`,
        },
      }
    },
    navigation: (props) => ({
      outer: {
        bg: props.theme.colors.brand.bgAlpha,
        backdropFilter: `blur(8px)`,
        position: `fixed`,
        display: `flex`,
        zIndex: `sticky`,
      },
      inner: {
        header: {
          color: props.theme.colors.white,
          maxWidth: `800px`,
          margin: `0 auto`,
        },
      },
    }),
  },
}

export default FullWidthContainer
