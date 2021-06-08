const baseStyles = {
  fontSize: [`xs`, `lg`],
  fontWeight: `medium`,
  letterSpacing: `widest`,
  color: `textMuted`,
  textTransform: `uppercase`,
}

const Badge = {
  defaultProps: {
    variant: `default`,
  },
  variants: {
    default: () => ({
      ...baseStyles,
      bg: `transparent`,
    }),
  },
}

export default Badge
