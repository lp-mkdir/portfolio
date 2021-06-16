const Button = {
  baseStyle: {
    borderRadius: `full`,
    fontWeight: `bold`,
    fontFamily: `heading`,
    letterSpacing: `1.25px`,
    color: `primary.600`,
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
    tag: () => ({
      fontFamily: `body`,
      fontSize: [`base`, `base`, null, `lg`],
      textTransform: `uppercase`,
      bg: `white`,
      color: `primary.600`,
      ml: `0 !important`,
      mr: `1rem !important`,
      mb: `1rem !important`,
      _hover: {
        bg: `primary.100`,
        _disabled: {
          bg: `brand.primary`,
        },
      },
      _active: { bg: `brand.primaryHover` },
    }),
    primary: (props) => ({
      bg: `brand.primary`,
      color: `white`,
      _hover: {
        bg: props.brand.primaryHover,
        _disabled: {
          bg: `brand.primary`,
        },
      },
      _active: { bg: `brand.primaryHover` },
    }),
    secondary: () => ({
      bg: `secondary.500`,
      color: `white`,
      _hover: {
        bg: `brand.secondaryHover`,
        _disabled: {
          bg: `brand.secondary`,
        },
      },
      _active: { bg: `brand.primaryHover` },
    }),
    outline: (props) => ({
      color: props.text,
      bg: `transparent`,
      borderStyle: `solid`,
      borderColor: `brand.primary`,
      borderWidth: `1px`,
      _hover: {
        color: `white`,
        bg: `brand.primary`,
      },
    }),
    hero: () => ({
      bg: `white`,
      color: `primary.500`,
      fontSize: [`2lx`, null, null, `lg`],
      padding: `1.5rem 2.5rem`,
      textTransform: `uppercase`,
      boxShadow: `lg`,
      _hover: {
        bg: `brand.primaryHover`,
        color: `white`,
        _disabled: {
          bg: `brand.primary`,
        },
      },
      _active: { bg: `brand.primaryHover` },
    }),
    heroOutline: () => ({
      color: `white`,
      bg: `transparent`,
      borderStyle: `solid`,
      borderColor: `brand.primaryAlpha`,
      borderWidth: `1px`,
      fontSize: [`2lx`, null, null, `lg`],
      padding: `1.5rem 2.5rem`,
      textTransform: `uppercase`,
      boxShadow: `lg`,
      _hover: {
        bg: `brand.primaryAlpha`,
        color: `white`,
        _disabled: {
          bg: `brand.primary`,
        },
      },
      _active: { bg: `brand.primaryHover` },
    }),
    xl: (props) => ({
      padding: [`1.5rem 2.5rem`, `2rem 3rem`],
      fontSize: [`lg`, null, null, `xl`],
      fontWeight: `bold`,
      bg: props.theme.colors.primary[600],
      color: `white`,
      boxShadow: `lg`,
      _hover: {
        transform: `translateY(-8px)`,
        boxShadow: `xl`,
        bg: props.theme.colors.brand.primaryHover,
        _disabled: {
          bg: `brand.primary`,
        },
      },
      _active: { bg: props.theme.colors.brand.primaryHover },
    }),
  },
}

export default Button
