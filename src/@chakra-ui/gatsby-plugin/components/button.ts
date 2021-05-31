const Button = {
  baseStyle: {
    fontWeight: `normal`,
  },
  defaultProps: {
    size: `brand`,
  },
  sizes: {
    brand: {
      h: 8,
      minW: 10,
      fontSize: `md`,
      px: 4,
    },
  },
  variants: {
    primary: (props) => ({
      bg: props.brand.primary,
      color: `white`,
      _hover: {
        bg: props.brand.primaryHover,
        _disabled: {
          bg: `brand.primary`,
        },
      },
      _active: { bg: props.brand.primaryHover },
    }),
    outline: (props) => ({
      color: props.text,
      bg: `transparent`,
      borderStyle: `solid`,
      borderColor: props.brand.primary,
      borderWidth: `1px`,
      _hover: {
        color: `white`,
        bg: props.brand.primary,
      },
    }),
  },
}

export default Button
