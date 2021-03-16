const size = {
  extraSmall: 0,
  small: 600,
  medium: 800,
  large: 1000,
  extraLarge: 1280,
}

// prettier-ignore
export const mediaBreakpoint = {
  up: {
    xs: `(min-width: ${size.extraSmall}px)`,
    sm: `(min-width: ${size.small}px)`,
    md: `(min-width: ${size.medium}px)`,
    lg: `(min-width: ${size.large}px)`,
    xl: `(min-width: ${size.extraLarge}px)`,
  },
  down: {
    xs: `(max-width: ${size.extraSmall}px)`,
    sm: `(max-width: ${size.small}px)`,
    md: `(max-width: ${size.medium}px)`,
    lg: `(max-width: ${size.large}px)`,
    xl: `(max-width: ${size.extraLarge}px)`,
  },
  only: {
    xs: `(max-width: ${size.extraSmall}px)`,
    sm: `(min-width: ${size.small}px) and (max-width: ${size.medium}px))`,
    md: `(min-width: ${size.medium}px) and (max-width: ${size.large}px))`,
    lg: `(min-width: ${size.large}px) and (max-width: ${size.extraLarge}px))`,
    xl: `(min-width: ${size.extraLarge}px)`,
  },
}
