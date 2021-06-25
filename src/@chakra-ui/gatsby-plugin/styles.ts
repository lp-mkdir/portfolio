import { ThemeOverride } from "@chakra-ui/react"
import { headroom } from "./custom/headroom"
import { headingBaseStyles } from "./custom/typography"

const styles: ThemeOverride["styles"] = {
  global: (props) => ({
    body: {
      overflowX: `hidden`,
      bg: props.theme.colors.brand.bg,
      color: props.theme.colors.brand.text,
      scrollbarWidth: `thin`,
      scrollbarColor: `${props.theme.colors.blue[`100`]} ${props.theme.colors.blue[`600`]}`,
      "::-webkit-scrollbar": {
        width: `14px`,
      },
      "::-webkit-scrollbar-track": {
        backgroundColor: `${props.theme.colors.gray[`200`]} ${props.theme.colors.gray[`700`]}`,
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: `${props.theme.colors.coolGray[`500`]}`,
        borderRadius: `8px`,
        borderWidth: `3px`,
        borderStyle: `solid`,
        borderColor: `${props.theme.colors.gray[`50`]} ${props.theme.colors.gray[`100`]}`,
      },
      nav: {
        ul: {
          listStyle: `none`,
          p: 0,
          li: {
            marginBottom: `0`,
          },
          "li::before": {
            content: `none`,
          },
        },
      },
      ul: {
        listStyle: `none`,
        pb: 4,
      },
      "li::before": {
        content: `"•"`,
        color: `primary.600`,
        paddingRight: 4,
        paddingLeft: 4,
      },
    },
    p: {
      pb: 4,
      img: {
        py: 12,
        mx: `auto`,
      },
      a: {
        color: `primary.500`,
        ":hover": {
          color: `primary.700`,
          textDecoration: `underline`,
        },
      },
    },

    "[data-skip-to-content]": {
      clip: `rect(0 0 0 0)`,
      "&:focus": {
        clip: `auto`,
      },
    },
    ...headroom,
    ...headingBaseStyles,
  }),
}

export default styles
