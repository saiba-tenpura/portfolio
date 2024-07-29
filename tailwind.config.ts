import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default <Partial<Config>>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./content/**/*.md",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.fuchsia,
        accent: {
          50:  '#f3f2f3',
          100: '#dad8da',
          200: '#c1bec1',
          300: '#a8a4a8',
          500: '#a09ca0',
          400: '#8f8a8f',
          600: '#757075',
          700: '#5b575b',
          800: '#413e41',
          900: '#272527',
          950: '#0d0c0d',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
