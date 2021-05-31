import { ThemeOverride } from "@chakra-ui/react"
import { headroom } from "./custom/headroom"

const styles: ThemeOverride["styles"] = {
  global: (props) => ({
    body: {
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
          li: {
            marginBottom: `0`,
          },
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
  }),
}

export default styles
