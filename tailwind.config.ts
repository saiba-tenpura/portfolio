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
        primary: colors.blue,
        secondary: colors.cyan,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
