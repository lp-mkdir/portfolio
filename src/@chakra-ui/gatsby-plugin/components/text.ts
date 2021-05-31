import { textStyles as foundationTextStyles } from "../foundations/typography"

const Text = {
  variants: {
    heading: (props) => ({
      color: props.theme.colors.black,
    }),
    prominent: (props) => ({
      ...foundationTextStyles.prominent,
      strong: {
        ...foundationTextStyles.prominent.strong,
        color: props.theme.colors.coolGray[900],
      },
      a: {
        ...foundationTextStyles.prominent.a,
        color: props.theme.colors[900],
      },
    }),
  },
}

export default Text
