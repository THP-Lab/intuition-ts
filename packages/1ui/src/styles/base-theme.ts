import { colorMix } from 'styles/utils'
import defaultTheme from 'tailwindcss/defaultTheme.js'

export const baseTheme = {
  extend: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      sans: ['Geist', ...defaultTheme.fontFamily.sans],
    },
    borderWidth: {
      DEFAULT: '1px',
      px: '1px',
    },
    fontSize: {
      xs: ['0.625rem', '1rem'], // small
      sm: ['0.75rem', '1.125rem'], // caption & footnote
      base: ['0.875rem', '1.25rem'], // body
      lg: ['1rem', '1.875rem'], // bodyLarge
      xl: ['1.25rem', '1.875rem'], // headline
      '2xl': '1.5rem', // heading5
      '3xl': '1.875rem', // heading4
      '4xl': '2.5rem', // heading3
      '5xl': '3.125rem', // heading2
      '6xl': '3.75rem', // heading1
    },
    colors: {
      border: colorMix('var(--border)'),
      input: colorMix('var(--input)'),
      ring: colorMix('var(--ring)'),
      background: colorMix('var(--background)'),
      foreground: colorMix('var(--foreground)'),
      primary: {
        DEFAULT: colorMix('var(--primary)'),
        foreground: colorMix('var(--primary-foreground)'),
        50: colorMix('var(--primary-50)'),
        100: colorMix('var(--primary-100)'),
        200: colorMix('var(--primary-200)'),
        300: colorMix('var(--primary-300)'),
        400: colorMix('var(--primary-400)'),
        500: colorMix('var(--primary-500)'),
        600: colorMix('var(--primary-600)'),
        700: colorMix('var(--primary-700)'),
        800: colorMix('var(--primary-800)'),
        900: colorMix('var(--primary-900)'),
        950: colorMix('var(--primary-950)'),
      },
      secondary: {
        DEFAULT: colorMix('var(--secondary)'),
        foreground: colorMix('var(--secondary-foreground)'),
      },
      destructive: {
        DEFAULT: colorMix('var(--destructive)'),
        foreground: colorMix('var(--destructive-foreground)'),
      },
      muted: {
        DEFAULT: colorMix('var(--muted)'),
        foreground: colorMix('var(--muted-foreground)'),
      },
      accent: {
        DEFAULT: colorMix('var(--accent)'),
        foreground: colorMix('var(--accent-foreground)'),
      },
      warning: {
        DEFAULT: colorMix('var(--warning)'),
        foreground: colorMix('var(--warning-foreground)'),
      },
      success: {
        DEFAULT: colorMix('var(--success)'),
        foreground: colorMix('var(--success-foreground)'),
      },
      popover: {
        DEFAULT: colorMix('var(--popover)'),
        foreground: colorMix('var(--popover-foreground)'),
      },
      card: {
        DEFAULT: colorMix('var(--card)'),
        foreground: colorMix('var(--card-foreground)'),
      },
      for: {
        DEFAULT: colorMix('var(--for)'),
        foreground: colorMix('var(--for-foreground)'),
      },
      against: {
        DEFAULT: colorMix('var(--against)'),
        foreground: colorMix('var(--against-foreground)'),
      },
      social: {
        DEFAULT: colorMix('var(--social)'),
        foreground: colorMix('var(--social-foreground)'),
      },
    },
    keyframes: {
      'accordion-down': {
        from: { height: '0' },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
    boxShadow: {
      'sm-subtle':
        '0px 5px 5px 0px rgba(0, 0, 0, 0.05), 0px 2px 2px 0px rgba(0, 0, 0, 0.03), 0px 1px 0px 0px rgba(0, 0, 0, 0.03)',
      'md-subtle':
        '0px 8px 8px 0px rgba(0, 0, 0, 0.05), 0px 4px 4px 0px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.03)',
      'lg-subtle':
        '0px 10px 10px 0px rgba(0, 0, 0, 0.05), 0px 6px 6px 0px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.03)',
      'xl-subtle':
        '0px 12px 12px 0px rgba(0, 0, 0, 0.06), 0px 8px 8px 0px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.03)',
      sm: '0px 10px 10px 0px rgba(0, 0, 0, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05)',
      md: '0px 15px 30px 0px rgba(0, 0, 0, 0.15), 0px 5px 10px 0px rgba(0, 0, 0, 0.10), 0px 2px 4px 0px rgba(0, 0, 0, 0.10)',
      lg: '0px 15px 30px 0px rgba(0, 0, 0, 0.15), 0px 10px 20px 0px rgba(0, 0, 0, 0.10), 0px 3px 6px 0px rgba(0, 0, 0, 0.10)',
      xl: '0px 20px 40px 0px rgba(0, 0, 0, 0.15), 0px 15px 30px 0px rgba(0, 0, 0, 0.10), 0px 5px 10px 0px rgba(0, 0, 0, 0.10)',
      'sm-strong':
        '0px 10px 10px 0px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.10), 0px 1px 0px 0px rgba(0, 0, 0, 0.05)',
      'md-strong':
        '0px 10px 20px 0px rgba(0, 0, 0, 0.20), 0px 5px 10px 0px rgba(0, 0, 0, 0.10), 0px 2px 4px 0px rgba(0, 0, 0, 0.10)',
      'lg-strong':
        '0px 15px 30px 0px rgba(0, 0, 0, 0.20), 0px 10px 20px 0px rgba(0, 0, 0, 0.15), 0px 3px 6px 0px rgba(0, 0, 0, 0.10)',
      'xl-strong':
        '0px 20px 40px 0px rgba(0, 0, 0, 0.25), 0px 15px 30px 0px rgba(0, 0, 0, 0.15), 0px 5px 10px 0px rgba(0, 0, 0, 0.05)',
    },
  },
}
