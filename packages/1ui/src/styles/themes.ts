import { palette } from './palette'

const radiusValue = '0.5rem'

export const themes = {
  light: {
    background: {
      DEFAULT: '0 0% 100%',
    },
    foreground: {
      DEFAULT: '224 71.4% 4.1%',
    },
    card: {
      DEFAULT: '0 0% 100%',
    },
    cardForeground: {
      DEFAULT: '224 71.4% 4.1%',
    },
    popover: {
      DEFAULT: '0 0% 100%',
    },
    popoverForeground: {
      DEFAULT: '224 71.4% 4.1%',
    },
    primary: {
      DEFAULT: '#0052FF',
      50: '#f0f2ff',
      100: '#dde1ff',
      200: '#c0c7ff',
      300: '#94a0ff',
      400: '#576aff',
      500: '#233cff',
      600: '#0420ff',
      700: '#0018d7',
      800: '#0010a6',
      900: '#000b7f',
      950: '#00064c',
    },
    primaryForeground: {
      DEFAULT: '224 71.4% 4.1%',
    },
    secondary: {
      DEFAULT: '220 14.3% 95.9%',
    },
    secondaryForeground: {
      DEFAULT: '220.9 39.3% 11%',
    },
    muted: {
      DEFAULT: '220 14.3% 95.9%',
    },
    mutedForeground: {
      DEFAULT: '220 8.9% 46.1%',
    },
    accent: {
      DEFAULT: '220 14.3% 95.9%',
    },
    accentForeground: {
      DEFAULT: '220.9 39.3% 11%',
    },
    destructive: {
      DEFAULT: '0 84.2% 60.2%',
    },
    destructiveForeground: {
      DEFAULT: '210 20% 98%',
    },
    border: {
      DEFAULT: '215 27.9% 16.9%',
    },
    input: {
      DEFAULT: '215 27.9% 16.9%',
    },
    ring: {
      DEFAULT: '216 12.2% 83.9%',
    },
    radius: radiusValue,
    // custom attributes
    success: {
      DEFAULT: palette.green[500],
    },
    successForeground: {
      DEFAULT: palette.black.base,
    },
    warning: {
      DEFAULT: palette.yellow[600],
    },
    warningForeground: {
      DEFAULT: palette.black.base,
    },
    for: {
      DEFAULT: palette.blue[500],
    },
    forForeground: {
      DEFAULT: palette.white.base,
    },
    against: {
      DEFAULT: palette.orange[500],
    },
    againstForeground: {
      DEFAULT: palette.black.base,
    },
    social: {
      DEFAULT: palette.purple[600],
    },
    socialForeground: {
      DEFAULT: palette.black.base,
    },
  },
  dark: {
    background: { DEFAULT: palette.black.base, ...palette.black },
    foreground: { DEFAULT: palette.white.base, ...palette.white },
    card: { DEFAULT: palette.black.base, ...palette.black },
    cardForeground: { DEFAULT: palette.white.base, ...palette.white },
    popover: { DEFAULT: palette.black.base, ...palette.black },
    popoverForeground: { DEFAULT: palette.white.base, ...palette.white },
    primary: {
      DEFAULT: palette.primary.base,
      ...palette.primary,
    },
    primaryForeground: {
      DEFAULT: palette.black.base,
      ...palette.black,
    },
    secondary: {
      DEFAULT: palette.black.base,
      ...palette.black,
    },
    secondaryForeground: {
      DEFAULT: palette.white.base,
      ...palette.white,
    },
    muted: {
      DEFAULT: palette.muted.base,
      ...palette.muted,
    },
    mutedForeground: {
      DEFAULT: palette.mutedForeground.base,
      ...palette.mutedForeground,
    },
    accent: {
      DEFAULT: palette.accent.base,
      ...palette.accent,
    },
    accentForeground: {
      DEFAULT: palette.white.base,
      ...palette.white,
    },
    destructive: {
      DEFAULT: palette.destructive.base,
      ...palette.destructive,
    },
    destructiveForeground: {
      DEFAULT: palette.white.base,
      ...palette.white,
    },
    border: {
      DEFAULT: palette.border.base,
      ...palette.border,
    },
    input: {
      DEFAULT: palette.white.base,
      ...palette.white,
    },
    ring: {
      DEFAULT: palette.white.base,
      ...palette.white,
    },
    radius: radiusValue,
    // custom attributes
    success: {
      DEFAULT: palette.success.base,
      ...palette.success,
    },
    successForeground: {
      DEFAULT: palette.white.base,
      ...palette.white,
    },
    warning: {
      DEFAULT: palette.warning.base,
      ...palette.warning,
    },
    warningForeground: {
      DEFAULT: palette.white.base,
      ...palette.white,
    },
    for: {
      DEFAULT: palette.claimFor.base,
      ...palette.claimFor,
    },
    forForeground: {
      DEFAULT: palette.white.base,
      ...palette.white,
    },
    against: {
      DEFAULT: palette.claimAgainst.base,
      ...palette.claimAgainst,
    },
    againstForeground: {
      DEFAULT: palette.white.base,
      ...palette.white,
    },
    social: {
      DEFAULT: palette.social.base,
      ...palette.social,
    },
    socialForeground: {
      DEFAULT: palette.white.base,
      ...palette.white,
    },
  },
}
