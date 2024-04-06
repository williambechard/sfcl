const { nextui } = require("@nextui-org/react")
const { colors } = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/components/**/*.{html,js,ts,tsx}",
    "./src/pages/**/*.{html,js,ts,tsx}",
    "./src/*.{html,js,ts,tsx}",
    "./src/*.{html,js, ts, tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          1: "hsl(var(--color-accent1) / <alpha-value>)",
          2: "hsl(var(--color-accent2) / <alpha-value>)",
        },
        pri: {
          1: "hsl(var(--color-pri1) / <alpha-value>)",
          2: "hsl(var(--color-pri2) / <alpha-value>)",
        },
        bg: {
          1: "hsl(var(--color-bg1) / <alpha-value>)",
          2: "hsl(var(--color-bg2) / <alpha-value>)",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
