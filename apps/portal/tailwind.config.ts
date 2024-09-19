import { themePlugin } from '@0xintuition/1ui'

import { Config } from 'tailwindcss'

const portalTheme = {
  extend: {},
} as Config['theme']

export default {
  darkMode: ['class'], // Ensure consistent dark mode handling
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: portalTheme,
  plugins: [
    themePlugin, // Include the theme plugin to handle CSS variables
    // Add portal-specific plugins here
    // Example: Custom text shadow utility
    require('tailwindcss-textshadow'),
  ],
} as Config
