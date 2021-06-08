const headroom = {
  ".headroom": {
    a: {
      color: `coolGray.200`,
      ":hover": {
        color: `#fff`,
      },
    },
  },
  ".headroom--black": {
    a: {
      color: `black`,
      ":hover": {
        color: `primary.500`,
      },
    },
  },
  ".headroom--pinned": {
    bg: `coolGray.50`,
    boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
    a: {
      transition: `0.4s all`,
      color: `#38393D !important`,
      ":hover": {
        color: `#1D4ED8 !important`,
      },
    },
  },
}

export { headroom }
