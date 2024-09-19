import { baseTheme } from 'styles/base-theme'
import plugin from 'tailwindcss/plugin'

import { themes } from './themes'
import { colorMix } from './utils'

export const themePlugin = plugin(
  // 1. Add css variable definitions to the base layer
  function ({ addBase, addUtilities }) {
    addBase({
      ':root': {
        '--background': themes.light.background,
        '--foreground': themes.light.foreground,
        '--card': themes.light.card,
        '--card-foreground': themes.light.cardForeground,
        '--popover': themes.light.popover,
        '--popover-foreground': themes.light.popoverForeground,
        '--primary': themes.light.primary.DEFAULT,
        '--primary-foreground': themes.light.primaryForeground,
        '--secondary': themes.light.secondary,
        '--secondary-foreground': themes.light.secondaryForeground,
        '--muted': themes.light.muted,
        '--muted-foreground': themes.light.mutedForeground,
        '--accent': themes.light.accent,
        '--accent-foreground': themes.light.accentForeground,
        '--destructive': themes.light.destructive,
        '--destructive-foreground': themes.light.destructiveForeground,
        '--border': themes.light.border,
        '--input': themes.light.input,
        '--ring': themes.light.ring,
        '--radius': themes.light.radius,
        '--success': themes.light.success,
        '--success-foreground': themes.light.successForeground,
        '--warning': themes.light.warning,
        '--warning-foreground': themes.light.warningForeground,
        '--for': themes.light.for,
        '--for-foreground': themes.light.forForeground,
        '--against': themes.light.against,
        '--against-foreground': themes.light.againstForeground,
        '--social': themes.light.social,
        '--social-foreground': themes.light.socialForeground,
        // primary
        '--primary-50': themes.light.primary[50],
        '--primary-100': themes.light.primary[100],
        '--primary-200': themes.light.primary[200],
        '--primary-300': themes.light.primary[300],
        '--primary-400': themes.light.primary[400],
        '--primary-500': themes.light.primary[500],
        '--primary-600': themes.light.primary[600],
        '--primary-700': themes.light.primary[700],
        '--primary-800': themes.light.primary[800],
        '--primary-900': themes.light.primary[900],
        '--primary-950': themes.light.primary[950],
      },
      '.dark': {
        '--background': themes.dark.background,
        '--foreground': themes.dark.foreground,
        '--card': themes.dark.card,
        '--card-foreground': themes.dark.cardForeground,
        '--popover': themes.dark.popover,
        '--popover-foreground': themes.dark.popoverForeground,
        '--primary': themes.dark.primary.DEFAULT,
        '--primary-foreground': themes.dark.primaryForeground,
        '--secondary': themes.dark.secondary,
        '--secondary-foreground': themes.dark.secondaryForeground,
        '--muted': themes.dark.muted,
        '--muted-foreground': themes.dark.mutedForeground,
        '--accent': themes.dark.accent,
        '--accent-foreground': themes.dark.accentForeground,
        '--destructive': themes.dark.destructive,
        '--destructive-foreground': themes.dark.destructiveForeground,
        '--border': themes.dark.border,
        '--input': themes.dark.input,
        '--ring': themes.dark.ring,
        '--radius': themes.dark.radius,
        '--success': themes.dark.success,
        '--success-foreground': themes.dark.successForeground,
        '--warning': themes.dark.warning,
        '--warning-foreground': themes.dark.warningForeground,
        '--for': themes.dark.for,
        '--for-foreground': themes.dark.forForeground,
        '--against': themes.dark.against,
        '--against-foreground': themes.dark.againstForeground,
        '--social': themes.dark.social,
        '--social-foreground': themes.dark.socialForeground,
        // primary
        '--primary-50': themes.dark.primary[50],
        '--primary-100': themes.dark.primary[100],
        '--primary-200': themes.dark.primary[200],
        '--primary-300': themes.dark.primary[300],
        '--primary-400': themes.dark.primary[400],
        '--primary-500': themes.dark.primary[500],
        '--primary-600': themes.dark.primary[600],
        '--primary-700': themes.dark.primary[700],
        '--primary-800': themes.dark.primary[800],
        '--primary-900': themes.dark.primary[900],
        '--primary-950': themes.dark.primary[950],
      },
    })

    Object.entries(themes).forEach(([key, value]) => {
      addBase({
        [`[data-theme="${key}"]`]: {
          '--background': value.background,
          '--foreground': value.foreground,
          '--card': value.card,
          '--card-foreground': value.cardForeground,
          '--popover': value.popover,
          '--popover-foreground': value.popoverForeground,
          '--primary': value.primary.DEFAULT,
          '--primary-foreground': value.primaryForeground,
          '--secondary': value.secondary,
          '--secondary-foreground': value.secondaryForeground,
          '--muted': value.muted,
          '--muted-foreground': value.mutedForeground,
          '--accent': value.accent,
          '--accent-foreground': value.accentForeground,
          '--destructive': value.destructive,
          '--destructive-foreground': value.destructiveForeground,
          '--border': value.border,
          '--input': value.input,
          '--ring': value.ring,
          '--radius': value.radius,
          '--success': value.success,
          '--success-foreground': value.successForeground,
          '--warning': value.warning,
          '--warning-foreground': value.warningForeground,
          '--for': value.for,
          '--for-foreground': value.forForeground,
          '--against': value.against,
          '--against-foreground': value.againstForeground,
          '--social': value.social,
          '--social-foreground': value.socialForeground,
          // primary
          '--primary-50': value.primary[50],
          '--primary-100': value.primary[100],
          '--primary-200': value.primary[200],
          '--primary-300': value.primary[300],
          '--primary-400': value.primary[400],
          '--primary-500': value.primary[500],
          '--primary-600': value.primary[600],
          '--primary-700': value.primary[700],
          '--primary-800': value.primary[800],
          '--primary-900': value.primary[900],
          '--primary-950': value.primary[950],
        },
      })
    })

    addBase({
      body: {
        '@apply bg-background text-foreground': {},
        'font-feature-settings': '"rlig" 1, "calt" 1',
      },
      '.theme-border': {
        '@apply border border-border/20': {},
      },
      '.in-out-gradient': {
        '@apply bg-gradient-to-r from-border/5 from-10% via-border/20 via-50% to-border/5 to-90%':
          {},
      },
      '.in-out-gradient-strong': {
        '@apply bg-gradient-to-r from-transparent from-10% via-border/20 via-50% to-transparent to-90%':
          {},
      },
    })

    addUtilities({
      // Gradients
      '.primary-gradient-subtle': {
        background: `linear-gradient(${colorMix('primary', 0.1)}, ${colorMix('primary', 0.05)})`,
      },
      '.primary-gradient': {
        background: `linear-gradient(${colorMix('primary', 0.4)}, ${colorMix('primary', 0.2)})`,
      },
      '.primary-gradient-strong': {
        background: `linear-gradient(${colorMix('primary', 0.8)}, ${colorMix('primary', 0.5)})`,
      },
    })
  },
  {
    theme: {
      extend: baseTheme,
    },
  },
)
