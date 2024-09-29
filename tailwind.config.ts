import type { Config } from 'tailwindcss';

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
        primary: {
          50:  '#e6f1fe',
          100: '#cee3fd',
          200: '#9cc7fc',
          300: '#61a6fa',
          400: '#398ff9',
          500: '#0874f7',
          600: '#065cc6',
          700: '#054594',
          800: '#032e63',
          900: '#021731',
          950: '#010c19',
        },
        secondary: {
          50:  '#fbe7fe',
          100: '#f7cefd',
          200: '#ee9efa',
          300: '#e66df8',
          400: '#dd3cf6',
          500: '#d50bf4',
          600: '#aa09c3',
          700: '#800792',
          800: '#550561',
          900: '#2b0231',
          950: '#150118',
        },
        accent: {
          50:  '#f3f2f3',
          100: '#dad8da',
          200: '#c1bec1',
          300: '#a8a4a8',
          400: '#a09ca0',
          500: '#8f8a8f',
          600: '#757075',
          700: '#5b575b',
          800: '#413e41',
          900: '#272527',
          950: '#0d0c0d',
        },
      },
      boxShadow: {
        surround: '0 20px 80px -10px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
