import containerQueries from '@tailwindcss/container-queries'
import type { Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'

import { baseTheme } from './base-theme'
import { themePlugin } from './theme-plugin'

export default {
  darkMode: ['class'], // Enables class-based dark mode
  content: [
    './components/**/*.{ts,tsx}', // Include all TypeScript and TSX files in components
    './**/*.tsx', // Include all TSX files in the entire package
    './index.ts', // Include the index file if it's used for exports
  ],
  theme: {
    extend: { ...baseTheme },
  },
  plugins: [themePlugin, animatePlugin, containerQueries],
} satisfies Config
